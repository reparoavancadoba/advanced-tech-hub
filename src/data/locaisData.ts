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

export const bairros: Bairro[] = [
  // Orla / Área Nobre
  { slug: "boca-do-rio", name: "Boca do Rio" },
  { slug: "pituba", name: "Pituba" },
  { slug: "itaigara", name: "Itaigara" },
  { slug: "costa-azul", name: "Costa Azul" },
  { slug: "caminho-das-arvores", name: "Caminho das Árvores" },
  { slug: "rio-vermelho", name: "Rio Vermelho" },
  { slug: "ondina", name: "Ondina" },
  { slug: "barra", name: "Barra" },
  { slug: "graca", name: "Graça" },
  { slug: "vitoria", name: "Vitória" },
  { slug: "jardim-armacao", name: "Jardim Armação" },
  { slug: "piata", name: "Piatã" },
  { slug: "itapua", name: "Itapuã" },
  { slug: "stella-maris", name: "Stella Maris" },
  { slug: "patamares", name: "Patamares" },

  // Miolo / Centro Financeiro
  { slug: "imbui", name: "Imbuí" },
  { slug: "stiep", name: "Stiep" },
  { slug: "iguatemi", name: "Iguatemi" },
  { slug: "paralela", name: "Paralela" },
  { slug: "brotas", name: "Brotas" },
  { slug: "cabula", name: "Cabula" },
  { slug: "pernambues", name: "Pernambués" },
  { slug: "sao-rafael", name: "São Rafael" },
  { slug: "tancredo-neves", name: "Tancredo Neves" },

  // Centro e Cidades Vizinhas
  { slug: "centro", name: "Centro" },
  { slug: "naze", name: "Nazaré" },
  { slug: "liberdade", name: "Liberdade" },
  { slug: "cajazeiras", name: "Cajazeiras" },
  { slug: "mussurunga", name: "Mussurunga" },
  { slug: "sao-cristovao", name: "São Cristóvão" },
  { slug: "pau-da-lima", name: "Pau da Lima" },
  { slug: "vilas-do-atlantico", name: "Vilas do Atlântico" },
  { slug: "lauro-de-freitas", name: "Lauro de Freitas" },
];

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
