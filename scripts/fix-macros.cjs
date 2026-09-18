const fs = require('fs');

let s = fs.readFileSync('src/data/locaisConsolidadosData.ts', 'utf8');

const macroTexts = {
    'boca-do-rio-e-orla': {
        access: "A Orla de Salvador e a região da Boca do Rio oferecem rotas largas, como a Avenida Octávio Mangabeira. É fácil estacionar e o acesso pela via costeira evita o trânsito pesado de outras áreas comerciais.",
        distance: "Geralmente a 5 ou 15 minutos das principais praias, nossa estrutura é muito procurada por quem trabalha ou mora perto do mar.",
        topServices: "O grande volume de reparos aqui envolve oxidação por maresia (banho químico avançado) e troca de telas de celulares que sofreram queda na areia ou asfalto."
    },
    'miolo-e-centro-financeiro': {
        access: "Regiões como Iguatemi, Caminho das Árvores, Cabula e Paralela se conectam rapidamente ao nosso laboratório através de avenidas centrais (ACM e Magalhães Neto) que cortam o centro financeiro rumo à orla.",
        distance: "Para quem está no miolo corporativo, a viagem de carro até nós leva cerca de 10 a 20 minutos fora dos horários de pico.",
        topServices: "Esta área traz muita demanda executiva: reparos de iPhones corporativos, substituição de baterias para quem precisa do celular o dia todo e recuperação de dados empresariais."
    },
    'centro-e-sul': {
        access: "Moradores do Centro, Barra, Graça e Vitória podem usar avenidas de vale como a Vasco da Gama e a Centenário para chegar na Orla com agilidade.",
        distance: "Dependendo do fluxo do centro antigo, a distância é vencida em 20 a 30 minutos.",
        topServices: "Recebemos muitos equipamentos premium e iPads desta região, além de serviços de microssoldagem delicados em placas-mãe de aparelhos Apple mais antigos."
    },
    'orla-norte-e-aeroporto': {
        access: "Bairros mais afastados como Itapuã, Stella Maris e Piatã encontram na Orla um corredor expresso até a Boca do Rio, dispensando o uso da via Paralela se houver lentidão.",
        distance: "Em média 15 a 25 minutos seguindo a faixa litorânea em fluxo normal.",
        topServices: "Casos frequentes de celulares derrubados em clubes e piscinas exigem nossa técnica de desoxidação urgente. Também há forte procura por telas de linha Samsung Galaxy S."
    },
    'cajazeiras-e-regiao': {
        access: "Com a nova estrutura viária, moradores de Cajazeiras e adjacências usam as vias expressas (29 de Março e Orlando Gomes) para alcançar a orla e chegar a nós sem cruzar o congestionamento interno.",
        distance: "Cerca de 25 a 35 minutos de trajeto, recompensados por um laboratório capaz de reparos de altíssima complexidade.",
        topServices: "Consertos de placa morta (aparelho apagado) e troca de display para a linha Xiaomi e Motorola Edge são campeões de busca dessa comunidade."
    },
    'regiao-metropolitana': {
        access: "Clientes de Lauro de Freitas e Vilas do Atlântico seguem pela Estrada do Coco e Avenida Paralela (ou Orla Norte), acessando nossa loja logo no início da área litorânea da capital.",
        distance: "O percurso leva de 30 a 45 minutos. Muitos preferem o envio por aplicativo de entrega para agilizar o conserto.",
        topServices: "Devido à distância, os reparos solicitados costumam ser casos severos rejeitados por outras lojas, como reballing de processador e recuperação de placas com falha de energia profunda."
    }
};

let macroInjection = `
  const macroTexts: Record<string, any> = ${JSON.stringify(macroTexts, null, 2)};
  
  const mText = macroTexts[macro.slug] || {};
  if (mText.access) data.access = mText.access;
  if (mText.distance) data.distance = mText.distance;
  if (mText.topServices) data.topServices = mText.topServices;
`;

// Inject into the forEach block
s = s.replace(/locaisConsolidados\[macro\.slug\]\s*=\s*data;/, macroInjection + '\n  locaisConsolidados[macro.slug] = data;');

fs.writeFileSync('src/data/locaisConsolidadosData.ts', s);
