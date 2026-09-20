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
  access?: string;
  distance?: string;
  topServices?: string;
  schema: LocalBusinessSchemaData;
}

const baseSchema: LocalBusinessSchemaData = {
  name: "Reparo Avançado - Assistência Técnica em Salvador",
  streetAddress: "R. Abelardo Andrade de Carvalho, 8",
  addressLocality: "Salvador",
  addressRegion: "BA",
  postalCode: "41706-710",
  addressCountry: "BR",
  telephone: "+5571991981437",
  latitude: -12.9777,
  longitude: -38.4413,
  hours: "Mo-Fr 08:00-18:00, Sa 08:00-17:00",
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
    metaDescription: "Assistência técnica de celular em Salvador: iPhone, Samsung, Xiaomi e Motorola. Troca de tela, bateria e placa com garantia de 90 dias e orçamento grátis.",
    description: "A Reparo Avançado atende toda a cidade de Salvador com infraestrutura laboratorial completa.",
    access: "Com sede estrategicamente localizada na Boca do Rio, recebemos clientes de diversos pontos da capital baiana via orla (Av. Octávio Mangabeira), Av. Paralela e Magalhães Neto. A localização centralizada facilita o acesso tanto para quem vem da orla norte quanto do centro financeiro.",
    distance: "Oferecemos coleta e entrega via motoboy para toda Salvador, ou atendimento presencial com estacionamento fácil no local.",
    topServices: "Os serviços mais buscados por nossa clientela de Salvador incluem a troca de vidro e tela original (Apple e Samsung), além de reparos complexos em placas e diagnóstico de aparelhos que não ligam.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica em Salvador",
      addressLocality: "Salvador",
      areaServed: baseSchema.areaServed
    }
  },
  "boca-do-rio": {
    slug: "boca-do-rio",
    path: "/assistencia-tecnica-boca-do-rio",
    name: "Boca do Rio",
    title: "Conserto Celular Boca do Rio: Pronto em 1h com Garantia",
    h1: "Assistência Técnica de Celular na Boca do Rio",
    metaDescription: "Celular quebrou na Boca do Rio? Nossa equipe resolve! Conserto rápido de iPhone, Samsung e Xiaomi com peças de alta qualidade. Faça seu orçamento.",
    description: "É na Boca do Rio que fica a base principal do laboratório da Reparo Avançado, contando com os melhores microscópios e equipamentos de microssoldagem.",
    access: "Chegar na nossa loja física é simples: estamos situados na Rua Abelardo Andrade de Carvalho, 8, pertinho da Orla da Boca do Rio e do antigo Clube do Bahia. Há vagas de estacionamento na própria rua para maior comodidade.",
    distance: "Se você mora na Boca do Rio, Imbuí, Costa Azul ou Patamares, nosso laboratório está a menos de 5 a 10 minutos da sua casa.",
    topServices: "Por sermos a assistência oficial do bairro, recebemos alto volume de iPhones que sofreram oxidação por maresia, aparelhos com bateria viciada e telas estilhaçadas. O banho químico preventivo e a substituição de baterias originais lideram a procura local.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica na Boca do Rio",
      addressLocality: "Boca do Rio, Salvador",
      areaServed: ["Boca do Rio", "Costa Azul", "Jardim Armação", "Patamares"]
    }
  },
  "pituba": {
    slug: "pituba",
    path: "/assistencia-tecnica-pituba",
    name: "Pituba",
    title: "Conserto de Celular na Pituba | Assistência Técnica",
    h1: "Assistência Técnica de Celular na Pituba",
    metaDescription: "Assistência técnica de celular na Pituba, Salvador: troca de tela, bateria e reparo de placa. Loja na Boca do Rio, a poucos minutos. Orçamento grátis.",
    description: "Para os residentes da Pituba, oferecemos um serviço de conserto de celulares com foco absoluto em qualidade técnica, mantendo o nível de exigência dos aparelhos premium.",
    access: "Saindo da Pituba, o caminho mais veloz é seguir direto pela Av. Octávio Mangabeira (Orla) em direção a Itapuã. Assim que passar do retorno da Boca do Rio, vire à direita na Rua Abelardo Andrade de Carvalho. O trajeto flui sem os grandes engarrafamentos do centro comercial.",
    distance: "A loja fica a apenas cerca de 8 a 15 minutos de carro da região da Praça Ana Lúcia Magalhães e da Av. Paulo VI, dependendo do trânsito na Orla.",
    topServices: "Clientes da Pituba frequentemente nos procuram para manutenção de linha premium: troca de bateria do iPhone mantendo a saúde a 100%, troca de telas OLED originais da linha Galaxy S e recuperação de dados perdidos.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica na Pituba",
      addressLocality: "Pituba, Salvador",
      areaServed: ["Pituba", "Rio Vermelho"]
    }
  },
  "imbui": {
    slug: "imbui",
    path: "/assistencia-tecnica-imbui",
    name: "Imbuí",
    title: "Conserto de Celular no Imbuí: Orçamento Rápido e Grátis",
    h1: "Assistência Técnica de Celular no Imbuí",
    metaDescription: "Celular quebrou no Imbuí? Nossa assistência resolve na hora! Troca de tela e bateria para iPhone e Android com garantia. Solicite seu orçamento gratuito.",
    description: "Soluções completas e honestas em conserto de smartphones para o bairro do Imbuí e regiões conectadas, com orçamentos práticos fornecidos diretamente via WhatsApp.",
    access: "Nossos clientes do Imbuí têm a rota mais fácil: basta descer a Avenida Jorge Amado até o final, cruzar a orla e chegar na Boca do Rio. Não é preciso pegar a Paralela caso queira fugir do engarrafamento, tornando o acesso extremamente direto.",
    distance: "O percurso de carro saindo da praça principal do Imbuí até nosso laboratório dura em média apenas 5 a 10 minutos, sem retenções.",
    topServices: "Muito comum em estudantes e profissionais da área, os reparos predominantes do Imbuí são: substituição de telas quebradas de Motorola e Xiaomi (Poco e Redmi), troca de conector de carga tipo C e recuperação de conectores danificados.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica no Imbuí",
      addressLocality: "Imbuí, Salvador",
      areaServed: ["Imbuí", "Cabula", "Narandiba"]
    }
  },
  "brotas": {
    slug: "brotas",
    path: "/assistencia-tecnica-brotas",
    name: "Brotas",
    title: "Conserto Celular Brotas: Reparo Rápido e Peças Premium",
    h1: "Assistência Técnica de Celular em Brotas",
    metaDescription: "Assistência técnica de celulares em Brotas. Consertamos a placa, trocamos tela e bateria do seu iPhone ou Xiaomi. Serviço rápido com garantia. Orçamento já!",
    description: "Atendimento especializado abrangendo a região central de Brotas, focado em entregar diagnósticos precisos em bancada com técnicos qualificados.",
    access: "Acesso descomplicado descendo a Av. Mário Leal Ferreira (Bonocô) ou pegando a Vasco da Gama sentido Lucaia/Orla. Após alcançar a orla marítima, seguir para a Boca do Rio é linha reta sem labirintos.",
    distance: "Trajeto médio de 15 a 20 minutos de Brotas até nossa assistência, uma viagem rápida considerando vias de fluxo contínuo como a Bonocô ou a Av. ACM.",
    topServices: "Para moradores de Brotas, realizamos constantemente desoxidação avançada de aparelhos molhados, conserto de problemas na biometria/Face ID e upgrades/troca de bateria em iPads e celulares Samsung da linha A.",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica em Brotas",
      addressLocality: "Brotas, Salvador",
      areaServed: ["Brotas", "Vila Laura", "Horto Florestal"]
    }
  },
  "caminho-das-arvores": {
    slug: "caminho-das-arvores",
    path: "/assistencia-tecnica-caminho-das-arvores",
    name: "Caminho das Árvores e Itaigara",
    title: "Conserto de Celular no Caminho das Árvores e Itaigara",
    h1: "Assistência Técnica de Celular no Caminho das Árvores",
    metaDescription: "Assistência técnica de celular no Caminho das Árvores e Itaigara. Diagnóstico preciso e reparo com peças de alta qualidade.",
    description: "Para o pólo comercial do Caminho das Árvores e residencial do Itaigara, garantimos total discrição de dados, agilidade no reparo e peças de reposição premium.",
    access: "Partindo do Shopping da Bahia ou da Av. ACM, você pode seguir a Magalhães Neto até chegar à orla. De lá, a Rua Abelardo Andrade de Carvalho na Boca do Rio fica a poucos minutos, oferecendo uma rota segura e bem pavimentada.",
    distance: "Apenas 10 a 12 minutos de trajeto de carro até o nosso laboratório técnico na Boca do Rio, com facilidade de parada.",
    topServices: "Destacamos o conserto avançado de placas (quando o aparelho morre e não liga), troca de vidros preservando o display original em linha Galaxy Note e S, e manutenção emergencial em dispositivos corporativos (iPhones e iPads).",
    schema: {
      ...baseSchema,
      name: "Reparo Avançado - Assistência Técnica Caminho das Árvores",
      addressLocality: "Caminho das Árvores, Salvador",
      areaServed: ["Caminho das Árvores", "Itaigara", "Iguatemi"]
    }
  }
};

