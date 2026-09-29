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
  content: string; // the markdown / html content
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
