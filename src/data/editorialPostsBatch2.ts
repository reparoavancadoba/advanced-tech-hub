import type { BlogPost, Category } from "./blogData";

const LOCAL_SEO = "A Reparo Avançado está localizada na Boca do Rio, Salvador – BA, e atende clientes de toda a região, incluindo Stiep, Imbuí, Pituba e Costa Azul.";
const PECAS = "Peças de Alta Performance fabricadas com os mesmos padrões da linha de montagem original";
const CTA_TEXT = "Fale agora com um profissional qualificado pelo WhatsApp (71) 99198-1437";

export const editorialPostsBatch2: BlogPost[] = [
  {
    slug: "iphone-descarregando-rapido-calor-salvador",
    title: "iPhone Descarregando Rápido no Calor?",
    h1: "O Calor de Salvador Faz o iPhone Descarregar Mais Rápido? Entenda",
    metaDescription: "Seu iPhone está descarregando rápido e esquentando em Salvador? O clima afeta a bateria. Veja como a Reparo Avançado resolve isso com troca de bateria premium.",
    category: "iphone" as Category,
    brand: "Apple",
    model: "iPhone",
    service: "Troca de Bateria",
    serviceSlug: "troca-de-bateria-iphone",
    description: "Descubra como as altas temperaturas de Salvador degradam a bateria do seu iPhone, como verificar a saúde real da bateria e quando é hora de trocar.",
    isEditorial: true,
    keywords: ["iphone descarregando rápido", "bateria iphone salvador", "celular esquentando", "troca de bateria iphone", "iphone quente calor", "saúde bateria iphone baixa"],
    problems: [
      "Bateria do iPhone acabando antes do fim do dia, mesmo com uso moderado",
      "Aparelho muito quente ao toque, especialmente quando exposto ao sol ou dentro do carro",
      "iPhone reduzindo o brilho da tela sozinho e exibindo aviso de temperatura",
      "Porcentagem da bateria caindo de forma irregular (ex: de 40% para 15% de repente)",
      "iPhone desligando sozinho mesmo mostrando carga restante",
      "Carregamento mais lento que o habitual, especialmente em dias quentes"
    ],
    causes: [
      "As baterias de íon de lítio degradam quimicamente de forma acelerada acima de 35°C — temperatura frequente em Salvador durante boa parte do ano",
      "Uso do GPS e aplicativos de navegação no carro sob o sol forte, que combina processamento intenso com calor externo",
      "Saúde da bateria (em Ajustes > Bateria) já abaixo de 80%, indicando desgaste avançado das células",
      "Carregamento com o aparelho exposto ao sol ou sobre superfícies que retêm calor (painel do carro, sofá)",
      "Uso de capinhas grossas ou emborrachadas que impedem a dissipação natural de calor do chassi de alumínio"
    ],
    solution: `O clima tropical de Salvador exige mais das baterias de lítio da Apple. A faixa ideal de operação do iPhone é entre 0°C e 35°C, mas a temperatura ambiente em Salvador ultrapassa esse limite com frequência — e dentro de um carro estacionado ao sol, o aparelho pode atingir temperaturas internas acima de 45°C.

Na Reparo Avançado, nosso protocolo para iPhones com descarga acelerada começa com um diagnóstico que diferencia problema de bateria de problema de software:

[DICA]
Etapa 1 — Leitura da Saúde Real: verificamos a capacidade máxima da bateria e o número de ciclos de carga acumulados, dados que vão além do que o iOS exibe.
Etapa 2 — Teste de Consumo em Repouso: monitoramos se o iPhone consome energia anormal em standby, o que pode indicar processos de software em loop ou defeito no CI de carga.
Etapa 3 — Inspeção Física: abrimos o aparelho para verificar se a bateria apresenta sinais de inchaço, oxidação nos conectores ou deformação térmica.
[/DICA]

Se a bateria estiver degradada, realizamos a substituição utilizando células de alta densidade com capacidade nominal igual ou superior à original. Reprogramamos o chip controlador para que o iOS exiba a saúde em 100% sem mensagem de "Peça Desconhecida". Se o problema for software (apps em segundo plano consumindo bateria), orientamos o cliente gratuitamente sobre os ajustes corretos. ${LOCAL_SEO}`,
    whenToSeek: "Se o iPhone esquenta a ponto de exibir o aviso de temperatura, se a bateria não dura metade de um dia de uso normal, ou se a porcentagem cai de forma irregular (pula de 30% para desligado). Não espere a bateria estufar — isso pode danificar a tela e o chassi.",
    costInfo: `O valor da troca de bateria varia conforme o modelo do iPhone. Todas as baterias são de alta qualidade com garantia de 90 dias. O diagnóstico completo (software + hardware) é sempre gratuito. ${CTA_TEXT}`,
    faq: [
      { question: "O calor de Salvador realmente estraga a bateria do iPhone?", answer: "Sim. A Apple confirma que temperaturas acima de 35°C causam danos permanentes à capacidade da bateria de íon de lítio. Em Salvador, onde a temperatura média ultrapassa esse limite em boa parte do ano, o desgaste é naturalmente mais rápido do que em regiões mais frias." },
      { question: "Como saber se preciso trocar a bateria ou se é problema de software?", answer: "Acesse Ajustes > Bateria > Saúde e Carregamento. Se a capacidade máxima estiver abaixo de 85%, a bateria provavelmente precisa ser trocada. Se estiver acima de 85% mas o iPhone ainda descarrega rápido, pode ser um app consumindo em segundo plano. Na Reparo Avançado fazemos o diagnóstico gratuito para diferenciar os dois cenários." },
      { question: "Posso usar o iPhone na praia sem prejudicar a bateria?", answer: "Use com moderação e evite deixá-lo exposto ao sol direto. Retire a capinha para ajudar na dissipação de calor. Se o aviso de temperatura aparecer, mova o aparelho para a sombra e aguarde ele esfriar antes de continuar usando — forçar o uso nesse estado acelera a degradação da bateria." }
    ],
    sections: [
      {
        id: "como-calor-afeta-bateria",
        title: "Como o Calor Tropical Afeta a Bateria do iPhone",
        content: "A bateria de íon de lítio funciona através de reações químicas que movem íons entre dois eletrodos. Quando a temperatura sobe demais, essas reações se aceleram de forma descontrolada, gerando gases internos e degradando permanentemente a capacidade da célula. É por isso que a Apple implementa um sistema de proteção térmica que reduz o brilho, limita o processador e pode até desligar o aparelho quando a temperatura interna ultrapassa limites seguros.",
        subsections: [
          { title: "Dentro do Carro: O Pior Cenário", content: "Um carro estacionado ao sol em Salvador pode atingir temperaturas internas de 60-70°C. Deixar o iPhone no painel ou no suporte de GPS nessas condições, mesmo por poucos minutos, pode causar danos permanentes à bateria que não são cobertos pela garantia da Apple." },
          { title: "Maresia e Umidade: Fator Agravante", content: "Além do calor, a umidade elevada e a maresia da orla de Salvador (Pituba, Boca do Rio, Itapuã) podem causar micro-oxidação nos contatos internos da bateria, agravando o problema de consumo excessivo ao longo do tempo." }
        ]
      }
    ],
    relatedSlugs: ["troca-de-bateria-iphone-salvador-saude-100", "meu-celular-esquenta-muito-e-descarrega-rapido", "como-saber-hora-trocar-bateria-iphone"]
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
    description: "Entenda a diferença entre sujeira no conector Lightning/USB-C e a quebra do componente no iPhone, e quando cada solução se aplica.",
    isEditorial: true,
    keywords: ["conector iphone salvador", "iphone não carrega", "mau contato iphone", "limpeza conector iphone", "trocar conector iphone lightning", "cabo frouxo iphone"],
    problems: [
      "O cabo carregador não entra até o final ou fica frouxo",
      "Você precisa dobrar ou forçar o cabo em um ângulo para o iPhone carregar",
      "Aparelho indica que está carregando, mas a porcentagem não sobe",
      "Carregamento interrompe ao menor movimento do cabo",
      "Aviso de 'Acessório não compatível' mesmo com cabo original",
      "iPhone carrega apenas com um cabo específico e rejeita os outros"
    ],
    causes: [
      "Acúmulo crônico de fiapos de bolso e poeira comprimida dentro da porta Lightning ou USB-C",
      "Oxidação e corrosão nos pinos internos, agravada pela umidade e maresia de Salvador",
      "Desgaste físico das travas de encaixe do conector por uso de cabos paralelos",
      "Dano no CI Tristar/Hydra (chip controlador de carga na placa-mãe) causado por cabos sem certificação MFi",
      "Líquido infiltrado na porta que gerou micro-curto entre os pinos de dados e energia"
    ],
    solution: `Na Reparo Avançado, nosso primeiro passo nunca é condenar a peça. Seguimos um protocolo de diagnóstico em 3 etapas antes de qualquer intervenção:

[DICA]
Etapa 1 — Inspeção Visual com Microscópio: examinamos a porta com aumento de 20x para identificar fiapos compactados, oxidação visível ou pinos tortos.
Etapa 2 — Teste de Continuidade: verificamos se os pinos estão conduzindo eletricidade corretamente usando multímetro de precisão.
Etapa 3 — Teste com Cabos Certificados: descartamos a possibilidade de ser o cabo e não a porta.
[/DICA]

Na maioria dos casos que atendemos, o problema é resolvido com higienização técnica: utilizamos pinças antiestáticas de ponta fina e álcool isopropílico 99% para remover a sujeira compactada sem riscar os pinos. Esse procedimento leva cerca de 5 a 10 minutos e é extremamente acessível.

Nos casos restantes, onde os pinos estão fisicamente rompidos ou o flex de carga apresenta trilhas danificadas (comum quando o cliente forçou cabos paralelos repetidamente), realizamos a substituição completa do módulo de carga. Nos modelos iPhone 8 ao 14, trocamos o flex Lightning; nos modelos 15 e 16, o flex USB-C. Em ambos os casos, o Carregamento Rápido e a transferência de dados via cabo são totalmente restaurados. ${LOCAL_SEO}`,
    whenToSeek: "Ao primeiro sinal de que o cabo está frouxo ou que o carregamento é intermitente. Continuar forçando o cabo em ângulo pode gerar um curto-circuito no CI Tristar (iPhone 8 ao 14) ou CI Hydra (iPhone 15/16), resultando num reparo de placa muito mais caro.",
    costInfo: `A limpeza técnica do conector é um serviço rápido e com valor muito acessível. A troca completa do flex de carga varia conforme o modelo do iPhone, mas sempre com peças de alta qualidade e garantia de 90 dias. O diagnóstico para identificar se o problema é sujeira, flex ou placa é sempre gratuito. ${CTA_TEXT}`,
    faq: [
      { question: "Como saber se o problema do meu iPhone é sujeira ou defeito no conector?", answer: "Se o cabo entra com dificuldade mas o carregamento funciona bem quando encaixado, provavelmente é sujeira compactada. Se o carregamento é intermitente mesmo com o cabo firme, ou se aparece 'Acessório não compatível', o flex de carga pode estar danificado. O diagnóstico gratuito na Reparo Avançado diferencia os dois casos em minutos." },
      { question: "Posso limpar o conector do iPhone em casa com palito de dente?", answer: "Não recomendamos. Palitos de madeira podem quebrar dentro da porta e as fibras compactam ainda mais a sujeira. Além disso, materiais metálicos (agulha, clip) podem causar curto-circuito nos pinos. O ideal é a limpeza técnica com ferramentas antiestáticas apropriadas." },
      { question: "A troca do conector do iPhone 15 (USB-C) é diferente do Lightning?", answer: "Sim. O conector USB-C dos iPhones 15 e 16 tem mais pinos de contato e suporta velocidades de transferência maiores. A peça de reposição e o procedimento de instalação são diferentes do Lightning, mas na Reparo Avançado trabalhamos com ambos os padrões com peças de alta qualidade." }
    ],
    sections: [
      {
        id: "lightning-vs-usbc",
        title: "Lightning vs USB-C: O Que Muda no Diagnóstico?",
        content: "A Apple migrou do conector Lightning para o USB-C a partir do iPhone 15. Para o diagnóstico de mau contato, isso muda bastante: a porta Lightning tem 8 pinos e é relativamente simples de limpar, enquanto a USB-C possui 24 pinos em formato reversível, o que torna a limpeza mais delicada e o diagnóstico de pinos danificados mais complexo.",
        subsections: [
          { title: "iPhones com Lightning (8 ao 14)", content: "Nestes modelos, o principal vilão é o acúmulo de fiapos que impede o encaixe completo do cabo. O flex de carga Lightning também integra o microfone inferior e a entrada do alto-falante, então uma troca mal feita pode afetar o áudio em ligações." },
          { title: "iPhones com USB-C (15 e 16)", content: "Nos modelos mais recentes, além da sujeira, observamos casos de oxidação acelerada nos pinos USB-C por conta da exposição à maresia de Salvador. Nos modelos Pro (iPhone 15 Pro e 16 Pro), o conector USB-C também suporta saída de vídeo DisplayPort, então danos nele podem afetar a conexão com monitores externos." }
        ]
      }
    ],
    relatedSlugs: ["celular-nao-carrega-causas-solucoes", "celular-carrega-mas-porcentagem-nao-sobe", "iphone-15-nao-carrega-usb-c"]
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
    title: "Troca de Tela Samsung Linha Galaxy S",
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
    slug: "motorola-edge-nao-liga-boca-do-rio",
    title: "Motorola Edge Não Liga? Diagnóstico Especializado na Boca do Rio",
    h1: "Conserto de Motorola Edge e Moto G que Não Ligam em Salvador",
    metaDescription: "Seu Motorola apagou do nada? A Reparo Avançado em Salvador possui laboratório para reparo de placa e baterias da linha Motorola Edge e Moto G.",
    category: "motorola" as Category,
    brand: "Motorola",
    model: "Edge, Moto G",
    service: "Aparelho Não Liga",
    serviceSlug: "aparelho-nao-liga",
    description: "Protocolo técnico para diagnosticar e recuperar smartphones Motorola Edge e Moto G que apagaram de repente e não dão sinal de vida.",
    isEditorial: true,
    keywords: ["motorola não liga salvador", "conserto motorola edge", "bateria motorola salvador", "placa motorola moto g", "motorola apagou do nada", "moto g não liga não carrega"],
    problems: [
      "Motorola (Edge ou Moto G) apagou e não acende nem a luz de carga",
      "Aparelho fica piscando o logo da Motorola em loop infinito e apaga",
      "Só funciona enquanto conectado no carregador, desliga ao remover",
      "Tela completamente preta mas o aparelho vibra ao segurar botão de energia",
      "Motorola esquenta ao conectar no carregador mas não dá sinal de vida na tela",
      "Aparelho caiu e parou de ligar, mesmo sem dano visível externo"
    ],
    causes: [
      "Colapso da bateria (vida útil zerada) ou flex da bateria desconectado internamente após impacto",
      "Curto-circuito no CI de gerenciamento de energia (PMIC), frequente na linha Edge após oscilação de rede elétrica",
      "Problema crônico no botão de energia (botão afundado ou com mau contato no flex interno)",
      "Corrupção do bootloader após atualização de sistema interrompida (comum na linha Moto G com atualizações OTA)",
      "Dano na tela ou no flex do display — o aparelho liga, mas não exibe imagem (confundido com 'não liga')"
    ],
    solution: `A linha Motorola é robusta, mas falhas no gerenciamento de energia são comuns após uso prolongado. Quando seu Motorola não liga, a Reparo Avançado aplica um protocolo de diagnóstico específico para identificar a causa real:

[DICA]
Etapa 1 — Injeção de Voltagem em Bancada: abrimos o aparelho com segurança e alimentamos a placa-mãe diretamente com fonte de bancada controlada. O amperímetro nos revela na hora se a placa está em curto (consumo alto sem ligar), se a bateria está morta (consumo zero), ou se o problema está na tela (consumo normal mas sem imagem).
Etapa 2 — Teste de Componentes Isolados: testamos bateria, tela e botão de energia separadamente para isolar o defeito exato.
Etapa 3 — Microsoldagem (se necessário): se o defeito estiver no CI de carga ou PMIC, realizamos a substituição do componente via estação de solda com ar quente controlado.
[/DICA]

É importante diferenciar "não liga" de "não dá imagem": muitos Motorolas chegam com o diagnóstico de "morto" mas na verdade estão ligando normalmente — o problema é no display ou no flex da tela, que pode ter se desconectado após uma queda. Esse diagnóstico correto evita que o cliente pague por um reparo de placa quando precisa apenas de uma reconexão ou troca de tela. ${LOCAL_SEO}`,
    whenToSeek: "Não tente conectar na tomada repetidas vezes se ele esquentar e não der imagem — isso pode agravar um possível curto no PMIC. Se o aparelho apagou após queda, atualização ou contato com líquido, traga o quanto antes para avaliação.",
    costInfo: `O diagnóstico para celulares que não ligam é sempre gratuito. Só cobramos pelo reparo efetivamente realizado, após aprovação do orçamento. O valor varia conforme o defeito: troca de bateria é mais acessível; reparo de placa com microsoldagem tem custo proporcional à complexidade. ${CTA_TEXT}`,
    faq: [
      { question: "Meu Motorola não liga após uma atualização de sistema. Tem conserto?", answer: "Sim. Atualizações OTA interrompidas podem corromper o bootloader do Android. Na Reparo Avançado, conseguimos restaurar o firmware via ferramentas de flash conectadas diretamente à placa, recuperando o aparelho sem perda de dados na maioria dos casos." },
      { question: "Qual a diferença de reparo entre Motorola Edge e Moto G?", answer: "A linha Edge usa componentes mais compactos e integrados, o que torna o reparo de placa mais delicado. A linha Moto G tem arquitetura mais modular, facilitando a troca de peças individuais como bateria e tela. Em ambos os casos, nosso laboratório está equipado para o reparo." },
      { question: "Se o Motorola não ligar de jeito nenhum, consigo recuperar minhas fotos e dados?", answer: "Em muitos casos, sim. Mesmo quando a placa está danificada além do reparo, conseguimos acessar a memória eMMC e recuperar fotos, contatos e documentos. Avaliamos essa possibilidade gratuitamente." }
    ],
    sections: [
      {
        id: "diagnostico-nao-liga-vs-nao-da-imagem",
        title: "Não Liga vs Não Dá Imagem: Uma Diferença Crucial",
        content: "Muitos clientes chegam dizendo que o Motorola 'morreu', quando na verdade o aparelho está funcionando normalmente — apenas a tela não exibe nada. Isso acontece com frequência após quedas que desconectam o flex do display internamente. Na Reparo Avançado, nosso primeiro teste é justamente verificar se há consumo de energia na placa (sinal de que está ligando) antes de qualquer intervenção.",
        subsections: [
          { title: "Sinais de Que o Aparelho Está Ligando (Mesmo Sem Tela)", content: "Se o Motorola vibra ao segurar o botão de energia, se toca som de notificação, ou se aparece como dispositivo conectado ao plugar no computador, ele está ligando. O problema é exclusivamente na tela ou no flex do display." },
          { title: "Sinais de Defeito Real na Placa", content: "Se não há vibração, som, LED de carga nem reconhecimento no computador, o problema pode estar na placa-mãe (PMIC, CI de carga) ou na bateria completamente colapsada. O teste de bancada com fonte controlada é a forma mais segura de diagnosticar." }
        ]
      }
    ],
    relatedSlugs: ["celular-nao-liga-causas", "motorola-reiniciando-tela-azul-apagou", "celular-nao-carrega-causas-solucoes"]
  },
  {
    slug: "celular-caiu-no-mar-armacao-desoxidacao",
    title: "Celular Caiu no Mar da Praia de Armação? O que NÃO Fazer",
    h1: "Celular Caiu na Água do Mar em Salvador? Guia de Sobrevivência e Desoxidação",
    metaDescription: "Derrubou o celular no mar em Salvador (Armação, Pituba, etc)? Água salgada corrói componentes rápido. Veja os primeiros socorros e faça a desoxidação.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Desoxidação",
    serviceSlug: "desoxidacao",
    description: "A água salgada do mar é a pior inimiga do celular. Entenda a corrosão galvânica, saiba por que o pote de arroz não funciona e como agir rápido para salvar seus dados.",
    isEditorial: true,
    keywords: ["celular caiu no mar salvador", "desoxidação celular salvador", "recuperar celular molhado", "celular agua do mar o que fazer", "água salgada no celular", "banho químico celular"],
    problems: [
      "O celular caiu no mar, na piscina ou foi atingido por uma onda na praia",
      "As câmeras traseira e frontal apresentam gotículas ou estão completamente embaçadas por dentro",
      "Aviso persistente de 'Umidade detectada na porta USB' no Android",
      "Aparelho desliga sozinho, entra em loop na tela da maçã ou do logotipo e não inicia o sistema",
      "Tela exibe manchas de água, distorção de cores, toque fantasma ou fica completamente preta",
      "Som do alto-falante abafado, estourado ou microfone parou de captar a voz"
    ],
    causes: [
      "A água do mar contém altíssima concentração de sal (cloreto de sódio), que atua como um condutor elétrico potente causando curtos-circuitos imediatos",
      "Início da corrosão galvânica acelerada: quando a bateria alimenta a placa molhada, os metais dos microchips começam a se decompor em questão de horas",
      "Secagem inadequada ao sol ou com secador de cabelo, que empurra a água mais para o fundo do aparelho e derrete selos de vedação",
      "Resistência à água original (IP68) já degradada por quedas anteriores ou contato prévio com produtos químicos e vapor de chuveiro",
      "Uso da famosa 'técnica do arroz', que apenas remove a umidade externa superficial, mas permite que o sal se cristalize na placa-mãe interna"
    ],
    solution: `O contato com a água salgada é uma das situações de emergência mais críticas para qualquer smartphone. Diferente da água doce, a água do mar inicia um processo de oxidação quase instantâneo nos componentes internos. O mito do pote de arroz é perigoso porque cria uma falsa sensação de segurança enquanto o sal continua corroendo a placa-mãe de forma silenciosa.

Na Reparo Avançado, empregamos um protocolo emergencial de Desoxidação (Banho Químico) projetado para interromper a corrosão:

[DICA]
Etapa 1 — Desmontagem Imediata e Desconexão de Energia: o aparelho é aberto rapidamente para desconectar a bateria, cessando a corrente elétrica que acelera a corrosão galvânica.
Etapa 2 — Banho Químico Ultrassônico: a placa-mãe é isolada e submetida a uma cuba ultrassônica com álcool isopropílico 99,8% e solventes específicos para eletrônica. O ultrassom remove a cristalização de sal até mesmo debaixo dos CIs blindados.
Etapa 3 — Secagem em Estufa e Teste de Componentes: após a limpeza, a placa passa por uma estufa de secagem controlada. Em seguida, injetamos tensão na placa com a fonte de bancada para detectar eventuais curtos-circuitos remanescentes e testamos módulos individuais (tela, câmeras, bateria).
[/DICA]

Nosso objetivo primário nesse tipo de reparo é a recuperação funcional da placa para resgatar os dados do cliente (fotos, documentos, aplicativos de banco). Na maioria dos casos em que o atendimento é rápido, o aparelho volta a funcionar perfeitamente. Em situações extremas onde a tela ou bateria entraram em curto irremediável, informamos o estado e o custo das peças adicionais para que o cliente decida. ${LOCAL_SEO}`,
    whenToSeek: "O tempo é o fator principal. Aja imediatamente: desligue o aparelho (se possível), NUNCA o conecte no carregador (isso causa curtos irreversíveis) e traga-o em caráter de urgência para a assistência técnica. Cada hora perdida aumenta o grau de corrosão dos microchips.",
    costInfo: `O diagnóstico do estado da placa e a avaliação inicial são sempre gratuitos. O serviço de desoxidação possui um custo justo para interromper a degradação, e caso sejam necessárias novas peças (como tela ou bateria), passamos o orçamento de forma transparente. ${CTA_TEXT}`,
    faq: [
      { question: "Deixei cair no mar e ele ainda está funcionando. Posso continuar usando?", answer: "Não! A corrosão pela água salgada é progressiva. O celular pode funcionar por algumas horas ou dias até que o sal cristalize e cause um curto-circuito fatal. Desligue-o imediatamente e busque o banho químico preventivo." },
      { question: "O arroz realmente não funciona para celular molhado?", answer: "Infelizmente, é um mito. O arroz consegue absorver a umidade apenas do ar ao redor do aparelho. Ele não remove a água e o sal depositados entre as finas camadas da placa-mãe. Pior ainda, a poeira fina do arroz pode entrar no conector de carga e piorar a situação." },
      { question: "Meu celular é à prova d'água (IP68), devo me preocupar?", answer: "A certificação IP68 refere-se a testes controlados em água doce e parada. A água do mar, por ser salgada e corrosiva, não é coberta pelas garantias de fábrica de nenhuma fabricante. Além disso, a vedação original enfraquece com o tempo, calor e quedas." }
    ],
    sections: [
      {
        id: "diferenca-agua-doce-e-salgada",
        title: "A Diferença Crucial Entre Água Doce e Água Salgada",
        content: "A água doce de chuva ou vaso sanitário pode causar danos, mas o processo é consideravelmente mais lento. Já a água do mar age como um acelerador extremo. A presença de cloreto de sódio diminui a resistência elétrica da água, transformando qualquer pequena gota num caminho perfeito para curtos-circuitos. É vital não tentar carregar um aparelho após o contato com a praia.",
        subsections: [
          { title: "Os Primeiros Socorros Imediatos", content: "Retire o celular da água, seque o excesso com uma toalha limpa (sem esfregar a areia), remova o chip SIM e o cartão de memória. Desligue o aparelho e não tente sacudir, pois isso empurra a água para partes ainda secas da placa." },
          { title: "A Recuperação de Dados", content: "Mesmo que o celular tenha passado horas na água e componentes como tela e câmeras estejam totalmente oxidados, se a memória interna (NAND/eMMC) e o processador sobreviverem à corrosão, o laboratório de microsoldagem da Reparo Avançado tem altas taxas de sucesso na extração dos seus dados." }
        ]
      }
    ],
    relatedSlugs: ["celular-nao-liga-causas", "celular-caiu-na-agua", "o-que-e-reparo-de-placa-de-celular"]
  },
  {
    slug: "vale-pena-trocar-vidro-ou-tela-completa",
    title: "Vale a Pena Trocar o Vidro do Celular ou a Tela Toda? (Guia)",
    h1: "Troca de Vidro vs Troca de Tela Completa: Qual a Diferença Prática?",
    metaDescription: "Quebrou a tela do celular? Entenda quando é possível economizar fazendo apenas a Troca do Vidro e quando é obrigatória a Troca de Tela Completa.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Troca de Tela",
    serviceSlug: "troca-tela",
    description: "Um guia técnico sobre a estrutura das telas de smartphones, os riscos da troca de vidro isolada e por que a troca do módulo frontal completo é muitas vezes a opção mais segura.",
    isEditorial: true,
    keywords: ["troca de vidro celular salvador", "diferença tela e vidro celular", "trocar tela completa salvador", "conserto tela celular valor", "troca de vidro compensa"],
    problems: [
      "O celular caiu e trincou o vidro, mas a imagem e as cores parecem intactas",
      "O toque na tela (touchscreen) funciona em algumas partes e falha em outras",
      "O vidro está estilhaçado a ponto de soltar pequenos cacos de vidro nos dedos",
      "Surgimento de pequenas manchas pretas (pixels mortos) nos cantos onde houve o impacto",
      "Listras verdes, brancas ou roxas cortando a imagem de ponta a ponta"
    ],
    causes: [
      "Quedas acidentais em superfícies duras (asfalto, quina de mesa) que superam a tensão do vidro Gorilla Glass",
      "Impacto concentrado que não apenas quebra o vidro, mas perfura a camada OLED ou LCD subjacente",
      "Pressão no bolso traseiro ao sentar sobre o aparelho, que enverga o chassi e trinca o display interno"
    ],
    solution: `Na Reparo Avançado, recebemos dezenas de clientes diariamente com uma dúvida comum: "Dá para trocar só o vidro?". A resposta técnica depende da anatomia da tela do seu aparelho. 

As telas modernas (especialmente OLED e AMOLED) são compostas por camadas fundidas a vácuo: o vidro externo, a camada de toque (touch) e o display (que gera a imagem).

[DICA]
Para que a Troca de Vidro seja possível, 3 condições devem ser atendidas:
1. A imagem deve estar 100% perfeita (sem manchas, listras ou tremores).
2. O touch deve funcionar em toda a extensão da tela.
3. O modelo do celular deve permitir a separação sem risco extremo de quebra do display (processo feito via máquina de laminação OCA).
[/DICA]

Quando é necessário fazer a Troca de Tela Completa (Módulo Frontal)?
Na maioria dos modelos atuais, o vidro e o display são colados de fábrica de forma indissociável. Mesmo quando é possível separar, a troca apenas do vidro apresenta riscos a médio prazo: descolamento, bolhas sob a tela e falhas no toque. Por isso, recomendamos fortemente a Troca de Tela Completa na maioria dos cenários. Com a troca do módulo frontal, o aparelho volta à condição de fábrica, o reparo é feito em menos de 1 hora e o risco de problemas futuros é quase zero. ${LOCAL_SEO}`,
    whenToSeek: "Assim que a tela trincar. Ficar usando o celular com o vidro estilhaçado não apenas causa ferimentos nos dedos, mas a pressão do uso diário empurra os cacos para dentro, furando a camada do display e tornando o conserto mais caro. Além disso, a tela perde a proteção contra suor e umidade.",
    costInfo: `A avaliação para determinar se o seu caso exige a troca da tela completa é rápida e totalmente gratuita. Os orçamentos variam conforme a tecnologia da tela do seu modelo (Incell, OLED, Soft OLED), sempre focando no melhor custo-benefício e com garantia de 90 dias. ${CTA_TEXT}`,
    faq: [
      { question: "Trocar só o vidro mantém a qualidade da imagem original?", answer: "Sim, pois o display original é mantido. No entanto, o processo de separação e colagem do novo vidro exige maquinário caro e perfeito alinhamento. Se mal feito por oficinas não especializadas, podem surgir bolhas de ar ou manchas amareladas na tela meses depois." },
      { question: "Por que algumas assistências dizem que não dá para trocar só o vidro do meu celular?", answer: "Em muitos smartphones modernos (especialmente da linha Apple e topos de linha Samsung), o display é extremamente fino e frágil. A tentativa de separar o vidro quebrado frequentemente destrói o display interno, inviabilizando o processo. Nesses casos, a troca do módulo completo é o único padrão recomendado pelas fabricantes." },
      { question: "O que significa tela Incell, OLED e Original Nacional?", answer: "São níveis de qualidade de telas para reposição. Incell é uma tela LCD de bom custo-benefício (comum em iPhones mais antigos). OLED oferece cores vivas e pretos profundos, idêntico à experiência de fábrica. A escolha varia conforme seu orçamento e modelo do aparelho." }
    ],
    sections: [
      {
        id: "riscos-troca-vidro",
        title: "Os Riscos Ocultos da Troca de Vidro",
        content: "Embora a troca apenas do vidro pareça atraente financeiramente em um primeiro momento, ela esconde desafios técnicos. O processo envolve aquecer a tela a altas temperaturas para derreter a cola original, passar um fio de aço para cortar o vidro quebrado, limpar os resíduos e laminar um novo vidro em uma câmara de vácuo.",
        subsections: [
          { title: "Toque Fantasma (Ghost Touch)", content: "Um dos problemas mais comuns após uma troca de vidro mal executada é o toque fantasma. A estática ou micro-pressões da nova laminação fazem o celular clicar em aplicativos e digitar sozinho, obrigando o cliente a trocar a tela toda novamente." },
          { title: "A Nossa Recomendação", content: "Prezamos pela tranquilidade do cliente. A troca de tela completa (módulo) é rápida (geralmente feita na hora), segura e não deixa 'sequelas' no aparelho. É o investimento mais inteligente para quem planeja ficar com o smartphone por mais alguns anos." }
        ]
      }
    ],
    relatedSlugs: ["diferenca-tela-original-primeira-linha", "troca-de-tela", "celular-caiu-na-agua"]
  },
  {
    slug: "quanto-custa-consertar-celular-salvador-cuidado",
    title: "Quanto Custa Consertar o Celular? O Barato Sai Caro",
    h1: "Preço de Conserto de Celular em Salvador: Por Que o Barato Sai Muito Caro",
    metaDescription: "Buscando o conserto mais barato de celular em Salvador? Cuidado com peças falsificadas e riscos. Entenda como valorizar o reparo de qualidade.",
    category: "conserto" as Category,
    brand: "Multimarcas",
    model: "Todos",
    service: "Diagnóstico",
    serviceSlug: "diagnostico",
    description: "Um guia transparente sobre como oficinas amadoras reduzem custos usando peças de segunda linha e como escolher uma assistência técnica confiável com garantia real.",
    isEditorial: true,
    keywords: ["quanto custa consertar celular salvador", "assistência técnica confiável", "reparo celular preço salvador", "peça paralela celular", "tela celular paralela", "bateria pirata celular"],
    problems: [
      "Variação extrema de preços entre orçamentos para o mesmo conserto na cidade",
      "Medo de consertar e o aparelho apresentar um defeito diferente na semana seguinte",
      "Telas 'baratas' que perdem a cor, gastam a bateria rapidamente ou travam o toque no sol",
      "Baterias trocadas recentemente que estufam em menos de 2 meses de uso",
      "Aparelhos devolvidos com parafusos faltando, tampas mal coladas ou botões frouxos",
      "Recusa de garantia por parte de técnicos informais após o serviço dar problema"
    ],
    causes: [
      "Uso generalizado de Telas 'Incell de 2ª linha' (tecnologia TFT antiga disfarçada) por oficinas amadoras para reduzir o preço final",
      "Instalação de baterias recondicionadas ou de baixíssima densidade energética vendidas como originais",
      "Ausência de ferramental ESD (antiestático), resultando em curtos-circuitos invisíveis causados por eletricidade estática do técnico",
      "Falta de insumos profissionais de montagem, substituídos por colas adesivas baratas que ressecam e soltam a tela",
      "Técnicos sem treinamento para aplicar o torque correto nos parafusos internos, causando danos estruturais à placa"
    ],
    solution: `Na Reparo Avançado, vemos rotineiramente aparelhos que passaram por assistências não qualificadas. A matemática é simples: quando uma oficina cobra um valor muito abaixo da média do mercado, a economia está sendo feita na qualidade da peça ou na segurança da mão de obra.

[DICA]
Para garantir um reparo seguro, observe 3 indicadores de qualidade:
1. Procedência da Peça: questione qual é a tecnologia da tela (Incell, OLED, AMOLED) ou a marca da célula da bateria.
2. Ferramental: o laboratório possui mantas antiestáticas e estações de solda com temperatura controlada?
3. Termo de Garantia: a assistência emite ordem de serviço formal detalhando o conserto e a garantia legal?
[/DICA]

Nosso foco é entregar o Custo-Benefício Real. Cobramos um valor justo que nos permite utilizar Peças Premium de Alta Fidelidade (OLED/Incell AAA) e insumos de padrão industrial (como fitas dupla-face estruturais). Nossos profissionais seguem protocolos de desmontagem utilizando mantas e pulseiras antiestáticas, evitando qualquer dano secundário à placa-mãe. Todo aparelho finalizado passa por um checklist de testes em bancada antes da entrega. Seu smartphone guarda seus aplicativos de banco e suas memórias pessoais — não o entregue na mão de curiosos por causa de R$ 50 de diferença. ${LOCAL_SEO}`,
    whenToSeek: "Antes de aprovar um orçamento 'milagroso' pela internet apenas com base no preço mais baixo. Traga seu aparelho para a Reparo Avançado na Boca do Rio para um orçamento técnico fundamentado e transparente.",
    costInfo: `Nossos orçamentos são baseados em tabelas de peças de fornecedores homologados. Não somos a assistência mais cara, nem a mais barata — somos aquela que resolve o problema de forma definitiva com garantia clara de 90 dias. A avaliação do aparelho é sempre gratuita. ${CTA_TEXT}`,
    faq: [
      { question: "Peça paralela pode danificar outras partes do meu celular?", answer: "Sim. Uma tela TFT de baixíssima qualidade consome muito mais energia que o normal, forçando o CI de imagem da placa-mãe a superaquecer. Já uma bateria pirata não possui o chip controlador de carga adequado, podendo estufar, vazar ou até causar incêndios durante o carregamento." },
      { question: "Como saber se a tela que colocaram no meu celular é boa?", answer: "Telas de baixa qualidade apresentam cores lavadas (preto acinzentado), o vidro é mais espesso, o brilho máximo não é suficiente para uso sob o sol, e o touch costuma falhar nas bordas ou ao digitar rápido. Telas de qualidade Premium mantêm a experiência idêntica à de fábrica." },
      { question: "Se o defeito voltar, a garantia de vocês cobre?", answer: "Absolutamente. Emitimos ordem de serviço e cumprimos rigorosamente a garantia de 90 dias sobre a peça substituída e a mão de obra, desde que o aparelho não apresente sinais de novas quedas, pressão excessiva ou contato com líquidos após o reparo." }
    ],
    sections: [
      {
        id: "custos-ocultos-do-reparo",
        title: "Os Custos Ocultos de um Reparo Amador",
        content: "A economia inicial de um conserto barato rapidamente desaparece quando você precisa refazer o serviço em outro lugar. Um conserto mal feito pode causar danos secundários muito piores.",
        subsections: [
          { title: "Danos por Estática", content: "Técnicos que não utilizam proteção ESD (descarga eletrostática) transferem energia do próprio corpo para a placa-mãe do celular. Isso pode causar micro-curtos que farão o celular parar de ligar semanas depois do conserto." },
          { title: "Perda da Vedação", content: "Muitos celulares possuem selos de proteção contra poeira e respingos. Uma assistência barata vai ignorar essa camada ao fechar o aparelho. Nós repomos as fitas de vedação adequadas sempre que a estrutura do modelo permitir, mantendo a integridade do smartphone." }
        ]
      }
    ],
    relatedSlugs: ["diferenca-tela-original-primeira-linha", "o-que-e-reparo-de-placa-de-celular", "como-saber-hora-trocar-bateria-iphone"]
  }
];
