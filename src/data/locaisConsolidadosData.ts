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
  name: "Reparo Avançado - oficina de conserto de celular de Celulares em Salvador",
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
    title: "oficina de conserto de celular em Salvador | Reparo Avançado",
    h1: "oficina de conserto de celular em Salvador",
    metaDescription: "conserto focado de iPhone, Samsung, Xiaomi e circuito lógico em Salvador. Atendimento rápido com peças premium e garantia. Faça seu orçamento!",
    description: "A Reparo Avançado é referência em oficina de conserto de celular em Salvador (BA). Com mais de mais de 7 anos de experiência e laboratório focado de alta tecnologia, oferecemos conserto rápidos e garantia formal em todos os serviços.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - oficina de conserto de celular de Celulares em Salvador",
      addressLocality: "Salvador",
      areaServed: baseSchema.areaServed
    }
  },
  "boca-do-rio": {
    slug: "boca-do-rio",
    path: "/loja-tecnica-boca-do-rio",
    name: "Boca do Rio",
    title: "Conserto Celular Boca do Rio: Pronto em 1h com Garantia",
    h1: "oficina de conserto de celular de Celular na Boca do Rio",
    metaDescription: "Celular quebrou na Boca do Rio? Nossa equipe resolve! Conserto rápido de iPhone, Samsung e Xiaomi com peças de alta qualidade. Faça seu orçamento.",
    description: "Localizada estrategicamente no bairro Boca do Rio em Salvador, a Reparo Avançado oferece serviços de conserto rápidos e eficientes para moradores e trabalhadores do bairro e adjacências, com foco em peças premium.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - oficina de conserto de celular de Celulares na Boca do Rio",
      addressLocality: "Boca do Rio, Salvador",
      areaServed: ["Boca do Rio", "Costa Azul", "Imbuí", "Stiep", "Jardim Armação", "Patamares"]
    }
  },
  "pituba": {
    slug: "pituba",
    path: "/loja-tecnica-pituba",
    name: "Pituba",
    title: "Conserto de Celular na Pituba: Perto de Você e Rápido",
    h1: "oficina de conserto de celular de Celular na Pituba",
    metaDescription: "Assistência de celular na Pituba. Especialistas em Apple e Samsung. Consertos rápidos e precisos com peças de alta qualidade. Faça sua avaliação gratuita.",
    description: "Atendemos a região da Pituba e adjacências em Salvador com serviços focados de conserto de iPhone, Samsung, Xiaomi e consertos de circuitos integrados de alta precisão. Peças de alta performance com garantia por escrito.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - oficina de conserto de celular de Celulares na Pituba",
      addressLocality: "Pituba, Salvador",
      areaServed: ["Pituba", "Itaigara", "Caminho das Árvores", "Rio Vermelho"]
    }
  },
  "imbui": {
    slug: "imbui",
    path: "/loja-tecnica-imbui",
    name: "Imbuí",
    title: "Conserto de Celular no Imbuí: Orçamento Rápido e Grátis",
    h1: "oficina de conserto de celular de Celular no Imbuí",
    metaDescription: "Celular quebrou no Imbuí? Nossa assistência resolve na hora! Troca de tela e bateria para iPhone e Android com garantia. Solicite seu orçamento gratuito.",
    description: "Moradores do Imbuí encontram na Reparo Avançado a melhor solução para conserto de smartphones e notebooks. Fale diretamente com nossos profissionals e receba orçamento rápido no WhatsApp.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - oficina de conserto de celular de Celulares no Imbuí",
      addressLocality: "Imbuí, Salvador",
      areaServed: ["Imbuí", "Boca do Rio", "Cabula", "Narandiba", "Stiep"]
    }
  },
  "brotas": {
    slug: "brotas",
    path: "/loja-tecnica-brotas",
    name: "Brotas",
    title: "Conserto Celular Brotas: Reparo Rápido e Peças Premium",
    h1: "oficina de conserto de celular de Celular em Brotas",
    metaDescription: "Assistência técnica de celulares em Brotas. Consertamos a placa, trocamos tela e bateria do seu iPhone ou Xiaomi. Serviço rápido com garantia. Orçamento já!",
    description: "Oferecemos atendimento para o bairro de Brotas com avaliações precisos, consertos rápidos e garantia real em componentes de alta qualidade. Conte com a Reparo Avançado para recuperar seu celular.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - oficina de conserto de celular de Celulares em Brotas",
      addressLocality: "Brotas, Salvador",
      areaServed: ["Brotas", "Cabula", "Vila Laura", "Horto Florestal", "Centro"]
    }
  }
};

import { macroRegioes } from "./locaisData";

export const listLocaisConsolidados = Object.values(locaisConsolidados);

macroRegioes.forEach(macro => {
  const data = {
    slug: macro.slug,
    path: `/assistencia-tecnica-${macro.slug}`,
    name: macro.name,
    title: `Assistência Técnica de Celular na ${macro.name} | Reparo Avançado`,
    h1: `Assistência Técnica na ${macro.name}`,
    metaDescription: `Precisando consertar celular na região da ${macro.name}, Salvador? A Reparo Avançado oferece diagnóstico grátis e conserto na hora.`,
    description: `Atendemos rapidamente em toda a região, cobrindo especificamente os bairros: ${macro.bairrosInternos.join(', ')}. Serviços de troca de tela, bateria, e reparo em placa.`,
    schema: {
      ...baseSchema,
      name: `Reparo Avançado - Assistência Técnica na ${macro.name}`,
      addressLocality: "Salvador",
      areaServed: macro.bairrosInternos
    }
  };
  locaisConsolidados[macro.slug] = data;
  listLocaisConsolidados.push(data);
});

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
