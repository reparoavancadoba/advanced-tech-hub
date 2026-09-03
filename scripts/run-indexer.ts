import { google } from "googleapis";
import { readFileSync, existsSync, statSync } from "fs";
import { join } from "path";
import { allPosts } from "../src/data/blogData";

const DOMAIN = "https://site.reparoavancado.com.br";
const QUOTA = 200;

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
  
  const priorityUrls: string[] = [];
  
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
      // Aumentar o delay para evitar 429 Too Many Requests do Google (cotas por minuto)
      await new Promise(r => setTimeout(r, 300));
    } catch (error: any) {
      console.error(`[ERRO] ${url} -> ${error.message}`);
      errorCount++;
    }
  }

  console.log("\n=================================");
  console.log("RESUMO DA INDEXAÇÃO:");
  console.log(`Sucesso: ${successCount}`);
  console.log(`Erros: ${errorCount}`);
  console.log("=================================\n");
}

run();

