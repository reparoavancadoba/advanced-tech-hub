// Blog data engine - generates posts from models × services combinations

export const WHATSAPP_NUMBER = "5571991981437";
export const BUSINESS_ADDRESS = "R. Abelardo Andrade de Carvalho, 8 - Boca do Rio, Salvador - BA, 41706-710";
export const BAIRROS = ["Boca do Rio", "Pituba", "Imbuí", "Costa Azul", "Stiep", "Patamares", "Jardim Armação"];

export type Category = "iphone" | "samsung" | "xiaomi" | "realme" | "motorola" | "notebooks";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  category: Category;
  brand: string;
  model: string;
  service: string;
  serviceSlug: string;
  description: string;
  problems: string[];
  causes: string[];
  solution: string;
  whenToSeek: string;
  costInfo: string;
  relatedSlugs: string[];
  // Extended fields for editorial posts
  faq?: FaqItem[];
  sections?: ContentSection[];
  keywords?: string[];
  isEditorial?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  iphone: "iPhone",
  samsung: "Samsung",
  xiaomi: "Xiaomi",
  realme: "Realme",
  motorola: "Motorola",
  notebooks: "Notebooks",
};

// ─── MODELS ───

const iphoneModels = [
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
  "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
];

const samsungModels = [
  // Galaxy S
  "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra", "Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra",
  "Galaxy S22", "Galaxy S22+", "Galaxy S22 Ultra", "Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra",
  "Galaxy S24", "Galaxy S24+", "Galaxy S24 Ultra",
  // Galaxy A
  "Galaxy A10", "Galaxy A11", "Galaxy A12", "Galaxy A13", "Galaxy A14", "Galaxy A15",
  "Galaxy A20", "Galaxy A21", "Galaxy A22", "Galaxy A23", "Galaxy A24", "Galaxy A25",
  "Galaxy A30", "Galaxy A31", "Galaxy A32", "Galaxy A33", "Galaxy A34", "Galaxy A35",
  "Galaxy A50", "Galaxy A51", "Galaxy A52", "Galaxy A53", "Galaxy A54", "Galaxy A55",
  "Galaxy A70", "Galaxy A71", "Galaxy A72", "Galaxy A73", "Galaxy A74",
  // Galaxy M
  "Galaxy M10", "Galaxy M11", "Galaxy M12", "Galaxy M13", "Galaxy M14",
  "Galaxy M20", "Galaxy M21", "Galaxy M22", "Galaxy M23",
  "Galaxy M30", "Galaxy M31", "Galaxy M32", "Galaxy M33", "Galaxy M34",
  "Galaxy M51", "Galaxy M52", "Galaxy M53", "Galaxy M54",
  // Galaxy Z
  "Galaxy Z Fold 3", "Galaxy Z Fold 4", "Galaxy Z Fold 5",
  "Galaxy Z Flip 3", "Galaxy Z Flip 4", "Galaxy Z Flip 5",
];

const xiaomiModels = [
  "Redmi Note 8", "Redmi Note 8 Pro", "Redmi Note 9", "Redmi Note 9 Pro",
  "Redmi Note 10", "Redmi Note 10 Pro", "Redmi Note 11", "Redmi Note 11 Pro",
  "Redmi Note 12", "Redmi Note 12 Pro", "Redmi Note 13", "Redmi Note 13 Pro",
  "Poco X3", "Poco X4", "Poco X5", "Poco X6",
  "Poco F3", "Poco F4", "Poco F5",
  "Poco M3", "Poco M4", "Poco M5",
];

const realmeModels = [
  "Realme C11", "Realme C15", "Realme C20", "Realme C21", "Realme C25", "Realme C30", "Realme C33", "Realme C35",
  "Realme 7", "Realme 8", "Realme 9", "Realme 10", "Realme 11",
  "Realme GT", "Realme GT 2", "Realme GT 3", "Realme GT Neo",
];

