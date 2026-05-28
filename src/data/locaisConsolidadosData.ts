export interface LocalBusinessSchemaData {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  telephone: string;
  latitude: number;
  longitude: number;
  hours: string;
  socials: string[];
  areaServed: string[];
}

export interface LocalConsolidadoData {
  slug: string;
  path: string;
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  description: string;
  schema: LocalBusinessSchemaData;
}

const baseSchema: LocalBusinessSchemaData = {
  name: "Reparo Avançado - Assistência Técnica de Celulares em Salvador",
  streetAddress: "R. Abelardo Andrade de Carvalho, 8",
  addressLocality: "Salvador",
  addressRegion: "BA",
  postalCode: "41706-710",
  addressCountry: "BR",
  telephone: "+5571991981437",
  latitude: -12.9777,
  longitude: -38.4413,
  hours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
  socials: [
    "https://instagram.com/reparoavancadosalvador",
    "https://facebook.com/reparoavancadosalvador"
  ],
  areaServed: ["Boca do Rio", "Imbuí", "Pituba", "Brotas", "Costa Azul", "Stiep", "Caminho das Árvores", "Itaigara", "Rio Vermelho", "Patamares", "Piatã", "Itapuã", "Cabula"]
};

export const locaisConsolidados: Record<string, LocalConsolidadoData> = {
  "salvador": {
    slug: "salvador",
    path: "/assistencia-tecnica-salvador",
    name: "Salvador",
    title: "Assistência Técnica de Celular em Salvador | Reparo Avançado",
    h1: "Assistência Técnica de Celular em Salvador",
    metaDescription: "Reparo especializado de iPhone, Samsung, Xiaomi e placa lógica em Salvador. Atendimento rápido com peças premium e garantia. Faça seu orçamento!",
    description: "A Reparo Avançado é referência em assistência técnica em Salvador (BA). Com mais de 9 anos de experiência e laboratório especializado de alta tecnologia, oferecemos reparos rápidos e garantia formal em todos os serviços.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica de Celulares em Salvador",
      addressLocality: "Salvador",
      areaServed: baseSchema.areaServed
    }
  },
  "boca-do-rio": {
    slug: "boca-do-rio",
    path: "/assistencia-tecnica-boca-do-rio",
    name: "Boca do Rio",
    title: "Assistência Técnica de Celular na Boca do Rio | Salvador | Reparo Avançado",
    h1: "Assistência Técnica de Celular na Boca do Rio",
    metaDescription: "Assistência técnica de celulares na Boca do Rio, Salvador. Especialistas em iPhone, Samsung, Xiaomi e conserto de placa. Orçamento gratuito no WhatsApp!",
    description: "Localizada estrategicamente no bairro Boca do Rio em Salvador, a Reparo Avançado oferece serviços de reparo rápidos e eficientes para moradores e trabalhadores do bairro e adjacências, com foco em peças premium.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica de Celulares na Boca do Rio",
      addressLocality: "Boca do Rio, Salvador",
      areaServed: ["Boca do Rio", "Costa Azul", "Imbuí", "Stiep", "Jardim Armação", "Patamares"]
    }
  },
  "pituba": {
    slug: "pituba",
    path: "/assistencia-tecnica-pituba",
    name: "Pituba",
    title: "Assistência Técnica de Celular na Pituba | Salvador | Reparo Avançado",
    h1: "Assistência Técnica de Celular na Pituba",
    metaDescription: "Precisa de conserto de celular na Pituba? A Reparo Avançado oferece troca de tela, bateria e reparo de placa rápida com peças premium e garantia. Fale conosco!",
    description: "Atendemos a região da Pituba e adjacências em Salvador com serviços especializados de reparo de iPhone, Samsung, Xiaomi e consertos de placas de alta precisão. Peças de alta performance com garantia por escrito.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica de Celulares na Pituba",
      addressLocality: "Pituba, Salvador",
      areaServed: ["Pituba", "Itaigara", "Caminho das Árvores", "Rio Vermelho"]
    }
  },
  "imbui": {
    slug: "imbui",
    path: "/assistencia-tecnica-imbui",
    name: "Imbuí",
    title: "Assistência Técnica de Celular no Imbuí | Salvador | Reparo Avançado",
    h1: "Assistência Técnica de Celular no Imbuí",
    metaDescription: "Assistência técnica de celulares no Imbuí, Salvador. Reparo expresso de tela, bateria e placa lógica. Peças de alta performance com garantia real.",
    description: "Moradores do Imbuí encontram na Reparo Avançado a melhor solução para reparos de smartphones e notebooks. Fale diretamente com nossos técnicos e receba orçamento rápido no WhatsApp.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica de Celulares no Imbuí",
      addressLocality: "Imbuí, Salvador",
      areaServed: ["Imbuí", "Boca do Rio", "Cabula", "Narandiba", "Stiep"]
    }
  },
  "brotas": {
    slug: "brotas",
    path: "/assistencia-tecnica-brotas",
    name: "Brotas",
    title: "Assistência Técnica de Celular em Brotas | Salvador | Reparo Avançado",
    h1: "Assistência Técnica de Celular em Brotas",
    metaDescription: "Conserto de celular em Brotas, Salvador. Troca de tela, bateria, microfone, conectores e placas com qualidade premium e garantia formal. Solicite orçamento!",
    description: "Oferecemos atendimento para o bairro de Brotas com diagnósticos precisos, consertos rápidos e garantia real em componentes de alta qualidade. Conte com a Reparo Avançado para recuperar seu celular.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica de Celulares em Brotas",
      addressLocality: "Brotas, Salvador",
      areaServed: ["Brotas", "Cabula", "Vila Laura", "Horto Florestal", "Centro"]
    }
  }
};

export const listLocaisConsolidados = Object.values(locaisConsolidados);
export function getLocalConsolidadoBySlug(slug: string): LocalConsolidadoData | undefined {
  return locaisConsolidados[slug];
}
export function getLocalConsolidadoByPath(path: string): LocalConsolidadoData | undefined {
  return listLocaisConsolidados.find((l) => l.path === path);
}
export const bairrosEstrategicos = [
  { slug: "boca-do-rio", name: "Boca do Rio", path: "/assistencia-tecnica-boca-do-rio" },
  { slug: "pituba", name: "Pituba", path: "/assistencia-tecnica-pituba" },
  { slug: "imbui", name: "Imbuí", path: "/assistencia-tecnica-imbui" },
  { slug: "brotas", name: "Brotas", path: "/assistencia-tecnica-brotas" }
];
export const allBairrosList = [
  ...bairrosEstrategicos,
  { slug: "salvador", name: "Salvador (Geral)", path: "/assistencia-tecnica-salvador" }
];
