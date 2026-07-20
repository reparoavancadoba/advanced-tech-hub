// Programmatic SEO data: bairros e serviços de Salvador

export interface Bairro {
  slug: string;
  name: string;
}

export interface ServicoLocal {
  slug: string;
  name: string;
  shortName: string;
  description: string;
}

export interface MacroRegiao {
  slug: string;
  name: string;
  bairrosInternos: string[];
  oldSlugs: string[]; // Usado apenas para gerar redirects automatizados, se necessário
}

export const macroRegioes: MacroRegiao[] = [
  {
    slug: "boca-do-rio-e-orla",
    name: "Boca do Rio e Orla",
    bairrosInternos: ["Boca do Rio", "Pituba", "Itaigara", "Costa Azul", "Caminho das Árvores", "Jardim Armação", "Patamares", "Imbuí", "Stiep"],
    oldSlugs: ["boca-do-rio", "pituba", "itaigara", "costa-azul", "caminho-das-arvores", "jardim-armacao", "patamares", "imbui", "stiep"]
  },
  {
    slug: "miolo-e-centro-financeiro",
    name: "Miolo e Centro Financeiro",
    bairrosInternos: ["Iguatemi", "Paralela", "Brotas", "Cabula", "Pernambués", "São Rafael", "Tancredo Neves"],
    oldSlugs: ["iguatemi", "paralela", "brotas", "cabula", "pernambues", "sao-rafael", "tancredo-neves"]
  },
  {
    slug: "centro-e-sul",
    name: "Centro e Sul",
    bairrosInternos: ["Barra", "Graça", "Vitória", "Ondina", "Rio Vermelho", "Centro", "Nazaré", "Liberdade"],
    oldSlugs: ["barra", "graca", "vitoria", "ondina", "rio-vermelho", "centro", "naze", "liberdade"]
  },
  {
    slug: "orla-norte-e-aeroporto",
    name: "Orla Norte e Aeroporto",
    bairrosInternos: ["Piatã", "Itapuã", "Stella Maris", "São Cristóvão", "Mussurunga"],
    oldSlugs: ["piata", "itapua", "stella-maris", "sao-cristovao", "mussurunga"]
  },
  {
    slug: "cajazeiras-e-regiao",
    name: "Cajazeiras e Região",
    bairrosInternos: ["Cajazeiras", "Pau da Lima"],
    oldSlugs: ["cajazeiras", "pau-da-lima"]
  },
  {
    slug: "regiao-metropolitana",
    name: "Região Metropolitana",
    bairrosInternos: ["Lauro de Freitas", "Vilas do Atlântico"],
    oldSlugs: ["lauro-de-freitas", "vilas-do-atlantico"]
  }
];

// O array antigo "bairros" foi depreciado para evitar páginas de conteúdo fino.
// Em caso de quebra de componentes legados que ainda precisem do array simples:
export const bairros: Bairro[] = macroRegioes.flatMap(macro => 
  macro.bairrosInternos.map((nome, index) => ({
    name: nome,
    slug: macro.oldSlugs[index]
  }))
);

export const servicosLocais: ServicoLocal[] = [
  {
    slug: "conserto-de-iphone",
    name: "Conserto de iPhone",
    shortName: "Conserto de iPhone",
    description:
      "avaliação profissional avançado e conserto completo de iPhone com peças de alta performance e garantia real.",
  },
  {
    slug: "troca-de-tela",
    name: "Troca de Tela",
    shortName: "Troca de Tela",
    description:
      "Display premium com cores vibrantes e touch responsivo. Troca rápida com padrão de fábrica.",
  },
  {
    slug: "troca-de-bateria",
    name: "Troca de Bateria",
    shortName: "Troca de Bateria",
    description:
      "Saúde 100% restaurada com baterias de alta performance, ajuste presencial presencial rápida e garantia.",
  },
  {
    slug: "reparo-de-placa",
    name: "conserto de circuito interno",
    shortName: "conserto de circuito interno",
    description:
      "Microeletrônica avançada. Recuperamos aparelhos condenados por outras oficinas.",
  },
  {
    slug: "conserto-de-xiaomi",
    name: "Conserto de Xiaomi",
    shortName: "Conserto de Xiaomi",
    description:
      "profissionais em todos os modelos Xiaomi e Redmi. Peças premium e atendimento ágil.",
  },
  {
    slug: "conserto-de-samsung",
    name: "Conserto de Samsung",
    shortName: "Conserto de Samsung",
    description:
      "conserto focado em Galaxy: tela AMOLED, circuito interno, bateria e mais — com garantia.",
  },
  {
    slug: "banho-quimico",
    name: "Banho Químico",
    shortName: "Banho Químico",
    description:
      "Tratamento ultrassônico para aparelhos com contato com líquido. restauração técnica avançada.",
  },
];

export const WHATSAPP_NUMBER = "5571991981437";

export function buildWhatsappLink(servico: string, bairro: string) {
  const msg = `Olá, estava no site e preciso de um orçamento para ${servico} no bairro ${bairro}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