const motorolaModels = [
  "Moto G14", "Moto G24", "Moto G34", "Moto G44", "Moto G54", "Moto G73", "Moto G84",
  "Moto Edge 30", "Moto Edge 40", "Moto Edge 50",
  "Moto G200", "Moto G100",
];

const notebookBrands = [
  { brand: "Dell", models: ["Dell Inspiron", "Dell Vostro", "Dell Latitude", "Dell XPS"] },
  { brand: "HP", models: ["HP Pavilion", "HP ProBook", "HP EliteBook", "HP Envy"] },
  { brand: "Lenovo", models: ["Lenovo IdeaPad", "Lenovo ThinkPad", "Lenovo Legion"] },
  { brand: "Acer", models: ["Acer Aspire", "Acer Nitro", "Acer Swift"] },
  { brand: "Asus", models: ["Asus VivoBook", "Asus ZenBook", "Asus TUF"] },
  { brand: "Apple", models: ["MacBook Air", "MacBook Pro 13", "MacBook Pro 14", "MacBook Pro 16"] },
];

// ─── SERVICES ───

interface ServiceDef {
  name: string;
  slug: string;
  description: string;
  problems: string[];
  causes: string[];
  solution: string;
  whenToSeek: string;
  costInfo: string;
  appliesTo: Category[];
}

