const fs = require('fs');

// Helper to replace exactly one field in a JSON-like object string
function replaceField(content, id, field, newValue) {
  const regex = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?${field}:\\s*["'])(.*?)(["'])`);
  return content.replace(regex, `$1${newValue}$3`);
}

// 1. Update servicosConsolidadosData.ts (Titles and Keywords)
let servicos = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

// Titles
servicos = replaceField(servicos, 'troca-de-tela', 'title', 'Troca de Tela de Celular em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'troca-de-bateria', 'title', 'Troca de Bateria de Celular em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'reparo-em-placa', 'title', 'Reparo de Placa de Celular em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'conserto-de-celular', 'title', 'Conserto de Celular em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'celular-nao-liga', 'title', 'Celular Não Liga? Conserto em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'celular-nao-carrega', 'title', 'Celular Não Carrega? Conserto em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'celular-caiu-na-agua', 'title', 'Celular Caiu na Água? Desoxidação em Salvador');
servicos = replaceField(servicos, 'conserto-de-tablet', 'title', 'Conserto de Tablet em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'conserto-de-notebook', 'title', 'Conserto de Notebook em Salvador | Reparo Avançado');

// Keywords Injection
// For `troca-de-tela`: troca de tela celular, troca de tela iphone, troca de tela samsung, tela quebrada iphone
const kwTela = `<p>Se você precisa de uma confiável <strong>troca de tela celular</strong>, nosso laboratório tem tudo o que é necessário. Realizamos <strong>troca de tela iphone</strong> para modelos variados e também <strong>troca de tela samsung</strong> com peças originais e de alta fidelidade de cor. Não deixe sua <strong>tela quebrada iphone</strong> prejudicar seu uso diário; traga para avaliação e saia com ele novo.</p>`;
servicos = servicos.replace(/(id:\s*['"]troca-de-tela['"][\s\S]*?contentHtml:\s*`)([\s\S]*?)(`,)/, `$1$2\n${kwTela}$3`);

// For `troca-de-bateria`: troca de bateria iphone, troca de bateria samsung
const kwBateria = `<p>O desgaste da bateria afeta gravemente o desempenho. Por isso, a <strong>troca de bateria iphone</strong> devolve a saúde de 100% que o seu dispositivo precisa. Também oferecemos <strong>troca de bateria samsung</strong> com durabilidade incomparável para garantir um dia inteiro de autonomia.</p>`;
servicos = servicos.replace(/(id:\s*['"]troca-de-bateria['"][\s\S]*?contentHtml:\s*`)([\s\S]*?)(`,)/, `$1$2\n${kwBateria}$3`);

// For `reparo-em-placa`: reparo de placa celular, microssoldagem celular
const kwPlaca = `<p>A placa principal é o cérebro do dispositivo. Somos especialistas em <strong>reparo de placa celular</strong> com laboratório próprio em Salvador. Utilizamos técnicas de <strong>microssoldagem celular</strong> de alta precisão para recuperar componentes microscópicos e evitar a perda total do seu telefone.</p>`;
servicos = servicos.replace(/(id:\s*['"]reparo-em-placa['"][\s\S]*?contentHtml:\s*`)([\s\S]*?)(`,)/, `$1$2\n${kwPlaca}$3`);

// For `celular-caiu-na-agua`: conserto de celular molhado, desoxidação de celular
const kwAgua = `<p>Acidentes com líquidos são graves. Um <strong>conserto de celular molhado</strong> eficiente exige limpeza química profunda. Nossa <strong>desoxidação de celular</strong> em banho ultrassônico remove a corrosão invisível e aumenta em até 90% a chance de salvar o seu aparelho antes que os curtos destruam a placa de forma irreversível.</p>`;
servicos = servicos.replace(/(id:\s*['"]celular-caiu-na-agua['"][\s\S]*?contentHtml:\s*`)([\s\S]*?)(`,)/, `$1$2\n${kwAgua}$3`);


// 2. Add `/conserto-de-iphone` to servicosConsolidadosData.ts
const iphoneService = `
  "conserto-de-iphone": {
    id: "conserto-de-iphone",
    title: "Conserto de iPhone em Salvador | Assistência Técnica Apple",
    description: "Assistência técnica especializada em iPhone em Salvador. Tela, bateria, Face ID, câmera e placa. Orçamento rápido pelo WhatsApp.",
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

// Insert the new service before the end of the object
servicos = servicos.replace(/(export\s+const\s+allConsolidatedServices\s*:\s*Record<string,\s*ConsolidatedService>\s*=\s*\{)/, `$1${iphoneService}`);

fs.writeFileSync('src/data/servicosConsolidadosData.ts', servicos);
console.log('Updated servicosConsolidadosData.ts');

// 3. Update locaisConsolidadosData.ts (Titles and Keywords)
let locais = fs.readFileSync('src/data/locaisConsolidadosData.ts', 'utf8');

// Titles
locais = replaceField(locais, 'cajazeiras-e-regiao', 'title', 'Assistência Técnica de Celular em Cajazeiras e Região');
locais = replaceField(locais, 'miolo-e-centro-financeiro', 'title', 'Assistência Técnica de Celular no Miolo e Centro Financeiro');
locais = replaceField(locais, 'orla-norte-e-aeroporto', 'title', 'Assistência Técnica de Celular na Orla Norte e Aeroporto');
locais = replaceField(locais, 'regiao-metropolitana', 'title', 'Assistência Técnica de Celular na Região Metropolitana');

// Keywords Injection for `/assistencia-tecnica-salvador`
const kwSalvador = `<p>Encontrar uma excelente <strong>assistência técnica celular</strong> faz toda a diferença para o seu smartphone. Atendemos com peças homologadas e diagnóstico preciso, garantindo sempre a sua satisfação em todas as áreas da cidade.</p>`;
locais = locais.replace(/(id:\s*['"]salvador['"][\s\S]*?contentHtml:\s*`)([\s\S]*?)(`,)/, `$1$2\n${kwSalvador}$3`);

fs.writeFileSync('src/data/locaisConsolidadosData.ts', locais);
console.log('Updated locaisConsolidadosData.ts');
