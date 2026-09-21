const fs = require('fs');

let c = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

const iphoneService = `
  "conserto-de-iphone": {
    slug: "conserto-de-iphone",
    title: "Conserto de iPhone em Salvador | Assistência Técnica Apple",
    description: "Assistência técnica especializada em iPhone em Salvador. Tela, bateria, Face ID, câmera e placa. Orçamento rápido pelo WhatsApp.",
    shortName: "Conserto de iPhone",
    h1: "Conserto de iPhone em Salvador",
    contentHtml: \`<p>Procurando por <strong>conserto de iphone salvador</strong>? A Reparo Avançado é a sua <strong>assistência técnica iphone</strong> de confiança na Boca do Rio. Temos técnicos qualificados para resolver qualquer defeito no seu dispositivo da Apple.</p>
    <p>Nossos serviços incluem a substituição de tela com display premium, troca de bateria para recuperar a saúde 100%, manutenção do conector de carga (Lightning/USB-C), conserto de câmera traseira, recuperação de Face ID e reparos de placa que outras assistências condenam.</p>\`,
    faq: [
      { question: "Vocês reparam Face ID que parou de funcionar?", answer: "Sim! Somos especialistas no conserto do módulo TrueDepth e Face ID, restaurando a leitura facial do seu iPhone na maioria dos casos sem perder a biometria original." },
      { question: "A bateria instalada exibe a saúde nos ajustes?", answer: "Sim. Realizamos o transplante do flex da bateria original para a bateria nova para garantir que a saúde marque 100% nas configurações." },
      { question: "O conserto de placa do iPhone apaga meus dados?", answer: "O reparo de placa geralmente não afeta a memória, então os dados costumam permanecer intactos, mas é sempre altamente recomendável ter um backup atualizado." }
    ]
  },
`;

c = c.replace(/(export\s+const\s+servicosConsolidados\s*:\s*Record<string,\s*ServicoConsolidadoData>\s*=\s*\{)/, `$1\n${iphoneService}`);

const hubListItem = `\n  { slug: "conserto-de-iphone", name: "Conserto de iPhone", desc: "Especialista Apple: Tela, Bateria 100%, Face ID e Placa.", iconName: "Smartphone" },`;

c = c.replace(/(export\s+const\s+servicesHubList\s*=\s*\[)/, `$1${hubListItem}`);

fs.writeFileSync('src/data/servicosConsolidadosData.ts', c);
console.log('Added conserto-de-iphone');