const services: ServiceDef[] = [
  {
    name: "Troca de Tela",
    slug: "troca-de-tela",
    description: "Substituição completa do display com peças premium de padrão de fábrica. Restauramos cores vibrantes, touch responsivo e proteção contra riscos.",
    problems: ["Tela trincada ou quebrada", "Touch não responde", "Manchas ou linhas na tela", "Display escuro com som funcionando"],
    causes: ["Queda do aparelho", "Pressão excessiva no bolso", "Impacto em superfície dura", "Defeito de fabricação"],
    solution: "Utilizamos componentes de alta performance com garantia. O serviço inclui troca do display completo (LCD/OLED + touch + vidro) com teste de qualidade rigoroso.",
    whenToSeek: "Procure assistência imediatamente se a tela apresentar qualquer rachadura, pois fragmentos de vidro podem causar lesões e umidade pode danificar componentes internos.",
    costInfo: "O valor varia conforme o modelo. Oferecemos orçamento gratuito em 5 minutos pelo WhatsApp. Peças premium com garantia inclusa.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Troca de Bateria",
    slug: "troca-de-bateria",
    description: "Instalação de baterias de alta performance que restauram a autonomia do seu aparelho. Saúde 100% de volta.",
    problems: ["Bateria descarregando rápido", "Aparelho desligando sozinho", "Bateria estufada", "Saúde da bateria abaixo de 80%"],
    causes: ["Uso prolongado (mais de 2 anos)", "Carregadores não certificados", "Exposição ao calor", "Ciclos de carga excessivos"],
    solution: "Substituímos a bateria por componentes de alta performance com capacidade igual ou superior à de fábrica, incluindo calibração completa.",
    whenToSeek: "Quando a saúde da bateria cair abaixo de 80% ou o aparelho não durar um dia inteiro de uso moderado.",
    costInfo: "Serviço rápido, feito em até 40 minutos. Orçamento gratuito pelo WhatsApp.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks"],
  },
  {
    name: "Reparo de Placa",
    slug: "reparo-de-placa",
    description: "Microeletrônica avançada para recuperar aparelhos dados como perdidos. Nosso laboratório conta com equipamentos de precisão para soldagem BGA e diagnóstico por microscópio.",
    problems: ["Aparelho não liga", "Reiniciando sozinho", "Sem sinal", "Curto-circuito", "Aparelho condenado por outras assistências"],
    causes: ["Queda com impacto na placa", "Entrada de líquido", "Curto-circuito por carregador irregular", "Desgaste de componentes"],
    solution: "Diagnóstico com microscópio profissional e reparo com estação de solda BGA. Recuperamos trilhas, substituímos CIs e componentes SMD.",
    whenToSeek: "Quando outra assistência disser que seu aparelho não tem conserto. Somos especialistas em recuperar o que outros não conseguem.",
    costInfo: "Diagnóstico detalhado gratuito. Valor varia conforme complexidade do reparo.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks"],
  },
  {
    name: "Conector de Carga",
    slug: "conector-de-carga",
    description: "Substituição do conector de carga com peças de qualidade de padrão de fábrica, restaurando o carregamento eficiente do seu aparelho.",
    problems: ["Não carrega", "Carrega apenas em certa posição", "Carregamento lento", "Não reconhece cabo USB"],
    causes: ["Desgaste natural do conector", "Inserção forçada do cabo", "Acúmulo de sujeira", "Oxidação"],
    solution: "Troca completa do módulo de carga, incluindo teste de velocidade de carregamento e transferência de dados.",
    whenToSeek: "Ao notar que o carregamento se tornou inconsistente ou o cabo fica frouxo na entrada.",
    costInfo: "Serviço rápido com peças premium. Orçamento gratuito e sem compromisso.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Troca de Microfone",
    slug: "troca-de-microfone",
    description: "Substituição do microfone para restaurar a qualidade das suas ligações e gravações de áudio.",
    problems: ["Pessoa não ouve durante ligação", "Áudio de vídeos fica baixo ou distorcido", "Comando de voz não funciona"],
    causes: ["Entrada de líquido", "Obstrução por sujeira", "Queda do aparelho", "Defeito do componente"],
    solution: "Troca do módulo de microfone com teste completo de captação de áudio em chamadas e gravações.",
    whenToSeek: "Quando as pessoas reclamarem que não conseguem ouvir você nas ligações.",
    costInfo: "Serviço rápido e acessível. Consulte valores pelo WhatsApp.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Alto-falante / Áudio",
    slug: "alto-falante-audio",
    description: "Reparo e substituição de alto-falantes para som alto e cristalino.",
    problems: ["Som baixo ou distorcido", "Sem som no viva-voz", "Música não toca pelo alto-falante", "Chiado durante ligações"],
    causes: ["Entrada de líquido no alto-falante", "Queda do aparelho", "Acúmulo de poeira", "Desgaste do componente"],
    solution: "Substituição do alto-falante auricular ou principal com peças de alta performance e teste de qualidade sonora.",
    whenToSeek: "Quando perceber redução significativa no volume ou distorção do áudio.",
    costInfo: "Peças premium com garantia. Orçamento em minutos pelo WhatsApp.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Câmeras",
    slug: "cameras",
    description: "Reparo e substituição de câmeras frontais e traseiras com componentes de alta resolução.",
    problems: ["Câmera embaçada", "Foco não funciona", "Câmera preta", "Fotos tremidas", "Flash não funciona"],
    causes: ["Queda do aparelho", "Entrada de umidade", "Defeito de software", "Dano na lente"],
    solution: "Troca do módulo de câmera (frontal e/ou traseira) com calibração de foco e teste de qualidade de imagem.",
    whenToSeek: "Ao notar perda de qualidade nas fotos ou câmera com tela preta.",
    costInfo: "Valor depende do modelo e câmera. Consulte nosso orçamento gratuito.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Face ID",
    slug: "face-id",
    description: "Reparo especializado do sistema de reconhecimento facial do iPhone com precisão de laboratório.",
    problems: ["Face ID não disponível", "Reconhecimento facial lento", "Face ID parou de funcionar após queda"],
    causes: ["Queda com dano no sensor TrueDepth", "Troca de tela não autorizada", "Problema na placa lógica"],
    solution: "Diagnóstico completo do sistema TrueDepth e reparo ou substituição dos componentes necessários com reprogramação.",
    whenToSeek: "Quando a mensagem 'Face ID não está disponível' aparecer no seu iPhone.",
    costInfo: "Serviço especializado. Diagnóstico gratuito para avaliar a viabilidade do reparo.",
    appliesTo: ["iphone"],
  },
  {
    name: "Biometria",
    slug: "biometria",
    description: "Reparo do sensor de impressão digital para desbloquear seu Android com segurança e rapidez.",
    problems: ["Leitor de digital não responde", "Desbloqueio lento", "Digital não reconhecida"],
    causes: ["Queda do aparelho", "Troca de tela sem calibração", "Sujeira no sensor", "Problema de software"],
    solution: "Reparo ou substituição do módulo biométrico com recalibração do sensor para reconhecimento preciso.",
    whenToSeek: "Quando o sensor de digital parar de reconhecer ou ficar muito lento.",
    costInfo: "Orçamento gratuito. Serviço rápido com garantia.",
    appliesTo: ["samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Desoxidação",
    slug: "desoxidacao",
    description: "Tratamento químico avançado para aparelhos que tiveram contato com líquidos. Recuperação antes que a corrosão destrua os componentes.",
    problems: ["Celular caiu na água", "Tela com manchas de umidade", "Aparelho não liga após contato com líquido", "Curto-circuito"],
    causes: ["Queda em piscina, mar ou vaso sanitário", "Exposição à chuva", "Derramamento de líquido", "Vapor excessivo"],
    solution: "Processo de desoxidação química em banho ultrassônico, limpeza com solventes específicos e secagem controlada. Cada componente é inspecionado sob microscópio.",
    whenToSeek: "IMEDIATAMENTE após o contato com líquido. Desligue o aparelho e NÃO tente ligar. Quanto mais rápido trouxer, maior a chance de recuperação.",
    costInfo: "Diagnóstico de urgência gratuito. O valor depende da extensão da oxidação.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola"],
  },
  {
    name: "Software",
    slug: "software",
    description: "Formatação, atualização de sistema, remoção de vírus e desbloqueio de software.",
    problems: ["Celular travando", "Sistema lento", "Vírus ou malware", "Erro de atualização", "Conta bloqueada"],
    causes: ["Acúmulo de cache", "Apps maliciosos", "Atualização interrompida", "Memória cheia"],
    solution: "Formatação completa com backup de dados, reinstalação do sistema operacional e configuração otimizada.",
    whenToSeek: "Quando o aparelho estiver muito lento, travando constantemente ou com comportamento estranho.",
    costInfo: "Serviço acessível e rápido. Consulte pelo WhatsApp.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks"],
  },
  {
    name: "Aparelho Não Liga",
    slug: "aparelho-nao-liga",
    description: "Diagnóstico completo e reparo de aparelhos que não ligam. Recuperamos seu dispositivo com técnicas avançadas de microeletrônica.",
    problems: ["Aparelho totalmente morto", "Liga e desliga sozinho", "Fica na tela de boot", "LED acende mas não inicia"],
    causes: ["Problema na placa-mãe", "Bateria completamente esgotada", "Curto-circuito interno", "Dano por líquido"],
    solution: "Diagnóstico com equipamentos de precisão para identificar o componente defeituoso e reparo direcionado.",
    whenToSeek: "Quando seu aparelho parar de ligar completamente ou ficar preso na tela inicial.",
    costInfo: "Diagnóstico gratuito. Só cobra se o reparo for aprovado.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks"],
  },
  {
    name: "Aparelho Não Carrega",
    slug: "aparelho-nao-carrega",
    description: "Diagnóstico e reparo de problemas de carregamento, desde o conector até o circuito de carga na placa.",
    problems: ["Não carrega de jeito nenhum", "Carregamento muito lento", "Só carrega desligado", "Aquece ao carregar"],
    causes: ["Conector danificado", "CI de carga queimado", "Bateria defeituosa", "Cabo ou carregador incompatível"],
    solution: "Inspeção completa da cadeia de carregamento: conector, flex, CI de carga e bateria. Reparo do componente defeituoso.",
    whenToSeek: "Ao perceber qualquer irregularidade no carregamento do aparelho.",
    costInfo: "Diagnóstico gratuito com orçamento transparente.",
    appliesTo: ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks"],
  },
];