import { macroRegioes } from "./locaisData";

export const listLocaisConsolidados = Object.values(locaisConsolidados);

macroRegioes.forEach(macro => {
  let metaDesc = `Precisando consertar celular na região da ${macro.name}, Salvador? A Reparo Avançado oferece diagnóstico grátis e conserto na hora.`;
  let titleStr = `Assistência Técnica de Celular na ${macro.name} | Reparo Avançado`;
  
  if (macro.slug === 'boca-do-rio-e-orla') {
      titleStr = `Assistência Técnica de Celular na Boca do Rio e Orla`;
      metaDesc = `Conserto de celular na Boca do Rio e Orla: troca de tela, bateria e placa no mesmo dia. Loja física na R. Abelardo Andrade de Carvalho, 8. Orçamento grátis.`;
  }

  const data = {
    slug: macro.slug,
    path: `/assistencia-tecnica-${macro.slug}`,
    name: macro.name,
    title: titleStr,
    h1: `Assistência Técnica na ${macro.name}`,
    metaDescription: metaDesc,
    description: `Atendemos toda a região metropolitana e bairros adjacentes cobrindo: ${macro.bairrosInternos.join(', ')}.`,
    schema: {
      ...baseSchema,
      name: `Reparo Avançado - Assistência Técnica na ${macro.name}`,
      addressLocality: "Salvador",
      areaServed: macro.bairrosInternos
    }
  };
  
  const macroTexts: Record<string, any> = {
  "boca-do-rio-e-orla": {
    "access": "A Orla de Salvador e a região da Boca do Rio oferecem rotas largas, como a Avenida Octávio Mangabeira. É fácil estacionar e o acesso pela via costeira evita o trânsito pesado de outras áreas comerciais.",
    "distance": "Geralmente a 5 ou 15 minutos das principais praias, nossa estrutura é muito procurada por quem trabalha ou mora perto do mar.",
    "topServices": "O grande volume de reparos aqui envolve oxidação por maresia (banho químico avançado) e troca de telas de celulares que sofreram queda na areia ou asfalto."
  },
  "miolo-e-centro-financeiro": {
    "access": "Regiões como Iguatemi, Caminho das Árvores, Cabula e Paralela se conectam rapidamente ao nosso laboratório através de avenidas centrais (ACM e Magalhães Neto) que cortam o centro financeiro rumo à orla.",
    "distance": "Para quem está no miolo corporativo, a viagem de carro até nós leva cerca de 10 a 20 minutos fora dos horários de pico.",
    "topServices": "Esta área traz muita demanda executiva: reparos de iPhones corporativos, substituição de baterias para quem precisa do celular o dia todo e recuperação de dados empresariais."
  },
  "centro-e-sul": {
    "access": "Moradores do Centro, Barra, Graça e Vitória podem usar avenidas de vale como a Vasco da Gama e a Centenário para chegar na Orla com agilidade.",
    "distance": "Dependendo do fluxo do centro antigo, a distância é vencida em 20 a 30 minutos.",
    "topServices": "Recebemos muitos equipamentos premium e iPads desta região, além de serviços de microssoldagem delicados em placas-mãe de aparelhos Apple mais antigos."
  },
  "orla-norte-e-aeroporto": {
    "access": "Bairros mais afastados como Itapuã, Stella Maris e Piatã encontram na Orla um corredor expresso até a Boca do Rio, dispensando o uso da via Paralela se houver lentidão.",
    "distance": "Em média 15 a 25 minutos seguindo a faixa litorânea em fluxo normal.",
    "topServices": "Casos frequentes de celulares derrubados em clubes e piscinas exigem nossa técnica de desoxidação urgente. Também há forte procura por telas de linha Samsung Galaxy S."
  },
  "cajazeiras-e-regiao": {
    "access": "Com a nova estrutura viária, moradores de Cajazeiras e adjacências usam as vias expressas (29 de Março e Orlando Gomes) para alcançar a orla e chegar a nós sem cruzar o congestionamento interno.",
    "distance": "Cerca de 25 a 35 minutos de trajeto, recompensados por um laboratório capaz de reparos de altíssima complexidade.",
    "topServices": "Consertos de placa morta (aparelho apagado) e troca de display para a linha Xiaomi e Motorola Edge são campeões de busca dessa comunidade."
  },
  "regiao-metropolitana": {
    "access": "Clientes de Lauro de Freitas e Vilas do Atlântico seguem pela Estrada do Coco e Avenida Paralela (ou Orla Norte), acessando nossa loja logo no início da área litorânea da capital.",
    "distance": "O percurso leva de 30 a 45 minutos. Muitos preferem o envio por aplicativo de entrega para agilizar o conserto.",
    "topServices": "Devido à distância, os reparos solicitados costumam ser casos severos rejeitados por outras lojas, como reballing de processador e recuperação de placas com falha de energia profunda."
  }
};
  
  const mText = macroTexts[macro.slug] || {};
  if (mText.access) data.access = mText.access;
  if (mText.distance) data.distance = mText.distance;
  if (mText.topServices) data.topServices = mText.topServices;

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
  { slug: "boca-do-rio", name: "Boca do Rio", path: "/assistencia-tecnica-boca-do-rio" },
  { slug: "pituba", name: "Pituba", path: "/assistencia-tecnica-pituba" },
  { slug: "imbui", name: "Imbuí", path: "/assistencia-tecnica-imbui" },
  { slug: "brotas", name: "Brotas", path: "/assistencia-tecnica-brotas" },
  { slug: "caminho-das-arvores", name: "Caminho das Árvores", path: "/assistencia-tecnica-caminho-das-arvores" }
];
export const allBairrosList = [
  ...bairrosEstrategicos,
  { slug: "salvador", name: "Salvador (Geral)", path: "/assistencia-tecnica-salvador" }
];
