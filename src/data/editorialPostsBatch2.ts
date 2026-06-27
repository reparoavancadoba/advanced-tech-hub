import type { BlogPost, Category } from "./blogData";

const LOCAL_SEO = "A Reparo Avançado está localizada na Boca do Rio, Salvador – BA, e atende clientes de toda a região, incluindo Stiep, Imbuí, Pituba e Costa Azul.";
const PECAS = "Peças de Alta Performance fabricadas com os mesmos padrões da linha de montagem original";
const CTA_TEXT = "Fale agora com um profissional qualificado pelo WhatsApp (71) 99198-1437";

export const editorialPostsBatch2: BlogPost[] = [
  {
    slug: "assistencia-tecnica-boca-do-rio-conserto-rapido",
    title: "Assistência Técnica na Boca do Rio: Onde Consertar seu Celular Rápido",
    h1: "Assistência Técnica na Boca do Rio, Salvador: Conserto de Celular Rápido e Seguro",
    metaDescription: "Procurando assistência técnica de celular na Boca do Rio? A Reparo Avançado oferece conserto na hora para iPhone, Samsung e Xiaomi com garantia de 90 dias.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Assistência Técnica",
    serviceSlug: "assistencia-tecnica",
    description: "Conheça a Reparo Avançado, a principal assistência técnica da Boca do Rio em Salvador, focada em reparos rápidos e transparentes.",
    isEditorial: true,
    keywords: ["assistência técnica celular boca do rio", "conserto celular boca do rio", "onde consertar celular salvador", "loja de conserto de celular"],
    problems: [
      "Dificuldade em encontrar uma assistência de confiança no bairro",
      "Demora de dias para realizar um reparo simples",
      "Medo de peças paralelas e perda de dados"
    ],
    causes: [
      "Falta de laboratório próprio nas assistências menores",
      "Falta de estoque local de peças premium"
    ],
    solution: `Na Reparo Avançado, localizada no coração da Boca do Rio, oferecemos um serviço de conserto de celular focado em transparência e agilidade. Mais de 80% dos nossos reparos, como troca de tela e bateria, são concluídos em menos de 1 hora. Utilizamos ${PECAS} e nosso laboratório é equipado para diagnóstico imediato. ${LOCAL_SEO}`,
    whenToSeek: "Quando precisar de um conserto de celular de confiança perto de você, sem precisar ir a shoppings ou deixar o aparelho por dias.",
    costInfo: `O orçamento é 100% gratuito e feito na hora. Você só paga se aprovar o serviço. ${CTA_TEXT}`,
    faq: [
      { question: "O conserto é feito na hora?", answer: "Sim, para serviços como troca de tela, bateria e conector, realizamos o reparo em cerca de 40 minutos a 1 hora na nossa unidade na Boca do Rio." }
    ]
  },
  {
    slug: "conserto-celular-imbui-stiep-rapido",
    title: "Conserto de Celular no Imbuí e Stiep: Serviço Rápido e Seguro",
    h1: "Conserto de Celular Próximo ao Imbuí e Stiep: Rapidez e Segurança",
    metaDescription: "Mora no Imbuí ou Stiep? A Reparo Avançado é sua vizinha na Boca do Rio! Conserto de celular especializado em iPhone e Samsung com agilidade e peças premium.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Conserto Especializado",
    serviceSlug: "conserto-celular-imbui",
    description: "Atendimento especializado e rápido para clientes do Imbuí e Stiep que precisam de conserto de celular seguro.",
    isEditorial: true,
    keywords: ["conserto celular imbuí", "assistência técnica stiep", "conserto iphone imbuí", "assistência samsung stiep"],
    problems: [
      "Celular quebrado e necessidade de conserto urgente",
      "Falta de tempo para se deslocar longas distâncias",
      "Insegurança ao deixar o aparelho longe de casa"
    ],
    causes: [
      "Acidentes diários, quedas ou falhas de bateria",
      "Desgaste natural do uso constante"
    ],
    solution: `Para quem mora no Imbuí e Stiep, a Reparo Avançado oferece a conveniência de estar a poucos minutos de distância, na Boca do Rio. Oferecemos um atendimento premium, focado em agilidade. Seu iPhone ou Samsung pode ser avaliado e reparado enquanto você aguarda na nossa recepção confortável. Garantimos a integridade dos seus dados e a devolução rápida da sua principal ferramenta de comunicação.`,
    whenToSeek: "A qualquer momento que seu smartphone apresentar falhas, seja tela quebrada, bateria descarregando rápido ou falhas no carregamento.",
    costInfo: `Valores justos e competitivos, com a garantia de 90 dias que você merece. ${CTA_TEXT}`,
  },
  {
    slug: "melhor-assistencia-tecnica-salvador-reparo-avancado",
    title: "Por Que a Reparo Avançado é a Melhor Assistência Técnica de Salvador",
    h1: "O Que Faz da Reparo Avançado a Melhor Assistência Técnica de Salvador?",
    metaDescription: "Procurando a melhor assistência técnica de celular em Salvador? Conheça os diferenciais da Reparo Avançado: laboratório próprio, garantia real e transparência.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Diagnóstico",
    serviceSlug: "melhor-assistencia-salvador",
    description: "Entenda nossos processos, desde o diagnóstico avançado até a entrega, e veja por que somos referência em Salvador.",
    isEditorial: true,
    keywords: ["melhor assistência técnica celular salvador", "reparo avançado salvador", "assistência de confiança salvador"],
    problems: [
      "Experiências ruins anteriores com consertos",
      "Preços abusivos sem justificativa técnica",
      "Aparelhos devolvidos com novos defeitos"
    ],
    causes: [
      "Amadorismo no reparo de placas e componentes sensíveis",
      "Uso de peças falsificadas para aumentar o lucro"
    ],
    solution: `Nosso diferencial começa na honestidade. A Reparo Avançado se consolidou em Salvador entregando laudos técnicos reais. Se o defeito é apenas sujeira, cobramos pela limpeza, não por uma peça nova. Nosso laboratório possui microscópios de alta precisão para microsoldagem e técnicos certificados para iPhone e Android. Além disso, trabalhamos apenas com ${PECAS}. ${LOCAL_SEO}`,
    whenToSeek: "Sempre que você quiser a certeza de que não está sendo enganado e que seu aparelho será tratado por profissionais.",
    costInfo: `Nosso diagnóstico é grátis. Você entende o defeito antes de pagar 1 centavo. ${CTA_TEXT}`,
  },
  {
    slug: "iphone-descarregando-rapido-calor-salvador",
    title: "iPhone Descarregando Rápido no Calor de Salvador? Entenda o Porquê",
    h1: "O Calor de Salvador Faz o iPhone Descarregar Mais Rápido? Entenda",
    metaDescription: "Seu iPhone está descarregando rápido e esquentando em Salvador? O clima afeta a bateria. Veja como a Reparo Avançado resolve isso com troca de bateria premium.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Troca de Bateria",
    serviceSlug: "troca-de-bateria-iphone",
    description: "Descubra como as altas temperaturas de Salvador degradam a bateria do seu iPhone e como resolver.",
    isEditorial: true,
    keywords: ["iphone descarregando rápido", "bateria iphone salvador", "celular esquentando", "troca de bateria iphone"],
    problems: [
      "Bateria do iPhone acabando antes do fim do dia",
      "Aparelho muito quente ao toque, especialmente exposto ao sol",
      "iPhone reduzindo o brilho da tela sozinho por superaquecimento"
    ],
    causes: [
      "As baterias de íon de lítio degradam quimicamente de forma acelerada acima de 35°C",
      "Uso do GPS no carro sob o sol forte de Salvador",
      "Saúde da bateria (em Ajustes) já desgastada pelo uso natural"
    ],
    solution: `O clima quente de Salvador realmente exige mais das baterias de lítio da Apple. Se a saúde da sua bateria estiver abaixo de 80%, ou se o aparelho estiver esquentando de forma atípica, a solução ideal é a substituição. Na Reparo Avançado, realizamos a Troca de Bateria do iPhone utilizando células de alta densidade que resistem melhor às oscilações térmicas, devolvendo a autonomia de 100% ao aparelho de forma segura e rápida.`,
    whenToSeek: "Se o iPhone esquenta a ponto de incomodar a mão ou se a bateria cai de 30% para 10% instantaneamente.",
    costInfo: `Trocamos a bateria do seu iPhone em menos de 1 hora com garantia total. ${CTA_TEXT}`,
  },
  {
    slug: "conector-carga-iphone-mau-contato-limpeza-troca",
    title: "Conector de Carga do iPhone com Mau Contato: Limpeza ou Troca?",
    h1: "Mau Contato no Conector do iPhone: Você Precisa de Limpeza ou Troca?",
    metaDescription: "Cabo do iPhone não entra direito ou fica frouxo? Pode ser apenas poeira ou necessidade de troca do conector. A Reparo Avançado faz o diagnóstico gratuito.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Conector de Carga",
    serviceSlug: "conector-carga",
    description: "Entenda a diferença entre sujeira no conector Lightning e a quebra do componente no iPhone.",
    isEditorial: true,
    keywords: ["conector iphone salvador", "iphone não carrega", "mau contato iphone", "limpeza conector iphone"],
    problems: [
      "O cabo carregador não entra até o final",
      "Você precisa dobrar ou forçar o cabo para o iPhone carregar",
      "Aparelho indica que está carregando, mas a porcentagem não sobe"
    ],
    causes: [
      "Acúmulo crônico de fiapos de bolso e poeira comprimida dentro da porta",
      "Oxidação nos pinos do cabo Lightning (ou USB-C nos modelos 15/16)",
      "Desgaste físico das travas do conector interno"
    ],
    solution: `Na Reparo Avançado, nosso primeiro passo nunca é condenar a peça. Em 60% dos casos de 'mau contato' em iPhones, uma higienização técnica com pinças de precisão e álcool isopropílico resolve o problema em 5 minutos. No entanto, se os pinos de contato estiverem rompidos (geralmente por forçar cabos paralelos), realizamos a substituição completa do flex de carga, devolvendo a capacidade de Carregamento Rápido ao seu Apple. ${LOCAL_SEO}`,
    whenToSeek: "Ao primeiro sinal de que o cabo está frouxo. Forçar pode gerar um curto-circuito na placa-mãe (CI Tristar).",
    costInfo: `A avaliação e limpeza básica costumam ser muito baratas ou gratuitas (se for rápido). Se houver troca, o preço é justo. ${CTA_TEXT}`,
  },
  {
    slug: "troca-tela-iphone-13-14-cuidados-face-id",
    title: "Troca de Tela iPhone 13 e 14: Cuidados para não perder o Face ID",
    h1: "Troca de Tela de iPhone 13 e 14 em Salvador: Preservando Face ID e True Tone",
    metaDescription: "Vai trocar a tela do iPhone 13 ou 14? Cuidado com amadores! A Reparo Avançado em Salvador garante a troca mantendo Face ID e True Tone perfeitos.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone 13, iPhone 14",
    service: "Troca de Tela",
    serviceSlug: "troca-tela",
    description: "Saiba por que a troca de tela dos iPhones mais recentes exige maquinário específico para evitar a perda da biometria facial.",
    isEditorial: true,
    keywords: ["troca de tela iphone 13 salvador", "tela iphone 14 salvador", "perdeu face id após troca de tela", "true tone iphone"],
    problems: [
      "Tela trincada ou com manchas no iPhone 13 ou 14",
      "Medo de que o reconhecimento facial (Face ID) pare de funcionar",
      "Cores da tela estranhas após troca em oficina não especializada (perda do True Tone)"
    ],
    causes: [
      "Quedas acidentais que danificam o display OLED",
      "Técnicos sem maquinário de transferência de dados EEPROM rompem a comunicação da tela com a placa"
    ],
    solution: `As telas dos iPhones 13 e 14 possuem chips pareados criptograficamente à placa-mãe. Trocar a tela sem o equipamento de leitura (programadora) resulta na perda da função True Tone e pode comprometer os sensores de luminosidade. Na Reparo Avançado, fazemos a transferência dos dados da sua tela original quebrada para a tela nova Premium. Além disso, somos especialistas em manipular o delicado flex do Face ID, garantindo que tudo funcione 100% como de fábrica.`,
    whenToSeek: "Quando a tela trincar. Telas OLED trincadas podem vazar líquido internamente e apagar subitamente.",
    costInfo: `Oferecemos telas Incell Premium e OLED Hard/Soft para todos os bolsos, sempre com garantia de 90 dias. ${CTA_TEXT}`,
  },
  {
    slug: "troca-tela-samsung-s23-s24-salvador",
    title: "Troca de Tela Samsung S23 e S24 em Salvador: O que Você Precisa Saber",
    h1: "Como Funciona a Troca de Tela da Linha Samsung S23 e S24 em Salvador",
    metaDescription: "Quebrou a tela do seu Galaxy S23 ou S24? A Reparo Avançado em Salvador realiza a troca preservando a vedação e a biometria ultrassônica na tela.",
    category: "samsung" as Category,
    brand: "Samsung",
    model: "S23, S24",
    service: "Troca de Tela",
    serviceSlug: "troca-tela",
    description: "Telas Dinamic AMOLED da linha S exigem cuidados extremos na vedação e manutenção do sensor de impressão digital.",
    isEditorial: true,
    keywords: ["troca de tela s23 salvador", "tela s24 ultra salvador", "conserto samsung s23", "tela dinâmica amoled"],
    problems: [
      "Vidro frontal do Galaxy S23/S24 trincado",
      "Manchas roxas ou verdes dominando a tela",
      "Leitor de impressão digital na tela não lê o dedo"
    ],
    causes: [
      "Impactos nas bordas curvas ou acidentes com chaves",
      "Telas paralelas de baixa qualidade colocadas anteriormente bloqueiam a leitura biométrica ultrassônica"
    ],
    solution: `A linha S23 e S24 da Samsung utiliza displays Dynamic AMOLED 2X de altíssima fidelidade cromática e sensores ultrassônicos embutidos na tela. Na Reparo Avançado, aplicamos apenas painéis compatíveis de altíssima qualidade, mantendo a resposta tátil perfeita de 120Hz e garantindo que a sua biometria continue rápida e segura. Finalizamos o reparo com a aplicação de fitas de vedação dupla-face estruturais para manter a proteção do aparelho. ${LOCAL_SEO}`,
    whenToSeek: "Imediatamente após a quebra, pois o suor do rosto ou umidade podem entrar pela rachadura e queimar a placa-mãe do aparelho premium.",
    costInfo: `Trabalhamos com opções de display completas (com aro) para um acabamento perfeito de fábrica. ${CTA_TEXT}`,
  },
  {
    slug: "assistencia-tecnica-xiaomi-pituba-regiao",
    title: "Assistência Técnica Xiaomi na Pituba e Região: Peças de Alta Qualidade",
    h1: "Assistência Técnica Xiaomi em Salvador: Soluções Próximas à Pituba e Boca do Rio",
    metaDescription: "Seu Xiaomi (Redmi, Poco ou Mi) quebrou? A Reparo Avançado resolve! Troca de tela, bateria e software para linha Xiaomi em Salvador, perto da Pituba.",
    category: "xiaomi" as Category,
    brand: "Xiaomi",
    model: "Redmi, Poco, Mi",
    service: "Assistência Técnica",
    serviceSlug: "assistencia-xiaomi",
    description: "Manutenção especializada na linha Xiaomi (Poco, Redmi Note, Mi) com amplo estoque de peças na Bahia.",
    isEditorial: true,
    keywords: ["assistência xiaomi salvador", "conserto xiaomi pituba", "troca de tela poco", "bateria redmi note salvador"],
    problems: [
      "Poco X3/X4 ou Redmi Note reiniciando infinitamente (Loop infinito)",
      "Tela quebrada em modelos Xiaomi populares",
      "Bateria viciada ou estufada"
    ],
    causes: [
      "Falha crônica de solda fria no processador (comum na linha Poco)",
      "Atualizações de sistema (MIUI/HyperOS) que corrompem o boot"
    ],
    solution: `Os smartphones da Xiaomi oferecem um excelente custo-benefício, mas exigem técnicos que entendam da arquitetura interna da marca. Na Reparo Avançado (localizada estrategicamente ao lado da Pituba, na Boca do Rio), resolvemos desde a clássica troca de tela de Redmi Note até o complexo "Reballing de CPU" para modelos Poco que desligam do nada. Contamos com um canal direto com fornecedores de peças premium para Xiaomi em Salvador, garantindo rapidez.`,
    whenToSeek: "Se o seu Xiaomi não passar da tela de boot (logo da MIUI) ou apresentar toques fantasmas na tela.",
    costInfo: `Nossos consertos para Xiaomi têm um excelente custo-benefício. Faça um orçamento em 5 minutos. ${CTA_TEXT}`,
  },
  {
    slug: "motorola-edge-nao-liga-boca-do-rio",
    title: "Motorola Edge Não Liga? Diagnóstico Especializado na Boca do Rio",
    h1: "Conserto de Motorola Edge e Moto G que Não Ligam em Salvador",
    metaDescription: "Seu Motorola apagou do nada? A Reparo Avançado em Salvador possui laboratório para reparo de placa e baterias da linha Motorola Edge e Moto G.",
    category: "motorola" as Category,
    brand: "Motorola",
    model: "Edge, Moto G",
    service: "Aparelho Não Liga",
    serviceSlug: "aparelho-nao-liga",
    description: "Técnicas avançadas para recuperar smartphones Motorola que apagaram repentinamente e não dão sinal de vida.",
    isEditorial: true,
    keywords: ["motorola não liga salvador", "conserto motorola edge", "bateria motorola salvador", "placa motorola moto g"],
    problems: [
      "Motorola (Edge ou Moto G) apagou e não acende nem a luz de carga",
      "Aparelho fica piscando o logo da Motorola e apaga",
      "Só funciona enquanto conectado no carregador da tomada"
    ],
    causes: [
      "Colapso da bateria (vida útil zerada) ou flex da bateria desconectado",
      "Curto no CI de carga (PMIC) por oscilação de energia",
      "Problema crônico no botão de energia (botão afundado)"
    ],
    solution: `A linha Motorola é robusta, mas falhas no gerenciamento de energia são comuns após 2 anos de uso intenso. Quando seu Motorola não liga, a Reparo Avançado aplica o protocolo de "Injeção de Voltagem em Bancada". Abrimos o aparelho com segurança e alimentamos a placa-mãe diretamente. Isso nos diz na hora se o defeito é na bateria, na tela ou num curto-circuito interno. Se for curto, resolvemos via microsoldagem na nossa loja na Boca do Rio.`,
    whenToSeek: "Não tente colocar na tomada repetidas vezes se ele esquentar e não der imagem. Isso pode agravar um possível curto.",
    costInfo: `O diagnóstico para celulares mortos é GRÁTIS! Se não tiver jeito, você não paga nada. ${CTA_TEXT}`,
  },
  {
    slug: "celular-caiu-no-mar-armacao-desoxidacao",
    title: "Celular Caiu no Mar da Praia de Armação? O que NÃO Fazer",
    h1: "Celular Caiu na Água do Mar em Salvador? Guia de Sobrevivência",
    metaDescription: "Derrubou o celular no mar em Salvador (Armação, Pituba, etc)? Água salgada corrói rápido. Veja os primeiros socorros e traga para a desoxidação imediata.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Desoxidação",
    serviceSlug: "desoxidacao",
    description: "A água salgada do mar é a pior inimiga do celular. Saiba por que o pote de arroz não funciona e como agir rápido.",
    isEditorial: true,
    keywords: ["celular caiu no mar salvador", "desoxidação celular salvador", "recuperar celular molhado", "celular agua do mar o que fazer"],
    problems: [
      "O celular caiu no mar, na piscina ou tomou chuva forte",
      "A câmera está embaçada por dentro",
      "Aviso de 'Umidade detectada na porta USB'"
    ],
    causes: [
      "A água do mar (salgada) conduz eletricidade instantaneamente e gera corrosão acelerada (ferrugem) nos microchips da placa-mãe."
    ],
    solution: `Água salgada é fatal em horas. O famoso "truque do arroz" NÃO FUNCIONA; o arroz tira a umidade do ar, não a água salgada que já está sob os chips da placa. O que você deve fazer: DESLIGUE o aparelho IMEDIATAMENTE (se a tela funcionar), não o conecte no carregador (isSo queima a placa na hora), e traga-o em caráter de urgência para a Reparo Avançado na Boca do Rio. Abrimos o celular e damos um "Banho Químico Ultrassônico" com álcool isopropílico e desengripantes eletrônicos para remover 100% da corrosão.`,
    whenToSeek: "Sempre, imediatamente após o contato com líquidos. O tempo é o fator principal para salvar aparelhos molhados.",
    costInfo: `O banho químico tem um valor fixo. Se recuperar a placa, ótimo. Senão, focamos na recuperação dos seus dados. ${CTA_TEXT}`,
  },
  {
    slug: "vale-pena-trocar-vidro-ou-tela-completa",
    title: "Vale a Pena Trocar o Vidro do Celular ou a Tela Toda? (Guia)",
    h1: "Troca de Vidro vs Troca de Tela Completa: Qual a Diferença Prática?",
    metaDescription: "Quebrou a tela do celular? Entenda quando é possível economizar fazendo apenas a Troca do Vidro e quando é preciso a Troca de Tela Completa em Salvador.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Troca de Tela",
    serviceSlug: "troca-tela",
    description: "Eduque-se sobre o conserto mais comum do mundo e não caia em golpes de assistências técnicas mal-intencionadas.",
    isEditorial: true,
    keywords: ["troca de vidro celular salvador", "diferença tela e vidro celular", "trocar tela completa salvador", "conserto tela celular valor"],
    problems: [
      "O celular caiu e trincou, mas a imagem está perfeita",
      "Dúvida sobre pagar mais caro por uma tela completa ou tentar a troca só do vidro"
    ],
    causes: [
      "Quedas com impacto no vidro Gorilla Glass"
    ],
    solution: `Muitos clientes da Reparo Avançado chegam com essa dúvida. A regra é simples: se a tela trincou, MAS o toque (touch) funciona em toda a área e NÃO EXISTEM manchas pretas, listras verdes ou áreas roxas na imagem, o seu "Display" (a peça que gera a luz) está intacto. Nesses casos, em alguns modelos específicos, é possível fazer a laminação (Troca do Vidro) via maquinário especializado (OCA). Porém, para a maioria dos modelos atuais onde o touch é colado a vácuo no display, a **Troca de Tela Completa (Módulo Frontal)** é a opção mais segura, rápida e com garantia estendida, garantindo que não haverá descolamentos futuros. ${LOCAL_SEO}`,
    whenToSeek: "Assim que a tela trincar. Ficar usando o celular trincado pode cortar seus dedos e forçar os pixels a quebrarem (mancha preta).",
    costInfo: `Avaliamos seu aparelho na hora e te dizemos a opção mais segura para o seu bolso. ${CTA_TEXT}`,
  },
  {
    slug: "quanto-custa-consertar-celular-salvador-cuidado",
    title: "Quanto Custa Consertar um Celular em Salvador? Cuidado com o Barato",
    h1: "Preço de Conserto de Celular em Salvador: O Barato Pode Sair Muito Caro",
    metaDescription: "Buscando o conserto mais barato de celular em Salvador? Cuidado com peças falsificadas e perda de dados. Entenda como valorizar o reparo de qualidade.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Diagnóstico",
    serviceSlug: "diagnostico",
    description: "Como escolher uma assistência técnica confiável e por que a Reparo Avançado oferece o melhor custo-benefício de Salvador.",
    isEditorial: true,
    keywords: ["quanto custa consertar celular salvador", "assistência técnica confiável", "reparo celular preço salvador", "peça paralela celular"],
    problems: [
      "Muitos orçamentos com preços drasticamente diferentes na cidade",
      "Medo de consertar e o aparelho quebrar de novo na semana seguinte",
      "Telas 'baratas' que perdem a cor ou travam o toque"
    ],
    causes: [
      "Uso generalizado de Telas 'Incell de 2ª linha' (TFT) por oficinas amadoras",
      "Falta de garantia real por parte de técnicos informais"
    ],
    solution: `Na Reparo Avançado, vemos dezenas de aparelhos toda semana que vêm de outras assistências em Salvador. O cliente economiza R$50 na troca de tela em um local sem procedência e ganha um display que consome a bateria em 2 horas, não ajusta o brilho no sol e para de tocar nas bordas. Nosso foco é o Custo-Benefício Real: cobramos o preço justo por Peças Premium de Alta Fidelidade (OLED/Incell AAA), instaladas por profissionais com ferramental ESD (anti-estático), e emitimos Garantia Clara de 90 dias. Seu smartphone guarda seus bancos e sua vida; não entregue na mão de curiosos.`,
    whenToSeek: "Antes de fechar um orçamento 'milagroso' pela internet, venha nos conhecer na Boca do Rio.",
    costInfo: `Nossos orçamentos são transparentes. Valorizamos o seu investimento no smartphone. ${CTA_TEXT}`,
  }
];