// Notebook-specific services
const notebookServices: ServiceDef[] = [
  {
    name: "Upgrade SSD",
    slug: "upgrade-ssd",
    description: "Aumente drasticamente a velocidade do seu notebook com upgrade para SSD NVMe de alta performance.",
    problems: ["Notebook muito lento", "Demora para iniciar", "Programas demoram para abrir"],
    causes: ["HD mecânico antigo", "Disco com setores defeituosos", "Pouco espaço de armazenamento"],
    solution: "Instalação de SSD NVMe com clonagem do sistema ou instalação limpa do Windows/macOS. Seu notebook liga em segundos.",
    whenToSeek: "Se seu notebook demora mais de 1 minuto para ligar ou programas travam constantemente.",
    costInfo: "Valor varia conforme capacidade do SSD. Orçamento pelo WhatsApp.",
    appliesTo: ["notebooks"],
  },
  {
    name: "Upgrade RAM",
    slug: "upgrade-ram",
    description: "Mais memória RAM para rodar vários programas simultaneamente sem travamentos.",
    problems: ["Notebook travando com muitas abas", "Lentidão em multitarefa", "Programas fechando sozinhos"],
    causes: ["Pouca memória RAM instalada", "Uso de programas pesados", "Muitas aplicações abertas"],
    solution: "Instalação de módulos de RAM compatíveis com teste de estabilidade e performance.",
    whenToSeek: "Se o notebook fica lento ao abrir vários programas ou abas do navegador.",
    costInfo: "Consulte valores e compatibilidade pelo WhatsApp.",
    appliesTo: ["notebooks"],
  },
  {
    name: "Limpeza Interna",
    slug: "limpeza-interna",
    description: "Limpeza profissional do sistema de refrigeração para eliminar superaquecimento e ruídos.",
    problems: ["Notebook esquentando muito", "Ventilador muito barulhento", "Desligando por superaquecimento"],
    causes: ["Acúmulo de poeira no cooler", "Pasta térmica ressecada", "Bloqueio das saídas de ar"],
    solution: "Desmontagem completa, limpeza do cooler e dissipador, aplicação de pasta térmica premium.",
    whenToSeek: "Quando o notebook esquentar demais ou o ventilador fizer barulho excessivo.",
    costInfo: "Serviço preventivo com excelente custo-benefício.",
    appliesTo: ["notebooks"],
  },
  {
    name: "Pasta Térmica",
    slug: "pasta-termica",
    description: "Aplicação de pasta térmica de alta condutividade para reduzir temperaturas e melhorar performance.",
    problems: ["Superaquecimento", "Throttling do processador", "Performance reduzida em jogos"],
    causes: ["Pasta térmica ressecada", "Nunca foi trocada", "Uso intenso do processador"],
    solution: "Remoção da pasta antiga, limpeza do dissipador e aplicação de pasta térmica premium de alta condutividade.",
    whenToSeek: "A cada 1-2 anos ou quando notar aumento significativo de temperatura.",
    costInfo: "Serviço rápido e acessível. Orçamento pelo WhatsApp.",
    appliesTo: ["notebooks"],
  },
  {
    name: "Dobradiças",
    slug: "dobradicas",
    description: "Reparo e substituição de dobradiças quebradas ou soltas do notebook.",
    problems: ["Dobradiça quebrada", "Tampa solta", "Notebook não abre/fecha direito", "Carcaça rachada na dobradiça"],
    causes: ["Desgaste natural", "Abertura forçada", "Queda do notebook", "Material frágil"],
    solution: "Substituição das dobradiças e reparo da carcaça quando necessário, restaurando o funcionamento correto da tampa.",
    whenToSeek: "Quando a tampa do notebook ficar solta ou difícil de abrir/fechar.",
    costInfo: "Valor depende do modelo. Diagnóstico gratuito.",
    appliesTo: ["notebooks"],
  },
];

