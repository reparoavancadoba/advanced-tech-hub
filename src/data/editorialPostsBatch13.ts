import { BlogPost, Category } from '../types';

export const editorialPostsBatch13: BlogPost[] = [
  {
    slug: "xiaomi-desligou-do-nada-e-nao-liga-mais",
    title: "Xiaomi Desligou do Nada e Não Liga Mais: o Que Fazer",
    h1: "Xiaomi Desligou do Nada e Não Liga Mais: O Que Fazer",
    metaDescription: "Seu Xiaomi, Redmi ou Poco apagou, descarregou e não liga mais? Veja as causas mais comuns, o que testar em casa e quando levar para diagnóstico.",
    category: "geral" as Category,
    brand: "Xiaomi",
    model: "Todos",
    service: "celular Xiaomi que não liga",
    serviceSlug: "/celular-nao-liga",
    description: "O Xiaomi estava funcionando, a tela apagou e, desde então, nada: o aparelho não liga mais. Isso acontece bastante em Redmi, Poco e outros modelos da marca, e na maioria das vezes a causa está na bateria, no sistema ou na placa. Veja o que costuma estar por trás do problema e o que dá para testar com segurança antes de procurar ajuda.",
    problems: [
      "Bateria totalmente descarregada. Quando a carga chega a zero, a proteção da bateria pode impedir o aparelho de ligar por alguns minutos, mesmo ligado no carregador.",
      "Falha de sistema. Uma atualização interrompida, um aplicativo com defeito ou o armazenamento cheio podem travar o aparelho antes de ele terminar de iniciar.",
      "Bateria desgastada ou inchada. Uma bateria que já não entrega energia suficiente faz o celular apagar de repente e não voltar.",
      "Defeito na placa. Depois de queda, contato com líquido ou superaquecimento, um componente da placa pode parar de responder."
    ],
    solution: "Se o Xiaomi continua sem ligar depois dessas etapas, o defeito provavelmente é de hardware: bateria, conector de carga ou placa. Aqui na Reparo Avançado, o diagnóstico técnico vem antes do orçamento, o orçamento é gratuito e o serviço sai com 90 dias de garantia. Quem não pode vir até a Boca do Rio pode pedir coleta e entrega.",
    whenToSeek: "Se o celular não der sinal de vida após os testes em casa (carregar por 30 min, trocar cabo, forçar reinicialização).",
    costInfo: "O orçamento é gratuito. Somente após o diagnóstico técnico aprovaremos o reparo.",
    relatedSlugs: ["celular-xiaomi-nao-liga-o-que-fazer", "xiaomi-poco-reiniciando-sozinho-salvador", "bateria-xiaomi-inchada-descolando-tela", "celular-carrega-mas-nao-liga-causas"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ["xiaomi desligou do nada", "poco não liga", "redmi apagou"],
    faq: [
      {
        question: "Xiaomi que desligou e não liga mais tem conserto?",
        answer: "Na maioria dos casos, sim. Quando a causa é bateria, conector de carga ou falha de sistema, o reparo costuma ser direto. Se o defeito estiver na placa, o diagnóstico mostra o que dá para recuperar."
      },
      {
        question: "Dá para recuperar as fotos de um Xiaomi que não liga?",
        answer: "Depende da causa. Se o problema é bateria ou conector, o aparelho volta a ligar e os dados continuam lá. Por isso é importante não restaurar de fábrica antes de passar por diagnóstico."
      },
      {
        question: "O Xiaomi apagou e a bateria estava com 0%. Pode ser só falta de carga?",
        answer: "Pode. Deixe no carregador por 20 a 30 minutos e tente ligar. Se nada aparecer depois disso, o problema provavelmente não é só carga."
      },
      {
        question: "Isso vale para Poco e Redmi?",
        answer: "Sim, a lógica é a mesma para Redmi, Poco e Xiaomi. O que muda é o procedimento exato de cada modelo, que o diagnóstico confirma."
      }
    ],
    sections: [
      {
        id: "o-que-testar",
        title: "O que testar em casa, na ordem",
        content: "1. Ligue o celular no carregador, de preferência o original, e deixe de 20 a 30 minutos antes de tentar ligar. Uma bateria muito descarregada pode demorar para responder.\n2. Force a reinicialização: segure o botão de ligar por cerca de 10 a 15 segundos, mesmo que a tela esteja preta.\n3. Troque o cabo e a tomada. Um cabo gasto parece carregar, mas não entrega energia.\n4. Observe se aparece algum sinal: vibração, ícone de carga, luz de notificação ou som ao conectar.\n5. Confira se a tampa traseira ou a tela estão levantando. Isso indica bateria inchada e, nesse caso, pare de carregar o aparelho."
      },
      {
        id: "o-que-nao-fazer",
        title: "O que não fazer",
        content: "- Não faça \"restaurar de fábrica\" ou \"limpar dados\" no modo de recuperação sem backup, porque isso apaga fotos e arquivos.\n- Não abra o aparelho nem use fonte ou carregador desconhecido.\n- Não fique tentando ligar dezenas de vezes seguidas. Se o problema for na placa, a insistência não resolve.\n- Não ignore uma bateria inchada. Ela exige troca antes de qualquer outro teste."
      }
    ]
  },
  {
    slug: "xiaomi-nao-liga-e-nao-carrega-o-que-fazer",
    title: "Xiaomi Não Liga e Não Carrega: Causas e o Que Testar",
    h1: "Xiaomi Não Liga e Não Carrega: Causas e o Que Testar",
    metaDescription: "Xiaomi, Redmi ou Poco que não liga e não carrega? Veja os testes de cabo, conector e bateria e quando o problema exige reparo.",
    category: "geral" as Category,
    brand: "Xiaomi",
    model: "Todos",
    service: "celular Xiaomi que não carrega",
    serviceSlug: "/celular-nao-carrega",
    description: "Quando o Xiaomi não liga e também não carrega, o problema costuma estar na entrada de energia: no cabo, no carregador, no conector USB ou na própria bateria. A boa notícia é que parte dos casos se resolve com um teste simples. Veja o que checar primeiro e quando o reparo é necessário.",
    problems: [
      "Conector de carga com mau contato ou desgastado. O cabo encaixa frouxo e só carrega em certa posição.",
      "Bateria sem capacidade ou inchada.",
      "Contato com líquido. Umidade no conector gera corrosão e impede a carga.",
      "Defeito na placa, no circuito que controla a carga, geralmente depois de queda ou carregador inadequado."
    ],
    solution: "Se nenhum desses testes fizer o Xiaomi responder, o defeito provavelmente é de hardware. Na Reparo Avançado, o diagnóstico técnico vem antes do orçamento, que é gratuito, e o reparo sai com 90 dias de garantia. Para quem não pode ir até a Boca do Rio, há coleta e entrega do aparelho.",
    whenToSeek: "Se mesmo trocando carregador e cabo, ou fazendo a limpeza superficial com cuidado, o aparelho seguir inoperante.",
    costInfo: "Diagnóstico técnico não tem custo. Após aprovação o serviço sai com garantia de 90 dias.",
    relatedSlugs: ["celular-xiaomi-nao-liga-o-que-fazer", "xiaomi-desligou-do-nada-e-nao-liga-mais", "celular-carrega-mas-nao-liga-causas", "celular-liga-mas-a-tela-nao-acende"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ["xiaomi não carrega", "redmi não liga nem carrega", "poco sem sinal de vida"],
    faq: [
      {
        question: "Xiaomi que não carrega pode ser só o conector?",
        answer: "Pode. É uma das causas mais comuns, e o reparo costuma ser mais simples do que uma troca de placa. O diagnóstico confirma."
      },
      {
        question: "Posso limpar a entrada do carregador sozinho?",
        answer: "Só com o aparelho desligado e com ferramenta não metálica, como um palito de madeira. Evite álcool e líquidos, e não force."
      },
      {
        question: "Meu Xiaomi esquenta quando conecto no carregador e não liga. O que pode ser?",
        answer: "Pode ser bateria com defeito ou problema no circuito de carga. Não insista no carregador, e leve para avaliação."
      },
      {
        question: "Vale trocar o carregador antes de levar?",
        answer: "Vale testar com outro cabo e outro carregador. Se o problema continuar, a causa está no aparelho."
      }
    ],
    sections: [
      {
        id: "primeiro-passo",
        title: "Primeiro, descubra se ele realmente não carrega",
        content: "Ligue o aparelho no carregador e observe por alguns minutos:\n- Aparece ícone de bateria, luz de notificação ou vibração? Então o aparelho recebe energia, e o problema está mais no sistema ou na tela.\n- Não acontece absolutamente nada, nem calor leve no aparelho? Então a energia não está chegando à bateria.\nEssa diferença muda o caminho do diagnóstico."
      },
      {
        id: "testes-em-casa",
        title: "Testes que resolvem parte dos casos",
        content: "1. Troque o cabo e o carregador. Cabo gasto e carregador fraco são a causa mais comum de \"não carrega\".\n2. Teste outra tomada e, se possível, outro carregador compatível com o seu modelo.\n3. Com o celular desligado, olhe a entrada USB com uma lanterna. Se houver poeira, fiapos ou sujeira, retire com cuidado usando um palito de madeira ou plástico, sem metal e sem líquido.\n4. Deixe ligado por 20 a 30 minutos. Uma bateria totalmente descarregada pode demorar para dar sinal.\n5. Force a reinicialização segurando o botão de ligar por cerca de 10 a 15 segundos."
      },
      {
        id: "vibra-mas-nao-liga",
        title: "Xiaomi que vibra mas não liga",
        content: "Se o aparelho vibra ou faz barulho ao ligar, mas a tela continua preta, o aparelho pode estar ligando, e o defeito pode estar na tela ou no sistema, e não na carga. Teste ligando para ele de outro telefone para ver se toca, ou aponte uma lanterna em ângulo para a tela para ver se aparece uma imagem muito fraca. Se aparecer, o problema costuma estar na iluminação da tela."
      }
    ]
  },
  {
    slug: "celular-apagou-do-nada-e-nao-liga-mais",
    title: "Celular Apagou do Nada e Não Liga Mais: O Que Pode Ser",
    h1: "Celular Apagou do Nada e Não Liga Mais: O Que Pode Ser",
    metaDescription: "O celular apagou sozinho e não liga mais? Entenda as causas mais comuns, o que testar em casa antes de levar à assistência e o que evitar.",
    category: "geral" as Category,
    brand: "Geral",
    model: "Todos",
    service: "celular que apagou e não liga",
    serviceSlug: "/celular-nao-liga",
    description: "O celular estava funcionando normalmente, a tela apagou de repente e ele não ligou mais. É um dos defeitos que mais assustam, mas nem sempre é grave. Veja o que costuma causar esse problema, o que testar com segurança e quando procurar um diagnóstico.",
    problems: [
      "Bateria sem carga ou desgastada. É a causa mais frequente, principalmente em aparelhos com mais de dois anos de uso.",
      "Superaquecimento. O aparelho se desliga para se proteger e, às vezes, só volta depois de esfriar.",
      "Falha de sistema. Depois de uma atualização, de um aplicativo problemático ou de falta de espaço de armazenamento, o celular pode travar durante a inicialização.",
      "Queda ou contato com líquido antes do defeito. Mesmo uma queda ou umidade que \"pareceu não dar nada\" pode causar o problema dias depois.",
      "Defeito na placa. Um componente da placa pode parar de funcionar e impedir o aparelho de ligar."
    ],
    solution: "Se o celular continua sem sinal depois dessas etapas, o defeito provavelmente está na bateria, no conector de carga ou na placa. Aqui na Reparo Avançado, o diagnóstico técnico acontece antes do orçamento, que é gratuito, e o serviço sai com 90 dias de garantia. Se não puder ir até a Boca do Rio, é possível pedir coleta e entrega.",
    whenToSeek: "Se forçar reinicialização e carregar não resolver.",
    costInfo: "Diagnóstico técnico sem compromisso.",
    relatedSlugs: ["celular-nao-liga-causas", "celular-carrega-mas-nao-liga-causas", "celular-liga-mas-a-tela-nao-acende", "bateria-celular-descarregando-rapido"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ["celular apagou do nada", "não liga mais", "tela preta repente"],
    faq: [
      {
        question: "Celular que apagou do nada tem conserto?",
        answer: "Na maioria dos casos, sim. Bateria, conector e falhas de sistema têm solução direta. Defeitos na placa dependem do diagnóstico."
      },
      {
        question: "É possível salvar as fotos se o celular não liga?",
        answer: "Depende da causa. Quando o defeito é bateria ou conector, o aparelho volta a ligar com os dados. Por isso não restaure de fábrica antes de avaliar."
      },
      {
        question: "O celular apagou e a bateria estava boa. O que pode ser?",
        answer: "Pode ser falha de sistema, superaquecimento ou defeito de hardware. O diagnóstico separa essas causas."
      },
      {
        question: "Qualquer marca pode ter isso?",
        answer: "Sim. A lógica vale para Samsung, Motorola, Xiaomi, iPhone e outras marcas, e o diagnóstico identifica o caso do seu modelo."
      }
    ],
    sections: [
      {
        id: "testes",
        title: "O que testar antes de levar à assistência",
        content: "1. Deixe o celular no carregador por 20 a 30 minutos. Se estava esquentando antes de apagar, espere ele esfriar primeiro.\n2. Force a reinicialização. Em muitos modelos, é segurar o botão de ligar por cerca de 10 a 15 segundos. No iPhone e em alguns Samsung, o procedimento é por combinação de botões, e vale buscar o método do seu modelo.\n3. Teste outro cabo e outro carregador.\n4. Observe sinais de vida: vibração, luz de notificação, aparelho esquentando ou som ao ligar de outro telefone.\n5. Lembre o que aconteceu antes: travou, esquentou, caiu, molhou, atualizou. Essa informação ajuda muito no diagnóstico."
      },
      {
        id: "evitar",
        title: "O que evitar",
        content: "- Evite apertar o botão de ligar repetidamente por muito tempo. Se o problema for de hardware, isso não ajuda.\n- Não coloque o aparelho no arroz. A prática não seca por dentro e pode deixar resíduos.\n- Não use secador de cabelo nem fonte de calor.\n- Não restaure de fábrica sem backup, porque isso apaga os dados."
      }
    ]
  },
  {
    slug: "sinais-de-umidade-no-celular-como-saber-se-molhou",
    title: "Sinais de Umidade no Celular: Como Saber Se Molhou",
    h1: "Sinais de Umidade no Celular: Como Saber Se Ele Molhou",
    metaDescription: "Veja os sinais de umidade dentro do celular, como o aviso na tela e o touch falhando, o que fazer na hora e o que evitar para não perder o aparelho.",
    category: "geral" as Category,
    brand: "Geral",
    model: "Todos",
    service: "celular com umidade ou que molhou",
    serviceSlug: "/celular-caiu-na-agua",
    description: "Nem sempre o celular molha com um mergulho. Chuva, vapor do banho, suor, maresia e até a umidade do ambiente podem entrar no aparelho aos poucos. O problema é que os sinais aparecem devagar e muita gente só percebe quando o celular já falha. Veja como reconhecer.",
    problems: [
      "Aviso de umidade ou líquido no conector de carga, que aparece na tela e bloqueia o carregamento",
      "Tela com manchas, gotículas ou embaçado por dentro do vidro",
      "Touch que falha sozinho, clica sozinho ou deixa de responder em algumas partes",
      "Carregamento que liga e desliga, ou só carrega em certa posição do cabo",
      "Som abafado ou alto-falante falhando",
      "Câmera com névoa ou imagem embaçada",
      "Aparelho que reinicia, esquenta ou descarrega mais rápido do que antes"
    ],
    solution: "Se você percebeu um ou mais desses sinais, o melhor é passar por diagnóstico antes que a corrosão avance. Na Reparo Avançado, o orçamento é gratuito, o diagnóstico vem antes e o serviço sai com 90 dias de garantia. Há coleta e entrega para quem não pode ir até a Boca do Rio.",
    whenToSeek: "Se o celular apresentou qualquer sinal de líquidos.",
    costInfo: "Diagnóstico para avaliação da extensão da oxidação é gratuito.",
    relatedSlugs: ["aviso-umidade-detectada", "iphone-caiu-na-agua-desoxidacao-salvador", "erro-umidade-samsung-conector-salvador", "maresia-salvador-corrosao-iphone"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ["sinais de umidade celular", "celular molhou chuva", "touch falhando umidade"],
    faq: [
      {
        question: "Celular que molhou e voltou a funcionar pode estar com umidade?",
        answer: "Pode. A corrosão avança aos poucos, e o defeito pode aparecer dias ou semanas depois. Vale passar por diagnóstico mesmo se ele voltou a funcionar."
      },
      {
        question: "O aviso de umidade na tela sempre significa que o celular molhou?",
        answer: "Nem sempre. O aviso indica que o aparelho detectou umidade ou resíduo no conector de carga. Por isso é importante limpar e avaliar antes de insistir no carregamento."
      },
      {
        question: "Capinha à prova d'água resolve?",
        answer: "Ajuda contra respingos, mas não substitui cuidado com banho, mar e piscina. Se o aparelho molhou, siga os passos acima."
      },
      {
        question: "Quanto tempo posso esperar antes de levar?",
        answer: "O ideal é o mais rápido possível. Quanto mais tempo a umidade fica, maior a chance de corrosão na placa."
      }
    ],
    sections: [
      {
        id: "confirmar",
        title: "Como confirmar",
        content: "Alguns aparelhos têm um indicador de contato com líquido, geralmente na bandeja do chip, que muda de cor quando o aparelho molha. Nem todos os modelos têm, e o indicador nem sempre aparece sem desmontar. O diagnóstico técnico abre o aparelho e confirma se há umidade ou corrosão na placa."
      },
      {
        id: "o-que-fazer",
        title: "O que fazer assim que perceber",
        content: "1. Desligue o celular e, se possível, tire o chip e o cartão de memória.\n2. Não carregue, mesmo que o aparelho pareça normal.\n3. Seque o exterior com um pano macio.\n4. Leve para avaliação o quanto antes. A corrosão avança com o tempo, e quanto mais cedo a limpeza, maior a chance de recuperar o aparelho."
      },
      {
        id: "evitar",
        title: "O que evitar",
        content: "- Não use arroz. Não seca o interior e pode deixar resíduos.\n- Não use secador de cabelo, forno nem micro-ondas.\n- Não ligue para \"testar\" se funciona.\n- Não limpe com álcool por conta própria dentro do aparelho.\n- Não ignore o aviso de umidade só porque o celular continua ligando."
      },
      {
        id: "salvador",
        title: "Umidade em Salvador",
        content: "Em cidades litorâneas, como Salvador, a maresia e a umidade do ar aumentam o risco de corrosão ao longo do tempo, mesmo sem o aparelho ter caído na água. Se o seu celular passa muito tempo perto do mar ou em ambientes úmidos, vale observar esses sinais com mais atenção."
      }
    ]
  },
  {
    slug: "tela-notebook-com-defeito-listras-piscando-sem-imagem",
    title: "Tela do Notebook com Defeito: Listras, Piscando ou Preta",
    h1: "Tela do Notebook com Defeito: Listras, Piscando ou Sem Imagem",
    metaDescription: "Tela do notebook com listras, piscando, escura ou sem imagem? Veja como descobrir se o defeito é na tela, no cabo ou na placa e quando levar para reparo.",
    category: "notebooks" as Category,
    brand: "Geral",
    model: "Todos",
    service: "notebook com defeito na tela",
    serviceSlug: "/conserto-de-notebook",
    description: "A tela do notebook pode dar sinais de defeito de várias formas: listras coloridas, imagem piscando, escurecendo sozinha, manchas ou simplesmente sem imagem. Descobrir de onde vem o problema é o primeiro passo, porque a causa pode estar na tela, no cabo flat que a liga à placa ou na própria placa de vídeo.",
    problems: [
      "Painel da tela danificado, por pancada, pressão ou queda",
      "Cabo flat desgastado ou solto, muito comum em notebooks de uso intenso",
      "Iluminação da tela com defeito",
      "Dobradiça quebrada, que estica o cabo a cada abertura",
      "Placa de vídeo com falha, quando o monitor externo também não mostra imagem"
    ],
    solution: "O diagnóstico técnico identifica se o defeito é na tela, no cabo flat ou na placa e define o reparo adequado. Na Reparo Avançado, o orçamento é gratuito e o serviço sai com 90 dias de garantia. Quem não pode ir até a Boca do Rio pode pedir coleta e entrega do notebook.",
    whenToSeek: "Se não consegue usar através do monitor externo ou se a tela está inviável.",
    costInfo: "Diagnóstico sem custo, garantia de 90 dias após aprovado.",
    relatedSlugs: ["notebook-nao-liga-tela-preta-liga-mas-nao-mostra-nada", "notebook-esquentando-desligando-sozinho", "notebook-lento-quando-trocar-ssd-resolve"],
    isEditorial: true,
    author: "Equipe Reparo Avançado",
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    keywords: ["tela notebook listras", "notebook piscando tela preta"],
    faq: [
      {
        question: "Tela do notebook com listras tem conserto?",
        answer: "Na maioria dos casos, sim. Dependendo da causa, o reparo passa por troca do cabo flat, da tela ou da dobradiça. O diagnóstico confirma."
      },
      {
        question: "Se a imagem aparece no monitor externo, o problema é na tela?",
        answer: "Normalmente, sim. A placa de vídeo está enviando imagem, então o defeito costuma estar no painel, no cabo flat ou na dobradiça."
      },
      {
        question: "O notebook liga, mas a tela fica preta. É grave?",
        answer: "Nem sempre. Pode ser cabo flat, iluminação da tela ou configuração, e só o diagnóstico mostra a causa."
      },
      {
        question: "Posso usar o notebook com um monitor externo enquanto não conserto?",
        answer: "Pode, se a imagem aparecer no monitor. É uma solução temporária enquanto o reparo é feito."
      }
    ],
    sections: [
      {
        id: "sintomas",
        title: "Os defeitos de tela mais comuns",
        content: "- Listras verticais ou horizontais, coloridas ou brancas\n- Imagem piscando ou tremendo\n- Tela muito escura, em que se vê a imagem só de perto ou com lanterna\n- Manchas, áreas pretas ou linhas fixas\n- Notebook que liga, mas a tela fica preta\n- Imagem que some ou aparece ao mexer na tampa"
      },
      {
        id: "como-descobrir",
        title: "Como descobrir se o defeito é na tela",
        content: "1. Conecte o notebook a um monitor ou TV pela saída HDMI. Se a imagem aparecer normal no monitor externo, a placa de vídeo está funcionando, e o defeito está na tela, no cabo flat ou na dobradiça.\n2. Com o notebook ligado e a tela preta, aponte uma lanterna em ângulo sobre o vidro. Se você conseguir enxergar uma imagem muito fraca, o computador está funcionando e o problema costuma estar na iluminação da tela.\n3. Abra e feche a tampa devagar. Se a imagem pisca, aparece ou some ao mexer, o problema costuma estar no cabo flat ou na dobradiça.\n4. Observe se o defeito aparece desde a inicialização ou só depois que o sistema carrega. Se aparece desde o começo, a causa é de hardware, e não de sistema."
      },
      {
        id: "o-que-evitar",
        title: "O que evitar",
        content: "- Não aperte nem pressione a tela para \"acertar\" a imagem\n- Não abra o notebook sem conhecimento, porque o cabo flat é frágil\n- Não segure o notebook pela tampa\n- Não continue usando com a tela listrada por muito tempo, porque o defeito pode aumentar"
      }
    ]
  }
];
