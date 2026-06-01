export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicoConsolidadoData {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  description: string;
  supportedBrands: string[];
  problems: string[];
  solution: string;
  faqs: FAQItem[];
}

export const servicosConsolidados: Record<string, ServicoConsolidadoData> = {
  "troca-de-tela": {
    slug: "troca-de-tela",
    title: "Troca de Tela de Celular em Salvador | Peças Premium e Garantia",
    h1: "Troca de Tela de Celular em Salvador",
    metaDescription: "Substituição de tela trincada ou touch quebrado para iPhone, Samsung, Xiaomi e Motorola. Display premium, serviço rápido e garantia na Boca do Rio.",
    description: "Se a tela do seu celular quebrou, manchou ou parou de responder ao toque, a Reparo Avançado realiza a substituição completa do display com peças premium de alta fidelidade de cores, brilho e sensibilidade.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Realme"],
    problems: [
      "Vidro trincado ou completamente estilhaçado",
      "Touch screen falhando ou com toques fantasmas",
      "Tela preta (celular vibra ou toca, mas não exibe imagem)",
      "Linhas coloridas (verdes, roxas ou brancas) ou manchas na tela"
    ],
    solution: "Substituímos o display completo utilizando componentes de altíssima performance. Preservamos recursos originais do aparelho (como reprogramação do chip da tela para manter o True Tone ativo no iPhone e calibração fina da biometria no Samsung) com garantia de 3 meses.",
    faqs: [
      {
        question: "A tela quebrou, mas o touch ainda funciona. Preciso trocar tudo?",
        answer: "Na Reparo Avançado, avaliamos se é possível trocar apenas o vidro ou se a substituição completa da tela é necessária. O ideal é levar o aparelho para diagnóstico técnico na loja."
      },
      {
        question: "Quanto tempo demora a troca de tela?",
        answer: "A maioria das substituições de tela é realizada em até 1 hora, dependendo do modelo do dispositivo e da disponibilidade de peças em nosso laboratório."
      },
      {
        question: "As telas utilizadas mantêm a mesma qualidade da original?",
        answer: "Sim. Trabalhamos exclusivamente com telas premium de alta performance, garantindo a mesma resolução, vivacidade de cores e sensibilidade ao toque originais de fábrica."
      }
    ]
  },
  "troca-de-bateria": {
    slug: "troca-de-bateria",
    title: "Troca de Bateria de Celular em Salvador | Saúde 100% | Reparo Avançado",
    h1: "Troca de Bateria de Celular em Salvador",
    metaDescription: "Bateria descarregando rápido ou desligando sozinha? Troca de bateria para iPhone, Samsung e Xiaomi com saúde 100% sem mensagens de erro.",
    description: "Restaure a autonomia original do seu smartphone. Substituímos baterias gastas ou estufadas por componentes certificados de alta performance que devolvem a capacidade de carga completa ao aparelho.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Realme", "Notebooks (Dell, HP, Apple, etc.)"],
    problems: [
      "Bateria descarregando muito rápido em poucas horas",
      "Celular desliga sozinho mesmo marcando carga (ex: 20% ou 30%)",
      "Aparelho esquenta excessivamente durante o uso ou carregamento",
      "Bateria estufada pressionando a tela ou a tampa traseira"
    ],
    solution: "Instalamos baterias de alta performance com ciclos e capacidade equivalentes aos padrões originais. Para iPhones, realizamos a reprogramação do chip da bateria para evitar a mensagem de 'Peça Desconhecida' e exibir 100% de saúde no iOS.",
    faqs: [
      {
        question: "A bateria nova vai exibir 100% de saúde sem mensagens de erro?",
        answer: "Sim! Na Reparo Avançado, utilizamos programadores dedicados para transferir e reprogramar o controlador da bateria original, garantindo que o sistema reconheça a nova bateria com 100% de integridade e sem alertas."
      },
      {
        question: "Quanto tempo dura o serviço de troca de bateria?",
        answer: "Realizamos a substituição da bateria em aproximadamente 40 minutos em nossa loja física na Boca do Rio."
      },
      {
        question: "O que acontece se eu não trocar uma bateria estufada?",
        answer: "Uma bateria estufada representa um risco de segurança (pode inflamar) e exerce pressão interna que pode trincar a tela ou danificar componentes internos preciosos."
      }
    ]
  },
  "reparo-em-placa": {
    slug: "reparo-em-placa",
    title: "Reparo de Placa de Celular em Salvador | Microeletrônica Avançada",
    h1: "Reparo de Placa Lógica de Celular em Salvador",
    metaDescription: "Especialistas em micro-soldagem BGA e diagnóstico de curto-circuito na placa lógica de celulares. Recuperamos aparelhos condenados por outras assistências.",
    description: "Somos um dos poucos laboratórios de Salvador especializados em microeletrônica avançada. Recuperamos placas condenadas por outras assistências técnicas através de diagnósticos minuciosos por microscópio.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Notebooks (MacBook, Dell, etc.)"],
    problems: [
      "Celular não liga de forma alguma e não consome corrente no carregador",
      "Aparelho travado em loop infinito (tela da maçã ou logo da marca)",
      "Wi-Fi, Bluetooth ou sinal de operadora indisponíveis (chips cinzas)",
      "Danos severos por curtos de carregador genérico ou oxidação profunda"
    ],
    solution: "Efetuamos reparos microscópicos na placa lógica, incluindo reballing de processador/memória, substituição de CIs de carga (como Tristar/Hydra), recuperação de trilhas e eliminação de curtos em capacitores e resistores.",
    faqs: [
      {
        question: "O reparo de placa é seguro? Vou perder meus dados?",
        answer: "O reparo é seguro e realizado por especialistas sob microscópio. Na grande maioria dos casos, os dados do aparelho (fotos, contatos e arquivos) são preservados intactos, exceto quando há dano físico irreversível na memória (NAND)."
      },
      {
        question: "Por que outras assistências condenam a placa e vocês conseguem recuperar?",
        answer: "A maioria das assistências atua apenas na troca de módulos (tela, bateria, conectores). Nós possuímos equipamentos profissionais de diagnóstico térmico, soldagem BGA e técnicos formados em microeletrônica de precisão."
      },
      {
        question: "Quanto custa um reparo de placa?",
        answer: "O valor é baseado na complexidade do circuito afetado. O diagnóstico técnico inicial é 100% gratuito e o orçamento é apresentado antes de iniciarmos qualquer intervenção."
      }
    ]
  },
  "conserto-de-celular": {
    slug: "conserto-de-celular",
    title: "Conserto de Celular em Salvador | Assistência Técnica Multimarcas",
    h1: "Conserto de Celular em Salvador - Especialistas Multimarcas",
    metaDescription: "Assistência técnica completa para celulares em Salvador. Reparo de câmeras, botões, som, Face ID, biometria e sistema. Peças premium e garantia.",
    description: "Oferecemos uma gama completa de soluções de reparo para celulares de todas as marcas. De problemas simples a falhas mecânicas ou de sistema complexas, cuidamos do seu aparelho com rapidez.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Realme"],
    problems: [
      "Câmeras embaçadas, trêmulas, com manchas ou sem foco",
      "Problemas com áudio (alto-falante baixo, som fanhoso ou microfone ruim)",
      "Botões físicos (Power, Volume) travados ou sem resposta",
      "Falhas em sensores biométricos (Touch ID, Face ID e leitores sob a tela)",
      "Erros de sistema operacional, travamentos e lentidões frequentes"
    ],
    solution: "Utilizamos peças de reposição premium com encaixe e funcionamento de fábrica. Todos os reparos são acompanhados de testes rigorosos em nosso check-up técnico pós-serviço.",
    faqs: [
      {
        question: "Vocês consertam tablets e relógios inteligentes também?",
        answer: "Sim! Além de smartphones, oferecemos assistência técnica especializada para iPads, tablets Android, Apple Watches e relógios multimarcas."
      },
      {
        question: "Qual o prazo de garantia oferecido nos consertos?",
        answer: "Todos os nossos serviços de hardware possuem garantia formal de 90 dias contra qualquer defeito de fabricação do componente instalado."
      },
      {
        question: "Preciso agendar uma visita para consertar meu celular?",
        answer: "Não é necessário. Você pode trazer seu aparelho diretamente à nossa loja física na Boca do Rio durante o horário comercial. O atendimento é feito por ordem de chegada."
      }
    ]
  },
  "celular-nao-carrega": {
    slug: "celular-nao-carrega",
    title: "Celular Não Carrega em Salvador | Troca de Conector de Carga",
    h1: "Celular Não Carrega ou Mau Contato no Conector",
    metaDescription: "Celular com mau contato para carregar ou erro de umidade? Diagnóstico gratuito e troca de conector USB-C ou Lightning na Boca do Rio, Salvador.",
    description: "Se o seu celular só carrega se inclinar o cabo, não reconhece o carregador ou exibe avisos de erro (como presença de umidade no conector), nós resolvemos o problema rapidamente.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Realme"],
    problems: [
      "O cabo fica solto ou frouxo na entrada do celular",
      "O carregamento só inicia ao posicionar o cabo em determinado ângulo",
      "Alerta persistente de 'Umidade Detectada no Conector USB'",
      "Celular conecta no carregador mas a porcentagem não sobe"
    ],
    solution: "Realizamos a higienização técnica com solventes dielétricos (que resolve muitos casos de sujeira) ou a substituição cirúrgica do conector de carga (porta USB-C/Lightning) por um novo componente de alta condutividade.",
    faqs: [
      {
        question: "Sempre que o celular não carrega é necessário trocar a peça?",
        answer: "Não. Em muitos casos, o conector apenas acumulou fiapos de bolso e poeira comprimida, ou está com leve oxidação nos pinos. Fazemos uma higienização técnica sob o microscópio que resolve o problema a um custo menor."
      },
      {
        question: "Como resolver o erro persistente de umidade no Samsung?",
        answer: "Usamos calibração via software e limpeza química ultrassônica do conector para reestabelecer os parâmetros elétricos corretos dos sensores, eliminando o erro falso sem necessidade de trocar a placa de carga na maioria das vezes."
      },
      {
        question: "A substituição do conector de carga é feita na hora?",
        answer: "Sim. A troca ou reparo do conector de carga costuma ser concluída em aproximadamente 1 hora em nosso laboratório."
      }
    ]
  },
  "celular-nao-liga": {
    slug: "celular-nao-liga",
    title: "Celular Não Liga em Salvador | Diagnóstico Técnico Gratuito",
    h1: "Celular Não Liga ou Não Dá Sinais de Vida",
    metaDescription: "Smartphone apagou e não liga mais? Oferecemos diagnóstico 100% gratuito em Salvador (Boca do Rio) para identificar a causa exata e o conserto ideal.",
    description: "Quando um smartphone para de ligar repentinamente, pode ser desde um travamento simples de software até falhas graves na placa. Nós oferecemos um diagnóstico gratuito de precisão.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Realme"],
    problems: [
      "Aparelho apagou completamente e não dá sinal de carga nem imagem",
      "Celular liga (vibra ou emite som), mas a tela permanece preta",
      "Fica travado na tela inicial e reinicia em loop",
      "O LED de carga pisca, mas o aparelho não inicia"
    ],
    solution: "Testamos a saúde elétrica da bateria, o consumo de corrente na fonte de bancada, a integridade da tela e o circuito lógico para identificar o problema exato, aplicando o reparo adequado com transparência.",
    faqs: [
      {
        question: "Vocês cobram para descobrir por que o celular não liga?",
        answer: "Não. O nosso diagnóstico técnico é 100% gratuito. Nós abrimos o aparelho, analisamos os circuitos e apresentamos o orçamento. Se você optar por não fazer o serviço, não paga nada pelo orçamento."
      },
      {
        question: "Pode ser apenas um travamento de sistema?",
        answer: "Sim. Algumas falhas são causadas por 'crash' no sistema operacional. Nesses casos, realizamos um reset forçado físico ou reinstalação do software para restaurar o celular sem abrir o aparelho."
      },
      {
        question: "Se o processador estiver queimado, o celular tem conserto?",
        answer: "Sim. Em aparelhos modernos, realizamos o reballing ou substituição de CIs integrados. Temos alta taxa de sucesso mesmo em falhas graves de processamento."
      }
    ]
  },
  "celular-caiu-na-agua": {
    slug: "celular-caiu-na-agua",
    title: "Celular Caiu na Água em Salvador | Desoxidação e Banho Químico",
    h1: "Celular Caiu na Água ou Contato com Líquido",
    metaDescription: "Celular molhou na piscina, chuva ou no mar? Faça desoxidação profissional imediata. NÃO use arroz! Atendimento de urgência em Salvador.",
    description: "A infiltração de água e, principalmente, da maresia e do sal de Salvador nas placas de celular causa corrosão acelerada. Agir rápido com uma desoxidação química profissional é crucial para salvar o aparelho.",
    supportedBrands: ["iPhone (Apple)", "Samsung Galaxy", "Xiaomi (Redmi/Poco)", "Motorola", "Realme"],
    problems: [
      "Aparelho caiu no mar, piscina, vaso sanitário ou molhou na chuva",
      "Tela apresenta manchas esbranquiçadas de umidade por trás do vidro",
      "Câmeras embaçadas por condensação interna",
      "Celular parou de ligar ou descarrega em minutos após molhar"
    ],
    solution: "Efetuamos a desmontagem completa imediata, banho químico ultrassônico com solventes isopropílicos de alta pureza para interromper a corrosão, limpeza microscópica dos conectores e secagem controlada da placa.",
    faqs: [
      {
        question: "O celular caiu na água. Colocar no arroz resolve?",
        answer: "Não. O arroz não remove oxidação, sal, minerais ou umidade interna da placa. O recomendado é desligar o aparelho e procurar uma assistência técnica especializada o quanto antes."
      },
      {
        question: "O que devo fazer imediatamente se o celular molhar?",
        answer: "Desligue o celular imediatamente, não tente conectá-lo ao carregador (a corrente elétrica em contato com a água causa curto-circuito fatal) e traga o aparelho o mais rápido possível para a assistência."
      },
      {
        question: "Celulares resistentes à água (IP68) precisam de conserto se molharem?",
        answer: "Sim, pois as borrachas de vedação do aparelho se degradam com o tempo, calor e quedas. Um aparelho IP68 com mais de 6 meses de uso pode facilmente permitir infiltração de água."
      }
    ]
  }
};
export const allConsolidatedServices = Object.values(servicosConsolidados);
export function getConsolidatedServiceBySlug(slug: string): ServicoConsolidadoData | undefined {
  return servicosConsolidados[slug];
}
export const servicesHubList = [
  { slug: "troca-de-tela", name: "Troca de Tela", desc: "Telas premium AMOLED/OLED. Cores vivas e touch perfeito.", iconName: "Smartphone" },
  { slug: "troca-de-bateria", name: "Troca de Bateria", desc: "Restauração de saúde 100% sem erros de sistema.", iconName: "Battery" },
  { slug: "reparo-em-placa", name: "Reparo em Placa", desc: "Micro-soldagem e eletrônica de alta complexidade.", iconName: "Cpu" },
  { slug: "conserto-de-celular", name: "Conserto Geral", desc: "Reparos de câmeras, áudio, botões e carcaça.", iconName: "Wrench" },
  { slug: "celular-nao-carrega", name: "Não Carrega", desc: "Troca e limpeza de conectores USB-C e Lightning.", iconName: "BatteryCharging" },
  { slug: "celular-nao-liga", name: "Não Liga", desc: "Diagnóstico gratuito de falha elétrica e inicialização.", iconName: "Power" },
  { slug: "celular-caiu-na-agua", name: "Caiu na Água", desc: "Banho químico ultrassônico imediato anti-oxidação.", iconName: "Droplet" }
];