const allServices = [...services, ...notebookServices];

// ─── PROBLEM POSTS ───

export const problemPosts: BlogPost[] = [
  "Celular Não Liga", "Celular Não Carrega", "Celular Descarregando Rápido",
  "Celular Caiu na Água", "Celular Esquentando", "Microfone Não Funciona",
  "Celular Sem Som", "Tela Preta",
].map((problem) => {
  const slug = problem.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  return {
    slug,
    title: `${problem} em Salvador? Reparo Avançado Resolve!`,
    h1: `${problem} em Salvador (BA) – Diagnóstico e Reparo Profissional`,
    metaDescription: `Seu ${problem.toLowerCase()}? A Reparo Avançado em Salvador (Boca do Rio) resolve com diagnóstico gratuito. Atendemos Pituba, Imbuí, Stiep e região.`,
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: problem,
    serviceSlug: slug,
    description: `Solução profissional para ${problem.toLowerCase()} em Salvador. Diagnóstico gratuito e reparo com peças premium na Boca do Rio.`,
    problems: [`${problem} é um dos problemas mais comuns que recebemos`],
    causes: ["Diversas causas possíveis que requerem diagnóstico profissional"],
    solution: `Diagnóstico completo com equipamentos de precisão e reparo direcionado na Reparo Avançado.`,
    whenToSeek: "Procure um técnico especializado assim que perceber o problema para evitar danos maiores.",
    costInfo: "Diagnóstico 100% gratuito. Orçamento transparente antes de qualquer reparo.",
    relatedSlugs: [],
  };
});

