import { BlogPost } from "./blogData";

export const editorialPostsBatch10: BlogPost[] = [
  {
    slug: "celular-carregamento-sem-fio-nao-funciona-salvador",
    title: "Carregamento Sem Fio Não Funciona? Veja as Causas",
    h1: "Celular Não Carrega no Carregador Sem Fio (Wireless ou MagSafe)",
    metaDescription: "Colocou o iPhone ou Samsung no carregador sem fio e não carrega ou carrega muito lento? Entenda as causas (bobina, capinha, alinhamento) e a solução técnica.",
    category: "conserto",
    brand: "Geral",
    model: "iPhone, Samsung e outros com Qi/MagSafe",
    service: "Reparo de Carregamento Sem Fio",
    serviceSlug: "carregamento-sem-fio-editorial",
    description: "Guia técnico sobre falhas no carregamento por indução (Qi/MagSafe). Veja por que o celular esquenta, não carrega ou carrega lento nesses carregadores, e quando o problema está na bobina interna do aparelho.",
    problems: [
      "Celular não reconhece o carregador sem fio (nenhuma reação)",
      "Carregamento começa e para sozinho repetidas vezes",
      "Aparelho esquenta muito no carregador sem fio mas a porcentagem quase não sobe",
      "Só carrega sem fio em uma posição exata da base",
      "MagSafe do iPhone não 'gruda' mais ou cai sozinho",
    ],
    causes: [
      "Capinha muito grossa, com cartões ou suporte metálico atrapalhando o campo magnético",
      "Desalinhamento entre a bobina do celular e a bobina do carregador",
      "Bobina de carregamento sem fio (ou anel magnético do MagSafe) descolada ou danificada por queda",
      "Carregador sem fio de baixa qualidade ou sem certificação",
      "Falha no circuito de gerenciamento de energia da placa-mãe",
    ],
    solution: "Teste com carregador certificado sem capinha para isolar a causa. Se persistir, reparo ou substituição da bobina de indução/anel MagSafe, ou reparo do circuito de energia na placa.",
    whenToSeek: "Se o problema continuar mesmo sem capinha e com o carregador bem posicionado, ou se o aparelho esquentar muito sem carregar de verdade.",
    costInfo: "Diagnóstico gratuito para identificar se é a bobina, o carregador ou a placa.",
    relatedSlugs: ["celular-esquentando-descarregando-rapido-bateria", "conector-carga-iphone-mau-contato-limpeza-troca"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    keywords: [
      "carregamento sem fio não funciona",
      "magsafe não carrega",
      "wireless charger não funciona",
      "iphone não carrega sem fio",
      "samsung não carrega sem fio",
      "conserto bobina carregamento",
    ],
    faq: [
      {
        question: "Capinha atrapalha o carregamento sem fio?",
        answer: "Sim. Capinhas muito grossas (acima de 3mm), com placas metálicas internas, porta-cartão magnético ou suportes de carro podem bloquear ou desalinhar o campo de indução, fazendo o celular não carregar ou carregar bem mais devagar.",
      },
      {
        question: "Por que o MagSafe do iPhone parou de 'grudar' no carregador?",
        answer: "O MagSafe usa um anel de ímãs ao redor da bobina de carregamento. Quedas ou o uso de capinhas muito grossas com ímãs incompatíveis podem enfraquecer essa fixação com o tempo, ou até deslocar o anel internamente.",
      },
    ],
    sections: [
      {
        id: "sintomas",
        title: "Quando o Carregamento Sem Fio Para de Funcionar Direito",
        content:
          "O carregamento por indução é prático, mas também mais sensível do que o cabo tradicional. É comum o celular simplesmente não reagir ao ser colocado na base, ou começar a carregar e parar sozinho poucos segundos depois, repetindo esse ciclo várias vezes.\n\nOutro sintoma frequente é o aparelho esquentar bastante em cima do carregador, mas a porcentagem de bateria mal se mexer. No caso do iPhone com MagSafe, também é comum o usuário notar que o encaixe magnético ficou fraco, exigindo ajustar a posição várias vezes até o ícone de raio aparecer na tela.",
      },
      {
        id: "causas",
        title: "Por Que Isso Acontece?",
        content:
          "O carregamento sem fio depende de duas bobinas alinhadas transferindo energia por campo magnético. Qualquer coisa entre elas ou fora do alinhamento reduz a eficiência:\n\n**1. Capinha ou Acessórios:** É a causa mais comum e mais fácil de descartar. Capas grossas, com suporte para cartão ou placa de metal interna, interferem diretamente no campo magnético.\n\n**2. Desalinhamento:** A bobina do celular é pequena. Poucos milímetros de diferença na posição já reduzem drasticamente a eficiência da carga, especialmente em carregadores sem alinhamento magnético (não-MagSafe).\n\n**3. Bobina Danificada:** Quedas podem descolar ou romper o flat da bobina de indução dentro do aparelho, ou deslocar o anel de ímãs do MagSafe, que fica colado internamente próximo à bateria.\n\n**4. Falha no Circuito de Energia:** Em casos mais raros, o componente da placa-mãe responsável por gerenciar a energia recebida por indução apresenta defeito, e nem carregador com fio nem sem fio funcionam corretamente.",
      },
      {
        id: "solucao",
        title: "Como Resolvemos na Reparo Avançado",
        content:
          "Primeiro, testamos o aparelho sem capinha em um carregador sem fio certificado, para eliminar a causa mais simples. Se o problema persistir, verificamos o estado físico e elétrico da bobina de indução (ou do anel MagSafe, no caso do iPhone) e, quando necessário, medimos as linhas de energia na placa-mãe com equipamento de precisão.\n\nDependendo do diagnóstico, o reparo pode ser a simples troca da bobina/flat de carregamento sem fio ou, em casos mais complexos, a correção do circuito de energia na placa. Fazemos esse diagnóstico gratuitamente antes de qualquer orçamento.",
      },
    ],
  },
  {
    slug: "vidro-traseiro-samsung-quebrado-troca-salvador",
    title: "Vidro Traseiro do Samsung Quebrado? Como Consertar",
    h1: "Vidro Traseiro do Samsung Galaxy Rachado ou Quebrado",
    metaDescription: "A tampa de vidro traseira do seu Samsung Galaxy trincou ou quebrou? Entenda os riscos de deixar assim e como a troca a laser resolve sem mexer na placa.",
    category: "samsung",
    brand: "Samsung",
    model: "Galaxy (S, A, M, Note, Z Flip/Fold)",
    service: "Troca de Vidro Traseiro",
    serviceSlug: "vidro-traseiro-samsung-editorial",
    description: "Como funciona a substituição do vidro traseiro em smartphones Samsung Galaxy, incluindo os riscos de continuar usando o aparelho com a tampa rachada e por que a técnica a laser preserva a placa-mãe.",
    problems: [
      "Vidro traseiro trincado após queda, mesmo com a tela frontal intacta",
      "Estilhaços de vidro soltando ou cortando as mãos",
      "Câmera traseira com infiltração de poeira pela rachadura",
      "Aparelho perdendo a certificação de resistência à água (IP68)",
      "Bordas afiadas arranhando a mesa ou o bolso",
    ],
    causes: [
      "Queda com impacto direto na parte de trás do aparelho",
      "Pressão excessiva ao sentar com o celular no bolso traseiro",
      "Vidro frágil de fábrica em modelos com curvatura 3D",
      "Desgaste e microfissuras acumuladas por pequenos impactos",
    ],
    solution: "Remoção do vidro traseiro danificado com laser de precisão (sem calor excessivo na placa) e colagem de um novo vidro com padrão de fábrica, preservando a vedação original.",
    whenToSeek: "Assim que notar a rachadura, mesmo que pequena. Trincas se espalham com o tempo e comprometem a proteção contra poeira e água.",
    costInfo: "Orçamento gratuito e sem compromisso, com diagnóstico do estado da vedação interna.",
    relatedSlugs: ["vidro-traseiro-iphone-reparo-laser-salvador", "erro-umidade-samsung-conector-salvador"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    keywords: [
      "vidro traseiro samsung quebrado",
      "tampa traseira galaxy trincada",
      "troca vidro traseiro samsung",
      "conserto vidro traseiro a laser",
      "samsung galaxy vidro rachado",
    ],
    faq: [
      {
        question: "Dá para trocar só o vidro traseiro sem mexer na placa do Samsung?",
        answer: "Sim. A técnica a laser remove apenas a camada de vidro colada sobre a carcaça metálica, sem necessidade de desmontar ou remover a placa-mãe, que fica protegida durante todo o processo.",
      },
      {
        question: "Posso continuar usando o Samsung com o vidro traseiro rachado?",
        answer: "Não é recomendado por muito tempo. Além do risco de corte, a rachadura compromete a vedação contra poeira e umidade (certificação IP), podendo causar oxidação interna e problemas na placa mais adiante.",
      },
    ],
    sections: [
      {
        id: "sintomas",
        title: "O Vidro Trincou, Mas a Tela Está Perfeita",
        content:
          "É uma situação comum: o Samsung cai de costas, a tela frontal continua funcionando 100%, mas o vidro traseiro fica com uma rachadura visível, às vezes em forma de teia. Muita gente ignora o problema por achar que é 'só estética', mas essa trinca abre caminho direto para poeira e umidade entrarem no aparelho.\n\nCom o tempo, os cacos podem começar a soltar, principalmente perto das bordas, e é comum sentir bordas afiadas ao segurar o celular sem capinha.",
      },
      {
        id: "causas",
        title: "Por Que o Vidro Traseiro Quebra Tão Fácil?",
        content:
          "Os modelos mais recentes da linha Galaxy usam vidro com curvatura nas bordas (efeito 3D), que é esteticamente bonito mas mais frágil em impactos de canto. Uma queda de pouca altura, direto na quina traseira, já é suficiente para rachar o vidro mesmo com a tela protegida por uma capinha simples.\n\nSentar com o celular no bolso de trás também é uma causa muito comum: o peso do corpo cria uma pressão que o vidro não é feito para suportar.",
      },
      {
        id: "solucao",
        title: "A Técnica a Laser da Reparo Avançado",
        content:
          "Diferente de métodos artesanais que usam calor de secador ou fio de nylon (que podem danificar a bateria e os flexes internos), utilizamos um processo com laser de precisão para remover apenas a camada de vidro colada, sem transferir calor excessivo para dentro do aparelho.\n\nDepois da remoção, aplicamos um novo vidro com padrão de fábrica e refazemos a colagem seguindo o processo original, devolvendo o visual e, o mais importante, a proteção contra poeira e respingos de água. Todo o serviço é feito sem necessidade de desmontar a placa-mãe do seu Galaxy.",
      },
    ],
  },
  {
    slug: "notebook-teclado-nao-funciona-teclas-travando-salvador",
    title: "Teclado do Notebook Travando ou Algumas Teclas Não Funcionam?",
    h1: "Notebook com Teclas Travando, Repetindo ou Sem Resposta",
    metaDescription: "Algumas teclas do seu notebook pararam de funcionar, repetem letras sozinhas ou travam? Entenda se o problema é sujeira, membrana ou a placa-mãe.",
    category: "notebooks",
    brand: "Geral",
    model: "Dell, Lenovo, Acer, HP, Asus",
    service: "Reparo/Troca de Teclado",
    serviceSlug: "teclado-notebook-editorial",
    description: "Diagnóstico técnico de falhas no teclado de notebooks: teclas que não respondem, digitação duplicada e teclado totalmente sem resposta. Veja como diferenciar problema de membrana, cabo flat ou placa-mãe.",
    problems: [
      "Uma ou mais teclas específicas não respondem ao toque",
      "Tecla digita a letra repetida várias vezes sozinha",
      "Teclado inteiro parou de funcionar do nada",
      "Teclas funcionam só quando pressionadas com muita força",
      "Líquido caiu no teclado e algumas teclas pararam depois",
    ],
    causes: [
      "Acúmulo de sujeira, poeira e migalhas entre as teclas",
      "Derramamento de líquido (café, água, refrigerante) danificando a membrana",
      "Membrana de contato desgastada pelo uso prolongado",
      "Cabo flat do teclado com mau contato ou desconectado da placa-mãe",
      "Falha no controlador do teclado na placa-mãe",
    ],
    solution: "Limpeza técnica profunda da membrana, substituição do teclado completo quando danificado por líquido, ou reparo do cabo flat/conector na placa-mãe.",
    whenToSeek: "Se a limpeza básica (soprar e usar um pano seco) não resolver, ou se o problema começou logo após derramar algum líquido no notebook.",
    costInfo: "Diagnóstico gratuito para identificar se é a membrana, o cabo flat ou a placa-mãe.",
    relatedSlugs: ["notebook-esquentando-desligando-sozinho", "notebook-nao-liga-tela-preta-liga-mas-nao-mostra-nada"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    keywords: [
      "teclado notebook não funciona",
      "tecla do notebook travando",
      "notebook digitando letra repetida",
      "teclado notebook não responde",
      "conserto teclado notebook",
    ],
    faq: [
      {
        question: "Café ou água caiu no teclado do notebook, o que eu faço primeiro?",
        answer: "Desligue o notebook imediatamente e não ligue novamente até uma diagnóstico técnico. Ligar o aparelho molhado pode levar o líquido a curto-circuitar componentes na placa-mãe, transformando um problema simples de teclado em um problema muito mais caro.",
      },
      {
        question: "Por que só uma tecla específica parou de funcionar?",
        answer: "Isso costuma indicar sujeira acumulada bem embaixo daquela tecla ou desgaste pontual da membrana de contato naquele ponto específico, e não um problema geral na placa-mãe, que normalmente afeta várias teclas ao mesmo tempo ou o teclado inteiro.",
      },
    ],
    sections: [
      {
        id: "sintomas",
        title: "Quando o Teclado Começa a Dar Problema",
        content:
          "O teclado é uma das partes mais usadas do notebook, e também uma das mais expostas: migalhas, poeira e líquidos passam boa parte do tempo por cima dele. Os sintomas variam desde uma única tecla que parou de responder até letras que aparecem repetidas sozinhas na tela, como se estivessem presas.\n\nEm casos mais sérios, o teclado inteiro para de funcionar de uma vez, geralmente depois de um derramamento de líquido ou de uma pancada mais forte no notebook.",
      },
      {
        id: "causas",
        title: "O Que Está Por Trás da Falha",
        content:
          "**1. Sujeira Acumulada:** É a causa mais comum e a mais simples de resolver. Migalhas e poeira se acumulam sob as teclas e impedem o contato correto com a membrana.\n\n**2. Dano por Líquido:** Café, água ou refrigerante criam uma película pegajosa sobre a membrana do teclado, fazendo teclas grudarem ou pararem de responder — e, em casos piores, o líquido escorre até a placa-mãe.\n\n**3. Desgaste da Membrana:** Depois de muitos anos de uso, a camada de contato sob as teclas perde a sensibilidade, exigindo mais força para registrar o toque.\n\n**4. Cabo Flat ou Placa-Mãe:** Quando o teclado inteiro para de responder do nada, sem explicação aparente, o problema costuma estar no cabo flat que conecta o teclado à placa, ou no próprio controlador na placa-mãe.",
      },
      {
        id: "solucao",
        title: "Como Diagnosticamos e Resolvemos",
        content:
          "Começamos com uma limpeza técnica profunda, removendo as teclas com cuidado (quando o modelo permite) para higienizar a membrana sem danificar os encaixes. Se o problema veio de líquido derramado, avaliamos também a placa-mãe em busca de sinais de oxidação nas proximidades do conector do teclado.\n\nQuando a membrana está desgastada ou danificada, fazemos a substituição do teclado completo com peça compatível ao modelo. Se o problema for no cabo flat ou no controlador da placa, realizamos o reparo eletrônico necessário. Traga seu notebook para um diagnóstico gratuito antes de decidir pela troca.",
      },
    ],
  },
  {
    slug: "realme-tela-quebrada-touch-nao-funciona-salvador",
    title: "Realme com Tela Quebrada ou Touch Não Funciona? Veja a Solução",
    h1: "Realme: Tela Trincada, Touch Sem Resposta ou Manchas no Display",
    metaDescription: "Tela do seu Realme quebrou, o touch parou de responder ou apareceram manchas no display? Veja as causas mais comuns e como a troca de tela resolve.",
    category: "realme",
    brand: "Realme",
    model: "Realme (linhas C, Narzo, GT)",
    service: "Troca de Tela",
    serviceSlug: "troca-de-tela-realme-editorial",
    description: "Guia sobre os problemas de tela mais comuns nos smartphones Realme, incluindo vidro trincado, touch sem resposta e manchas no display, com explicação sobre como funciona a troca do módulo completo.",
    problems: [
      "Vidro da tela trincado ou estilhaçado após queda",
      "Touch não responde em parte ou em toda a tela",
      "Manchas escuras ou 'borrões' espalhando pelo display",
      "Tela pisca ou fica com listras coloridas",
      "Display acende mas a imagem fica distorcida",
    ],
    causes: [
      "Queda ou impacto direto sobre a tela",
      "Pressão excessiva no bolso ou na mochila",
      "Microfissuras na camada de touch mesmo sem quebrar o vidro visivelmente",
      "Defeito no cabo flat que conecta o display à placa-mãe",
      "Uso de peças de reposição de baixa qualidade em conserto anterior",
    ],
    solution: "Substituição do módulo de tela completo (display + touch + vidro) com peça de alta performance compatível com o modelo do seu Realme.",
    whenToSeek: "Assim que perceber qualquer trinca, mancha ou falha de toque, para evitar que o problema se espalhe para mais áreas da tela.",
    costInfo: "Orçamento gratuito e sem compromisso, com peças disponíveis para os principais modelos da linha Realme.",
    relatedSlugs: ["loja-realme-poco-salvador-pecas", "celular-tela-touch-nao-responde-partes"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    keywords: [
      "realme tela quebrada",
      "touch realme não funciona",
      "troca de tela realme",
      "realme tela manchada",
      "conserto realme salvador",
    ],
    faq: [
      {
        question: "É fácil encontrar peça de tela para Realme em Salvador?",
        answer: "Sim, na Reparo Avançado trabalhamos com peças de alta performance para os principais modelos das linhas Realme C, Narzo e GT, com disponibilidade rápida e orçamento na hora pelo WhatsApp.",
      },
      {
        question: "Meu Realme caiu e o vidro não trincou, mas o touch parou de funcionar em um canto. Por quê?",
        answer: "Mesmo sem rachar visivelmente, o impacto pode gerar microfissuras na camada capacitiva interna do touch, que fica abaixo do vidro. Essa área danificada perde a sensibilidade ao toque mesmo com o vidro aparentemente intacto.",
      },
    ],
    sections: [
      {
        id: "sintomas",
        title: "Problemas de Tela no Realme",
        content:
          "Os smartphones Realme se popularizaram por entregar um bom desempenho com preço acessível, mas assim como qualquer outro aparelho, a tela é a parte mais exposta a quedas e impactos do dia a dia. O sintoma mais óbvio é o vidro trincado, mas também é comum o touch parar de responder em uma área específica, ou surgirem manchas escuras que vão se espalhando aos poucos pelo display.\n\nEm alguns casos, a tela acende normalmente, mas a imagem aparece distorcida ou com listras coloridas, indicando um problema mais interno no conector do display.",
      },
      {
        id: "causas",
        title: "Por Que a Tela do Realme Falha?",
        content:
          "A causa mais comum, de longe, é a queda ou impacto direto. Diferente do que muitos pensam, nem sempre é preciso o vidro trincar para o touch parar de funcionar: microfissuras na camada capacitiva interna, invisíveis a olho nu, já são suficientes para criar 'zonas mortas' no toque.\n\nOutro ponto de atenção é o conserto feito com peças de baixa qualidade em oficinas não especializadas, que costuma resultar em manchas, brilho irregular ou falhas prematuras de touch poucos meses depois da troca.",
      },
      {
        id: "solucao",
        title: "Como Resolvemos na Reparo Avançado",
        content:
          "Fazemos a substituição completa do módulo de tela (display, touch e vidro) usando peças de alta performance compatíveis com o modelo específico do seu Realme, garantindo fidelidade de cores e sensibilidade de toque próximas ao padrão original.\n\nApós a troca, testamos toda a área da tela em busca de zonas mortas, calibramos o brilho automático e verificamos o encaixe do vidro para manter a proteção do aparelho. Traga seu Realme para um orçamento gratuito e sem compromisso.",
      },
    ],
  },
  {
    slug: "celular-vibracao-nao-funciona-motor-vibracall-salvador",
    title: "Celular Parou de Vibrar? Entenda o Problema no Motor de Vibração",
    h1: "Celular Sem Vibração em Chamadas, Notificações ou Toque na Tela",
    metaDescription: "Seu celular parou de vibrar em ligações, mensagens ou ao digitar? Veja se o problema é o motor vibracall, o software ou a placa, e como resolver.",
    category: "conserto",
    brand: "Geral",
    model: "iPhone, Samsung, Xiaomi, Motorola e outros",
    service: "Reparo de Motor de Vibração",
    serviceSlug: "vibracao-celular-editorial",
    description: "Entenda por que o celular deixa de vibrar em chamadas e notificações mesmo com as configurações corretas, e a diferença entre falha no motor vibracall, no software e na placa-mãe.",
    problems: [
      "Celular não vibra mais em ligações recebidas",
      "Vibração de notificações e mensagens parou de funcionar",
      "Vibração ao digitar no teclado (feedback háptico) sumiu",
      "Vibração ficou fraca, quase imperceptível",
      "Vibração funciona só às vezes, de forma aleatória",
    ],
    causes: [
      "Motor de vibração (vibracall) desgastado ou com mau contato",
      "Configuração de vibração desativada acidentalmente no sistema",
      "Queda do aparelho deslocando ou danificando o motor interno",
      "Entrada de líquido afetando o componente ou seu conector",
      "Falha na linha de alimentação do motor na placa-mãe",
    ],
    solution: "Verificação das configurações de sistema, seguida de teste elétrico do motor de vibração. Quando necessário, substituição do motor vibracall ou reparo da linha de alimentação na placa.",
    whenToSeek: "Depois de checar que a vibração está ativada nas configurações e o modo silencioso não é a causa, se o celular continuar sem vibrar.",
    costInfo: "Diagnóstico gratuito para confirmar se é configuração, componente ou placa.",
    relatedSlugs: ["celular-tela-touch-nao-responde-partes", "celular-esquentando-descarregando-rapido-bateria"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split("T")[0],
    dateModified: new Date().toISOString().split("T")[0],
    keywords: [
      "celular não vibra",
      "motor de vibração quebrado",
      "vibracall não funciona",
      "celular parou de vibrar",
      "conserto motor vibração celular",
    ],
    faq: [
      {
        question: "Antes de levar para conserto, o que eu posso checar em casa?",
        answer: "Verifique se o modo silencioso/vibrar está ativado corretamente (a chave lateral no iPhone, ou o ícone na barra de notificações no Android) e confira se a intensidade de vibração não está configurada no mínimo em Ajustes de Som e Vibração.",
      },
      {
        question: "O motor de vibração some do celular quando ele cai?",
        answer: "O motor não some, mas pode se deslocar ou ter seu conector danificado com o impacto, perdendo o contato elétrico com a placa-mãe. Nesses casos, o motor continua fisicamente no aparelho, mas para de funcionar.",
      },
    ],
    sections: [
      {
        id: "sintomas",
        title: "Quando a Vibração Simplesmente Some",
        content:
          "A vibração é um recurso que a gente só percebe quando falta: ligações passam despercebidas, notificações silenciosas somem no bolso e até a digitação no teclado perde aquele leve retorno tátil. O problema pode ser total, com o celular completamente sem vibração em qualquer situação, ou parcial, funcionando só em alguns momentos de forma aleatória.\n\nAntes de pensar em conserto, vale sempre checar as configurações do aparelho, já que é comum o modo de vibração ser desativado sem querer ao mexer nos ajustes de som.",
      },
      {
        id: "causas",
        title: "Por Que o Celular Para de Vibrar?",
        content:
          "**1. Configuração de Sistema:** A causa mais simples e mais comum de todas. Um toque acidental na chave lateral (iPhone) ou nas configurações de som e vibração (Android) já é suficiente para desativar o recurso.\n\n**2. Motor Vibracall Desgastado:** É um pequeno componente mecânico com uma massa giratória interna. Com o tempo e o uso, ele naturalmente perde força ou para de funcionar completamente.\n\n**3. Dano por Queda ou Líquido:** Impactos podem deslocar o motor de sua posição ou romper o conector que o liga à placa-mãe. Líquidos também podem causar oxidação no mesmo ponto de contato.\n\n**4. Falha na Placa-Mãe:** Em casos mais raros, o circuito responsável por alimentar o motor de vibração apresenta defeito, e o problema não está no motor em si.",
      },
      {
        id: "solucao",
        title: "Nosso Processo de Diagnóstico",
        content:
          "Primeiro, confirmamos que não é uma questão simples de configuração. Em seguida, testamos eletricamente o motor de vibração para verificar se ele ainda responde a estímulo elétrico direto, o que já indica se o problema está no componente ou na linha de alimentação da placa.\n\nSe o motor estiver desgastado ou danificado, fazemos a substituição por uma peça nova compatível com o modelo. Se o problema estiver na placa-mãe, realizamos o reparo do circuito responsável pela alimentação do componente. Como sempre, o diagnóstico é gratuito e sem compromisso.",
      },
    ],
  },
];
