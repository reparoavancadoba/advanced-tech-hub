import type { BlogPost, Category } from "./blogData";

const LOCAL_SEO = "A Reparo Avançado está localizada na Boca do Rio, Salvador – BA, e atende clientes de toda a região, incluindo Stiep, Imbuí, Pituba e Costa Azul.";
const PECAS = "Peças de Alta Performance fabricadas com os mesmos padrões da linha de montagem original";
const CTA_TEXT = "Fale agora com um técnico especializado pelo WhatsApp (71) 99198-1437";

export const editorialPosts: BlogPost[] = [
  // ═══════════════════════════════════════════
  // CLUSTER IPHONE (12 POSTS)
  // ═══════════════════════════════════════════
  {
    slug: "troca-de-bateria-iphone-salvador-saude-100",
    title: "Troca de Bateria iPhone Salvador | Saúde 100% Sem Erro | Reparo Avançado",
    h1: "Troca de Bateria iPhone em Salvador: Como Manter 100% de Saúde Sem Erro de Sistema",
    metaDescription: "Troca de bateria iPhone em Salvador (Boca do Rio) com peças de alta performance. Sem mensagem de 'Peça Desconhecida'. Orçamento gratuito pelo WhatsApp!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Troca de Bateria",
    serviceSlug: "troca-de-bateria-iphone-editorial",
    description: "Descubra como a Reparo Avançado realiza a troca de bateria do iPhone em Salvador sem gerar erros de sistema, mantendo a saúde em 100%.",
    isEditorial: true,
    keywords: ["troca de bateria iphone salvador", "bateria iphone boca do rio", "saúde bateria iphone", "peça desconhecida iphone", "assistência técnica iphone salvador"],
    problems: [
      "Bateria do iPhone descarregando em poucas horas",
      "Saúde da bateria abaixo de 80%",
      "Mensagem 'Peça Desconhecida' após troca em outras assistências",
      "iPhone desligando sozinho mesmo com carga",
      "Superaquecimento durante carregamento"
    ],
    causes: [
      "Uso prolongado acima de 500 ciclos de carga",
      "Carregadores não certificados que degradam as células",
      "Exposição ao calor intenso de Salvador, que acelera o desgaste",
      "Troca anterior com peças de baixa qualidade sem reprogramação do CI"
    ],
    solution: `Na Reparo Avançado, utilizamos ${PECAS} para a troca de bateria do iPhone. O diferencial está na reprogramação do chip controlador (CI) da bateria, que elimina completamente a mensagem de "Peça Desconhecida" no iOS. Nosso processo inclui: diagnóstico completo do circuito de carga, remoção segura da bateria antiga com ferramentas anti-estáticas, instalação da nova bateria com calibração de voltagem, e reprogramação via software proprietário para que o iOS reconheça a bateria como genuína. Após a troca, realizamos testes de carga completa e monitoramos a temperatura para garantir funcionamento perfeito. ${LOCAL_SEO}`,
    whenToSeek: "Quando a saúde da bateria cair abaixo de 85%, quando o iPhone desligar sozinho, quando a bateria não durar um dia de uso moderado, ou quando aparecer aviso de 'Manutenção da Bateria'. Não espere a bateria estufar — isso pode danificar a tela e outros componentes.",
    costInfo: `O valor da troca de bateria varia conforme o modelo do iPhone (do iPhone 11 ao iPhone 16 Pro Max). Todas as baterias são ${PECAS}. Oferecemos garantia de 6 meses e o serviço é realizado em até 40 minutos. ${CTA_TEXT}.`,
    faq: [
      { question: "A troca de bateria do iPhone vai aparecer 'Peça Desconhecida'?", answer: "Não. Na Reparo Avançado, reprogramamos o chip controlador da bateria para que o iOS reconheça a peça corretamente, exibindo a saúde em 100% sem nenhuma mensagem de erro." },
      { question: "Quanto tempo dura a bateria nova do iPhone?", answer: "Nossas baterias de alta performance têm vida útil equivalente à original, suportando mais de 500 ciclos de carga completa mantendo acima de 80% de capacidade." },
      { question: "Posso esperar enquanto troca a bateria do iPhone?", answer: "Sim! O serviço é realizado em aproximadamente 40 minutos na nossa loja na Boca do Rio, Salvador." }
    ],
    sections: [
      {
        id: "por-que-bateria-perde-saude",
        title: "Por Que a Bateria do iPhone Perde Saúde?",
        content: "A bateria de íon de lítio do iPhone é projetada para reter até 80% da capacidade original após 500 ciclos de carga. No entanto, o clima quente de Salvador e a exposição ao sol aceleram significativamente esse processo. Carregar o iPhone com carregadores não certificados ou deixar o aparelho conectado a noite toda também contribui para o desgaste prematuro.",
        subsections: [
          { title: "O Impacto do Clima de Salvador na Bateria", content: "A temperatura média de Salvador, combinada com a maresia da orla (Pituba, Costa Azul, Imbuí), cria um ambiente que pode reduzir a vida útil da bateria em até 20%. O calor acelera as reações químicas internas e a umidade salina pode causar micro-oxidação nos contatos." },
          { title: "Como Verificar a Saúde da Bateria", content: "Acesse Ajustes > Bateria > Saúde e Carregamento. Se a capacidade máxima estiver abaixo de 85%, é hora de considerar a troca. A Reparo Avançado oferece diagnóstico gratuito com relatório completo do estado da bateria." }
        ]
      },
      {
        id: "tecnica-reprogramacao",
        title: "Nossa Técnica de Reprogramação: Zero Erros de Sistema",
        content: `O grande problema das trocas de bateria em assistências não especializadas é a famosa mensagem "Peça Desconhecida" que aparece no iOS. Isso acontece porque a Apple implementa um chip controlador (CI) na bateria que se comunica com a placa lógica. Na Reparo Avançado, possuímos equipamento e software para reprogramar esse CI, fazendo com que o sistema reconheça a nova bateria perfeitamente.`,
        subsections: [
          { title: "Passo a Passo do Nosso Processo", content: "1) Diagnóstico do circuito de carga com multímetro de precisão. 2) Remoção segura da bateria com ferramentas anti-estáticas. 3) Transferência do CI original ou reprogramação do novo CI. 4) Instalação com adesivos originais de fixação. 5) Calibração de carga completa. 6) Teste de temperatura e performance." }
        ]
      }
    ],
    relatedSlugs: ["reparo-face-id-iphone-salvador", "iphone-nao-liga-diagnostico-placa-salvador", "iphone-caiu-na-agua-desoxidacao-salvador"]
  },
  {
    slug: "reparo-face-id-iphone-salvador",
    title: "Reparo de Face ID iPhone Salvador | Micro-soldagem | Reparo Avançado",
    h1: "Reparo de Face ID no iPhone: Seu Sensor Parou de Funcionar? Veja Como Recuperamos",
    metaDescription: "Face ID do iPhone parou? Reparo especializado com micro-soldagem do projetor de pontos em Salvador (Boca do Rio). Diagnóstico gratuito!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Reparo de Face ID",
    serviceSlug: "reparo-face-id-editorial",
    description: "Entenda como a Reparo Avançado recupera o Face ID do iPhone através de micro-soldagem de precisão nos sensores TrueDepth.",
    isEditorial: true,
    keywords: ["reparo face id iphone", "face id não funciona", "micro-soldagem iphone salvador", "projetor de pontos iphone", "sensor truedepth"],
    problems: [
      "Face ID indisponível após queda",
      "Reconhecimento facial lento ou impreciso",
      "Mensagem 'Face ID não está disponível' permanente",
      "Face ID parou após troca de tela",
      "Sensor de proximidade não funciona junto com Face ID"
    ],
    causes: [
      "Queda com impacto direto no módulo TrueDepth",
      "Troca de tela em assistência não especializada sem preservar o flex do Face ID",
      "Micro-fissura no projetor de pontos (dot projector)",
      "Oxidação dos contatos do sensor por exposição à umidade"
    ],
    solution: `O Face ID é um dos sistemas mais complexos do iPhone, composto pelo projetor de pontos, câmera infravermelha e iluminador flood. Na Reparo Avançado, utilizamos microscópio profissional e estação de micro-soldagem para diagnosticar e reparar cada componente individualmente. Em casos de flex danificado por troca de tela, realizamos a transferência do módulo TrueDepth com precisão cirúrgica. ${LOCAL_SEO}`,
    whenToSeek: "Imediatamente ao perceber que o Face ID parou de funcionar, especialmente após queda ou troca de tela. O atraso pode permitir que a oxidação se espalhe pelos contatos do sensor.",
    costInfo: `O reparo do Face ID requer equipamento especializado e mão de obra técnica de precisão. O diagnóstico é gratuito e o valor varia conforme o tipo de dano. Utilizamos ${PECAS}. ${CTA_TEXT}.`,
    faq: [
      { question: "É possível recuperar o Face ID do iPhone?", answer: "Sim, em muitos casos. Na Reparo Avançado temos taxa de sucesso superior a 85% na recuperação do Face ID através de micro-soldagem e reparo do módulo TrueDepth." },
      { question: "Face ID parou após trocar a tela, tem solução?", answer: "Sim. Geralmente o flex do módulo TrueDepth foi danificado durante a troca. Realizamos a transferência ou reparo do flex com micro-soldagem de precisão." },
      { question: "Quanto tempo demora o reparo do Face ID?", answer: "O diagnóstico leva cerca de 30 minutos. O reparo completo pode levar de 2 a 4 horas dependendo da complexidade, pois envolve micro-soldagem de componentes SMD." }
    ],
    sections: [
      {
        id: "como-funciona-face-id",
        title: "Como Funciona o Face ID e Por Que Ele Falha",
        content: "O sistema Face ID utiliza três componentes principais: o projetor de pontos que emite mais de 30.000 pontos infravermelhos no rosto, a câmera infravermelha que captura o padrão, e o iluminador flood que garante funcionamento em ambientes escuros. Qualquer dano a um desses componentes pode inutilizar todo o sistema.",
        subsections: [
          { title: "O Projetor de Pontos: Coração do Face ID", content: "Este é o componente mais delicado e frequentemente danificado em quedas. Ele contém um laser VCSEL que precisa estar perfeitamente alinhado para funcionar corretamente." },
          { title: "O Erro Mais Comum: Troca de Tela Sem Cuidado", content: "Muitas assistências danificam o flex do Face ID durante a troca de tela por não terem ferramentas adequadas. Na Reparo Avançado, todo procedimento de troca de tela preserva 100% do módulo TrueDepth." }
        ]
      },
      {
        id: "micro-soldagem-precisao",
        title: "Micro-soldagem de Precisão: Nossa Especialidade",
        content: "Utilizamos estação de solda com ponta de 0.2mm e microscópio com aumento de até 45x para trabalhar nos componentes do Face ID. Cada solda é verificada com multímetro de precisão antes da remontagem. Esse nível de detalhe é o que diferencia a Reparo Avançado de assistências convencionais em Salvador."
      }
    ],
    relatedSlugs: ["troca-de-bateria-iphone-salvador-saude-100", "troca-tela-iphone-true-tone-salvador", "camera-iphone-tremula-manchas-salvador"]
  },
  {
    slug: "iphone-nao-liga-diagnostico-placa-salvador",
    title: "iPhone Não Liga ou Travado na Maçã? Diagnóstico de Placa em Salvador",
    h1: "iPhone Não Liga ou Travado na Maçã? Diagnóstico Avançado de Placa na Boca do Rio",
    metaDescription: "iPhone não liga ou travou na maçã? Diagnóstico avançado de placa com reballing de processador em Salvador. Recuperamos aparelhos dados como perdidos!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Diagnóstico de Placa",
    serviceSlug: "diagnostico-placa-iphone-editorial",
    description: "Seu iPhone não liga ou ficou travado na maçã? Entenda como o diagnóstico avançado de placa pode salvar seu aparelho na Reparo Avançado.",
    isEditorial: true,
    keywords: ["iphone não liga", "iphone travado na maçã", "reparo de placa iphone", "reballing processador iphone", "curto circuito iphone salvador"],
    problems: [
      "iPhone completamente morto, sem reação",
      "Travado na logo da Apple (loop de boot)",
      "Liga e desliga sozinho em loop",
      "Tela preta mas vibra ou toca",
      "iPhone esquentando sem ligar"
    ],
    causes: [
      "Curto-circuito na placa lógica por queda ou líquido",
      "Falha no chip de gerenciamento de energia (PMIC)",
      "BGA do processador com micro-fissuras (cold solder)",
      "CI de carga (Tristar/Hydra) queimado por carregador genérico"
    ],
    solution: `Na Reparo Avançado, realizamos o diagnóstico completo da placa lógica do iPhone utilizando microscópio profissional, fonte de bancada e câmera térmica. Identificamos o componente exato que está em falha — seja o PMIC, Tristar, NAND, ou processador — e realizamos o reparo direcionado com reballing ou substituição do CI. ${LOCAL_SEO}`,
    whenToSeek: "Assim que o iPhone parar de ligar ou apresentar loop de boot. Tentativas de forçar a inicialização podem agravar o problema, especialmente se houver curto-circuito.",
    costInfo: `O diagnóstico é 100% gratuito e detalhado. Informamos exatamente qual componente falhou e o custo do reparo antes de qualquer serviço. ${CTA_TEXT}.`,
    faq: [
      { question: "iPhone não liga, tem conserto?", answer: "Na maioria dos casos, sim. Somos especialistas em reparo de placa e recuperamos iPhones dados como perdidos por outras assistências. O diagnóstico é gratuito." },
      { question: "O que é reballing de processador?", answer: "É a técnica de refazer as micro-esferas de solda (balls) sob o processador, corrigindo conexões rompidas. Utilizamos estação BGA profissional com perfil térmico controlado." },
      { question: "Perco meus dados se o iPhone não liga?", answer: "Depende do tipo de falha. Se o problema for no circuito de energia e não na NAND (memória), seus dados estão preservados e serão mantidos após o reparo." }
    ],
    sections: [
      {
        id: "tipos-de-falha",
        title: "Tipos de Falha na Placa do iPhone",
        content: "A placa lógica do iPhone é um dos componentes mais sofisticados de qualquer smartphone. Quando falha, requer equipamento e conhecimento especializado para diagnóstico.",
        subsections: [
          { title: "Curto-circuito: O Vilão Silencioso", content: "Um curto na placa pode ser causado por líquido, queda ou até carregadores de baixa qualidade. Utilizamos câmera térmica e fonte de bancada para localizar o ponto exato do curto antes de qualquer reparo." },
          { title: "Reballing: Quando o Processador Perde Contato", content: "Com o tempo e o calor, as micro-esferas de solda sob o processador podem rachar (cold solder joints). O reballing reconstrói essas conexões usando estação BGA com perfil térmico preciso." }
        ]
      }
    ],
    relatedSlugs: ["troca-de-bateria-iphone-salvador-saude-100", "iphone-caiu-na-agua-desoxidacao-salvador", "wifi-bluetooth-iphone-chip-radio-salvador"]
  },
  {
    slug: "troca-tela-iphone-true-tone-salvador",
    title: "Troca de Tela iPhone com True Tone Salvador | Reparo Avançado",
    h1: "Troca de Tela de iPhone com True Tone: Por Que a Fidelidade de Cores Importa",
    metaDescription: "Troca de tela iPhone em Salvador com reprogramação True Tone. Cores fiéis e funções originais preservadas. Boca do Rio. Orçamento grátis!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Troca de Tela",
    serviceSlug: "troca-tela-true-tone-editorial",
    description: "Saiba por que a reprogramação do CI da tela é essencial para manter True Tone e cores fiéis na troca de tela do iPhone.",
    isEditorial: true,
    keywords: ["troca de tela iphone true tone", "tela iphone salvador", "reprogramação true tone", "tela oled iphone", "troca display iphone boca do rio"],
    problems: [
      "Tela do iPhone trincada ou quebrada",
      "Perda do True Tone após troca de tela",
      "Cores amareladas ou frias após reparo",
      "Touch fantasma ou áreas sem toque",
      "Brilho automático não funciona após troca"
    ],
    causes: [
      "Queda do iPhone em superfície dura",
      "Pressão excessiva no bolso ou bolsa",
      "Troca anterior com tela genérica sem reprogramação",
      "Exposição a temperatura extrema causando descolamento"
    ],
    solution: `Na Reparo Avançado, utilizamos telas de alta performance (${PECAS}) e realizamos a reprogramação do CI (chip controlador) da tela. Isso garante que o True Tone, brilho automático e todas as funções de toque funcionem perfeitamente. Nosso processo inclui a transferência dos dados do CI da tela original para a nova, mantendo o pareamento com a placa lógica. ${LOCAL_SEO}`,
    whenToSeek: "Imediatamente após qualquer trinca na tela. Fragmentos de vidro podem causar cortes e a exposição interna à poeira e umidade pode danificar outros componentes.",
    costInfo: `O valor varia conforme o modelo (iPhone 11 ao 16 Pro Max) e o tipo de tela (LCD, OLED, Super Retina XDR). Todas incluem reprogramação True Tone sem custo adicional. ${CTA_TEXT}.`,
    faq: [
      { question: "A tela nova vai ter True Tone funcionando?", answer: "Sim! Realizamos a reprogramação do CI da tela para manter o True Tone, brilho automático e todas as funções de toque funcionando perfeitamente." },
      { question: "Qual a diferença entre tela original e tela de alta performance?", answer: `Nossas telas são ${PECAS}. Possuem a mesma qualidade de cores, resolução e sensibilidade ao toque, com garantia de 6 meses.` },
      { question: "A troca de tela pode danificar o Face ID?", answer: "Na Reparo Avançado, jamais. Nossos técnicos são treinados para preservar 100% do módulo TrueDepth durante a troca. Em assistências não especializadas, esse risco é real." }
    ],
    sections: [
      {
        id: "importancia-true-tone",
        title: "O Que é True Tone e Por Que Você Não Deve Perder",
        content: "O True Tone é uma tecnologia da Apple que ajusta automaticamente a temperatura de cor da tela conforme a iluminação ambiente. Sem ele, as cores ficam artificiais — muito frias (azuladas) ou quentes (amareladas). Muitas assistências em Salvador não reprogramam o CI da tela, fazendo o cliente perder essa função.",
        subsections: [
          { title: "Como Funciona a Reprogramação do CI", content: "O CI (chip controlador) da tela armazena dados de calibração e pareamento com a placa lógica. Na Reparo Avançado, utilizamos programador especializado para transferir esses dados da tela antiga para a nova, ou reprogramar o CI com os dados corretos." }
        ]
      }
    ],
    relatedSlugs: ["reparo-face-id-iphone-salvador", "camera-iphone-tremula-manchas-salvador", "vidro-traseiro-iphone-reparo-laser-salvador"]
  },
  {
    slug: "iphone-caiu-na-agua-desoxidacao-salvador",
    title: "iPhone Caiu na Água? Desoxidação Urgente em Salvador | Reparo Avançado",
    h1: "iPhone Caiu na Água em Salvador? Guia de Desoxidação Urgente Para Salvar Sua Placa",
    metaDescription: "iPhone caiu na água ou no mar em Salvador? Desoxidação urgente na Boca do Rio. NÃO coloque no arroz! Traga imediatamente para diagnóstico gratuito.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Desoxidação",
    serviceSlug: "desoxidacao-iphone-editorial",
    description: "O que fazer quando o iPhone cai na água em Salvador. Guia urgente de desoxidação e os erros que você não deve cometer.",
    isEditorial: true,
    keywords: ["iphone caiu na agua", "desoxidação iphone salvador", "iphone molhado", "iphone caiu no mar", "recuperar iphone água"],
    problems: [
      "iPhone caiu na piscina, mar ou vaso sanitário",
      "Tela com manchas de umidade",
      "iPhone não liga após contato com líquido",
      "Áudio distorcido após exposição à água",
      "Touch screen irregular depois de molhar"
    ],
    causes: [
      "Queda acidental em água (piscina, mar, chuva)",
      "Vedação degradada pelo tempo e uso",
      "Exposição ao vapor do banheiro",
      "A maresia de Salvador que penetra por micro-aberturas"
    ],
    solution: `O tempo é o fator mais crítico. Na Reparo Avançado, realizamos o processo de desoxidação de emergência: abertura imediata do aparelho, banho ultrassônico com solução específica, limpeza componente a componente sob microscópio, secagem controlada e teste completo de todos os circuitos. NUNCA coloque o iPhone no arroz — isso pode introduzir amido nos conectores e piorar a oxidação. ${LOCAL_SEO}`,
    whenToSeek: "IMEDIATAMENTE. Desligue o iPhone, NÃO tente carregar, NÃO tente ligar. Cada hora conta contra a oxidação. A corrosão pode ser irreversível em 24-48 horas.",
    costInfo: `O diagnóstico de urgência é gratuito. O valor da desoxidação depende da extensão do dano. Quanto mais rápido trouxer, maior a chance de recuperação e menor o custo. ${CTA_TEXT}.`,
    faq: [
      { question: "Funciona colocar o iPhone no arroz?", answer: "NÃO! Esse é um dos maiores mitos. O arroz não remove a umidade interna e pode introduzir partículas de amido nos conectores, piorando a oxidação. O correto é desligar o aparelho e trazer para desoxidação profissional o mais rápido possível." },
      { question: "iPhone é à prova d'água, por que estragou?", answer: "A resistência à água do iPhone é uma classificação de fábrica que se degrada com o uso, quedas e tempo. Nenhum iPhone é 'à prova d'água' permanentemente, especialmente após 1 ano de uso." },
      { question: "Quanto tempo tenho para trazer o iPhone molhado?", answer: "Idealmente, nas primeiras 2 horas. Após 24 horas, as chances de recuperação caem drasticamente. Quanto antes trouxer à Reparo Avançado na Boca do Rio, melhor o prognóstico." }
    ],
    sections: [
      {
        id: "o-que-fazer-iphone-agua",
        title: "O Que Fazer (e NÃO Fazer) Quando o iPhone Cai na Água",
        content: "Os primeiros minutos após o contato com líquido são decisivos. Siga estas instruções antes de trazer o aparelho à nossa loja.",
        subsections: [
          { title: "FAÇA Imediatamente", content: "1) Retire da água imediatamente. 2) Desligue o iPhone (mantenha pressionado o botão lateral + volume). 3) Remova a capinha e o chip. 4) Seque o exterior com pano seco. 5) Traga à Reparo Avançado o mais rápido possível." },
          { title: "NÃO FAÇA De Jeito Nenhum", content: "1) NÃO tente ligar o iPhone. 2) NÃO conecte no carregador. 3) NÃO use secador de cabelo. 4) NÃO coloque no arroz. 5) NÃO balance ou sacuda o aparelho — isso espalha o líquido." }
        ]
      },
      {
        id: "processo-desoxidacao",
        title: "Nosso Processo de Desoxidação Profissional",
        content: `Utilizamos banho ultrassônico com solução IPA (álcool isopropílico de alta pureza) para remover toda a oxidação da placa. Cada componente é inspecionado sob microscópio de 45x. Componentes corroídos são substituídos por ${PECAS}. O processo completo leva de 2 a 6 horas, dependendo da extensão do dano.`
      }
    ],
    relatedSlugs: ["iphone-nao-liga-diagnostico-placa-salvador", "maresia-salvador-corrosao-iphone", "conector-carga-iphone-limpeza-troca-salvador"]
  },
  {
    slug: "conector-carga-iphone-limpeza-troca-salvador",
    title: "Conector de Carga iPhone com Mau Contato? Salvador | Reparo Avançado",
    h1: "Conector de Carga do iPhone com Mau Contato? Limpeza Técnica vs Troca de Componente",
    metaDescription: "Conector de carga do iPhone com mau contato em Salvador? Saiba quando é limpeza e quando precisa trocar. Diagnóstico gratuito na Boca do Rio!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Conector de Carga",
    serviceSlug: "conector-carga-iphone-editorial",
    description: "Entenda a diferença entre limpeza técnica e troca do conector de carga do iPhone e quando cada procedimento é necessário.",
    isEditorial: true,
    keywords: ["conector de carga iphone", "iphone não carrega", "limpeza conector iphone", "troca conector lightning", "iphone carregando lento salvador"],
    problems: [
      "Cabo do iPhone fica frouxo no conector",
      "Carrega apenas em determinada posição",
      "Carregamento extremamente lento",
      "Não carrega de jeito nenhum",
      "Cabo cai do iPhone sozinho"
    ],
    causes: [
      "Acúmulo de poeira e fiapos no conector (causa mais comum)",
      "Oxidação por umidade e maresia de Salvador",
      "Desgaste mecânico por inserções repetidas",
      "Dano nos pinos por inserção forçada do cabo"
    ],
    solution: `Primeiro, realizamos inspeção visual com microscópio para identificar se o problema é sujeira acumulada ou dano físico nos pinos. Em 60% dos casos, uma limpeza técnica profissional resolve completamente — utilizamos ferramentas anti-estáticas e solventes específicos. Quando há dano nos pinos ou oxidação severa, realizamos a troca do módulo de carga completo com ${PECAS}. ${LOCAL_SEO}`,
    whenToSeek: "Quando perceber qualquer inconsistência no carregamento. O 'jeitinho' de inclinar o cabo é sinal de que o problema já está instalado e tende a piorar.",
    costInfo: `A limpeza técnica é um procedimento rápido e acessível. A troca do conector tem valor conforme o modelo. Diagnóstico gratuito para identificar a melhor solução. ${CTA_TEXT}.`,
    faq: [
      { question: "Limpeza do conector resolve ou precisa trocar?", answer: "Depende. Em 60% dos casos, a limpeza técnica profissional resolve. Fazemos diagnóstico com microscópio para determinar se há dano nos pinos que exija troca do módulo completo." },
      { question: "Posso limpar o conector do iPhone em casa?", answer: "Não recomendamos. Palitos e objetos metálicos podem danificar os pinos do conector. A limpeza técnica profissional utiliza ferramentas anti-estáticas e solventes específicos." },
      { question: "Quanto tempo leva a troca do conector de carga?", answer: "A limpeza leva cerca de 20 minutos. A troca completa do módulo de carga leva aproximadamente 1 hora, dependendo do modelo do iPhone." }
    ],
    sections: [],
    relatedSlugs: ["troca-de-bateria-iphone-salvador-saude-100", "iphone-nao-liga-diagnostico-placa-salvador", "higienizacao-conector-cabo-carregar-salvador"]
  },
  {
    slug: "vidro-traseiro-iphone-reparo-laser-salvador",
    title: "Vidro Traseiro iPhone Quebrado? Reparo a Laser em Salvador | Reparo Avançado",
    h1: "Vidro Traseiro de iPhone Quebrado? Conheça o Reparo a Laser da Reparo Avançado",
    metaDescription: "Vidro traseiro do iPhone quebrado? Na Reparo Avançado em Salvador fazemos a remoção a laser e troca com acabamento de fábrica. Boca do Rio.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Vidro Traseiro",
    serviceSlug: "vidro-traseiro-iphone-editorial",
    description: "Como funciona a troca do vidro traseiro do iPhone com remoção a laser na Reparo Avançado em Salvador.",
    isEditorial: true,
    keywords: ["vidro traseiro iphone", "troca vidro traseiro iphone salvador", "reparo laser iphone", "tampa traseira iphone quebrada"],
    problems: [
      "Vidro traseiro trincado ou estilhaçado",
      "Carregamento sem fio parou de funcionar",
      "Risco de corte por vidro quebrado",
      "Câmera exposta à poeira e umidade"
    ],
    causes: [
      "Queda do iPhone sem capinha de proteção",
      "Impacto no bolso traseiro ao sentar",
      "O vidro traseiro do iPhone é colado com adesivo industrial, tornando difícil a troca"
    ],
    solution: `A troca do vidro traseiro do iPhone é um dos reparos mais complexos, pois o vidro é colado com adesivo industrial diretamente no chassi. Na Reparo Avançado, utilizamos máquina a laser para separar o vidro sem danificar os componentes internos. Após a remoção, instalamos o novo vidro com acabamento e ajuste perfeito. ${LOCAL_SEO}`,
    whenToSeek: "Assim que o vidro trincar. Além do risco de cortes, o vidro quebrado permite entrada de poeira e umidade que podem danificar câmeras e outros componentes internos.",
    costInfo: `O valor varia conforme o modelo do iPhone. O reparo a laser garante acabamento de fábrica sem danos à placa ou bateria. ${CTA_TEXT}.`,
    faq: [
      { question: "É possível trocar só o vidro traseiro do iPhone?", answer: "Sim! Com a tecnologia de remoção a laser, conseguimos trocar apenas o vidro sem precisar substituir o chassi completo, resultando em um reparo mais econômico." },
      { question: "O carregamento sem fio volta a funcionar?", answer: "Sim, desde que a bobina de carregamento wireless não tenha sido danificada. Verificamos todos os componentes durante o reparo." },
      { question: "Quanto tempo leva a troca do vidro traseiro?", answer: "O processo com laser leva de 2 a 3 horas, incluindo remoção, limpeza, instalação e cura do adesivo." }
    ],
    sections: [],
    relatedSlugs: ["troca-tela-iphone-true-tone-salvador", "camera-iphone-tremula-manchas-salvador", "iphone-caiu-na-agua-desoxidacao-salvador"]
  },
  {
    slug: "audio-iphone-baixo-ruido-higienizacao-salvador",
    title: "Áudio do iPhone Baixo ou com Ruído? Higienização em Salvador",
    h1: "Áudio do iPhone Baixo ou com Ruído? A Importância da Higienização das Grades",
    metaDescription: "Som do iPhone baixo ou com chiado? Na maioria dos casos, a higienização das grades resolve! Reparo Avançado na Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Áudio e Higienização",
    serviceSlug: "audio-iphone-editorial",
    description: "Descubra como a sujeira acumulada nas grades do iPhone afeta a qualidade do áudio e como resolvemos isso.",
    isEditorial: true,
    keywords: ["audio iphone baixo", "som iphone ruido", "higienização iphone", "alto falante iphone baixo", "limpeza grade iphone salvador"],
    problems: [
      "Volume do iPhone muito baixo mesmo no máximo",
      "Chiado ou distorção durante ligações",
      "Não ouve a pessoa durante chamadas",
      "Música ou vídeos com som abafado",
      "Siri não entende comandos de voz"
    ],
    causes: [
      "Acúmulo de poeira, cera e fiapos nas grades do alto-falante e microfone",
      "Oxidação por umidade e maresia",
      "Alto-falante danificado por queda ou líquido",
      "Obstrução por película ou capinha mal posicionada"
    ],
    solution: `Em 70% dos casos de áudio baixo, a causa é simplesmente sujeira acumulada nas grades. Na Reparo Avançado, realizamos a higienização profissional com ferramentas especializadas, removendo toda obstrução sem danificar os componentes. Quando o problema é no alto-falante em si, realizamos a substituição por ${PECAS}. ${LOCAL_SEO}`,
    whenToSeek: "Quando perceber redução gradual no volume ou qualquer distorção no áudio. A sujeira acumulada pode eventualmente danificar o alto-falante se não for removida.",
    costInfo: `A higienização das grades é um serviço rápido e acessível. A troca do alto-falante tem valor conforme o modelo. ${CTA_TEXT}.`,
    faq: [
      { question: "Limpeza resolve o som baixo do iPhone?", answer: "Na maioria dos casos, sim! Cerca de 70% dos problemas de áudio baixo são causados por sujeira nas grades. A higienização profissional restaura o volume original." },
      { question: "Como evitar que o som do iPhone fique baixo?", answer: "Evite usar o iPhone em ambientes com muita poeira, limpe regularmente as grades com escova macia e seca, e considere fazer uma limpeza técnica preventiva a cada 6 meses." },
      { question: "Preciso trocar o alto-falante do iPhone?", answer: "Somente se a higienização não resolver. Fazemos diagnóstico gratuito para determinar se é sujeira ou defeito no componente." }
    ],
    sections: [],
    relatedSlugs: ["celular-esquentando-limpeza-interna-salvador", "microfone-ruim-ligacoes-poeira-salvador", "limpeza-tecnica-celular-sexta-feira-salvador"]
  },
  {
    slug: "vale-pena-consertar-iphone-antigo-analise",
    title: "Vale a Pena Consertar iPhone Antigo? Análise de Custo-Benefício",
    h1: "Vale a Pena Consertar iPhone Antigo? Análise Técnica de Custo-Benefício",
    metaDescription: "iPhone antigo quebrado? Análise técnica para saber se vale consertar ou comprar novo. Reparo Avançado em Salvador (Boca do Rio). Diagnóstico grátis!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Análise de Custo-Benefício",
    serviceSlug: "analise-custo-beneficio-editorial",
    description: "Análise técnica para saber quando vale a pena consertar um iPhone antigo e quando é melhor investir em um novo.",
    isEditorial: true,
    keywords: ["vale pena consertar iphone antigo", "conserto iphone velho", "custo beneficio reparo iphone", "iphone antigo salvador"],
    problems: [
      "Dúvida entre consertar ou comprar novo",
      "iPhone antigo com múltiplos problemas",
      "Custo do reparo parece alto demais",
      "iPhone fora de garantia Apple"
    ],
    causes: [
      "Desgaste natural por uso prolongado",
      "Múltiplas quedas e danos acumulados",
      "Obsolescência de software (sem atualizações)"
    ],
    solution: `Na Reparo Avançado, fazemos uma análise técnica completa e honesta. Avaliamos o estado geral do aparelho, o custo do reparo versus o valor de mercado, e a vida útil restante. Se o reparo custar mais de 60% do valor de um aparelho similar seminovo, recomendamos transparentemente que considere a troca. Nosso compromisso é com a satisfação do cliente, não com vendas desnecessárias. ${LOCAL_SEO}`,
    whenToSeek: "Sempre que estiver em dúvida. Nosso diagnóstico é gratuito e oferecemos uma análise honesta de custo-benefício.",
    costInfo: `Diagnóstico gratuito com análise de custo-benefício detalhada. ${CTA_TEXT}.`,
    faq: [
      { question: "Até que modelo de iPhone vale a pena consertar?", answer: "Depende do tipo de reparo. Uma troca de bateria vale a pena até em modelos como o iPhone 11. Já um reparo de placa complexo pode não compensar em modelos muito antigos. Fazemos a análise caso a caso." },
      { question: "Vocês são honestos sobre quando não vale consertar?", answer: "Sim! Nossa filosofia é transparência. Se o reparo não fizer sentido financeiramente, diremos isso claramente. Preferimos um cliente satisfeito que volte no futuro." },
      { question: "Posso recuperar meus dados de um iPhone antigo?", answer: "Em muitos casos, sim. Mesmo que o reparo completo não compense, podemos realizar procedimentos específicos para recuperar seus dados (fotos, contatos, etc.)." }
    ],
    sections: [],
    relatedSlugs: ["troca-de-bateria-iphone-salvador-saude-100", "iphone-nao-liga-diagnostico-placa-salvador", "troca-tela-iphone-true-tone-salvador"]
  },
  {
    slug: "wifi-bluetooth-iphone-chip-radio-salvador",
    title: "Wi-Fi e Bluetooth do iPhone Não Ativam? Chip de Rádio | Salvador",
    h1: "Wi-Fi e Bluetooth do iPhone Não Ativam? Entenda o Defeito no Chip de Rádio",
    metaDescription: "Wi-Fi ou Bluetooth do iPhone não liga? Pode ser o chip de rádio. Reparo de placa especializado em Salvador (Boca do Rio). Diagnóstico grátis!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Reparo Chip Wi-Fi/Bluetooth",
    serviceSlug: "wifi-bluetooth-iphone-editorial",
    description: "Entenda por que o Wi-Fi e Bluetooth do iPhone param de funcionar e como o reparo do chip de rádio resolve o problema.",
    isEditorial: true,
    keywords: ["wifi iphone não funciona", "bluetooth iphone parou", "chip de radio iphone", "iphone sem wifi salvador", "reparo wifi iphone"],
    problems: [
      "Wi-Fi aparece cinza e não ativa",
      "Bluetooth não encontra dispositivos",
      "Wi-Fi desconecta constantemente",
      "Velocidade de internet muito baixa no Wi-Fi",
      "AirDrop e Handoff não funcionam"
    ],
    causes: [
      "Falha no chip de rádio (USI/Murata) da placa lógica",
      "Micro-fissura de solda por queda ou superaquecimento",
      "Problema de software após atualização do iOS",
      "Antena Wi-Fi/Bluetooth danificada"
    ],
    solution: `O chip de rádio do iPhone controla Wi-Fi, Bluetooth, GPS e NFC. Quando falha, é necessário reballing ou substituição desse CI na placa lógica. Na Reparo Avançado, realizamos esse reparo com estação BGA profissional e microscópio, garantindo a restauração completa de todas as conectividades. ${LOCAL_SEO}`,
    whenToSeek: "Quando Wi-Fi ou Bluetooth ficarem cinzas (sem possibilidade de ativar) ou desconectarem constantemente. Primeiro tente resetar as configurações de rede — se não resolver, é provável problema de hardware.",
    costInfo: `O diagnóstico é gratuito. O reparo do chip de rádio é um serviço especializado de micro-soldagem. ${CTA_TEXT}.`,
    faq: [
      { question: "Por que o Wi-Fi do meu iPhone ficou cinza?", answer: "Geralmente indica falha no chip de rádio (USI/Murata) na placa lógica. É um problema de hardware que requer reparo especializado com micro-soldagem." },
      { question: "Atualização do iOS pode causar esse problema?", answer: "Raramente a atualização causa o problema — ela geralmente apenas revela uma falha de hardware que já estava se desenvolvendo. A atualização pode estressar o chip danificado até o ponto de falha completa." },
      { question: "Se o Wi-Fi não funciona, o Bluetooth também para?", answer: "Frequentemente sim, pois ambos são controlados pelo mesmo chip de rádio na placa lógica do iPhone." }
    ],
    sections: [],
    relatedSlugs: ["iphone-nao-liga-diagnostico-placa-salvador", "iphone-caiu-na-agua-desoxidacao-salvador", "reparo-face-id-iphone-salvador"]
  },
  {
    slug: "camera-iphone-tremula-manchas-salvador",
    title: "Câmera do iPhone Trêmula ou com Manchas? Troca de Módulo em Salvador",
    h1: "Câmera do iPhone Trêmula ou com Manchas? Como a Troca de Módulo Resolve",
    metaDescription: "Câmera do iPhone trêmula, embaçada ou com manchas? Troca de módulo com peças de alta performance em Salvador (Boca do Rio). Orçamento grátis!",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Troca de Câmera",
    serviceSlug: "camera-iphone-editorial",
    description: "Saiba por que a câmera do iPhone fica trêmula ou com manchas e como a troca de módulo resolve definitivamente.",
    isEditorial: true,
    keywords: ["camera iphone tremula", "camera iphone manchas", "troca camera iphone salvador", "camera iphone embaçada", "modulo camera iphone"],
    problems: [
      "Câmera traseira tremendo constantemente",
      "Fotos com manchas ou pontos escuros",
      "Câmera preta ao abrir o aplicativo",
      "Foco automático não funciona",
      "Flash não dispara"
    ],
    causes: [
      "OIS (estabilização óptica) danificada por queda",
      "Poeira ou umidade dentro do módulo da câmera",
      "Lente de proteção trincada",
      "Flex da câmera com mau contato"
    ],
    solution: `Na Reparo Avançado, diagnosticamos se o problema é no módulo da câmera, no flex de conexão, ou na lente de proteção. A troca do módulo é realizada com ${PECAS} e inclui calibração de foco e teste de qualidade de imagem. Para câmeras com OIS, garantimos que a estabilização funcione perfeitamente após o reparo. ${LOCAL_SEO}`,
    whenToSeek: "Quando notar tremulação, manchas nas fotos, ou câmera preta. A poeira pode se espalhar para outros componentes se não tratada.",
    costInfo: `O valor depende do modelo e da câmera (frontal, traseira principal, ultra-wide, telefoto). Diagnóstico gratuito. ${CTA_TEXT}.`,
    faq: [
      { question: "Por que a câmera do iPhone treme?", answer: "Geralmente é falha no sistema OIS (estabilização óptica de imagem). O mecanismo de estabilização magnético se desalinha após quedas, causando tremulação constante." },
      { question: "As manchas nas fotos são sujeira ou defeito?", answer: "Pode ser ambos. Fazemos diagnóstico para identificar se é poeira na lente (limpeza resolve) ou defeito no sensor (troca necessária)." },
      { question: "A câmera nova é original Apple?", answer: `Utilizamos ${PECAS}, com qualidade de imagem e resolução idênticas às de fábrica, com garantia de 6 meses.` }
    ],
    sections: [],
    relatedSlugs: ["troca-tela-iphone-true-tone-salvador", "reparo-face-id-iphone-salvador", "poeira-lente-camera-limpeza-interna-salvador"]
  },
  {
    slug: "maresia-salvador-corrosao-iphone",
    title: "Maresia de Salvador e Corrosão do iPhone: Guia de Cuidados",
    h1: "Guia de Cuidados: Como a Maresia de Salvador Acelera a Corrosão do Seu iPhone",
    metaDescription: "Mora na orla de Salvador? A maresia corrói seu iPhone por dentro! Saiba como prevenir e quando fazer limpeza técnica. Reparo Avançado - Boca do Rio.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Prevenção contra Maresia",
    serviceSlug: "maresia-corrosao-editorial",
    description: "Como a maresia da orla de Salvador afeta os componentes internos do iPhone e o que fazer para prevenir danos.",
    isEditorial: true,
    keywords: ["maresia iphone", "corrosão celular salvador", "cuidados celular praia", "oxidação iphone maresia", "limpeza celular orla salvador"],
    problems: [
      "Oxidação verde/branca nos contatos internos",
      "Mau funcionamento intermitente de botões e conectores",
      "Degradação prematura da bateria",
      "Falha em componentes sem causa aparente",
      "Perda de vedação e resistência à água"
    ],
    causes: [
      "Atmosfera salina (maresia) que penetra pelas aberturas do aparelho",
      "Umidade relativa elevada do litoral de Salvador",
      "Exposição direta ao ar do mar em praias como Pituba, Costa Azul e Imbuí",
      "Areia que transporta sal para dentro do aparelho"
    ],
    solution: `Na Reparo Avançado, oferecemos limpeza preventiva especializada para moradores da orla de Salvador. O processo inclui abertura do aparelho, inspeção sob microscópio, limpeza com solventes anti-corrosão e aplicação de proteção nos contatos. Recomendamos esse serviço a cada 6 meses para quem vive ou trabalha próximo à praia. ${LOCAL_SEO}`,
    whenToSeek: "Preventivamente a cada 6 meses se você mora na orla (Pituba, Boca do Rio, Costa Azul, Imbuí). Imediatamente se notar qualquer sinal de corrosão como botões travando ou conector de carga com mau contato.",
    costInfo: `A limpeza preventiva é um investimento que pode evitar reparos caros no futuro. Consulte nossos planos de manutenção. ${CTA_TEXT}.`,
    faq: [
      { question: "A maresia realmente danifica o celular?", answer: "Sim! O sal presente no ar úmido da orla de Salvador penetra pelas aberturas do aparelho e causa corrosão nos contatos e trilhas da placa. É um dos danos mais comuns que recebemos em nossa loja na Boca do Rio." },
      { question: "Com que frequência devo fazer limpeza preventiva?", answer: "Para quem mora na orla de Salvador (Pituba, Costa Azul, Imbuí, Stiep, Boca do Rio), recomendamos a cada 6 meses. Para quem frequenta a praia ocasionalmente, uma vez por ano." },
      { question: "Capinha e película protegem contra maresia?", answer: "Parcialmente. Elas ajudam contra impacto e riscos, mas a maresia entra pelas aberturas (conector, alto-falante, microfone). A proteção real é a limpeza interna periódica." }
    ],
    sections: [],
    relatedSlugs: ["iphone-caiu-na-agua-desoxidacao-salvador", "cuidados-maresia-orla-salvador-limpeza", "limpeza-tecnica-celular-sexta-feira-salvador"]
  },

  // ═══════════════════════════════════════════
  // CLUSTER ANDROID & MULTIMARCAS (8 POSTS)
  // ═══════════════════════════════════════════
  {
    slug: "tela-samsung-mancha-verde-linhas-salvador",
    title: "Tela Samsung com Mancha Verde ou Linhas? Quando Trocar | Salvador",
    h1: "Tela Samsung com Mancha Verde ou Linhas? Saiba Quando a Troca do Display é Necessária",
    metaDescription: "Tela Samsung com mancha verde, linhas ou pixels mortos? Diagnóstico gratuito para saber se precisa trocar. Reparo Avançado - Boca do Rio, Salvador.",
    category: "samsung" as Category,
    brand: "Samsung",
    model: "Galaxy",
    service: "Troca de Display Samsung",
    serviceSlug: "tela-samsung-editorial",
    description: "Entenda as causas de manchas verdes e linhas na tela AMOLED Samsung e quando a troca é necessária.",
    isEditorial: true,
    keywords: ["tela samsung mancha verde", "linhas tela samsung", "troca display samsung salvador", "tela amoled samsung", "samsung tela queimada"],
    problems: [
      "Mancha verde no centro ou nas bordas da tela",
      "Linhas horizontais ou verticais coloridas",
      "Pixels mortos (pontos pretos fixos)",
      "Tela com burn-in (marca fantasma de ícones)",
      "Metade da tela preta ou com cores distorcidas"
    ],
    causes: [
      "Degradação natural dos OLEDs orgânicos (burn-in)",
      "Queda com impacto que danifica o painel AMOLED interno",
      "Pressão no painel por sentar com o celular no bolso",
      "Contato com líquido que infiltra entre as camadas"
    ],
    solution: `A tela AMOLED da Samsung é formada por camadas de materiais orgânicos que emitem luz própria. Quando danificados, não há reparo — a troca do display é necessária. Na Reparo Avançado, utilizamos ${PECAS} AMOLED que reproduzem as mesmas cores vibrantes e o preto profundo da tela original. ${LOCAL_SEO}`,
    whenToSeek: "Assim que a mancha verde ou as linhas aparecerem. O problema tende a se espalhar rapidamente em telas AMOLED danificadas.",
    costInfo: `O valor depende do modelo Samsung (linha S, A, M, Z). Utilizamos displays ${PECAS}. Diagnóstico gratuito. ${CTA_TEXT}.`,
    faq: [
      { question: "Por que apareceu uma mancha verde na tela do Samsung?", answer: "A mancha verde em telas AMOLED indica que os subpixels orgânicos verdes estão degradados ou que houve dano interno por queda/pressão. Infelizmente, não há reparo para o painel — a troca é necessária." },
      { question: "Burn-in na tela Samsung tem conserto?", answer: "Burn-in severo (marcas permanentes de ícones/barra de navegação) só se resolve com troca do display. Burn-in leve pode ser minimizado com apps específicos, mas não eliminado." },
      { question: "Qual a diferença entre tela AMOLED e tela IPS na troca?", answer: "A tela AMOLED oferece preto verdadeiro, cores mais vibrantes e menor consumo de energia. Recomendamos sempre a troca por AMOLED para manter a experiência original do Samsung." }
    ],
    sections: [],
    relatedSlugs: ["biometria-tela-parou-troca-amoled-salvador", "troca-vidro-vs-tela-completa-economia-salvador", "erro-umidade-samsung-conector-salvador"]
  },
  {
    slug: "xiaomi-poco-reiniciando-sozinho-salvador",
    title: "Xiaomi e Poco Reiniciando Sozinho? Bateria ou Software | Salvador",
    h1: "Xiaomi e Poco Reiniciando Sozinho? O Problema Pode Estar na Bateria ou no Software",
    metaDescription: "Xiaomi ou Poco reiniciando sozinho? Diagnóstico gratuito para identificar se é bateria, software ou placa. Reparo Avançado - Boca do Rio, Salvador.",
    category: "xiaomi" as Category,
    brand: "Xiaomi",
    model: "Xiaomi/Poco",
    service: "Diagnóstico Reinicialização",
    serviceSlug: "xiaomi-reiniciando-editorial",
    description: "Descubra as causas de reinicialização em Xiaomi e Poco e como a Reparo Avançado resolve cada uma delas.",
    isEditorial: true,
    keywords: ["xiaomi reiniciando sozinho", "poco reiniciando", "redmi reinicia sozinho", "xiaomi desligando salvador", "poco travando"],
    problems: [
      "Celular reinicia aleatoriamente durante o uso",
      "Reinicia ao abrir apps pesados ou câmera",
      "Loop de boot (fica reiniciando sem parar)",
      "Desliga sozinho com bateria acima de 50%",
      "Reinicia ao conectar no carregador"
    ],
    causes: [
      "Bateria degradada que não sustenta picos de consumo",
      "Bug no MIUI/HyperOS após atualização",
      "Superaquecimento do processador por acúmulo de poeira",
      "CI de gerenciamento de energia com falha na placa"
    ],
    solution: `O diagnóstico diferencial é essencial: testamos a bateria com equipamento de medição de capacidade real, verificamos o software com ferramentas de diagnóstico, e inspecionamos a placa com câmera térmica. Na maioria dos casos, o problema é bateria (40%) ou software (35%). Quando é placa (25%), realizamos reparo com micro-soldagem. ${LOCAL_SEO}`,
    whenToSeek: "Quando as reinicializações se tornarem frequentes (mais de uma vez por semana). Reinicializações durante o carregamento podem indicar problema no CI de carga.",
    costInfo: `Diagnóstico gratuito para identificar a causa exata. O valor depende se é troca de bateria, formatação de software ou reparo de placa. ${CTA_TEXT}.`,
    faq: [
      { question: "Por que meu Xiaomi reinicia sozinho?", answer: "As causas mais comuns são: bateria degradada (40%), bug de software MIUI (35%), ou problema na placa (25%). O diagnóstico gratuito identifica a causa exata." },
      { question: "Formatação resolve o problema de reinicialização?", answer: "Se a causa for software, sim. Mas é importante fazer diagnóstico primeiro para não formatar desnecessariamente e descobrir depois que o problema é hardware." },
      { question: "Vocês trabalham com todas as linhas Xiaomi?", answer: "Sim! Atendemos toda a linha Redmi Note, Poco X, Poco F, Poco M, e Xiaomi numerados. Temos peças para todos os modelos populares." }
    ],
    sections: [],
    relatedSlugs: ["celular-esquentando-limpeza-interna-salvador", "assistencia-realme-poco-salvador-pecas"]
  },
  {
    slug: "erro-umidade-samsung-conector-salvador",
    title: "Erro de Umidade Samsung: Como Resolver Sem Trocar Conector | Salvador",
    h1: "Erro de Umidade no Samsung: Como Resolvemos Sem Precisar Trocar o Conector",
    metaDescription: "Samsung mostrando erro de umidade? Na maioria dos casos resolvemos sem trocar peça! Reparo Avançado - Boca do Rio, Salvador. Diagnóstico gratuito.",
    category: "samsung" as Category,
    brand: "Samsung",
    model: "Galaxy",
    service: "Erro de Umidade Samsung",
    serviceSlug: "erro-umidade-samsung-editorial",
    description: "Entenda o famoso erro de umidade dos Samsung Galaxy e como resolver na maioria dos casos sem troca de componente.",
    isEditorial: true,
    keywords: ["erro umidade samsung", "samsung detectou umidade", "samsung não carrega umidade", "erro umidade galaxy", "resolver erro umidade samsung"],
    problems: [
      "Mensagem 'Umidade detectada' persistente",
      "Samsung não carrega por causa do alerta de umidade",
      "Erro de umidade aparece mesmo com conector seco",
      "Alerta volta após reiniciar o celular"
    ],
    causes: [
      "Micro-resíduos de umidade nos pinos do conector USB-C",
      "Oxidação leve nos contatos que o sensor interpreta como umidade",
      "Bug de software após atualização One UI",
      "Sensor de umidade hipersensível"
    ],
    solution: `Em 75% dos casos, o erro de umidade do Samsung é resolvido sem troca de peças. Na Reparo Avançado, utilizamos limpeza ultrassônica do conector, remoção de micro-oxidação com solventes específicos, e recalibração do sensor de umidade via software. Apenas quando há corrosão severa nos pinos é que a troca do conector se faz necessária. ${LOCAL_SEO}`,
    whenToSeek: "Se o erro persistir após deixar o celular secar por 2 horas em ambiente ventilado. Se aparecer sem motivo aparente, pode ser oxidação que vai piorar.",
    costInfo: `Na maioria dos casos é uma limpeza técnica com valor acessível. Diagnóstico gratuito. ${CTA_TEXT}.`,
    faq: [
      { question: "Erro de umidade do Samsung tem conserto?", answer: "Sim! Em 75% dos casos resolvemos sem trocar nenhuma peça, apenas com limpeza técnica e recalibração do sensor." },
      { question: "Posso usar secador de cabelo para secar o conector?", answer: "Não recomendamos. O calor excessivo pode danificar o conector. Deixe secar naturalmente em ambiente ventilado. Se persistir, traga para diagnóstico." },
      { question: "Posso carregar com carregador sem fio enquanto isso?", answer: "Sim! O carregamento wireless não é afetado pelo erro de umidade do USB-C. É uma solução temporária enquanto não traz para reparo." }
    ],
    sections: [],
    relatedSlugs: ["tela-samsung-mancha-verde-linhas-salvador", "higienizacao-conector-cabo-carregar-salvador", "conector-carga-iphone-limpeza-troca-salvador"]
  },
  {
    slug: "assistencia-realme-poco-salvador-pecas",
    title: "Assistência Técnica Realme e Poco em Salvador | Reparo Avançado",
    h1: "Assistência Técnica Realme e Poco em Salvador: Onde Encontrar Peças de Qualidade",
    metaDescription: "Assistência técnica especializada em Realme e Poco em Salvador. Peças de alta performance e técnicos qualificados. Boca do Rio. Orçamento gratuito!",
    category: "realme" as Category,
    brand: "Realme/Poco",
    model: "Realme/Poco",
    service: "Assistência Realme e Poco",
    serviceSlug: "assistencia-realme-poco-editorial",
    description: "A Reparo Avançado é referência em assistência técnica Realme e Poco em Salvador, com peças de qualidade e técnicos especializados.",
    isEditorial: true,
    keywords: ["assistência realme salvador", "assistência poco salvador", "pecas realme", "pecas poco", "conserto realme boca do rio"],
    problems: [
      "Dificuldade em encontrar assistência para Realme e Poco em Salvador",
      "Peças de baixa qualidade em assistências genéricas",
      "Preços abusivos por falta de concorrência",
      "Diagnóstico incorreto por desconhecimento da marca"
    ],
    causes: [
      "Realme e Poco são marcas relativamente novas no Brasil",
      "Rede autorizada ainda limitada em Salvador",
      "Falta de técnicos com experiência nessas marcas"
    ],
    solution: `A Reparo Avançado investe em capacitação constante para atender todas as marcas, incluindo Realme e Poco. Mantemos estoque de ${PECAS} para os modelos mais populares dessas marcas. Nossos técnicos conhecem as particularidades de hardware de cada linha e realizam reparos com a mesma qualidade que oferecemos para iPhone e Samsung. ${LOCAL_SEO}`,
    whenToSeek: "Para qualquer problema com seu Realme ou Poco. Somos uma das poucas assistências em Salvador com peças e experiência real nessas marcas.",
    costInfo: `Preços justos e competitivos. Trabalhamos com ${PECAS} para todas as linhas Realme e Poco. ${CTA_TEXT}.`,
    faq: [
      { question: "Vocês têm peças para Realme em estoque?", answer: "Sim! Mantemos em estoque peças para os modelos mais populares da Realme (C11 ao C35, Realme 7 ao 11, GT series). Para modelos menos comuns, encomendamos com prazo rápido." },
      { question: "Pocos e Xiaomis usam as mesmas peças?", answer: "Não necessariamente. Embora a Poco seja uma submarca da Xiaomi, muitos modelos têm componentes exclusivos. Temos peças específicas para cada modelo." },
      { question: "Qual o prazo do reparo de Realme e Poco?", answer: "A maioria dos reparos é feita no mesmo dia. Para casos que exigem peça sob encomenda, o prazo é de 2 a 5 dias úteis." }
    ],
    sections: [],
    relatedSlugs: ["xiaomi-poco-reiniciando-sozinho-salvador", "biometria-tela-parou-troca-amoled-salvador", "motorola-nao-carrega-diagnostico-salvador"]
  },
  {
    slug: "motorola-nao-carrega-diagnostico-salvador",
    title: "Motorola Não Carrega? Diagnóstico de Porta e Energia | Salvador",
    h1: "Motorola Não Carrega? Diagnóstico de Porta de Carga e Gerenciador de Energia",
    metaDescription: "Motorola não carrega? Pode ser a porta USB ou o gerenciador de energia na placa. Diagnóstico gratuito na Boca do Rio, Salvador. Reparo Avançado.",
    category: "motorola" as Category,
    brand: "Motorola",
    model: "Moto",
    service: "Diagnóstico de Carga Motorola",
    serviceSlug: "motorola-nao-carrega-editorial",
    description: "Diagnóstico completo para Motorola que não carrega: da porta USB-C ao circuito de gerenciamento de energia na placa.",
    isEditorial: true,
    keywords: ["motorola não carrega", "moto g não carrega", "porta carga motorola", "conserto motorola salvador", "motorola carregamento lento"],
    problems: [
      "Motorola não carrega de jeito nenhum",
      "Carregamento turbo parou de funcionar",
      "Carrega muito devagar",
      "Esquenta ao carregar",
      "Desliga ao tirar do carregador"
    ],
    causes: [
      "Porta USB-C com sujeira ou pinos danificados",
      "Bateria degradada que não retém carga",
      "CI de gerenciamento de energia queimado na placa",
      "Cabo ou carregador incompatível ou defeituoso"
    ],
    solution: `Realizamos diagnóstico em toda a cadeia de carga do Motorola: porta USB-C, flex de carga, bateria, CI de gerenciamento de energia e trilhas da placa. Identificamos o componente exato em falha e realizamos o reparo com ${PECAS}. Para Motorola, verificamos também o Turbo Power para restaurar o carregamento rápido. ${LOCAL_SEO}`,
    whenToSeek: "Quando o carregamento ficar inconsistente ou o Turbo Power parar de funcionar. Carregar o Motorola com carregadores genéricos pode danificar o CI de energia.",
    costInfo: `Diagnóstico gratuito e detalhado. Valor conforme o componente que precisa de reparo. ${CTA_TEXT}.`,
    faq: [
      { question: "Por que o carregamento turbo do Motorola parou?", answer: "Pode ser o cabo, o carregador, ou o CI de carga rápida na placa. Fazemos diagnóstico para identificar o componente exato. Usar carregadores genéricos é a causa mais comum." },
      { question: "Vocês atendem toda a linha Motorola?", answer: "Sim! Desde o Moto G14 ao Moto Edge 50, incluindo Moto G200 e G100. Temos peças para todos os modelos populares." },
      { question: "Limpeza da porta resolve?", answer: "Em muitos casos, sim. A porta USB-C acumula poeira e fiapos que impedem o contato correto. Fazemos limpeza técnica profissional antes de considerar troca de componente." }
    ],
    sections: [],
    relatedSlugs: ["higienizacao-conector-cabo-carregar-salvador", "conector-carga-iphone-limpeza-troca-salvador", "assistencia-realme-poco-salvador-pecas"]
  },
  {
    slug: "biometria-tela-parou-troca-amoled-salvador",
    title: "Biometria Parou Após Troca de Tela? AMOLED Alta Performance | Salvador",
    h1: "Biometria na Tela Parou Após a Troca? A Importância de Telas AMOLED de Alta Performance",
    metaDescription: "Leitor de digital na tela parou após trocar a tela? A qualidade do display AMOLED é crucial. Reparo Avançado - Boca do Rio, Salvador.",
    category: "samsung" as Category,
    brand: "Samsung",
    model: "Galaxy",
    service: "Biometria e Tela AMOLED",
    serviceSlug: "biometria-amoled-editorial",
    description: "Entenda por que a biometria na tela para de funcionar após troca de display e a importância de telas AMOLED de alta performance.",
    isEditorial: true,
    keywords: ["biometria parou troca tela", "leitor digital tela samsung", "tela amoled biometria", "digital na tela não funciona", "troca tela samsung biometria"],
    problems: [
      "Leitor de digital na tela não funciona após troca",
      "Biometria lenta ou imprecisa com tela nova",
      "Sensor de digital não detecta o dedo",
      "Digital funciona apenas no centro exato"
    ],
    causes: [
      "Tela de reposição IPS/LCD que não suporta sensor ultrassônico",
      "Tela AMOLED de baixa qualidade com camada sensora incompatível",
      "Instalação sem calibração do sensor biométrico",
      "Película de vidro grosso bloqueando o sensor"
    ],
    solution: `O sensor de digital sob a tela dos Samsung Galaxy S e A funciona com a tela AMOLED — se a tela for trocada por uma IPS/LCD genérica, a biometria para de funcionar. Na Reparo Avançado, utilizamos exclusivamente telas AMOLED ${PECAS} que são compatíveis com o sensor ultrassônico. Após a troca, recalibramos o sensor para máxima precisão. ${LOCAL_SEO}`,
    whenToSeek: "Se a biometria parou após troca de tela em outra assistência, traga para avaliarmos. Se precisa trocar a tela, venha direto para garantir que a biometria funcione.",
    costInfo: `Telas AMOLED de alta performance com biometria funcionando perfeitamente. Valor conforme modelo. ${CTA_TEXT}.`,
    faq: [
      { question: "Por que a digital parou após trocar a tela?", answer: "Provavelmente foi instalada uma tela IPS/LCD genérica que não suporta o sensor de digital ultrassônico. Apenas telas AMOLED de alta qualidade são compatíveis com o sensor." },
      { question: "Vocês garantem que a biometria vai funcionar?", answer: "Sim! Utilizamos exclusivamente telas AMOLED compatíveis com o sensor biométrico e realizamos teste de funcionamento antes da entrega." },
      { question: "Película de vidro atrapalha a biometria?", answer: "Películas muito grossas ou de baixa qualidade podem interferir. Recomendamos películas finas (0.2mm) ou películas hidrogel que não bloqueiam o sensor ultrassônico." }
    ],
    sections: [],
    relatedSlugs: ["tela-samsung-mancha-verde-linhas-salvador", "troca-vidro-vs-tela-completa-economia-salvador", "recuperacao-conta-google-micloud-salvador"]
  },
  {
    slug: "recuperacao-conta-google-micloud-salvador",
    title: "Recuperação de Conta Google e Mi Cloud em Salvador | Reparo Avançado",
    h1: "Recuperação de Conta Google e Mi Cloud: Suporte Técnico Para Softwares Travados",
    metaDescription: "Celular travado na conta Google (FRP) ou Mi Cloud? Suporte técnico especializado em Salvador. Reparo Avançado - Boca do Rio.",
    category: "xiaomi" as Category,
    brand: "Diversos",
    model: "Android",
    service: "Recuperação de Conta",
    serviceSlug: "recuperacao-conta-editorial",
    description: "Suporte técnico para celulares travados em conta Google (FRP), Mi Cloud e Samsung Account em Salvador.",
    isEditorial: true,
    keywords: ["recuperação conta google", "frp lock celular", "mi cloud travado", "celular travado conta", "desbloqueio conta google salvador"],
    problems: [
      "Celular travado na verificação de conta Google (FRP)",
      "Xiaomi preso no Mi Cloud após restauração",
      "Samsung bloqueado pela Samsung Account",
      "Esqueceu a senha da conta vinculada ao celular"
    ],
    causes: [
      "Restauração de fábrica sem remover a conta Google antes",
      "Compra de celular usado com conta do antigo dono",
      "Esquecimento da senha da conta Mi Cloud",
      "Atualização que travou o sistema na tela de verificação"
    ],
    solution: `Oferecemos suporte técnico para desbloqueio legítimo de contas em celulares. Trabalhamos com ferramentas de software especializadas para resolver bloqueios FRP, Mi Cloud e Samsung Account. IMPORTANTE: realizamos o serviço mediante comprovação de propriedade do aparelho (nota fiscal ou documento). ${LOCAL_SEO}`,
    whenToSeek: "Quando seu celular ficar travado na tela de verificação de conta após restauração de fábrica ou quando não conseguir acessar por esquecimento de senha.",
    costInfo: `Valor acessível conforme a marca e modelo. Exigimos comprovação de propriedade do aparelho. ${CTA_TEXT}.`,
    faq: [
      { question: "Vocês desbloqueiam celular roubado?", answer: "Absolutamente não. Realizamos o serviço exclusivamente mediante comprovação de propriedade (nota fiscal, documento de compra ou IMEI registrado). Esse é um compromisso ético da Reparo Avançado." },
      { question: "Quanto tempo leva para desbloquear conta Google?", answer: "O procedimento leva de 1 a 3 horas dependendo do modelo e versão do Android." },
      { question: "Perco meus dados no desbloqueio?", answer: "Na maioria dos casos de FRP, os dados já foram perdidos na restauração de fábrica. Para Mi Cloud, há possibilidade de preservar dados em alguns modelos." }
    ],
    sections: [],
    relatedSlugs: ["xiaomi-poco-reiniciando-sozinho-salvador", "assistencia-realme-poco-salvador-pecas"]
  },
  {
    slug: "troca-vidro-vs-tela-completa-economia-salvador",
    title: "Troca de Vidro vs Tela Completa: Quando Economizar | Salvador",
    h1: "Troca de Vidro vs Troca de Tela Completa: Quando Você Pode Economizar no Conserto",
    metaDescription: "Vidro do celular quebrado? Saiba quando pode trocar só o vidro e quando precisa trocar a tela completa. Reparo Avançado - Boca do Rio, Salvador.",
    category: "samsung" as Category,
    brand: "Diversos",
    model: "Smartphones",
    service: "Troca de Vidro vs Tela",
    serviceSlug: "troca-vidro-vs-tela-editorial",
    description: "Entenda a diferença entre trocar só o vidro e trocar a tela completa, e quando cada opção é viável para economizar.",
    isEditorial: true,
    keywords: ["troca de vidro celular", "trocar só o vidro", "troca tela completa", "vidro ou tela", "troca vidro samsung salvador"],
    problems: [
      "Vidro trincado mas tela funcionando normalmente",
      "Touch funciona perfeitamente apesar da trinca",
      "Dúvida se precisa trocar tela inteira ou só vidro",
      "Preço alto da troca de tela completa"
    ],
    causes: [
      "Queda que trincou apenas a camada de vidro",
      "Impacto que danificou vidro e display",
      "Pressão que causou trinca sem afetar o LCD/OLED"
    ],
    solution: `A troca apenas do vidro (refurbish) é possível quando o LCD/OLED e o touch estão funcionando 100% — apenas a camada de vidro frontal está trincada. Na Reparo Avançado, utilizamos máquina separadora profissional e OCA (adesivo óptico claro) para realizar a troca de vidro com acabamento de fábrica. Quando o display tem manchas, linhas ou touch com falha, a troca da tela completa é necessária. ${LOCAL_SEO}`,
    whenToSeek: "Traga para diagnóstico gratuito — analisamos se o display interno está intacto e se a troca apenas do vidro é viável para o seu modelo.",
    costInfo: `A troca de vidro custa em média 40-60% menos que a troca de tela completa. Diagnóstico gratuito para determinar a melhor opção. ${CTA_TEXT}.`,
    faq: [
      { question: "Como saber se posso trocar só o vidro?", answer: "Se a tela mostra imagem perfeita (sem manchas, linhas ou cores estranhas) e o touch responde em todas as áreas, é provável que apenas o vidro esteja danificado. Trazendo à Reparo Avançado, confirmamos com diagnóstico visual." },
      { question: "A troca de vidro fica com a mesma qualidade?", answer: "Sim! Utilizamos OCA (adesivo óptico claro) e máquina profissional que garante acabamento sem bolhas e com a mesma transparência visual." },
      { question: "Para quais modelos é possível trocar só o vidro?", answer: "A viabilidade depende do modelo e do tipo de dano. Em geral, modelos Samsung Galaxy A e M são os mais indicados para troca de vidro. Modelos com tela curva (Galaxy S Ultra, Z Flip) geralmente exigem troca completa." }
    ],
    sections: [],
    relatedSlugs: ["tela-samsung-mancha-verde-linhas-salvador", "biometria-tela-parou-troca-amoled-salvador", "troca-tela-iphone-true-tone-salvador"]
  },

  // ═══════════════════════════════════════════
  // CLUSTER LIMPEZA E MANUTENÇÃO (10 POSTS)
  // ═══════════════════════════════════════════
  {
    slug: "limpeza-tecnica-celular-sexta-feira-salvador",
    title: "Limpeza Técnica de Celular: Nossa Rotina de Sexta-Feira | Salvador",
    h1: "Limpeza Técnica de Celular: Por Que Fazemos Isso Toda Sexta-Feira na Reparo Avançado",
    metaDescription: "Na Reparo Avançado, toda sexta-feira é dia de limpeza técnica! Saiba por que esse ritual melhora a vida útil do seu celular. Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Limpeza Técnica",
    serviceSlug: "limpeza-tecnica-editorial",
    description: "Conheça a rotina de limpeza técnica da Reparo Avançado e por que a manutenção preventiva é o melhor investimento para seu celular.",
    isEditorial: true,
    keywords: ["limpeza técnica celular", "manutenção celular", "limpeza interna celular", "limpeza preventiva celular", "cuidados celular salvador"],
    problems: [
      "Celular acumulando poeira e sujeira interna",
      "Alto-falante e microfone com som baixo",
      "Conector de carga com mau contato",
      "Superaquecimento por poeira no sistema de ventilação"
    ],
    causes: [
      "Uso diário em ambientes com poeira",
      "Maresia de Salvador que acelera a oxidação",
      "Falta de manutenção preventiva",
      "Poeira, areia e fiapos que entram pelas aberturas"
    ],
    solution: `Na Reparo Avançado, toda sexta-feira realizamos nosso ritual de limpeza técnica para aparelhos de clientes. O processo inclui: abertura do aparelho, remoção de poeira com ar comprimido filtrado, limpeza dos conectores com solvente anti-estático, higienização das grades de áudio e microfone, e inspeção visual da placa sob microscópio. ${LOCAL_SEO}`,
    whenToSeek: "Recomendamos limpeza técnica a cada 6 meses, ou a cada 3 meses para quem mora na orla de Salvador (Pituba, Costa Azul, Imbuí, Boca do Rio, Stiep).",
    costInfo: `Serviço preventivo com excelente custo-benefício. Pode evitar reparos caros no futuro. ${CTA_TEXT}.`,
    faq: [
      { question: "Com que frequência devo fazer limpeza técnica?", answer: "A cada 6 meses para uso normal. A cada 3 meses para quem mora na orla de Salvador ou trabalha em ambientes com poeira. A limpeza preventiva pode evitar reparos caros." },
      { question: "A limpeza técnica abre o celular?", answer: "Sim, abrimos o aparelho para limpeza interna completa. Isso permite inspeção visual de todos os componentes e identificação precoce de problemas como oxidação ou bateria estufando." },
      { question: "Posso trazer meu celular na sexta-feira sem agendar?", answer: "Recomendamos agendar pelo WhatsApp para garantir atendimento no mesmo dia. Nas sextas-feiras temos horários dedicados à limpeza técnica." }
    ],
    sections: [],
    relatedSlugs: ["celular-esquentando-limpeza-interna-salvador", "microfone-ruim-ligacoes-poeira-salvador", "checklist-manutencao-preventiva-salvador"]
  },
  {
    slug: "celular-esquentando-limpeza-interna-salvador",
    title: "Celular Esquentando Muito? Limpeza Interna Evita Queima | Salvador",
    h1: "Celular Esquentando Muito? Como a Limpeza Interna Evita a Queima da Placa",
    metaDescription: "Celular esquentando demais? A limpeza interna pode evitar danos graves à placa. Diagnóstico gratuito na Boca do Rio, Salvador. Reparo Avançado.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Limpeza Interna",
    serviceSlug: "limpeza-interna-editorial",
    description: "Entenda como a sujeira interna faz seu celular esquentar e como a limpeza previne danos graves à placa-mãe.",
    isEditorial: true,
    keywords: ["celular esquentando", "celular aquecendo", "limpeza interna celular", "celular quente", "superaquecimento celular salvador"],
    problems: [
      "Celular muito quente durante uso normal",
      "Esquenta ao carregar",
      "Aquecimento durante chamadas",
      "Apps fechando sozinhos por superaquecimento",
      "Tela escurece automaticamente pelo calor"
    ],
    causes: [
      "Poeira acumulada bloqueando a dissipação de calor",
      "Pasta térmica (em modelos que possuem) ressecada",
      "Bateria degradada gerando calor excessivo",
      "Apps em segundo plano consumindo processador"
    ],
    solution: `O superaquecimento é um sinal de alerta que não deve ser ignorado. Na Reparo Avançado, abrimos o aparelho, realizamos limpeza completa com ar comprimido filtrado, verificamos o estado da bateria (principal causa de aquecimento), e removemos qualquer obstrução no sistema de dissipação térmica. Para celulares com pasta térmica, realizamos a troca com pasta de alta condutividade. ${LOCAL_SEO}`,
    whenToSeek: "Quando o celular esquentar a ponto de ser desconfortável ao toque, quando desligar por superaquecimento, ou quando o carregamento gerar calor excessivo.",
    costInfo: `Limpeza interna com valor acessível que protege o investimento no seu aparelho. ${CTA_TEXT}.`,
    faq: [
      { question: "Celular quente pode queimar a placa?", answer: "Sim! O superaquecimento prolongado pode danificar CIs da placa, degradar soldas (causando mau contato) e até fazer a bateria estufar. A limpeza interna preventiva evita esses problemas." },
      { question: "É normal o celular esquentar um pouco?", answer: "Aquecimento leve durante uso intenso (jogos, câmera, GPS) é normal. O problema é quando esquenta durante uso comum ou fica quente demais ao toque." },
      { question: "A limpeza interna resolve o aquecimento?", answer: "Na maioria dos casos, sim. Se o problema for bateria degradada, indicaremos a troca. Fazemos diagnóstico para identificar a causa exata." }
    ],
    sections: [],
    relatedSlugs: ["limpeza-tecnica-celular-sexta-feira-salvador", "checklist-manutencao-preventiva-salvador", "microfone-ruim-ligacoes-poeira-salvador"]
  },
  {
    slug: "microfone-ruim-ligacoes-poeira-salvador",
    title: "Microfone Ruim nas Ligações? Poeira é a Vilã | Salvador",
    h1: "Microfone Ruim nas Ligações? Veja Como a Poeira é a Maior Inimiga do Seu Áudio",
    metaDescription: "Ninguém te ouve nas ligações? A poeira no microfone pode ser a causa! Higienização profissional na Boca do Rio, Salvador. Reparo Avançado.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Higienização de Microfone",
    serviceSlug: "microfone-poeira-editorial",
    description: "Como a poeira afeta a qualidade do microfone do celular e como a higienização profissional restaura a qualidade das ligações.",
    isEditorial: true,
    keywords: ["microfone celular ruim", "ligação não ouve", "limpeza microfone celular", "microfone com ruído", "audio ligação ruim salvador"],
    problems: [
      "Pessoas não ouvem durante ligações",
      "Áudio captado com chiado ou abafado",
      "Gravação de voz/vídeo com qualidade ruim",
      "Assistente de voz não entende comandos"
    ],
    causes: [
      "Poeira e fiapos bloqueando a grade do microfone",
      "Película ou capinha cobrindo o microfone",
      "Oxidação dos contatos por umidade",
      "Microfone danificado por queda ou líquido"
    ],
    solution: `Em 65% dos casos, a simples higienização profissional da grade do microfone resolve o problema. Utilizamos ferramentas de precisão e solventes anti-estáticos para remover toda obstrução sem danificar o componente. Quando o microfone está realmente danificado, realizamos a troca do módulo com ${PECAS}. ${LOCAL_SEO}`,
    whenToSeek: "Quando pessoas começarem a reclamar que não te ouvem nas ligações ou quando o áudio de vídeos ficar abafado.",
    costInfo: `Higienização rápida e acessível. Diagnóstico gratuito para diferenciar sujeira de defeito. ${CTA_TEXT}.`,
    faq: [
      { question: "Como saber se é sujeira ou microfone queimado?", answer: "Se o problema apareceu gradualmente (piorando com o tempo), é provável sujeira. Se apareceu de repente (após queda ou contato com líquido), pode ser dano no componente. O diagnóstico gratuito confirma." },
      { question: "Posso limpar o microfone em casa?", answer: "Você pode soprar levemente na grade, mas não use objetos pontiagudos. A limpeza profissional é mais segura e eficaz." },
      { question: "Minha capinha pode estar causando o problema?", answer: "Sim! Algumas capinhas mais grossas cobrem parcialmente o microfone inferior. Teste remover a capinha durante uma ligação para verificar." }
    ],
    sections: [],
    relatedSlugs: ["audio-iphone-baixo-ruido-higienizacao-salvador", "limpeza-tecnica-celular-sexta-feira-salvador", "celular-esquentando-limpeza-interna-salvador"]
  },
  {
    slug: "higienizacao-conector-cabo-carregar-salvador",
    title: "Higienização de Conector: Fim do Jeitinho Para Carregar | Salvador",
    h1: "Higienização de Conector: O Fim do 'Jeitinho' Para o Cabo Carregar",
    metaDescription: "Precisa fazer 'jeitinho' para o cabo carregar? A limpeza do conector resolve em 80% dos casos! Reparo Avançado - Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Higienização de Conector",
    serviceSlug: "higienizacao-conector-editorial",
    description: "O 'jeitinho' para o cabo carregar é sinal de conector sujo. Saiba como a higienização profissional resolve rapidamente.",
    isEditorial: true,
    keywords: ["conector celular sujo", "cabo não carrega", "limpeza conector celular", "carregamento intermitente", "jeitinho para carregar"],
    problems: [
      "Precisa inclinar o cabo para carregar",
      "Carregamento intermitente (conecta e desconecta)",
      "Cabo fica frouxo na entrada",
      "Só carrega com um cabo específico"
    ],
    causes: [
      "Acúmulo de poeira e fiapos compactados no conector",
      "Micro-oxidação nos pinos por umidade",
      "Resíduos de bolso (tecido, poeira, migalhas)"
    ],
    solution: `Em 80% dos casos de carregamento intermitente, o problema é simplesmente sujeira compactada no fundo do conector. Na Reparo Avançado, utilizamos ferramentas anti-estáticas e microscópio para remover toda obstrução dos pinos sem danificá-los. O resultado é carregamento firme e estável como novo. ${LOCAL_SEO}`,
    whenToSeek: "Ao primeiro sinal de 'jeitinho' para carregar. Quanto mais tempo esperar, mais compactada fica a sujeira e maior o risco de oxidação nos pinos.",
    costInfo: `Serviço rápido (15-20 minutos) e com ótimo custo-benefício. Muito mais barato que trocar o conector. ${CTA_TEXT}.`,
    faq: [
      { question: "A limpeza do conector resolve mesmo?", answer: "Em 80% dos casos de carregamento intermitente, sim! A causa mais comum é sujeira compactada no conector, e a limpeza profissional resolve completamente." },
      { question: "Posso limpar o conector com palito?", answer: "Não recomendamos. Palitos podem quebrar dentro do conector ou danificar os pinos. Ferramentas anti-estáticas profissionais são muito mais seguras." },
      { question: "Quanto tempo dura a limpeza?", answer: "O procedimento leva de 15 a 20 minutos. Você pode esperar na loja da Boca do Rio enquanto realizamos o serviço." }
    ],
    sections: [],
    relatedSlugs: ["conector-carga-iphone-limpeza-troca-salvador", "erro-umidade-samsung-conector-salvador", "checklist-manutencao-preventiva-salvador"]
  },
  {
    slug: "checklist-manutencao-preventiva-salvador",
    title: "Checklist de Manutenção Preventiva de Celular | Salvador",
    h1: "Checklist de Manutenção Preventiva: O Que Verificamos no Seu Aparelho",
    metaDescription: "Conheça nosso checklist de manutenção preventiva de celular com 15 pontos de verificação. Reparo Avançado - Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Manutenção Preventiva",
    serviceSlug: "manutencao-preventiva-editorial",
    description: "Nosso checklist completo de 15 pontos de verificação na manutenção preventiva do seu celular.",
    isEditorial: true,
    keywords: ["manutenção preventiva celular", "checklist celular", "revisão celular", "prevenção celular", "cuidados celular salvador"],
    problems: [
      "Celular com desempenho degradado ao longo do tempo",
      "Pequenos problemas que se acumulam",
      "Falta de manutenção regular",
      "Desconhecimento sobre o estado real do aparelho"
    ],
    causes: [
      "Uso diário sem manutenção",
      "Poeira e sujeira acumuladas",
      "Desgaste natural de componentes"
    ],
    solution: `Nosso checklist de manutenção preventiva inclui 15 pontos: 1) Estado da bateria e ciclos de carga. 2) Limpeza do conector de carga. 3) Higienização das grades de áudio. 4) Inspeção da tela (touch, LCD, manchas). 5) Teste de câmeras (foco, flash, OIS). 6) Verificação de Face ID/biometria. 7) Teste de microfones. 8) Teste de alto-falantes. 9) Verificação de botões físicos. 10) Inspeção de vedação. 11) Limpeza interna com ar comprimido. 12) Verificação de oxidação na placa. 13) Teste de Wi-Fi e Bluetooth. 14) Teste de sensores (giroscópio, acelerômetro). 15) Relatório completo do estado do aparelho. ${LOCAL_SEO}`,
    whenToSeek: "A cada 6 meses como rotina preventiva. A cada 3 meses para moradores da orla de Salvador.",
    costInfo: `Manutenção preventiva completa com preço acessível. Relatório detalhado do estado do aparelho. ${CTA_TEXT}.`,
    faq: [
      { question: "Quanto tempo leva a manutenção preventiva?", answer: "Nosso checklist completo de 15 pontos leva aproximadamente 1 hora. Você recebe um relatório detalhado do estado do aparelho." },
      { question: "A manutenção preventiva inclui reparo?", answer: "A manutenção preventiva inclui limpeza e diagnóstico. Se identificarmos algum problema, informamos e orçamos o reparo separadamente." },
      { question: "Vale a pena fazer manutenção preventiva em celular novo?", answer: "A partir de 6 meses de uso já recomendamos, especialmente para moradores da orla de Salvador. A prevenção é sempre mais barata que o reparo." }
    ],
    sections: [],
    relatedSlugs: ["limpeza-tecnica-celular-sexta-feira-salvador", "celular-esquentando-limpeza-interna-salvador", "maresia-salvador-corrosao-iphone"]
  },
  {
    slug: "poeira-lente-camera-limpeza-interna-salvador",
    title: "Poeira na Lente da Câmera? Limpeza Interna Devolve a Nitidez | Salvador",
    h1: "Poeira na Lente da Câmera? Como a Limpeza Interna Devolve a Nitidez às Suas Fotos",
    metaDescription: "Fotos embaçadas ou com pontos? Pode ser poeira dentro da lente da câmera. Limpeza interna profissional na Boca do Rio, Salvador. Reparo Avançado.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Limpeza de Câmera",
    serviceSlug: "limpeza-camera-editorial",
    description: "Como a poeira entra na câmera do celular e como a limpeza interna profissional restaura a nitidez das fotos.",
    isEditorial: true,
    keywords: ["poeira lente camera celular", "foto embaçada celular", "limpeza camera celular", "camera celular suja", "foto com mancha"],
    problems: [
      "Fotos embaçadas ou com névoa",
      "Pontos escuros nas fotos",
      "Câmera parece ter 'neblina' permanente",
      "Fotos borradas mesmo com foco travado"
    ],
    causes: [
      "Micro-partículas de poeira entre a lente e o sensor",
      "Vedação da câmera degradada por uso/queda",
      "Umidade condensada internamente"
    ],
    solution: `Na Reparo Avançado, abrimos o módulo da câmera em ambiente controlado e realizamos limpeza das lentes internas e do sensor com ferramentas ópticas de precisão. Removemos toda partícula de poeira e umidade, restaurando a nitidez original das fotos. Quando a lente de proteção externa está danificada, realizamos a substituição. ${LOCAL_SEO}`,
    whenToSeek: "Quando notar névoa, manchas ou pontos persistentes nas fotos que não desaparecem ao limpar a lente externa.",
    costInfo: `Limpeza interna de câmera com preço acessível. Diagnóstico gratuito. ${CTA_TEXT}.`,
    faq: [
      { question: "Como a poeira entra dentro da câmera?", answer: "Com o tempo, a vedação da câmera se degrada, permitindo que micro-partículas de poeira entrem entre a lente e o sensor. Quedas podem acelerar esse processo." },
      { question: "Limpar a lente por fora não resolve?", answer: "Se o problema é poeira interna, não. A sujeira está entre as camadas de lente e o sensor, acessível apenas com abertura do módulo." },
      { question: "A limpeza interna pode danificar a câmera?", answer: "Não quando feita por profissionais. Utilizamos ferramentas ópticas de precisão em ambiente controlado para garantir que nenhum dano ocorra ao sensor." }
    ],
    sections: [],
    relatedSlugs: ["camera-iphone-tremula-manchas-salvador", "limpeza-tecnica-celular-sexta-feira-salvador", "celular-esquentando-limpeza-interna-salvador"]
  },
  {
    slug: "vedacao-celular-protecao-agua-tempo-salvador",
    title: "Vedação de Celular: Por Que Perde Proteção Contra Água | Salvador",
    h1: "Vedação de Celular: Por Que Seu Aparelho Perde a Proteção Contra Água com o Tempo",
    metaDescription: "Sabia que a vedação do celular se degrada? Entenda por que e como manter a proteção contra água. Reparo Avançado - Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Vedação e Proteção",
    serviceSlug: "vedacao-celular-editorial",
    description: "Entenda como e por que a vedação contra água do celular se degrada e o que fazer para manter a proteção.",
    isEditorial: true,
    keywords: ["vedação celular", "celular à prova dágua", "proteção água celular", "ip68 celular", "celular resistente água salvador"],
    problems: [
      "Celular perdeu a resistência à água após reparo",
      "Umidade entrando no aparelho",
      "Confiança excessiva no IP68 de celular antigo",
      "Entrada de água mesmo com certificação"
    ],
    causes: [
      "Degradação natural das borrachas e adesivos de vedação",
      "Abertura anterior sem reposição da vedação",
      "Quedas que descolam as juntas de vedação",
      "Calor extremo que resseca os adesivos"
    ],
    solution: `A vedação contra água dos celulares utiliza borrachas e adesivos especiais que se degradam com o tempo, calor e impactos. Na Reparo Avançado, após qualquer reparo que envolva abertura do aparelho, substituímos toda a vedação com adesivos de qualidade equivalente à original. Também oferecemos o serviço de revedação como manutenção preventiva. ${LOCAL_SEO}`,
    whenToSeek: "Após 1 ano de uso, após qualquer reparo que abriu o aparelho, ou após quedas significativas. Se pretende usar o celular na praia ou piscina, considere a revedação.",
    costInfo: `Revedação como serviço avulso ou incluída em reparos que abrem o aparelho. ${CTA_TEXT}.`,
    faq: [
      { question: "A certificação IP68 é permanente?", answer: "Não! A vedação se degrada com o tempo, calor, quedas e uso. Após 1 ano, a proteção já não é a mesma de fábrica. A Apple inclusive não cobre danos por líquido na garantia." },
      { question: "Após trocar a tela, o celular perde a vedação?", answer: "Sim, se a assistência não repuser o adesivo de vedação. Na Reparo Avançado, sempre substituímos a vedação após qualquer reparo que envolva abertura do aparelho." },
      { question: "Posso levar meu celular na praia?", answer: "Com cautela. Mesmo celulares com IP68 novo não são resistentes a água salgada. Recomendamos capas impermeáveis para uso na praia e limpeza preventiva após exposição à maresia." }
    ],
    sections: [],
    relatedSlugs: ["iphone-caiu-na-agua-desoxidacao-salvador", "maresia-salvador-corrosao-iphone", "cuidados-maresia-orla-salvador-limpeza"]
  },
  {
    slug: "cuidados-maresia-orla-salvador-limpeza",
    title: "Cuidados com a Maresia: Limpeza Para Quem Mora na Orla | Salvador",
    h1: "Cuidados com a Maresia: Por Que Quem Mora na Orla de Salvador Precisa de Limpeza Técnica",
    metaDescription: "Mora na orla de Salvador? A maresia corrói seu celular por dentro! Limpeza técnica especializada na Boca do Rio. Reparo Avançado.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Proteção contra Maresia",
    serviceSlug: "maresia-orla-editorial",
    description: "Por que moradores da orla de Salvador devem fazer limpeza técnica regularmente para proteger o celular da maresia.",
    isEditorial: true,
    keywords: ["maresia celular", "cuidados celular praia salvador", "limpeza celular orla", "corrosão celular maresia", "proteção celular maresia"],
    problems: [
      "Corrosão interna por exposição constante à maresia",
      "Botões travando por oxidação",
      "Conector de carga com mau contato",
      "Degradação prematura de componentes"
    ],
    causes: [
      "Atmosfera salina constante na orla de Salvador (Pituba, Costa Azul, Imbuí, Boca do Rio, Stiep)",
      "Areia do litoral que transporta sal para dentro do aparelho",
      "Umidade relativa elevada do clima tropical"
    ],
    solution: `Para moradores da orla de Salvador, oferecemos um programa de manutenção preventiva contra maresia. Realizamos limpeza interna trimestral com remoção de micro-oxidação, aplicação de proteção nos contatos e verificação de vedação. Esse programa pode estender a vida útil do seu celular em anos. ${LOCAL_SEO}`,
    whenToSeek: "Se você mora ou trabalha na orla de Salvador (Pituba, Costa Azul, Imbuí, Stiep, Boca do Rio), agende sua primeira limpeza agora.",
    costInfo: `Oferecemos planos de manutenção trimestral com desconto progressivo. ${CTA_TEXT}.`,
    faq: [
      { question: "A maresia realmente estraga o celular?", answer: "Sim! O sal presente no ar úmido da orla corrói contatos, trilhas da placa e conectores. É um dos problemas mais comuns em nossa loja na Boca do Rio." },
      { question: "Moro na Pituba, preciso de limpeza mais frequente?", answer: "A Pituba é um dos bairros mais expostos à maresia. Recomendamos limpeza técnica a cada 3 meses para proteger seu aparelho." },
      { question: "Capinha à prova d'água protege da maresia?", answer: "Parcialmente. A maresia é um aerossol que penetra por qualquer abertura. A proteção real é a limpeza interna periódica para remover o sal depositado." }
    ],
    sections: [],
    relatedSlugs: ["maresia-salvador-corrosao-iphone", "limpeza-tecnica-celular-sexta-feira-salvador", "vedacao-celular-protecao-agua-tempo-salvador"]
  },
  {
    slug: "mitos-verdades-celular-no-arroz-salvador",
    title: "Mitos e Verdades: Celular no Arroz Funciona? | Salvador",
    h1: "Mitos e Verdades: Colocar o Celular no Arroz Realmente Funciona?",
    metaDescription: "Celular molhado no arroz funciona? Desmistificamos esse e outros mitos sobre reparos. Reparo Avançado - Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Geral",
    model: "Todos",
    service: "Mitos sobre Reparos",
    serviceSlug: "mitos-verdades-editorial",
    description: "Desmistificamos os maiores mitos sobre conserto de celular, começando pelo famoso 'arroz'.",
    isEditorial: true,
    keywords: ["celular no arroz funciona", "mitos conserto celular", "celular molhado arroz", "verdades reparo celular", "mitos celular"],
    problems: [
      "Informações erradas sobre como resolver problemas do celular",
      "Tentativas caseiras que pioram o dano",
      "Demora em procurar ajuda profissional por confiar em mitos"
    ],
    causes: [
      "Informações incorretas disseminadas na internet e redes sociais",
      "Falta de conhecimento técnico do público geral"
    ],
    solution: `Vamos desmentir os principais mitos: 1) ARROZ NÃO FUNCIONA — o arroz não remove umidade interna e pode introduzir amido nos conectores. 2) SECADOR DE CABELO É PERIGOSO — o calor pode derreter componentes e espalhar a umidade. 3) CONGELAR O CELULAR NÃO RESOLVE NADA — pode causar condensação interna. 4) PELÍCULA NÃO PROTEGE CONTRA QUEDAS FORTES — ela protege contra riscos, não contra impacto. 5) CELULAR 'À PROVA D'ÁGUA' NÃO É INDESTRUTÍVEL. A solução real é sempre buscar assistência técnica qualificada. ${LOCAL_SEO}`,
    whenToSeek: "Sempre que tiver um problema com o celular. Não tente soluções caseiras que podem piorar o dano. Diagnóstico gratuito na Reparo Avançado.",
    costInfo: `Diagnóstico gratuito para qualquer problema. Pare de arriscar com mitos e tenha certeza com profissionais. ${CTA_TEXT}.`,
    faq: [
      { question: "Colocar o celular no arroz funciona?", answer: "NÃO. O arroz não absorve a umidade de dentro do celular. Pior, pode introduzir partículas de amido nos conectores e causar oxidação adicional. A solução correta é desoxidação profissional." },
      { question: "Posso usar secador de cabelo no celular molhado?", answer: "NÃO. O calor do secador pode derreter adesivos internos, deformar componentes plásticos e empurrar a umidade para áreas mais profundas da placa." },
      { question: "Celular IP68 pode ser lavado na torneira?", answer: "Não recomendamos. A pressão da água da torneira é muito maior do que os testes de certificação IP68. Além disso, a vedação se degrada com o tempo." }
    ],
    sections: [],
    relatedSlugs: ["iphone-caiu-na-agua-desoxidacao-salvador", "vedacao-celular-protecao-agua-tempo-salvador", "limpeza-tecnica-celular-sexta-feira-salvador"]
  },
  {
    slug: "reparo-avancado-melhor-avaliacao-boca-do-rio",
    title: "Por Que Somos a Melhor Avaliação da Boca do Rio | Reparo Avançado",
    h1: "Por Que a Reparo Avançado é a Melhor Avaliação da Boca do Rio? Nossos Processos Técnicos",
    metaDescription: "5 estrelas no Google com 31+ avaliações! Conheça os processos técnicos que fazem da Reparo Avançado a melhor assistência da Boca do Rio, Salvador.",
    category: "iphone" as Category,
    brand: "Reparo Avançado",
    model: "Institucional",
    service: "Nossos Processos",
    serviceSlug: "nossos-processos-editorial",
    description: "Conheça os processos técnicos e a filosofia que tornam a Reparo Avançado a assistência mais bem avaliada da Boca do Rio, Salvador.",
    isEditorial: true,
    keywords: ["reparo avançado salvador", "melhor assistência técnica boca do rio", "assistência celular 5 estrelas salvador", "conserto celular qualidade salvador"],
    problems: [
      "Dificuldade em encontrar assistência confiável em Salvador",
      "Experiências ruins com assistências técnicas",
      "Medo de entregar o celular para conserto",
      "Falta de transparência no diagnóstico e preço"
    ],
    causes: [
      "Mercado com muitas assistências sem qualificação adequada",
      "Falta de transparência é comum no segmento",
      "Uso de peças de baixa qualidade sem informar o cliente"
    ],
    solution: `O que nos diferencia: 1) DIAGNÓSTICO GRATUITO E TRANSPARENTE — você sabe exatamente o que tem e quanto custa antes de aprovar. 2) PEÇAS DE ALTA PERFORMANCE — ${PECAS}, jamais componentes genéricos de baixa qualidade. 3) GARANTIA EM TODOS OS SERVIÇOS. 4) EQUIPAMENTO PROFISSIONAL — microscópio, estação BGA, câmera térmica, banho ultrassônico. 5) ATUALIZAÇÃO CONSTANTE — nossos técnicos se atualizam com cada novo modelo lançado. 6) HONESTIDADE — se não vale a pena consertar, dizemos isso. ${LOCAL_SEO}`,
    whenToSeek: "Para qualquer problema com seu celular ou notebook. Primeira consulta sempre gratuita.",
    costInfo: `Diagnóstico gratuito. Orçamento transparente. Garantia em todos os serviços. ${CTA_TEXT}.`,
    faq: [
      { question: "Quantas avaliações a Reparo Avançado tem no Google?", answer: "Mais de 31 avaliações com nota máxima (5 estrelas). Nossos clientes destacam a transparência, qualidade das peças e atendimento profissional." },
      { question: "Vocês oferecem garantia nos reparos?", answer: "Sim! Todos os nossos serviços possuem garantia. O período varia de 3 a 6 meses conforme o tipo de reparo." },
      { question: "Posso acompanhar o reparo do meu celular?", answer: "Muitos reparos rápidos podem ser acompanhados na loja. Para serviços mais complexos, mantemos você atualizado pelo WhatsApp com fotos e vídeos do processo." }
    ],
    sections: [],
    relatedSlugs: ["limpeza-tecnica-celular-sexta-feira-salvador", "checklist-manutencao-preventiva-salvador", "vale-pena-consertar-iphone-antigo-analise"]
  }
];
