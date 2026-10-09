import { businessInfo } from '../config/business';

export interface InformacaoPage {
  slug: string;
  title: string;
  meta: string;
  h1: string;
  serviceSlug: string;
  localSlug: string;
  areaServed: string;
  whatsapp: string;
  content: string;
  faq?: {question: string, answer: string}[];
}

export const informacoesIndex = {
  slug: "",
  title: "Informações sobre Conserto de Celular em Salvador | Reparo Avançado",
  meta: "Informações sobre troca de tela, bateria, conserto de iPhone e Samsung por bairro de Salvador. Reparo Avançado, na Boca do Rio.",
  h1: "Informações por Serviço e Bairro",
  text: "Reunimos aqui informações sobre os serviços mais procurados na Reparo Avançado, organizadas por bairro de Salvador. Nossa loja fica na Boca do Rio, e também fazemos coleta e entrega do aparelho."
};

export const informacoesPages: InformacaoPage[] = [

  {
    slug: "celular-nao-liga-boca-do-rio",
    title: "Celular Não Liga na Boca do Rio | Reparo Avançado",
    meta: "Celular que não liga na Boca do Rio, em Salvador? Diagnóstico antes do orçamento, loja no bairro e garantia de 90 dias no serviço.",
    h1: "Celular Não Liga na Boca do Rio",
    serviceSlug: "/celular-nao-liga",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Moro na Boca do Rio e meu celular não liga.",
    faq: [
      { question: "Celular que não liga tem conserto?", answer: "Na maioria dos casos, sim. Bateria, conector e falhas de sistema costumam ter solução direta. Defeitos na placa dependem do diagnóstico." },
      { question: "Os dados são perdidos?", answer: "Quando a causa é bateria ou conector, o aparelho volta a ligar com os dados. Por isso, evite restaurar de fábrica antes de passar por diagnóstico." }
    ],
    content: "Celular que não liga é um dos defeitos mais comuns que chegam à nossa bancada. A Reparo Avançado fica na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, e atende de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 17h. Se você está por aqui, pode trazer o aparelho direto na loja.\n\n## O que pode estar por trás\n\n- Bateria totalmente descarregada ou sem capacidade\n- Conector de carga ou cabo com defeito\n- Falha de sistema depois de uma atualização\n- Queda ou contato com líquido\n- Defeito na placa\n\n## O que conferir antes de vir\n\n1. Deixe o celular no carregador por 20 a 30 minutos.\n2. Teste outro cabo e outro carregador.\n3. Force a reinicialização segurando o botão de ligar por cerca de 10 a 15 segundos.\n4. Anote o que aconteceu antes: travou, esquentou, caiu ou molhou.\n\nSe nada disso resolver, traga o aparelho. Evite restaurar de fábrica sem backup, porque isso apaga os dados.\n\n## Como funciona na loja\n\nFazemos o diagnóstico para descobrir a causa antes de passar o orçamento, que é gratuito. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "celular-nao-liga-pituba",
    title: "Celular Não Liga na Pituba | Reparo Avançado",
    meta: "Celular que não liga na Pituba, em Salvador? Veja o que testar e como funciona a coleta e entrega até a nossa loja, na Boca do Rio.",
    h1: "Celular Que Não Liga na Pituba",
    serviceSlug: "/celular-nao-liga",
    localSlug: "/assistencia-tecnica-pituba",
    areaServed: "Pituba, Salvador",
    whatsapp: "Olá! Estou na Pituba e meu celular não liga.",
    faq: [
      { question: "Preciso levar o carregador junto?", answer: "Se puder, sim. Ele ajuda a testar se o problema está no aparelho ou no acessório." },
      { question: "A coleta tem custo?", answer: "Consulte pelo WhatsApp as condições de coleta e entrega para o seu endereço." }
    ],
    content: "Se o seu celular parou de ligar e você está na Pituba, não precisa deixar o problema para depois. A Reparo Avançado atende de duas formas: você pode levar o aparelho até a nossa loja, na Boca do Rio, ou pedir a coleta e entrega. Consulte a disponibilidade para o seu endereço pelo WhatsApp.\n\n## Sinais que ajudam no diagnóstico\n\nQuando você nos chama, algumas informações aceleram a avaliação:\n\n- A marca e o modelo do celular\n- Se ele vibra, faz barulho ou acende alguma luz ao ser ligado no carregador\n- Se esquentou, caiu ou molhou antes de parar\n- Se estava no meio de uma atualização\n\n## Testes simples antes de chamar\n\n1. Deixe no carregador por 20 a 30 minutos antes de tentar ligar.\n2. Use outro cabo e outro carregador.\n3. Segure o botão de ligar por 10 a 15 segundos para forçar a reinicialização.\n\n## Como funciona com coleta e entrega\n\n1. Você chama no WhatsApp e conta o que aconteceu.\n2. Combinamos a coleta do aparelho.\n3. Fazemos o diagnóstico e enviamos o orçamento, que é gratuito.\n4. Com a sua aprovação, fazemos o reparo, testamos e devolvemos.\n\nO serviço sai com garantia de 90 dias."
  },
  {
    slug: "celular-caiu-na-agua-boca-do-rio",
    title: "Celular Caiu na Água na Boca do Rio | Reparo Avançado",
    meta: "Celular caiu na água ou molhou na Boca do Rio, em Salvador? Veja o que fazer na hora e traga para diagnóstico. Garantia de 90 dias.",
    h1: "Celular Caiu na Água na Boca do Rio",
    serviceSlug: "/celular-caiu-na-agua",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Meu celular caiu na água e estou na Boca do Rio.",
    faq: [
      { question: "Meu celular molhou, mas ligou normalmente. Posso ficar tranquilo?", answer: "Não necessariamente. A corrosão avança aos poucos e o defeito pode aparecer dias depois. Vale passar por diagnóstico mesmo assim." },
      { question: "Dá para recuperar os dados de um celular que molhou?", answer: "Depende do estado do aparelho. Por isso é importante não ligar nem carregar e levar para avaliação rapidamente." }
    ],
    content: "Celular que molhou pede pressa. Quanto mais tempo a umidade fica dentro do aparelho, maior o risco de corrosão na placa. Por isso, quem está na Boca do Rio pode vir direto à Reparo Avançado, na R. Abelardo Andrade de Carvalho, 8, sem precisar esperar.\n\n## O que fazer na hora\n\n1. Retire o celular da água e desligue, se ainda estiver ligado.\n2. Tire a capinha, o chip e o cartão de memória.\n3. Seque o lado de fora com um pano macio.\n4. Não ligue e não coloque para carregar.\n5. Traga para avaliação o quanto antes.\n\n## O que não fazer\n\n- Não coloque o aparelho no arroz, porque isso não seca por dentro e pode deixar resíduos.\n- Não use secador de cabelo, forno ou micro-ondas.\n- Não balance nem aperte os botões para \"tirar a água\".\n- Não ligue para testar se funciona.\n\n## Como funciona na loja\n\nAbrimos o aparelho para verificar o estado da placa e dos conectores antes de passar o orçamento, que é gratuito. Nem todo celular molhado tem a mesma chance de recuperação, e dizemos o que o diagnóstico encontrou. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "celular-caiu-na-agua-imbui",
    title: "Celular Molhado no Imbuí: Diagnóstico | Reparo Avançado",
    meta: "Celular caiu no mar, na piscina ou no banheiro e você está no Imbuí? Veja o que fazer e como pedir coleta e entrega até a Boca do Rio.",
    h1: "Celular Que Molhou para Quem Está no Imbuí",
    serviceSlug: "/celular-caiu-na-agua",
    localSlug: "/assistencia-tecnica-imbui",
    areaServed: "Imbuí, Salvador",
    whatsapp: "Olá! Estou no Imbuí e meu celular molhou.",
    faq: [
      { question: "Celular que caiu no mar tem conserto?", answer: "Depende do estado em que o aparelho chega e do tempo desde o contato com a água. O diagnóstico mostra o que dá para recuperar." },
      { question: "Posso esperar secar sozinho?", answer: "Não é recomendado. A umidade dentro do aparelho continua agindo, e quanto antes ele for avaliado, melhor." }
    ],
    content: "Praia, piscina, chuva, vaso sanitário: celular molhado acontece de várias formas, e cada uma pede um cuidado. Para quem está no Imbuí, a Reparo Avançado atende na loja, na Boca do Rio, ou por coleta e entrega. Consulte a disponibilidade para o seu endereço pelo WhatsApp.\n\n## Água do mar, piscina ou água doce\n\nA água do mar é a que costuma causar corrosão mais rápido, por causa do sal. A água de piscina e a água doce também deixam resíduos que, com o tempo, danificam a placa. Em qualquer caso, o passo mais importante é o mesmo: desligar o aparelho e não carregar.\n\n## Primeiros cuidados\n\n1. Desligue o celular e retire a capinha, o chip e o cartão de memória.\n2. Seque o exterior com um pano macio.\n3. Não carregue e não tente ligar.\n4. Chame no WhatsApp e conte o que aconteceu.\n\n## O que informar quando você chamar\n\n- A marca e o modelo do celular\n- Em que tipo de água ele caiu e há quanto tempo\n- Se ele chegou a ligar depois\n- Se já apareceu algum aviso de umidade na tela\n\n## Como funciona\n\nCombinamos a coleta, fazemos o diagnóstico para verificar a placa e os conectores e enviamos o orçamento, que é gratuito. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "conserto-de-notebook-boca-do-rio",
    title: "Conserto de Notebook na Boca do Rio | Reparo Avançado",
    meta: "Notebook que não liga, com tela preta ou com defeito na Boca do Rio, Salvador? Diagnóstico antes do orçamento e garantia de 90 dias.",
    h1: "Conserto de Notebook na Boca do Rio",
    serviceSlug: "/conserto-de-notebook",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Estou na Boca do Rio e preciso consertar meu notebook.",
    faq: [
      { question: "Vocês consertam notebook de qualquer marca?", answer: "Chame no WhatsApp e informe a marca e o modelo, que confirmamos o atendimento." },
      { question: "Notebook com tela preta tem conserto?", answer: "Em muitos casos, sim. A causa pode estar na tela, no cabo da tela, na memória ou na placa, e o diagnóstico identifica qual é." }
    ],
    content: "Além de celulares e tablets, a Reparo Avançado também conserta notebooks. A loja fica na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, e você pode trazer o equipamento direto, de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 17h.\n\n## Defeitos que avaliamos\n\n- Notebook que não liga ou liga e não mostra imagem\n- Tela com listras, piscando ou quebrada\n- Notebook que não carrega, mesmo conectado na tomada\n- Equipamento que esquenta demais ou desliga sozinho\n- Lentidão que não melhora\n\n## Antes de trazer\n\n1. Anote o que aconteceu: caiu, molhou, apagou do nada ou foi esquentando aos poucos.\n2. Traga o carregador junto, porque ele ajuda a testar o equipamento.\n3. Se tiver arquivos importantes, avise no atendimento. Nunca formatamos o equipamento sem autorização.\n\n## Como funciona na loja\n\nFazemos o diagnóstico para descobrir a causa antes de passar o orçamento, que é gratuito. Com a sua aprovação, fazemos o reparo. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "conserto-de-notebook-pituba",
    title: "Notebook Lento ou Esquentando na Pituba | Reparo Avançado",
    meta: "Notebook lento, esquentando ou desligando sozinho na Pituba, em Salvador? Veja o que pode ser e como falar com a Reparo Avançado.",
    h1: "Notebook Lento, Esquentando ou Desligando na Pituba",
    serviceSlug: "/conserto-de-notebook",
    localSlug: "/assistencia-tecnica-pituba",
    areaServed: "Pituba, Salvador",
    whatsapp: "Olá! Estou na Pituba e meu notebook está lento e esquentando.",
    faq: [
      { question: "Notebook lento sempre precisa de peça nova?", answer: "Não. Em alguns casos o problema está no sistema ou no excesso de programas. O diagnóstico mostra se há necessidade de troca de componente." },
      { question: "Posso continuar usando um notebook que esquenta muito?", answer: "Não é recomendado. O calor excessivo pode danificar componentes, então vale avaliar o quanto antes." }
    ],
    content: "Notebook que demora para abrir, esquenta muito ou desliga no meio do trabalho costuma estar pedindo manutenção. Para quem está na Pituba, a Reparo Avançado recebe o equipamento na loja, na Boca do Rio, e você pode consultar pelo WhatsApp se a coleta está disponível para o seu endereço.\n\n## O que costuma causar esses sintomas\n\n- Poeira acumulada nas saídas de ar, que prende o calor\n- Disco antigo, que deixa o sistema lento\n- Pouca memória para o uso que você faz\n- Ventilação com defeito\n- Falhas de sistema ou excesso de programas abertos\n\n## O que observar antes de chamar\n\n1. O notebook esquenta logo ao ligar ou só depois de um tempo de uso?\n2. O ventilador faz barulho alto ou ficou em silêncio?\n3. A lentidão é geral ou só em alguns programas?\n4. Ele desliga sozinho ou trava e fica parado?\n\nEssas respostas ajudam muito no diagnóstico.\n\n## Como funciona\n\nFazemos o diagnóstico para identificar a causa antes de passar o orçamento, que é gratuito. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "conserto-de-xiaomi-boca-do-rio",
    title: "Conserto de Xiaomi na Boca do Rio | Reparo Avançado",
    meta: "Xiaomi, Redmi ou Poco com defeito na Boca do Rio, em Salvador? Tela, bateria, não liga ou reiniciando. Diagnóstico e garantia de 90 dias.",
    h1: "Conserto de Xiaomi, Redmi e Poco na Boca do Rio",
    serviceSlug: "/blog/assistencia-tecnica-xiaomi-salvador-conserto",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Moro na Boca do Rio e preciso consertar meu Xiaomi.",
    faq: [
      { question: "Vocês desbloqueiam conta Mi ou Google?", answer: "Não. Não fazemos desbloqueio ou recuperação de conta Google ou Mi Cloud." },
      { question: "Meu Xiaomi não liga mais. Tem conserto?", answer: "Em muitos casos, sim. A causa pode ser bateria, conector de carga, sistema ou placa, e o diagnóstico confirma." }
    ],
    content: "Xiaomi, Redmi e Poco são marcas muito presentes em Salvador, e os defeitos mais comuns se repetem. A Reparo Avançado fica na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, e atende esses aparelhos direto na loja.\n\n## Defeitos mais comuns nessas marcas\n\n- Aparelho que desliga do nada e não liga mais\n- Bateria inchada, com a tela ou a tampa levantando\n- Tela com manchas, linhas coloridas ou toque falhando\n- Celular que reinicia sozinho ou fica preso na logo\n- Problemas depois de uma atualização do sistema\n\n## Sinal de alerta: bateria inchada\n\nSe a tampa traseira ou a tela estiver levantando, pare de carregar o aparelho e traga para avaliação. A bateria inchada precisa ser trocada antes de qualquer outro teste.\n\n## Como funciona na loja\n\n1. Você traz o aparelho.\n2. Fazemos o diagnóstico para identificar a causa.\n3. Passamos o orçamento, que é gratuito.\n4. Com a sua aprovação, fazemos o reparo e testamos antes da entrega.\n\nO serviço sai com garantia de 90 dias."
  },
  {
    slug: "conserto-de-xiaomi-brotas",
    title: "Conserto de Xiaomi em Brotas | Reparo Avançado",
    meta: "Xiaomi, Redmi ou Poco com defeito em Brotas, Salvador? Veja o que informar, como funciona a coleta e entrega e a garantia de 90 dias.",
    h1: "Conserto de Xiaomi, Redmi e Poco para Quem Está em Brotas",
    serviceSlug: "/blog/assistencia-tecnica-xiaomi-salvador-conserto",
    localSlug: "/assistencia-tecnica-brotas",
    areaServed: "Brotas, Salvador",
    whatsapp: "Olá! Estou em Brotas e preciso consertar meu Xiaomi.",
    faq: [
      { question: "Preciso fazer backup antes?", answer: "Se o aparelho ainda liga, sim, é sempre recomendado. Se não liga, não restaure de fábrica antes do diagnóstico, para não apagar os dados." },
      { question: "Vocês fazem desbloqueio de conta Mi?", answer: "Não. Não fazemos desbloqueio ou recuperação de conta Google ou Mi Cloud." }
    ],
    content: "Se o seu Xiaomi, Redmi ou Poco apresentou defeito e você está em Brotas, a Reparo Avançado atende na loja, na Boca do Rio, ou por coleta e entrega. Consulte a disponibilidade para o seu endereço pelo WhatsApp.\n\n## Problemas que mais recebemos nessas marcas\n\n- Tela manchada, com linhas coloridas ou com o toque falhando\n- Celular que não carrega ou só carrega em certa posição do cabo\n- Bateria que descarrega rápido ou está inchada\n- Aparelho que reinicia sem parar\n\n## O que informar ao chamar no WhatsApp\n\n1. O modelo exato, por exemplo Redmi Note ou Poco, com a versão se souber.\n2. O que aconteceu antes do defeito: queda, líquido, atualização ou nada.\n3. Se o aparelho liga, vibra ou fica totalmente sem resposta.\n4. Se a tampa ou a tela estão levantando.\n\n## Como funciona\n\nCombinamos a coleta, fazemos o diagnóstico e enviamos o orçamento, que é gratuito. Com a sua aprovação, fazemos o reparo, testamos e devolvemos. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "reparo-de-placa-celular-boca-do-rio",
    title: "Reparo de Placa de Celular na Boca do Rio | Reparo Avançado",
    meta: "Celular não liga depois de queda ou umidade e pode ser a placa? Diagnóstico na Boca do Rio, Salvador, e orçamento gratuito. Garantia de 90 dias.",
    h1: "Reparo de Placa de Celular na Boca do Rio",
    serviceSlug: "/reparo-em-placa",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Estou na Boca do Rio e acho que o problema do meu celular é na placa.",
    faq: [
      { question: "Placa de celular tem conserto?", answer: "Em muitos casos, sim, mas depende do tipo de defeito e do estado do aparelho. O diagnóstico mostra o que é possível." },
      { question: "Vale a pena consertar a placa?", answer: "Depende do modelo, do defeito e do valor do aparelho. Explicamos as opções no orçamento para você decidir." }
    ],
    content: "A placa é a parte do celular que liga todos os componentes. Quando ela tem defeito, o aparelho pode parar de ligar, não carregar, reiniciar sozinho ou perder imagem, mesmo com tela, bateria e conector em bom estado. A Reparo Avançado avalia esses casos na loja, na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8.\n\n## Quando o problema pode ser na placa\n\n- O celular não liga depois de uma queda ou contato com líquido\n- Ele não carrega, mesmo com cabo e carregador bons\n- Reinicia sozinho ou desliga sem motivo claro\n- Esquenta muito sem estar em uso\n- A tela funciona em outro teste, mas o aparelho continua sem resposta\n\nEsses sinais não confirmam a placa por si só. Bateria, conector e tela também podem causar sintomas parecidos, e por isso o diagnóstico vem primeiro.\n\n## Como funciona na loja\n\n1. Você traz o aparelho e conta o que aconteceu.\n2. Fazemos o diagnóstico para separar o problema da placa de defeitos mais simples.\n3. Passamos o orçamento, que é gratuito, e explicamos o que foi encontrado.\n\nNem toda placa compensa o reparo. Quando for esse o caso, dizemos antes de você decidir. O serviço sai com garantia de 90 dias."
  },
  {
    slug: "conserto-de-tablet-boca-do-rio",
    title: "Conserto de Tablet na Boca do Rio | Reparo Avançado",
    meta: "Tablet com tela quebrada, que não liga ou não carrega na Boca do Rio, em Salvador? Diagnóstico antes do orçamento e garantia de 90 dias.",
    h1: "Conserto de Tablet na Boca do Rio",
    serviceSlug: "/conserto-de-tablet",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Estou na Boca do Rio e preciso consertar meu tablet.",
    faq: [
      { question: "Vocês consertam tablet de qualquer marca?", answer: "Chame no WhatsApp e informe a marca e o modelo, que confirmamos o atendimento." },
      { question: "Tablet com tela quebrada ainda funciona?", answer: "Muitas vezes sim, mas continuar usando pode agravar o dano ou machucar. O diagnóstico confirma se o problema é só a tela." }
    ],
    content: "Tablet também quebra, e muita gente não sabe onde levar. A Reparo Avançado conserta tablets na loja, na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 17h.\n\n## Defeitos comuns em tablets\n\n- Tela trincada ou com o toque falhando\n- Tablet que não carrega ou só carrega em certa posição do cabo\n- Aparelho que não liga ou desliga sozinho\n- Bateria que dura pouco\n- Imagem com manchas ou linhas\n\n## O que trazer\n\n1. O tablet, com o carregador original, se tiver.\n2. Informação sobre o que aconteceu: queda, líquido ou desgaste.\n3. Se a tela está presa por senha, esteja pronto para liberar o acesso no atendimento, se for necessário para o teste.\n\n## Como funciona na loja\n\nFazemos o diagnóstico para descobrir a causa antes de passar o orçamento, que é gratuito. Com a sua aprovação, fazemos o reparo e testamos antes da entrega. O serviço sai com garantia de 90 dias."
  }
,

  {
    slug: "troca-de-bateria-iphone-11-salvador",
    title: "Troca de Bateria iPhone 11 em Salvador | Reparo Avançado",
    meta: "Troca de bateria do iPhone 11 em Salvador. Diagnóstico e orçamento gratuitos. Recuperamos a saúde do seu aparelho sem perda de dados e com 90 dias de garantia.",
    h1: "Troca de Bateria iPhone 11 em Salvador",
    serviceSlug: "/troca-de-bateria",
    localSlug: "/assistencia-tecnica-salvador",
    areaServed: "Salvador, BA",
    whatsapp: "Olá! Gostaria de um orçamento para trocar a bateria do meu iPhone 11.",
    faq: [
      { question: "A bateria do iPhone 11 estufou. O que fazer?", answer: "Se a bateria estiver estufada, desligue o aparelho imediatamente e não tente carregar. O estufamento pode quebrar a tela e danificar placas internas. Traga o aparelho para diagnóstico técnico." },
      { question: "Como funciona o orçamento?", answer: "Oferecemos diagnóstico e orçamento gratuitos. O valor depende do modelo exato do aparelho e da bateria escolhida. Fale conosco no WhatsApp para consultar as opções." },
      { question: "Vou perder os meus dados durante o serviço?", answer: "Não. A substituição da bateria não apaga fotos, aplicativos ou arquivos do sistema. Aconselhamos fazer backup em casa apenas por segurança." },
      { question: "Qual a garantia da nova bateria?", answer: "Oferecemos 90 dias de garantia em todos os nossos serviços." },
      { question: "Quanto tempo demora para trocar a bateria?", answer: "Na maioria dos casos, o serviço é concluído no mesmo dia, após a aprovação do orçamento, sujeito à disponibilidade da peça no estoque." },
      { question: "Por que o celular descarrega tão rápido?", answer: "Com o passar dos anos, o processo de degradação química é natural nas células de íons de lítio. O aparelho perde a capacidade de reter a carga total original, causando a necessidade de recargas frequentes." }
    ],
    content: `A troca de bateria do iPhone 11 é um dos serviços mais importantes para devolver o desempenho original ao seu smartphone. Com o passar do tempo e o aumento dos ciclos de carga, as células de íons de lítio se desgastam naturalmente. O aparelho começa a descarregar mais rápido, exigindo o uso constante de carregadores portáteis, podendo até mesmo desligar sozinho ou apresentar lentidão excessiva devido a sistemas de proteção interna.

Se você está em Salvador e precisa resolver esse problema definitivamente, a Reparo Avançado oferece diagnóstico e orçamento gratuitos para o seu iPhone 11. Nossa assistência atende com profissionais dedicados e ferramentas adequadas para fazer o serviço com total segurança e cuidado.

## Sinais de que a bateria precisa ser trocada

Você não precisa esperar o aparelho parar de funcionar totalmente para procurar ajuda. Alguns sintomas indicam claramente o desgaste excessivo:
- A porcentagem da carga cai bruscamente (ex: de 40% para 10% de forma repentina e sem uso intenso).
- O iPhone 11 desliga sozinho ao abrir aplicativos pesados, como câmera, jogos ou mapas de navegação GPS.
- A "Saúde da Bateria", exibida diretamente nas configurações do sistema iOS, está marcada abaixo de 80%, o que indica um desgaste avançado e a recomendação de assistência.
- O aparelho esquenta fora do normal durante o carregamento ou ao ser usado por pouco tempo.
- O sistema operacional começa a apresentar lentidão (throttling), travamentos na rolagem ou demora ao alternar entre janelas de aplicativos, pois o sistema reduz o processamento para não forçar a bateria desgastada.

## Segurança e cuidado com o seu iPhone 11

Sabemos que o smartphone é essencial para o trabalho e a rotina diária. O processo é feito por técnicos especialistas para assegurar que nenhum outro componente seja afetado durante a abertura do aparelho. Além disso, a troca de bateria é um procedimento físico na placa, portanto não apaga os dados: suas fotos, vídeos e aplicativos continuam totalmente intactos.

Nossa equipe está na Boca do Rio, com coleta e entrega disponíveis para facilitar o seu dia e evitar que você precise se deslocar pelo trânsito da cidade. Todos os serviços contam com 90 dias de garantia.

## Quanto custa a troca?

O valor depende do modelo exato do aparelho e da bateria escolhida (bateria original, primeira linha, etc). O diagnóstico é técnico e oferecemos um orçamento gratuito na hora, sem compromisso. Basta nos chamar no WhatsApp para mais informações e para agendar uma avaliação inicial rápida e transparente.`
  },

  {
    slug: "troca-de-tela-celular-boca-do-rio",
    title: "Troca de Tela de Celular na Boca do Rio | Reparo Avançado",
    meta: "Troca de tela de celular na Boca do Rio, Salvador. Diagnóstico antes do orçamento, opções de tela para cada modelo e garantia de 90 dias.",
    h1: "Troca de Tela de Celular na Boca do Rio",
    serviceSlug: "/troca-de-tela",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Moro na Boca do Rio e preciso trocar a tela do meu celular.",
    content: `Se você mora ou trabalha na Boca do Rio e a tela do seu celular quebrou, a Reparo Avançado fica no próprio bairro, na R. Abelardo Andrade de Carvalho, 8. Você pode trazer o aparelho direto na loja.

## Qual tela escolher na troca

Nem toda tela é igual. Para a maioria dos modelos existem três opções:

- **Tela original:** a mesma que veio de fábrica, com cor e toque mais fiéis.
- **Tela OLED compatível:** qualidade de imagem próxima da original, com custo menor.
- **Tela incell:** a opção mais econômica, indicada para quem quer resolver com menor custo.

Antes da troca, explicamos a diferença entre as opções disponíveis para o seu modelo, e você decide.

## Como funciona na loja

1. Você traz o aparelho.
2. Fazemos o diagnóstico para confirmar se o problema é só a tela.
3. Passamos o orçamento com as opções de tela.
4. Com a sua aprovação, fazemos a troca e testamos imagem e toque antes da entrega.

Todo serviço sai com garantia de 90 dias.

## FAQ

**Preciso marcar horário para trazer o celular?**
Não é obrigatório. Se preferir, chame no WhatsApp antes para já adiantar o orçamento.

**Meus dados são apagados na troca de tela?**
Na troca de tela, os dados costumam permanecer no aparelho. Mesmo assim, ter um backup atualizado é sempre recomendado.`
  },
  {
    slug: "troca-de-tela-celular-pituba",
    title: "Troca de Tela de Celular na Pituba | Reparo Avançado",
    meta: "Troca de tela de celular para quem está na Pituba, em Salvador. Coleta e entrega do aparelho, diagnóstico antes do orçamento e garantia.",
    h1: "Troca de Tela de Celular para Quem Está na Pituba",
    serviceSlug: "/troca-de-tela",
    localSlug: "/assistencia-tecnica-pituba",
    areaServed: "Pituba, Salvador",
    whatsapp: "Olá! Estou na Pituba e preciso trocar a tela do meu celular.",
    content: `Para quem está na Pituba, a Reparo Avançado atende de duas formas: você pode levar o celular até a nossa loja, na Boca do Rio, ou pedir a coleta e entrega do aparelho. Consulte a disponibilidade para o seu endereço pelo WhatsApp.

## Sinais de que a tela precisa ser trocada

- Vidro trincado ou estilhaçado
- Manchas, linhas ou áreas escuras na imagem
- Toque que não responde em parte da tela, ou responde sozinho
- Tela preta, mesmo com o celular tocando e vibrando

O último caso nem sempre é a tela: às vezes é o cabo que liga a tela à placa. Por isso o diagnóstico vem antes do orçamento.

## Como funciona com coleta e entrega

1. Você chama no WhatsApp e informa marca, modelo e o defeito.
2. Combinamos a coleta do aparelho.
3. Fazemos o diagnóstico e enviamos o orçamento.
4. Com a sua aprovação, fazemos a troca, testamos e devolvemos o aparelho.

O serviço sai com garantia de 90 dias.

## FAQ

**A coleta tem custo?**
Consulte pelo WhatsApp as condições de coleta e entrega para o seu endereço.

**Posso escolher o tipo de tela?**
Sim. Explicamos as opções disponíveis para o seu modelo antes de fazer a troca.`
  },
  {
    slug: "troca-de-bateria-celular-boca-do-rio",
    title: "Troca de Bateria de Celular na Boca do Rio | Reparo Avançado",
    meta: "Troca de bateria de celular na Boca do Rio, Salvador. Bateria descarregando rápido ou desligando sozinha? Diagnóstico e garantia de 90 dias.",
    h1: "Troca de Bateria de Celular na Boca do Rio",
    serviceSlug: "/troca-de-bateria",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Moro na Boca do Rio e preciso trocar a bateria do meu celular.",
    content: `A Reparo Avançado fica na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8. Se a bateria do seu celular está dando sinais de desgaste, dá para trazer o aparelho direto na loja.

## Sinais de bateria desgastada

- Descarrega muito mais rápido do que antes
- Desliga sozinho com 20% ou 30% de carga
- A porcentagem pula de repente, por exemplo de 40% para 10%
- Esquenta mais que o normal ao carregar

## Como ver a saúde da bateria

- **iPhone:** Ajustes › Bateria › Saúde da Bateria e Carregamento.
- **Android:** o caminho varia por marca; em muitos aparelhos fica em Configurações › Bateria ou em Cuidados com o dispositivo.

Se a capacidade estiver baixa, a troca costuma resolver.

## Troca de bateria em iPhone

Na troca de bateria de iPhone, fazemos o transplante do flex da bateria original para a nova, para que a saúde da bateria apareça corretamente nos Ajustes.

Todo serviço sai com garantia de 90 dias.

## FAQ

**Quanto tempo leva a troca de bateria?**
Depende do modelo e da disponibilidade da peça. Informamos o prazo no orçamento.

**Vale mais a pena trocar a bateria ou o celular?**
Se o restante do aparelho funciona bem, trocar a bateria costuma sair bem mais em conta.`
  },
  {
    slug: "troca-de-bateria-celular-imbui",
    title: "Troca de Bateria de Celular no Imbuí | Reparo Avançado",
    meta: "Troca de bateria de celular para quem está no Imbuí, em Salvador. Bateria estufada ou viciada? Coleta e entrega e garantia de 90 dias.",
    h1: "Troca de Bateria de Celular para Quem Está no Imbuí",
    serviceSlug: "/troca-de-bateria",
    localSlug: "/assistencia-tecnica-imbui",
    areaServed: "Imbuí, Salvador",
    whatsapp: "Olá! Estou no Imbuí e preciso trocar a bateria do meu celular.",
    content: `Para quem está no Imbuí, a Reparo Avançado atende na loja da Boca do Rio e também faz coleta e entrega do aparelho. Consulte a disponibilidade para o seu endereço pelo WhatsApp.

## Bateria estufada: atenção redobrada

Se a tela do celular começou a levantar ou a traseira está estufada, é a bateria inchando por dentro. Nesse caso:

- Pare de usar o aparelho
- Não carregue
- Não aperte a tela para "encaixar" de volta
- Peça a troca o quanto antes

Bateria estufada não tem conserto: ela precisa ser substituída.

## Bateria viciada

Quando a bateria não segura carga como antes, desliga sozinha ou descarrega em poucas horas, a troca devolve a autonomia do aparelho sem precisar trocar de celular.

## Como funciona

1. Você informa o modelo e o sintoma pelo WhatsApp.
2. Combinamos a coleta ou você traz até a loja.
3. Diagnóstico, orçamento e, com a sua aprovação, a troca.
4. Teste de carga antes da entrega, com garantia de 90 dias.

## FAQ

**Posso levar o celular com a bateria estufada na coleta?**
Sim, mas desligue o aparelho e não carregue antes da coleta.

**A troca de bateria resolve o celular desligando sozinho?**
Na maioria dos casos, sim. O diagnóstico confirma se a causa é mesmo a bateria.`
  },
  {
    slug: "conserto-de-iphone-boca-do-rio",
    title: "Conserto de iPhone na Boca do Rio | Reparo Avançado",
    meta: "Conserto de iPhone na Boca do Rio, Salvador: tela, bateria, placa, Face ID, câmera e conector de carga, com diagnóstico e garantia de 90 dias.",
    h1: "Conserto de iPhone na Boca do Rio",
    serviceSlug: "/conserto-de-iphone",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Moro na Boca do Rio e preciso consertar meu iPhone.",
    content: `A Reparo Avançado atende iPhone na própria Boca do Rio, na R. Abelardo Andrade de Carvalho, 8. Somos uma assistência técnica independente, e não autorizada Apple.

## Serviços de iPhone que fazemos

- **Troca de tela**, com opções de tela para cada modelo
- **Troca de bateria**, com transplante do flex da bateria original
- **Reparo de placa**, incluindo microssoldagem quando é viável
- **Conserto de Face ID**, quando tecnicamente possível
- **Conserto de câmera**
- **Conserto de conector de carga**

## Antes de trazer o iPhone

- Faça backup no iCloud ou no computador, se o aparelho ainda liga
- Anote o modelo (por exemplo, iPhone 11, 12 ou 13)
- Descreva o que aconteceu: queda, contato com líquido ou defeito que apareceu sozinho

Isso ajuda a agilizar o diagnóstico.

## Como funciona

Fazemos o diagnóstico antes do orçamento. Você só aprova o serviço depois de saber o que realmente precisa ser feito. Todo serviço sai com garantia de 90 dias.

## FAQ

**Vocês são assistência autorizada Apple?**
Não. Somos uma assistência técnica independente.

**Vocês fazem desbloqueio de iCloud?**
Não realizamos desbloqueio de conta iCloud.`
  },
  {
    slug: "conserto-de-iphone-pituba",
    title: "Conserto de iPhone na Pituba | Reparo Avançado",
    meta: "Conserto de iPhone para quem está na Pituba, em Salvador. Coleta e entrega, diagnóstico antes do orçamento e garantia de 90 dias.",
    h1: "Conserto de iPhone para Quem Está na Pituba",
    serviceSlug: "/conserto-de-iphone",
    localSlug: "/assistencia-tecnica-pituba",
    areaServed: "Pituba, Salvador",
    whatsapp: "Olá! Estou na Pituba e preciso consertar meu iPhone.",
    content: `Para quem está na Pituba, a Reparo Avançado atende iPhone na loja da Boca do Rio e também faz coleta e entrega do aparelho. Consulte a disponibilidade pelo WhatsApp.

## Defeitos de iPhone que mais chegam

- **Tela quebrada ou com manchas**, depois de queda
- **Bateria com saúde baixa**, desligando antes do tempo
- **iPhone não carrega** ou só carrega em certa posição do cabo
- **Face ID que parou de funcionar**
- **iPhone que não liga** ou trava na maçã

## Saúde da bateria depois da troca

Um cuidado que fazemos na troca de bateria de iPhone: o transplante do flex da bateria original para a nova. Assim, a saúde da bateria aparece corretamente nos Ajustes.

## E os meus dados?

Na maior parte dos reparos, como tela, bateria e conector, os dados permanecem no aparelho. Mesmo assim, faça backup antes, se o iPhone ainda liga.

## Como funciona com coleta

1. Você informa o modelo e o defeito pelo WhatsApp.
2. Combinamos a coleta.
3. Diagnóstico e orçamento.
4. Com a sua aprovação, o conserto, com teste antes da entrega e garantia de 90 dias.

## FAQ

**Preciso tirar minha conta Apple antes do conserto?**
Não é obrigatório para a maioria dos reparos. Orientamos caso a caso pelo WhatsApp.

**Quanto custa o conserto?**
Depende do modelo e do defeito. O valor é informado depois do diagnóstico.`
  },
  {
    slug: "conserto-de-samsung-brotas",
    title: "Conserto de Samsung em Brotas | Reparo Avançado",
    meta: "Conserto de celular Samsung para quem está em Brotas, Salvador. Tela, bateria, conector e placa, com coleta e entrega e garantia.",
    h1: "Conserto de Samsung para Quem Está em Brotas",
    serviceSlug: "/conserto-de-celular",
    localSlug: "/assistencia-tecnica-brotas",
    areaServed: "Brotas, Salvador",
    whatsapp: "Olá! Estou em Brotas e preciso consertar meu Samsung.",
    content: `Para quem está em Brotas, a Reparo Avançado conserta celulares Samsung na loja da Boca do Rio e também faz coleta e entrega do aparelho. Consulte a disponibilidade pelo WhatsApp.

## Serviços para Samsung

- **Troca de tela**, nas linhas Galaxy A, S e M
- **Troca de bateria**
- **Conserto de conector de carga**
- **Reparo de placa**
- **Troca de tampa traseira**
- **Conserto de câmera e de áudio**

## Tela de Samsung: atenção ao tipo

Muitos modelos Samsung usam tela AMOLED. Na troca, explicamos as opções disponíveis para o seu modelo e a diferença entre elas, para você decidir com clareza.

## Antes de entregar o aparelho

Muitos Samsung têm o **Modo de Manutenção**, que esconde fotos, mensagens e aplicativos durante o reparo. Se o seu aparelho tiver essa função, vale ativar antes de entregar.

Todo serviço sai com garantia de 90 dias.

## FAQ

**Vocês são assistência autorizada Samsung?**
Não. Somos uma assistência técnica independente.

**Como ativo o Modo de Manutenção?**
Em muitos modelos fica em Configurações › Cuidados com o dispositivo. Se não encontrar, busque "Modo de Manutenção" nas configurações.`
  },
  {
    slug: "conserto-de-samsung-imbui",
    title: "Conserto de Samsung no Imbuí | Reparo Avançado",
    meta: "Conserto de celular Samsung para quem está no Imbuí, em Salvador. Samsung não liga, não carrega ou com bateria fraca? Diagnóstico e garantia.",
    h1: "Conserto de Samsung para Quem Está no Imbuí",
    serviceSlug: "/conserto-de-celular",
    localSlug: "/assistencia-tecnica-imbui",
    areaServed: "Imbuí, Salvador",
    whatsapp: "Olá! Estou no Imbuí e preciso consertar meu Samsung.",
    content: `Para quem está no Imbuí, a Reparo Avançado atende celulares Samsung na loja da Boca do Rio e com coleta e entrega do aparelho. Consulte a disponibilidade pelo WhatsApp.

## Problemas comuns em Samsung

**Samsung não liga.** Antes de tudo, carregue por pelo menos 30 minutos com um carregador que funciona. Depois, tente reiniciar segurando o botão de diminuir volume junto com o botão lateral por alguns segundos. Se nada acontecer, pode ser bateria, conector ou placa.

**Samsung não carrega.** Pode ser o cabo, o carregador, sujeira no conector ou o próprio conector danificado. Teste outro cabo antes de concluir que é defeito.

**Bateria fraca.** Se o aparelho descarrega rápido ou desliga antes do tempo, a troca de bateria costuma resolver.

## Como funciona

1. Você informa o modelo e o defeito pelo WhatsApp.
2. Combinamos a coleta ou você traz até a loja.
3. Diagnóstico antes do orçamento.
4. Com a sua aprovação, o conserto, testado antes da entrega e com garantia de 90 dias.

## FAQ

**Meu Samsung caiu na água, o que faço?**
Não ligue nem carregue. Leve para análise o quanto antes.

**Vocês consertam Samsung de qualquer modelo?**
Atendemos os principais modelos das linhas Galaxy A, S e M, conforme disponibilidade de peça.`
  },
  {
    slug: "celular-nao-carrega-boca-do-rio",
    title: "Celular Não Carrega? Conserto na Boca do Rio",
    meta: "Celular não carrega ou carrega só em uma posição? Conserto de conector de carga na Boca do Rio, Salvador, com diagnóstico e garantia.",
    h1: "Celular Não Carrega? Conserto na Boca do Rio",
    serviceSlug: "/celular-nao-carrega",
    localSlug: "/assistencia-tecnica-boca-do-rio",
    areaServed: "Boca do Rio, Salvador",
    whatsapp: "Olá! Moro na Boca do Rio e meu celular não está carregando.",
    content: `Se o seu celular parou de carregar, a Reparo Avançado fica na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8. Antes de trazer, dá para fazer alguns testes em casa.

## Testes rápidos antes de levar

1. **Troque o cabo.** Cabo com defeito é uma das causas mais comuns.
2. **Troque o carregador**, de preferência por um original ou de boa qualidade.
3. **Teste outra tomada.**
4. **Olhe o conector com uma lanterna.** Fiapo ou poeira acumulada impedem o contato.

Não use objeto de metal para limpar o conector: isso pode danificar os contatos.

## Quando é defeito no aparelho

Se mesmo com outro cabo e outro carregador o celular não carrega, só carrega em uma posição do cabo ou carrega muito devagar, o problema pode estar no conector de carga, na bateria ou na placa.

## Como funciona na loja

Fazemos o diagnóstico do sistema de carga para descobrir a peça certa antes do orçamento. Assim você não paga pela troca errada. Todo serviço sai com garantia de 90 dias.

## FAQ

**Limpar o conector resolve?**
Às vezes resolve, quando o problema é só sujeira. Se o conector estiver danificado, é preciso trocar.

**Celular carregando devagar é problema?**
Pode ser cabo, carregador ou o conector. Vale testar outro cabo antes.`
  },
  {
    slug: "celular-nao-carrega-brotas",
    title: "Celular Não Carrega? Conserto em Brotas",
    meta: "Celular não carrega e você está em Brotas, Salvador? Conector, bateria ou placa: diagnóstico antes do orçamento, com coleta e entrega.",
    h1: "Celular Não Carrega? Atendimento para Quem Está em Brotas",
    serviceSlug: "/celular-nao-carrega",
    localSlug: "/assistencia-tecnica-brotas",
    areaServed: "Brotas, Salvador",
    whatsapp: "Olá! Estou em Brotas e meu celular não está carregando.",
    content: `Para quem está em Brotas, a Reparo Avançado atende celulares que não carregam na loja da Boca do Rio e com coleta e entrega do aparelho. Consulte a disponibilidade pelo WhatsApp.

## Conector, bateria ou placa?

**Conector de carga.** O celular só carrega se o cabo ficar numa posição específica, ou para de carregar quando você mexe no aparelho.

**Bateria.** O celular carrega, mas a carga some muito rápido ou ele desliga com porcentagem alta.

**Placa.** O celular não reage ao carregador de jeito nenhum, mesmo com cabo e carregador que funcionam em outro aparelho.

Os sintomas se parecem, por isso o diagnóstico vem antes de qualquer troca.

## Celular molhado que parou de carregar

Se o celular teve contato com água e depois parou de carregar, não insista em conectar o carregador. A umidade no conector pode causar dano maior. Leve para análise.

## Como funciona com coleta

1. Você informa o modelo e o defeito pelo WhatsApp.
2. Combinamos a coleta.
3. Diagnóstico e orçamento.
4. Com a sua aprovação, o conserto, testado antes da entrega e com garantia de 90 dias.

## FAQ

**Carregador sem fio funciona se o conector estiver com defeito?**
Em aparelhos com carregamento sem fio, pode funcionar como solução temporária. O conector ainda precisa de reparo.

**Quanto custa trocar o conector de carga?**
Depende do modelo. O valor é informado depois do diagnóstico.`
  }
];