// ─── GENERATE ALL POSTS ───

function slugify(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function generatePosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  const addModels = (models: string[], category: Category, brand: string) => {
    models.forEach((model) => {
      const applicableServices = allServices.filter((s) => s.appliesTo.includes(category));
      applicableServices.forEach((service) => {
        const slug = `${slugify(service.slug)}-${slugify(model)}`;
        const relatedServices = applicableServices.filter((s) => s.slug !== service.slug).slice(0, 3);
        posts.push({
          slug,
          title: `${service.name} ${model} Salvador | Reparo Avançado`,
          h1: `${service.name} ${model} em Salvador (BA)`,
          metaDescription: `${service.name} para ${model} em Salvador. Peças premium, garantia e atendimento rápido na Boca do Rio. Orçamento grátis pelo WhatsApp.`,
          category,
          brand,
          model,
          service: service.name,
          serviceSlug: service.slug,
          description: service.description,
          problems: service.problems,
          causes: service.causes,
          solution: service.solution,
          whenToSeek: service.whenToSeek,
          costInfo: service.costInfo,
          relatedSlugs: relatedServices.map((rs) => `${slugify(rs.slug)}-${slugify(model)}`),
        });
      });
    });
  };

  addModels(iphoneModels, "iphone", "Apple");
  addModels(samsungModels, "samsung", "Samsung");
  addModels(xiaomiModels, "xiaomi", "Xiaomi");
  addModels(realmeModels, "realme", "Realme");
  addModels(motorolaModels, "motorola", "Motorola");

  // Notebooks
  notebookBrands.forEach(({ brand, models }) => {
    addModels(models, "notebooks", brand);
  });

  return posts;
}

import { editorialPosts } from "./editorialPosts";

export const allPosts: BlogPost[] = [...editorialPosts, ...generatePosts(), ...problemPosts];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  return allPosts.filter((p) => p.category === category);
}

export function getPostsByService(serviceSlug: string): BlogPost[] {
  return allPosts.filter((p) => p.serviceSlug === serviceSlug);
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.toLowerCase();
  return allPosts.filter((p) =>
    p.title.toLowerCase().includes(q) ||
    p.model.toLowerCase().includes(q) ||
    p.service.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q)
  );
}

// Export services for the LP section
export const lpServices = allServices;
