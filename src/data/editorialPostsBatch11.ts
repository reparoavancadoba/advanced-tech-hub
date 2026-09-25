import { BlogPost } from "./blogData";

const today = new Date().toISOString().split("T")[0];

export const editorialPostsBatch11: BlogPost[] = [
  // ─── ARTIGO 1: iPhone 11 não carrega ────────────────────────────────────────
  {
    slug: "iphone-11-nao-carrega-conector-ou-bateria",
    title: "iPhone 11 Não Carrega: Conector ou Bateria? Como Saber",
    h1: "iPhone 11 Não Carrega: Conector ou Bateria?",
    metaDescription:
      "iPhone 11 não carrega ou carrega devagar? Veja como diferenciar problema de conector, cabo e bateria antes de pagar pelo reparo errado.",
    category: "iphone" as const,
    brand: "Apple",
    model: "iPhone 11",
    service: "conector de carga do iPhone 11",
    serviceSlug: "celular-nao-carrega",
    description:
      "O iPhone 11 é um dos aparelhos mais usados no Brasil até hoje, e um dos defeitos mais comuns nele é justamente parar de carregar — ou carregar só quando o cabo está numa posição exata. Antes de gastar com a peça errada, dá para eliminar algumas causas em casa.",
    problems: [
      "iPhone 11 não carrega ou carrega só em posição específica do cabo",
      "Carregamento intermitente ou muito lento",
      "Bateria despencando de porcentagem sem aviso",
      "Aparelho para de carregar ao mexer no cabo",
    ],
    causes: [
      "Poeira, fiapo ou oxidação dentro do conector Lightning",
      "Conector de carga danificado por uso intenso ou mau contato mecânico",
      "Bateria desgastada com capacidade máxima reduzida",
      "Cabo ou carregador com defeito",
    ],
    solution:
      "Na Reparo Avançado, o diagnóstico do sistema de carga do iPhone 11 é feito antes de qualquer orçamento fechado — você só paga pela peça que realmente precisa trocar.",
    whenToSeek:
      "Se depois de testar outro cabo e carregador originais o problema persistir, ou se a porcentagem de bateria pular ou cair abruptamente.",
    costInfo:
      "Diagnóstico gratuito do sistema de carga. Valor do reparo definido apenas depois de identificar a peça com defeito — conector ou bateria.",
    relatedSlugs: [
      "iphone-15-nao-carrega-usb-c",
      "troca-de-bateria-iphone-salvador-saude-100",
      "por-que-iphone-13-esquenta-muito",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "iphone 11 não carrega",
      "iphone 11 conector de carga",
      "iphone 11 bateria",
      "iphone 11 carrega devagar",
      "conserto iphone 11 salvador",
    ],
    faq: [
      {
        question:
          "Vale a pena consertar o conector de carga do iPhone 11 ou é melhor trocar de aparelho?",
        answer:
          "Sim, quase sempre vale. É um dos reparos mais baratos do iPhone, e o iPhone 11 ainda tem vida útil longa pela frente.",
      },
      {
        question:
          "Depois de trocar a bateria do iPhone 11, a saúde aparece certinha nos ajustes?",
        answer:
          "Sim — fazemos o transplante do flex da bateria original para a nova, para que a porcentagem de saúde apareça correta nos Ajustes.",
      },
    ],
    sections: [
      {
        id: "dois-motivos",
        title: "Os dois motivos mais comuns",
        content:
          "Na grande maioria dos casos, um destes dois é o culpado:\n\n**Conector de carga (a entrada do cabo).** Poeira, fiapo ou oxidação dentro do conector impedem o contato. É comum o cabo só carregar se você segurar numa posição específica, ou se mexer no aparelho e a carga parar.\n\n**Bateria desgastada.** Se o iPhone carrega normalmente até certo ponto e desliga sozinho, ou a porcentagem 'pula' (de 30% direto para 5%), o problema costuma ser a bateria, não o conector.",
      },
      {
        id: "como-diferenciar",
        title: "Como diferenciar em casa, antes de levar para análise",
        content:
          "- Teste com outro cabo e outro carregador originais. Se continuar do mesmo jeito, não é o cabo.\n- Olha o conector com uma lanterna. Fiapo escuro ou poeira grudada é sinal de sujeira no conector.\n- Se balançar levemente o cabo já conectado e a carga oscilar, é mecânico — geralmente conector.\n- Se a bateria despenca de repente sem aviso, mesmo com o cabo firme, o suspeito é a bateria.",
      },
      {
        id: "por-que-diagnostico",
        title: "Por que só o diagnóstico técnico confirma de verdade",
        content:
          "Os dois defeitos têm sintoma parecido — carregamento lento, intermitente ou nulo — e só abrindo o aparelho dá para saber com certeza qual peça está falhando. Trocar bateria quando o problema é o conector (ou o contrário) é dinheiro jogado fora.\n\nNa Reparo Avançado, o diagnóstico do sistema de carga do iPhone 11 é feito antes de qualquer orçamento fechado — você só paga pela peça que realmente precisa trocar.",
      },
    ],
  },

  // ─── ARTIGO 2: Como economizar bateria do celular ────────────────────────────
  {
    slug: "como-economizar-bateria-do-celular",
    title: "Como Economizar Bateria do Celular: 10 Dicas Reais",
    h1: "Como Economizar Bateria do Celular: 10 Dicas Reais",
    metaDescription:
      "Cansado da bateria acabando rápido? Veja 10 formas reais de economizar bateria do celular, e quando o problema não é uso, é a bateria mesmo.",
    category: "conserto" as const,
    brand: "Geral",
    model: "Todos",
    service: "economia e saúde da bateria",
    serviceSlug: "troca-de-bateria",
    description:
      "Bateria acabando rápido é uma das reclamações mais comuns de quem usa celular todo dia. Nem sempre é defeito — muitas vezes dá para ganhar horas de uso só ajustando alguns hábitos.",
    problems: [
      "Bateria acaba muito rápido no uso do dia a dia",
      "Celular não passa o dia sem precisar de recarga",
      "Bateria cai mesmo quando o celular está parado",
      "Dúvida se é hábito de uso ou defeito na bateria",
    ],
    causes: [
      "Brilho da tela no máximo sem necessidade",
      "Apps rodando em segundo plano consumindo recursos",
      "GPS, Wi-Fi e Bluetooth ativos sem uso",
      "Bateria desgastada por ciclos de carga ou tempo de uso",
    ],
    solution:
      "Se mesmo ajustando os hábitos a bateria continua acabando rápido, o problema provavelmente é desgaste real — e a solução é a troca da bateria.",
    whenToSeek:
      "Quando você já fez todos os ajustes de uso e a bateria continua acabando antes do fim do dia, ou perde porcentagem do nada.",
    costInfo:
      "Diagnóstico de saúde da bateria gratuito. Troca de bateria com peça premium e garantia de 90 dias.",
    relatedSlugs: [
      "troca-de-bateria-iphone-salvador-saude-100",
      "bateria-do-celular-estufada-e-perigoso-o-que-fazer",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "como economizar bateria celular",
      "bateria do celular acabando rápido",
      "dicas economizar bateria",
      "bateria iphone durando pouco",
      "bateria samsung durando pouco",
    ],
    faq: [
      {
        question: "Quanto tempo uma bateria de celular dura, em média?",
        answer:
          "Costuma perder desempenho perceptível entre 2 e 3 anos de uso diário, dependendo do aparelho e da rotina de carga.",
      },
      {
        question: "Deixar o celular carregando a noite toda estraga a bateria?",
        answer:
          "Os aparelhos atuais têm proteção contra sobrecarga, mas o calor acumulado nesse período ainda desgasta a bateria com o tempo. Evitar é mais saudável para ela.",
      },
    ],
    sections: [
      {
        id: "dicas",
        title: "10 dicas para economizar bateria",
        content:
          "**1. Reduza o brilho da tela**\nA tela é o que mais consome bateria no aparelho. Deixar no automático já ajuda bastante.\n\n**2. Feche apps que ficam rodando ao fundo**\nRedes sociais e apps de streaming continuam consumindo dados e processamento mesmo minimizados.\n\n**3. Desative localização quando não precisar**\nGPS ativo o tempo todo é um dos maiores consumidores silenciosos de bateria.\n\n**4. Use o modo de economia de energia**\nTodo celular moderno tem essa opção, reduz brilho, atualização em segundo plano e alguns efeitos visuais.\n\n**5. Evite carregar o celular a noite toda**\nFicar 8 horas na tomada depois de já ter chegado a 100% acelera o desgaste da bateria ao longo do tempo.\n\n**6. Desative notificações desnecessárias**\nCada notificação acende a tela e ativa o processador.\n\n**7. Atualize o sistema**\nAtualizações do sistema frequentemente trazem correção de consumo de bateria.\n\n**8. Evite temperatura extrema**\nDeixar o celular no sol ou no carro fechado degrada a bateria de forma permanente, não é só uso do dia.\n\n**9. Desative Wi-Fi e Bluetooth quando não usar**\nOs dois continuam buscando sinal ativamente mesmo sem conexão.\n\n**10. Use carregador original ou homologado**\nCarregador genérico de baixa qualidade pode carregar de forma irregular e forçar a bateria.",
      },
      {
        id: "quando-nao-e-uso",
        title: "Quando o problema não é uso, é a bateria mesmo",
        content:
          "Se você já faz tudo isso e a bateria continua acabando rápido, ou perdendo porcentagem 'do nada', o problema provavelmente é desgaste real da bateria — item que se desgasta com o tempo, mesmo sem mau uso. Nesse caso, dica nenhuma resolve; o caminho é a troca.",
      },
    ],
  },

  // ─── ARTIGO 3: Bateria estufada ──────────────────────────────────────────────
  {
    slug: "bateria-do-celular-estufada-e-perigoso-o-que-fazer",
    title: "Bateria do Celular Estufada: É Perigoso? O Que Fazer",
    h1: "Bateria do Celular Estufada: É Perigoso?",
    metaDescription:
      "Bateria do celular inchada ou a tela levantando na traseira? Veja por que isso é perigoso e o que fazer antes que piore.",
    category: "conserto" as const,
    brand: "Geral",
    model: "Todos",
    service: "troca de bateria estufada",
    serviceSlug: "troca-de-bateria",
    description:
      "Se a tela do seu celular está se levantando pelas bordas, ou a parte de trás está estufada, isso não é um problema estético — é a bateria de lítio inchando por dentro. Merece atenção rápida.",
    problems: [
      "Tela do celular levantando pelas bordas",
      "Traseira estufada ou bojo visível na carcaça",
      "Aparelho esquentando mais que o normal",
      "Bateria de lítio inchada por dentro",
    ],
    causes: [
      "Degradação natural da bateria de lítio ao longo do tempo",
      "Ciclos de carga completos repetidos acelerando o desgaste",
      "Dano físico prévio na bateria",
      "Acúmulo de gás interno por envelhecimento da célula",
    ],
    solution:
      "Fazemos a remoção segura da bateria estufada e a substituição por uma nova, com teste de carga antes da entrega. Se a tela já estiver descolada por causa do inchaço, avaliamos junto se ela também precisa ser recolocada.",
    whenToSeek:
      "Imediatamente ao notar qualquer inchaço. Bateria de lítio estufada pode vazar, superaquecer ou em casos raros pegar fogo, especialmente se pressionada ou perfurada.",
    costInfo:
      "Remoção segura da bateria estufada e substituição com diagnóstico do estado da tela. Orçamento na hora pelo WhatsApp.",
    relatedSlugs: [
      "como-economizar-bateria-do-celular",
      "troca-de-bateria-iphone-salvador-saude-100",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "bateria celular estufada",
      "celular inchado bateria",
      "tela levantando bateria",
      "bateria litio inchada perigosa",
      "troca bateria estufada salvador",
    ],
    faq: [
      {
        question:
          "Posso continuar usando o celular com a bateria estufada só um pouco inchada?",
        answer:
          "Não é recomendado. O risco não depende do tamanho do inchaço, e pode piorar rápido com o uso continuado.",
      },
      {
        question: "Bateria estufada dá para consertar ou só trocar?",
        answer:
          "Só trocar. Uma vez que a bateria inchou, ela precisa ser substituída — não existe reparo que reverta isso com segurança.",
      },
    ],
    sections: [
      {
        id: "por-que-estufa",
        title: "Por que a bateria estufa",
        content:
          "Baterias de lítio acumulam gás internamente quando se degradam, seja por idade, por ciclos de carga completos repetidos, ou por dano físico prévio. Esse gás não tem para onde ir e empurra a carcaça da bateria, fazendo o aparelho inchar.",
      },
      {
        id: "e-perigoso",
        title: "Sim, é perigoso — e por quê",
        content:
          "Bateria de lítio inchada pode vazar, superaquecer, ou em casos raros até pegar fogo, principalmente se for perfurada ou pressionada. O risco aumenta se você continuar usando ou tentar apertar a carcaça de volta no lugar.",
      },
      {
        id: "o-que-fazer",
        title: "O que fazer imediatamente",
        content:
          "- Pare de usar o aparelho.\n- Não carregue.\n- Não pressione nem tente 'empurrar' a tela de volta.\n- Não fure nem tente remover a bateria sozinho.\n- Leve para diagnóstico o quanto antes.",
      },
      {
        id: "o-que-nao-fazer",
        title: "O que não fazer, mesmo que pareça solução rápida",
        content:
          "Colocar peso em cima, prender com fita ou continuar usando 'só mais um pouco' aumenta o risco de vazamento ou dano à tela e à estrutura do aparelho. Bateria estufada é sempre um caso de substituição, nunca de conserto do inchaço em si.",
      },
    ],
  },

  // ─── ARTIGO 4: Bateria esquentando, amarela ou não carrega até 100% ─────────
  {
    slug: "bateria-esquentando-amarela-nao-carrega-100",
    title: "Bateria Esquenta, Fica Amarela ou Não Chega a 100%? Entenda",
    h1: "Bateria do Celular Esquenta, Fica Amarela ou Não Carrega até 100%?",
    metaDescription:
      "Três dúvidas comuns sobre bateria de celular: por que ela esquenta, o que é o ícone amarelo e por que às vezes não passa de 80-90%.",
    category: "conserto" as const,
    brand: "Geral",
    model: "Todos",
    service: "diagnóstico de bateria",
    serviceSlug: "troca-de-bateria",
    description:
      "Três dúvidas voltam sempre quando o assunto é bateria de celular. Reunimos as três aqui, porque geralmente andam juntas.",
    problems: [
      "Celular esquentando durante o carregamento",
      "Ícone de bateria ficando amarelo",
      "Bateria não passando de 80% ou 90%",
      "Dúvida se é defeito ou função normal do aparelho",
    ],
    causes: [
      "Modo de Baixa Energia ativado (ícone amarelo no iPhone)",
      "Otimização de carregamento limitando a 80%",
      "Desgaste real da bateria com capacidade máxima reduzida",
      "App rodando intensamente em segundo plano causando calor",
    ],
    solution:
      "Verificação da saúde da bateria e diagnóstico do consumo de energia para identificar se é função normal ou desgaste real.",
    whenToSeek:
      "Se o aparelho esquenta mesmo parado, ou a saúde da bateria (visível nas configurações) está baixa — abaixo de 85%.",
    costInfo:
      "Diagnóstico gratuito de saúde da bateria. Troca somente se confirmado desgaste real.",
    relatedSlugs: [
      "como-economizar-bateria-do-celular",
      "bateria-do-celular-estufada-e-perigoso-o-que-fazer",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "bateria celular esquentando",
      "ícone bateria amarelo iphone",
      "bateria não carrega 100%",
      "celular não passa de 80 porcento",
      "modo baixa energia iphone",
    ],
    faq: [
      {
        question:
          "O Modo de Baixa Energia (ícone amarelo) prejudica a bateria?",
        answer:
          "Não, é o contrário — ele existe justamente para poupar a bateria quando a carga está acabando.",
      },
      {
        question: "Onde vejo a saúde da bateria do meu iPhone?",
        answer:
          "Em Ajustes → Bateria → Saúde da Bateria e Carregamento.",
      },
    ],
    sections: [
      {
        id: "por-que-esquenta",
        title: "Por que a bateria esquenta?",
        content:
          "Um pouco de calor durante o uso pesado (jogo, câmera, GPS) é normal — é o processador trabalhando perto da bateria. O que não é normal é o aparelho esquentar parado, sem estar em uso, ou esquentar muito rápido assim que começa a carregar. Nesses casos, geralmente é sinal de bateria desgastada ou de algum app consumindo processamento em segundo plano sem parar.",
      },
      {
        id: "icone-amarelo",
        title: "Por que o ícone da bateria fica amarelo?",
        content:
          "No iPhone, um raio amarelo dentro do ícone de bateria significa que o **Modo de Baixa Energia** está ativado — não é defeito, é uma função que o próprio aparelho ativa (ou você ativa manualmente) para economizar energia quando a carga está baixa. Ele volta ao normal assim que você desativa a função ou carrega o aparelho.",
      },
      {
        id: "nao-passa-de-80",
        title: "Por que a bateria não passa de 80% ou 90%?",
        content:
          "Isso pode ser duas coisas: **otimização de carga**, uma função que alguns aparelhos usam para parar de carregar perto de 100% e proteger a saúde da bateria a longo prazo (não é defeito); ou **desgaste real da bateria**, quando a capacidade máxima dela já caiu e ela fisicamente não segura mais 100% de carga. A diferença aparece na configuração de saúde da bateria do aparelho — se a capacidade máxima estiver abaixo de 85-80%, é desgaste real.",
      },
      {
        id: "quando-se-preocupar",
        title: "Quando vale se preocupar",
        content:
          "Se o aparelho esquenta mesmo parado, ou a saúde da bateria (visível nas configurações da maioria dos aparelhos) está baixa, vale um diagnóstico. Esquentamento fora do normal também pode ser sinal de outro componente, não só da bateria.",
      },
    ],
  },

  // ─── ARTIGO 5: Celular carrega mas não liga ──────────────────────────────────
  {
    slug: "celular-carrega-mas-nao-liga-causas",
    title: "Celular Carrega mas Não Liga: Causas e o Que Fazer",
    h1: "Celular Carrega mas Não Liga: O Que Pode Ser?",
    metaDescription:
      "Celular mostra o ícone de carregamento mas a tela não liga? Veja as causas mais comuns, do software à placa, antes de se preocupar.",
    category: "conserto" as const,
    brand: "Geral",
    model: "Todos",
    service: "diagnóstico de celular que não liga",
    serviceSlug: "reparo-em-placa",
    description:
      "Esse é um caso específico e confunde bastante: o celular reage ao carregador — vibra, mostra o ícone de bateria, esquenta um pouco — mas a tela nunca liga de verdade. É diferente de um aparelho totalmente morto.",
    problems: [
      "Celular reage ao carregador mas a tela nunca acende",
      "Vibra ao conectar o cabo mas não inicializa",
      "Mostra ícone de bateria mas fica preso na tela preta",
      "Sistema não consegue inicializar",
    ],
    causes: [
      "Trava de software — sistema preso antes de mostrar qualquer imagem",
      "Falha na tela ou no cabo flex da tela",
      "Componente da placa danificado após queda ou contato com líquido",
      "Bateria muito descarregada que demora para reagir",
    ],
    solution:
      "Fazemos a verificação por etapas: confirmamos que a energia chega corretamente, testamos a tela e o cabo flex separadamente, e só então avaliamos a placa. Isso evita cobrar por reparo de placa quando na verdade era só a tela.",
    whenToSeek:
      "Se após 30 minutos de carga e tentativa de reinicialização forçada o aparelho ainda não responder com nenhuma imagem na tela.",
    costInfo:
      "Diagnóstico gratuito por etapas para identificar a causa exata antes de orçar qualquer reparo.",
    relatedSlugs: [
      "celular-xiaomi-nao-liga-o-que-fazer",
      "celular-liga-mas-a-tela-nao-acende",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "celular carrega mas não liga",
      "celular reage carregador mas não liga",
      "celular vibra mas tela não acende",
      "celular preso tela preta",
      "diagnóstico celular não liga salvador",
    ],
    faq: [
      {
        question:
          "Meu celular vibra ao conectar o carregador, mas a tela fica preta. É a bateria?",
        answer:
          "Não necessariamente — se ele reage ao carregador, a bateria e a entrada de energia provavelmente estão bem. O problema costuma estar na tela ou no sistema.",
      },
      {
        question:
          "Reiniciar forçado pode danificar ainda mais o aparelho?",
        answer:
          "Não, é um procedimento seguro e recomendado como primeiro passo. O risco é só perder tempo se a causa for de hardware.",
      },
    ],
    sections: [
      {
        id: "por-que-acontece",
        title: "Por que isso acontece",
        content:
          "O fato de o aparelho reagir ao carregador mostra que a **parte de energia está funcionando**. O problema geralmente está em outro ponto do caminho entre a bateria e a tela:\n\n- **Trava de software**, o sistema não consegue inicializar e fica preso antes de mostrar qualquer imagem\n- **Falha na tela ou no cabo flex da tela**, o aparelho liga por dentro, mas a imagem não chega até o visor\n- **Componente da placa danificado**, geralmente depois de queda ou contato com líquido",
      },
      {
        id: "o-que-fazer",
        title: "O que fazer antes de se preocupar",
        content:
          "- Deixe carregando por pelo menos 30 minutos sem mexer, alguns aparelhos com bateria muito descarregada demoram para reagir\n- Tente forçar a reinicialização (a combinação de botões varia por modelo)\n- Observe se aparece qualquer luz, vibração ou som ao tentar ligar — isso ajuda o técnico a diagnosticar mais rápido",
      },
      {
        id: "reiniciar-nao-resolve",
        title: "Por que forçar reinicialização várias vezes pode não resolver",
        content:
          "Se o problema for de hardware (tela, flex ou placa), reiniciar não muda nada — porque o software nem chega a carregar até a tela. Insistir só atrasa a solução real.",
      },
    ],
  },

  // ─── ARTIGO 6: Celular liga mas a tela não acende ───────────────────────────
  {
    slug: "celular-liga-mas-a-tela-nao-acende",
    title: "Celular Liga mas a Tela Não Acende: Causas Possíveis",
    h1: "Celular Liga mas a Tela Não Acende: O Que Fazer?",
    metaDescription:
      "Celular toca, vibra e recebe mensagem, mas a tela continua preta? Veja o que pode ser antes de trocar a tela sem necessidade.",
    category: "conserto" as const,
    brand: "Geral",
    model: "Todos",
    service: "diagnóstico de tela",
    serviceSlug: "troca-de-tela",
    description:
      "Diferente do celular totalmente morto, esse caso é mais sutil: o aparelho está ligado — toca, vibra, recebe notificação — mas a tela continua completamente preta. É um sinal de que o problema está isolado no display, não no restante do aparelho.",
    problems: [
      "Tela permanece preta mas celular toca e recebe mensagens",
      "Display não acende mesmo com o aparelho ligado",
      "Vibração normal mas sem imagem na tela",
      "Aparelho funcionando por dentro mas sem exibição",
    ],
    causes: [
      "Cabo flex da tela solto ou danificado por queda",
      "Falha no backlight (luz de fundo da tela)",
      "Dano por impacto mesmo sem vidro trincado visivelmente",
      "Problema na placa em casos mais raros",
    ],
    solution:
      "Verificação do cabo flex, do backlight e do painel da tela separadamente antes de orçar qualquer substituição de peça.",
    whenToSeek:
      "Assim que perceber que o aparelho responde normalmente (toca, vibra, recebe notificações) mas a tela permanece completamente preta.",
    costInfo:
      "Diagnóstico gratuito. Em casos de flex solto o reparo pode ser simples e barato — o orçamento só é fechado após confirmar a causa.",
    relatedSlugs: [
      "celular-carrega-mas-nao-liga-causas",
      "tela-iphone-13-verde-branca-apos-atualizacao",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "celular liga mas tela não acende",
      "celular tela preta mas toca",
      "celular tela apagada mas funciona",
      "flex tela celular solto",
      "backlight celular com defeito",
    ],
    faq: [
      {
        question:
          "Meu celular caiu e agora a tela não acende, mas ele toca normalmente. É grave?",
        answer:
          "Não necessariamente. É um dos casos mais comuns de cabo flex solto, que costuma ter reparo simples depois do diagnóstico.",
      },
      {
        question:
          "Dá para saber se é a tela ou o flex sem abrir o aparelho?",
        answer:
          "Não com certeza. O diagnóstico técnico, abrindo o aparelho, é o único jeito confiável de saber qual peça precisa ser trocada.",
      },
    ],
    sections: [
      {
        id: "confirmar-ligado",
        title: "Como confirmar que o aparelho está mesmo ligado",
        content:
          "- Ligue para o número, se tocar ou for para caixa postal depois de tocar, o aparelho está ligado\n- Preste atenção a vibrações de notificação\n- Em ambiente escuro, aponte uma lanterna de perto na tela, em alguns casos de defeito no backlight (a luz de fundo) dá para enxergar uma imagem bem fraca por trás",
      },
      {
        id: "causas-comuns",
        title: "As causas mais comuns",
        content:
          "**Cabo flex da tela solto ou danificado.** É a ligação física entre a tela e a placa — se ele se solta (comum depois de queda) ou danifica, a tela para de responder mesmo com o resto do aparelho funcionando.\n\n**Falha no backlight (luz de fundo).** A tela em si pode estar íntegra, mas sem a luz de fundo, a imagem não é visível — mesmo que esteja lá.\n\n**Dano por queda ou pressão**, mesmo sem o vidro trincar visivelmente por fora, o painel interno pode ter sido afetado.",
      },
      {
        id: "por-que-nao-trocar-sem-diagnostico",
        title: "Por que não vale trocar a tela 'no escuro' sem diagnóstico",
        content:
          "Se a causa for o cabo flex solto, às vezes o reparo é bem mais simples e barato que uma troca de tela completa. Fazer a troca sem confirmar a causa pode significar pagar por uma peça nova quando o problema era uma conexão solta.",
      },
    ],
  },

  // ─── ARTIGO 7: Modo de Manutenção Samsung ───────────────────────────────────
  {
    slug: "modo-de-manutencao-samsung-o-que-e",
    title: "O Que É o Modo de Manutenção do Samsung (e Por Que Ativar)",
    h1: "O Que É o Modo de Manutenção do Samsung?",
    metaDescription:
      "Vai levar o Samsung para assistência técnica? Veja o que é o Modo de Manutenção, o que ele esconde e por que ativar antes de entregar o aparelho.",
    category: "samsung" as const,
    brand: "Samsung",
    model: "Galaxy (modelos recentes)",
    service: "privacidade e segurança no reparo",
    serviceSlug: "assistencia-tecnica-salvador",
    description:
      "Se você vai levar seu Samsung para assistência técnica, existe uma função pouco conhecida que protege seus dados pessoais durante o reparo: o Modo de Manutenção.",
    problems: [
      "Preocupação com privacidade ao deixar o celular na assistência técnica",
      "Dúvida sobre como proteger fotos e mensagens durante o reparo",
      "Não saber como ativar o Modo de Manutenção do Samsung",
    ],
    causes: [
      "Desconhecimento da função de Modo de Manutenção disponível nos Galaxy",
      "Necessidade de deixar o aparelho ligado para testes durante o reparo",
    ],
    solution:
      "Ativar o Modo de Manutenção antes de entregar o aparelho para assistência técnica, protegendo todos os dados pessoais enquanto o técnico realiza os testes necessários.",
    whenToSeek:
      "Sempre que for entregar o Samsung para qualquer assistência técnica, antes de deixar o aparelho.",
    costInfo:
      "A ativação do Modo de Manutenção é gratuita e feita pelo próprio usuário. Na Reparo Avançado, orientamos todos os clientes sobre esse recurso antes do reparo.",
    relatedSlugs: [],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "modo manutenção samsung",
      "como ativar modo manutenção galaxy",
      "proteger dados samsung assistência técnica",
      "samsung modo manutenção o que é",
      "privacidade reparo celular samsung",
    ],
    faq: [
      {
        question: "O Modo de Manutenção apaga meus dados?",
        answer:
          "Não. Ele apenas esconde temporariamente, sem apagar nada. Ao desativar, tudo volta ao normal.",
      },
      {
        question: "iPhone tem uma função parecida?",
        answer:
          "O caminho é diferente — recomendamos remover ou desativar o Face ID/Touch ID temporariamente e fazer backup antes de entregar, já que o iOS não tem uma função idêntica ao Modo de Manutenção do Samsung.",
      },
    ],
    sections: [
      {
        id: "o-que-faz",
        title: "O que o Modo de Manutenção faz",
        content:
          "Quando ativado, ele cria um perfil temporário no aparelho, escondendo suas fotos, mensagens, contas conectadas e aplicativos pessoais, enquanto mantém visível só o necessário para o técnico testar tela, toque, câmera, alto-falante e outras funções de hardware. Assim que você reativa seu perfil normal depois do reparo, tudo volta como estava.",
      },
      {
        id: "por-que-importa",
        title: "Por que isso importa",
        content:
          "Durante o conserto, o técnico frequentemente precisa ligar o aparelho para testar se a tela, o touch ou a câmera estão funcionando depois do reparo. Sem o Modo de Manutenção, isso significa deixar suas fotos, conversas e aplicativos visíveis. Com ele ativado, você tem a garantia de que ninguém teve acesso a nada pessoal durante o processo.",
      },
      {
        id: "como-ativar",
        title: "Como ativar",
        content:
          "Em aparelhos Samsung com essa função (a maioria dos modelos recentes), o caminho costuma ser:\nConfigurações → Cuidados com o dispositivo → Manutenção do dispositivo → Modo de Manutenção → Ativar\n\nO caminho exato pode variar um pouco conforme a versão do sistema. Se não encontrar, procure por 'Modo de Manutenção' na busca das configurações.",
      },
      {
        id: "sem-a-funcao",
        title: "O que fazer se seu aparelho não tem essa função",
        content:
          "Nem todos os modelos ou versões de sistema têm o Modo de Manutenção. Nesses casos, o mais seguro é fazer backup e, se possível, remover contas sensíveis (banco, e-mail principal) antes de entregar o aparelho, e reinstalar depois do reparo.",
      },
      {
        id: "como-tratamos",
        title: "Como a Reparo Avançado trata isso",
        content:
          "Sempre que o aparelho tem essa função disponível, orientamos o cliente a ativar antes de deixar o aparelho conosco. É simples, rápido, e dá tranquilidade para todo mundo.",
      },
    ],
  },

  // ─── ARTIGO 8: Quanto custa trocar a tela do celular ────────────────────────
  {
    slug: "quanto-custa-trocar-a-tela-do-celular-por-marca",
    title: "Quanto Custa Trocar a Tela do Celular? Por Marca",
    h1: "Quanto Custa Trocar a Tela do Celular?",
    metaDescription:
      "Quanto custa trocar a tela do celular? Veja os fatores que mudam o preço entre iPhone, Samsung, Motorola e Xiaomi antes de fechar orçamento.",
    category: "conserto" as const,
    brand: "Geral",
    model: "iPhone, Samsung, Motorola, Xiaomi",
    service: "orçamento de troca de tela",
    serviceSlug: "troca-de-tela",
    description:
      "Essa é uma das perguntas mais feitas antes de decidir consertar o celular, e a resposta honesta é: depende de três fatores. Aqui explicamos quais são, sem citar valor fechado, porque preço de peça muda com frequência.",
    problems: [
      "Tela trincada ou quebrada e dúvida sobre o custo do reparo",
      "Medo de pagar mais do que deveria ou ser enganado",
      "Dificuldade de comparar orçamentos de assistências diferentes",
      "Dúvida sobre qual tipo de tela escolher",
    ],
    causes: [
      "Queda ou impacto quebrando a tela",
      "Variação grande de preço entre marcas e modelos",
      "Diferença entre tipos de tela (original, OLED, incell)",
      "Possibilidade de dano além da tela na estrutura interna",
    ],
    solution:
      "Avaliação presencial do aparelho, com explicação das opções de tela disponíveis para aquele modelo específico — incluindo a diferença de preço entre elas — para que o cliente decida com informação na mão.",
    whenToSeek:
      "Assim que a tela trincar ou quebrar, para avaliação do estado real antes que o uso com a tela danificada piore o problema.",
    costInfo:
      "Orçamento gratuito e sem compromisso, feito após análise presencial do aparelho. Pelo WhatsApp damos estimativa de faixa de preço informando o modelo.",
    relatedSlugs: [
      "diferenca-tela-original-primeira-linha",
      "troca-de-tela-celular-salvador-original",
      "quanto-custa-trocar-tela-samsung-s23",
    ],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: today,
    dateModified: today,
    keywords: [
      "quanto custa trocar tela celular",
      "preço troca de tela iphone",
      "preço troca de tela samsung",
      "orçamento troca tela celular salvador",
      "custo conserto tela celular",
    ],
    faq: [
      {
        question: "Tela mais barata funciona igual à original?",
        answer:
          "Funciona, mas com diferenças perceptíveis em cor, brilho e sensibilidade ao toque, dependendo da qualidade da peça. Explicamos essas diferenças antes da troca.",
      },
      {
        question:
          "Consigo saber o preço sem levar o aparelho na loja?",
        answer:
          "Dá para ter uma faixa estimada pelo WhatsApp informando o modelo, mas o valor fechado só depois de ver o estado real da tela e do aparelho.",
      },
    ],
    sections: [
      {
        id: "fator-marca-modelo",
        title: "Fator 1: a marca e o modelo",
        content:
          "Telas de iPhone, principalmente de modelos mais recentes, costumam ser as mais caras do mercado — a tecnologia OLED e os componentes integrados (como Face ID) encarecem a peça. Android em geral tem faixa de preço mais variada, indo de opções bem econômicas em modelos de entrada a valores parecidos com iPhone em modelos topo de linha (Samsung Galaxy S e Note, por exemplo).",
      },
      {
        id: "fator-tipo-tela",
        title: "Fator 2: o tipo de tela escolhida",
        content:
          "Existem, em geral, três níveis: **tela original** (a mesma que veio de fábrica, mais cara e mais fiel em cor e toque), **tela OLED compatível de boa qualidade** (custo-benefício, qualidade visual próxima da original) e **tela incell**, mais econômica, indicada para quem quer resolver com menor custo sem abrir mão da funcionalidade.",
      },
      {
        id: "fator-dano-extra",
        title: "Fator 3: se há dano além da tela",
        content:
          "Se a queda ou o impacto também afetou a estrutura interna (aro, flex, câmera frontal), o orçamento muda. É por isso que orçamento 'por telefone' sem ver o aparelho é sempre uma estimativa, não um valor fechado.",
      },
      {
        id: "desconfiar-preco-baixo",
        title: "Por que desconfiar de preço muito abaixo do mercado",
        content:
          "Tela muito mais barata que a média geralmente significa peça de qualidade inferior — cor mais fraca, toque menos sensível, ou vida útil bem menor. Vale perguntar qual o tipo de tela está incluso no valor antes de fechar.",
      },
      {
        id: "como-funciona-aqui",
        title: "Como funciona na Reparo Avançado",
        content:
          "Fazemos a avaliação do aparelho, explicamos as opções de tela disponíveis para aquele modelo específico — incluindo a diferença de preço entre elas — e você decide com a informação na mão. O orçamento é sempre feito depois de ver o aparelho, sem letra miúda.",
      },
    ],
  },
];
