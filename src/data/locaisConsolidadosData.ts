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
  name: "conserto Avançado - oficina de conserto de celular de Celulares em Salvador",
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
    path: "/loja-tecnica-salvador",
    name: "Salvador",
    title: "oficina de conserto de celular de Celular em Salvador | conserto Avançado",
    h1: "oficina de conserto de celular de Celular em Salvador",
    metaDescription: "conserto focado de iPhone, Samsung, Xiaomi e circuito lógico em Salvador. Atendimento rápido com peças premium e garantia. Faça seu orçamento!",
    description: "A conserto Avançado é referência em oficina de conserto de celular em Salvador (BA). Com mais de 9 anos de experiência e laboratório focado de alta tecnologia, oferecemos conserto rápidos e garantia formal em todos os serviços.",
    schema: {
      ...baseSchema,
      name: "conserto Avançado - oficina de conserto de celular de Celulares em Salvador",
      addressLocality: "Salvador",
      areaServed: baseSchema.areaServed
    }
  },
  "boca-do-rio": {
    slug: "boca-do-rio",
    path: "/loja-tecnica-boca-do-rio",
    name: "Boca do Rio",
    title: "oficina de conserto de celular de Celular na Boca do Rio | Salvador | conserto Avançado",
    h1: "oficina de conserto de celular de Celular na Boca do Rio",
    metaDescription: "oficina de conserto de celular de celulares na Boca do Rio, Salvador. profissionais em iPhone, Samsung, Xiaomi e conserto de circuito integrado. Orçamento gratuito no WhatsApp!",
    description: "Localizada estrategicamente no bairro Boca do Rio em Salvador, a conserto Avançado oferece serviços de conserto rápidos e eficientes para moradores e trabalhadores do bairro e adjacências, com foco em peças premium.",
    schema: {
      ...baseSchema,
      name: "conserto Avançado - oficina de conserto de celular de Celulares na Boca do Rio",
      addressLocality: "Boca do Rio, Salvador",
      areaServed: ["Boca do Rio", "Costa Azul", "Imbuí", "Stiep", "Jardim Armação", "Patamares"]
    }
  },
  "pituba": {
    slug: "pituba",
    path: "/loja-tecnica-pituba",
    name: "Pituba",
    title: "oficina de conserto de celular de Celular na Pituba | Salvador | conserto Avançado",
    h1: "oficina de conserto de celular de Celular na Pituba",
    metaDescription: "Precisa de conserto de celular na Pituba? A conserto Avançado oferece troca de tela, bateria e conserto de circuito integrado rápida com peças premium e garantia. Fale conosco!",
    description: "Atendemos a região da Pituba e adjacências em Salvador com serviços focados de conserto de iPhone, Samsung, Xiaomi e consertos de circuitos integrados de alta precisão. Peças de alta performance com garantia por escrito.",
    schema: {
      ...baseSchema,
      name: "conserto Avançado - oficina de conserto de celular de Celulares na Pituba",
      addressLocality: "Pituba, Salvador",
      areaServed: ["Pituba", "Itaigara", "Caminho das Árvores", "Rio Vermelho"]
    }
  },
  "imbui": {
    slug: "imbui",
    path: "/loja-tecnica-imbui",
    name: "Imbuí",
    title: "oficina de conserto de celular de Celular no Imbuí | Salvador | conserto Avançado",
    h1: "oficina de conserto de celular de Celular no Imbuí",
    metaDescription: "oficina de conserto de celular de celulares no Imbuí, Salvador. conserto expresso de tela, bateria e circuito lógico. Peças de alta performance com garantia real.",
    description: "Moradores do Imbuí encontram na conserto Avançado a melhor solução para conserto de smartphones e notebooks. Fale diretamente com nossos profissionals e receba orçamento rápido no WhatsApp.",
    schema: {
      ...baseSchema,
      name: "conserto Avançado - oficina de conserto de celular de Celulares no Imbuí",
      addressLocality: "Imbuí, Salvador",
      areaServed: ["Imbuí", "Boca do Rio", "Cabula", "Narandiba", "Stiep"]
    }
  },
  "brotas": {
    slug: "brotas",
    path: "/loja-tecnica-brotas",
    name: "Brotas",
    title: "oficina de conserto de celular de Celular em Brotas | Salvador | conserto Avançado",
    h1: "oficina de conserto de celular de Celular em Brotas",
    metaDescription: "Conserto de celular em Brotas, Salvador. Troca de tela, bateria, microfone, conectores e circuitos internos com qualidade premium e garantia formal. Solicite orçamento!",
    description: "Oferecemos atendimento para o bairro de Brotas com avaliações precisos, consertos rápidos e garantia real em componentes de alta qualidade. Conte com a conserto Avançado para recuperar seu celular.",
    schema: {
      ...baseSchema,
      name: "conserto Avançado - oficina de conserto de celular de Celulares em Brotas",
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
  { slug: "boca-do-rio", name: "Boca do Rio", path: "/loja-tecnica-boca-do-rio" },
  { slug: "pituba", name: "Pituba", path: "/loja-tecnica-pituba" },
  { slug: "imbui", name: "Imbuí", path: "/loja-tecnica-imbui" },
  { slug: "brotas", name: "Brotas", path: "/loja-tecnica-brotas" }
];
export const allBairrosList = [
  ...bairrosEstrategicos,
  { slug: "salvador", name: "Salvador (Geral)", path: "/loja-tecnica-salvador" }
];
