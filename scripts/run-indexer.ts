import { google } from "googleapis";
import { readFileSync, existsSync, statSync, writeFileSync } from "fs";
import { join } from "path";
import { allPosts } from "../src/data/blogData";

const DOMAIN = "https://site.reparoavancado.com.br";
const QUOTA = 200;
// Se não muda em 7 dias, não reenvia (evita gastar cota com URL já notificada)
const DEDUPE_DAYS = 7;
const LOG_PATH = join(process.cwd(), "scripts", "indexing-log.json");
// Se as primeiras tentativas já vierem com erro de cota, para de bater na API
// (evita gastar minutos de CI mandando 200 requests que sabemos que vão falhar)
const QUOTA_ERROR_STREAK_LIMIT = 3;

type IndexingLog = Record<string, string>; // url -> ISO timestamp do último envio OK

function loadLog(): IndexingLog {
  if (!existsSync(LOG_PATH)) return {};
  try {
    return JSON.parse(readFileSync(LOG_PATH, "utf-8"));
  } catch {
    console.warn("Aviso: indexing-log.json corrompido ou ilegível, iniciando log vazio.");
    return {};
  }
}

function isQuotaError(message: string): boolean {
  return /quota exceeded/i.test(message);
}

async function run() {
  console.log("Iniciando script de indexação...");
  
  const keyPath = join(process.cwd(), "google-service-account.json");
  if (!existsSync(keyPath)) {
    console.error("ERRO FATAL: Arquivo google-service-account.json nao encontrado!");
    process.exit(1);
  }

  const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    console.error("ERRO: sitemap.xml nao encontrado na pasta public!");
    process.exit(1);
  }

  const sitemapContent = readFileSync(sitemapPath, "utf-8");
  const urlsInSitemap = new Set<string>();
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemapContent)) !== null) {
    urlsInSitemap.add(match[1]);
  }
  
  console.log(`Encontradas ${urlsInSitemap.size} URLs no sitemap.`);

  // 1. Prioridade Máxima: Últimos artigos do Blog
  const sortedPosts = [...allPosts].sort((a, b) => {
    const dateA = new Date(a.dateModified || a.datePublished || "2000-01-01").getTime();
    const dateB = new Date(b.dateModified || b.datePublished || "2000-01-01").getTime();
    return dateB - dateA;
  });
  
  const priorityUrls: string[] = [
    "https://site.reparoavancado.com.br/conserto-de-celular",
    "https://site.reparoavancado.com.br/reparo-em-placa",
    "https://site.reparoavancado.com.br/blog/celular-xiaomi-nao-liga-o-que-fazer",
    "https://site.reparoavancado.com.br/blog/diferenca-tela-original-primeira-linha",
    "https://site.reparoavancado.com.br#",
    "https://site.reparoavancado.com.br/blog/troca-de-tela-*",
    "https://site.reparoavancado.com.br/blog/troca-tela-*",
    "https://site.reparoavancado.com.br/blog/troca-de-bateria-*",
    "https://site.reparoavancado.com.br/blog/reparo-de-placa-*",
    "https://site.reparoavancado.com.br/blog/conector-de-carga-*",
    "https://site.reparoavancado.com.br/blog/aparelho-nao-liga-*",
    "https://site.reparoavancado.com.br/blog/aparelho-nao-carrega-*",
    "https://site.reparoavancado.com.br/blog/desoxidacao-*",
    "https://site.reparoavancado.com.br/blog/celular-nao-liga-*",
    "https://site.reparoavancado.com.br/blog/celular-nao-carrega-*",
    "https://site.reparoavancado.com.br/blog/celular-caiu-na-agua-*",
    "https://site.reparoavancado.com.br/blog/troca-de-microfone-*",
    "https://site.reparoavancado.com.br/blog/alto-falante-audio-*",
    "https://site.reparoavancado.com.br/blog/cameras-*",
    "https://site.reparoavancado.com.br/blog/face-id-*",
    "https://site.reparoavancado.com.br/blog/biometria-*",
    "https://site.reparoavancado.com.br/blog/software-*",
    "https://site.reparoavancado.com.br/blog/upgrade-ssd-*",
    "https://site.reparoavancado.com.br/blog/upgrade-ram-*",
    "https://site.reparoavancado.com.br/blog/limpeza-interna-*",
    "https://site.reparoavancado.com.br/blog/pasta-termica-*",
    "https://site.reparoavancado.com.br/blog/dobradicas-*",
    "https://site.reparoavancado.com.br#",
    "https://site.reparoavancado.com.br/assistencia-tecnica-boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/boca-do-rio",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/boca-do-rio",
    "https://site.reparoavancado.com.br/assistencia-tecnica-pituba",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/pituba",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/pituba",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/pituba",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/pituba",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/pituba",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/pituba",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/pituba",
    "https://site.reparoavancado.com.br/assistencia-tecnica-itaigara",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/itaigara",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/itaigara",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/itaigara",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/itaigara",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/itaigara",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/itaigara",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/itaigara",
    "https://site.reparoavancado.com.br/assistencia-tecnica-costa-azul",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/costa-azul",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/costa-azul",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/costa-azul",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/costa-azul",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/costa-azul",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/costa-azul",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/costa-azul",
    "https://site.reparoavancado.com.br/assistencia-tecnica-caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/caminho-das-arvores",
    "https://site.reparoavancado.com.br/assistencia-tecnica-jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/jardim-armacao",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/jardim-armacao",
    "https://site.reparoavancado.com.br/assistencia-tecnica-patamares",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/patamares",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/patamares",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/patamares",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/patamares",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/patamares",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/patamares",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/patamares",
    "https://site.reparoavancado.com.br/assistencia-tecnica-imbui",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/imbui",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/imbui",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/imbui",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/imbui",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/imbui",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/imbui",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/imbui",
    "https://site.reparoavancado.com.br/assistencia-tecnica-stiep",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/stiep",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/stiep",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/stiep",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/stiep",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/stiep",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/stiep",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/stiep",
    "https://site.reparoavancado.com.br/assistencia-tecnica-iguatemi",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/iguatemi",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/iguatemi",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/iguatemi",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/iguatemi",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/iguatemi",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/iguatemi",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/iguatemi",
    "https://site.reparoavancado.com.br/assistencia-tecnica-paralela",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/paralela",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/paralela",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/paralela",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/paralela",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/paralela",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/paralela",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/paralela",
    "https://site.reparoavancado.com.br/assistencia-tecnica-brotas",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/brotas",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/brotas",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/brotas",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/brotas",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/brotas",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/brotas",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/brotas",
    "https://site.reparoavancado.com.br/assistencia-tecnica-cabula",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/cabula",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/cabula",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/cabula",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/cabula",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/cabula",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/cabula",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/cabula",
    "https://site.reparoavancado.com.br/assistencia-tecnica-pernambues",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/pernambues",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/pernambues",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/pernambues",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/pernambues",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/pernambues",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/pernambues",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/pernambues",
    "https://site.reparoavancado.com.br/assistencia-tecnica-sao-rafael",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/sao-rafael",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/sao-rafael",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/sao-rafael",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/sao-rafael",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/sao-rafael",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/sao-rafael",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/sao-rafael",
    "https://site.reparoavancado.com.br/assistencia-tecnica-tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/tancredo-neves",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/tancredo-neves",
    "https://site.reparoavancado.com.br/assistencia-tecnica-barra",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/barra",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/barra",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/barra",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/barra",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/barra",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/barra",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/barra",
    "https://site.reparoavancado.com.br/assistencia-tecnica-graca",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/graca",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/graca",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/graca",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/graca",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/graca",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/graca",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/graca",
    "https://site.reparoavancado.com.br/assistencia-tecnica-vitoria",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/vitoria",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/vitoria",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/vitoria",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/vitoria",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/vitoria",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/vitoria",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/vitoria",
    "https://site.reparoavancado.com.br/assistencia-tecnica-ondina",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/ondina",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/ondina",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/ondina",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/ondina",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/ondina",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/ondina",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/ondina",
    "https://site.reparoavancado.com.br/assistencia-tecnica-rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/rio-vermelho",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/rio-vermelho",
    "https://site.reparoavancado.com.br/assistencia-tecnica-centro",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/centro",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/centro",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/centro",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/centro",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/centro",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/centro",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/centro",
    "https://site.reparoavancado.com.br/assistencia-tecnica-naze",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/naze",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/naze",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/naze",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/naze",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/naze",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/naze",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/naze",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/nazare",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/nazare",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/nazare",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/nazare",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/nazare",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/nazare",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/nazare",
    "https://site.reparoavancado.com.br/assistencia-tecnica-liberdade",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/liberdade",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/liberdade",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/liberdade",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/liberdade",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/liberdade",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/liberdade",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/liberdade",
    "https://site.reparoavancado.com.br/assistencia-tecnica-piata",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/piata",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/piata",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/piata",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/piata",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/piata",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/piata",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/piata",
    "https://site.reparoavancado.com.br/assistencia-tecnica-itapua",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/itapua",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/itapua",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/itapua",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/itapua",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/itapua",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/itapua",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/itapua",
    "https://site.reparoavancado.com.br/assistencia-tecnica-stella-maris",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/stella-maris",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/stella-maris",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/stella-maris",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/stella-maris",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/stella-maris",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/stella-maris",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/stella-maris",
    "https://site.reparoavancado.com.br/assistencia-tecnica-sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/sao-cristovao",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/sao-cristovao",
    "https://site.reparoavancado.com.br/assistencia-tecnica-mussurunga",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/mussurunga",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/mussurunga",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/mussurunga",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/mussurunga",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/mussurunga",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/mussurunga",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/mussurunga",
    "https://site.reparoavancado.com.br/assistencia-tecnica-cajazeiras",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/cajazeiras",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/cajazeiras",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/cajazeiras",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/cajazeiras",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/cajazeiras",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/cajazeiras",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/cajazeiras",
    "https://site.reparoavancado.com.br/assistencia-tecnica-pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/pau-da-lima",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/pau-da-lima",
    "https://site.reparoavancado.com.br/assistencia-tecnica-lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/lauro-de-freitas",
    "https://site.reparoavancado.com.br/assistencia-tecnica-vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/conserto-de-iphone/em/vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/troca-de-tela/em/vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/troca-de-bateria/em/vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/reparo-de-placa/em/vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/conserto-de-xiaomi/em/vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/conserto-de-samsung/em/vilas-do-atlantico",
    "https://site.reparoavancado.com.br/conserto/banho-quimico/em/vilas-do-atlantico"
  ];
  
  // Pegar os 30 posts mais recentes
  for (const post of sortedPosts.slice(0, 30)) {
    const url = `${DOMAIN}/blog/${post.slug}`;
    if (urlsInSitemap.has(url)) {
      priorityUrls.push(url);
    }
  }

  // 2. Restante das URLs
  const otherUrls = Array.from(urlsInSitemap).filter(u => !priorityUrls.includes(u));
  
  // Embaralhar as outras URLs para que a cota diária pegue páginas diferentes a cada push
  for (let i = otherUrls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otherUrls[i], otherUrls[j]] = [otherUrls[j], otherUrls[i]];
  }

  let finalUrls = [...priorityUrls, ...otherUrls];

  // Deduplicação: não reenviar URL que já foi confirmada com sucesso nos últimos N dias
  const log = loadLog();
  const now = Date.now();
  const skippedByDedupe: string[] = [];
  finalUrls = finalUrls.filter((url) => {
    const last = log[url];
    if (!last) return true;
    const ageDays = (now - new Date(last).getTime()) / (1000 * 60 * 60 * 24);
    if (ageDays < DEDUPE_DAYS) {
      skippedByDedupe.push(url);
      return false;
    }
    return true;
  });
  if (skippedByDedupe.length > 0) {
    console.log(`Pulando ${skippedByDedupe.length} URLs já indexadas com sucesso nos últimos ${DEDUPE_DAYS} dias.`);
  }

  if (finalUrls.length > QUOTA) {
    console.log(`Limitando envio para ${QUOTA} URLs (Cota diária do Google). Faltarão ${finalUrls.length - QUOTA} para amanhã/próximo push.`);
    finalUrls = finalUrls.slice(0, QUOTA);
  }

  console.log(`Enviando ${finalUrls.length} URLs (incluindo ${priorityUrls.length} posts prioritários)...`);

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: "v3", auth: authClient });

  let successCount = 0;
  let errorCount = 0;
  let consecutiveQuotaErrors = 0;
  let stoppedEarlyForQuota = false;

  for (let i = 0; i < finalUrls.length; i++) {
    const url = finalUrls[i];
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: "URL_UPDATED",
        },
      });
      console.log(`[OK] ${url} -> Status: ${response.status}`);
      successCount++;
      consecutiveQuotaErrors = 0;
      log[url] = new Date().toISOString();
      // Aumentar o delay para evitar 429 Too Many Requests do Google (cotas por minuto)
      await new Promise(r => setTimeout(r, 300));
    } catch (error: any) {
      console.error(`[ERRO] ${url} -> ${error.message}`);
      errorCount++;

      if (isQuotaError(error.message)) {
        consecutiveQuotaErrors++;
        if (consecutiveQuotaErrors >= QUOTA_ERROR_STREAK_LIMIT) {
          console.error(
            `\nParando cedo: ${consecutiveQuotaErrors} erros seguidos de cota excedida. ` +
            `Restam ${finalUrls.length - i - 1} URLs que nem foram tentadas — a cota diária já está zerada, ` +
            `não faz sentido continuar batendo na API.`
          );
          stoppedEarlyForQuota = true;
          break;
        }
      } else {
        consecutiveQuotaErrors = 0;
      }
    }
  }

  // Persiste o log de URLs indexadas com sucesso (mesmo em parada antecipada)
  try {
    writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
  } catch (e: any) {
    console.warn(`Aviso: não consegui salvar ${LOG_PATH}: ${e.message}`);
  }

  const attempted = successCount + errorCount;
  console.log("\n=================================");
  console.log("RESUMO DA INDEXAÇÃO:");
  console.log(`Sucesso: ${successCount}`);
  console.log(`Erros: ${errorCount}`);
  if (stoppedEarlyForQuota) console.log("Motivo: parada antecipada por cota diária excedida.");
  console.log("=================================\n");

  // Falha real do job: sem isso, o GitHub Actions mostrava "sucesso" mesmo com
  // 0 URLs indexadas de fato (o script só logava o erro e seguia em frente).
  const failedRun = attempted > 0 && (successCount === 0 || errorCount / attempted > 0.5);
  if (failedRun) {
    console.error("Marcando job como FALHOU: taxa de erro acima de 50% (ou 0 sucessos).");
    process.exitCode = 1;
  }
}

run();

