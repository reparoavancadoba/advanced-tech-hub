const fs = require('fs');

function replaceField(content, slug, field, newValue) {
  // Try matching slug: "..."
  let regex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?${field}:\\s*["'])(.*?)(["'])`);
  if (regex.test(content)) {
    return content.replace(regex, `$1${newValue}$3`);
  }
  // Try matching the object key "slug": { ... }
  regex = new RegExp(`(["']${slug}["']:\\s*\\{[\\s\\S]*?${field}:\\s*["'])(.*?)(["'])`);
  return content.replace(regex, `$1${newValue}$3`);
}

// 1. servicosConsolidadosData.ts
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


// Let's fix the conserto-de-iphone object since it was malformed
const iphoneRegex = /"conserto-de-iphone": \{[\s\S]*?\},/g;
servicos = servicos.replace(iphoneRegex, '');

const iphoneService = `
  "conserto-de-iphone": {
    slug: "conserto-de-iphone",
    title: "Conserto de iPhone em Salvador | Assistência Técnica Apple",
    metaDescription: "Assistência técnica especializada em iPhone em Salvador. Tela, bateria, Face ID, câmera e placa. Orçamento rápido pelo WhatsApp.",
    description: "Assistência técnica especializada em iPhone em Salvador. Tela, bateria, Face ID, câmera e placa. Orçamento rápido pelo WhatsApp.",
    shortName: "Conserto de iPhone",
    h1: "Conserto de iPhone em Salvador",
    supportedBrands: ["iPhone (Apple)"],
    problems: ["Tela quebrada", "Bateria viciada", "Placa em curto", "Face ID parou", "Câmera falhando"],
    solution: "Temos técnicos qualificados para resolver qualquer defeito no seu dispositivo da Apple.",
    contentHtml: \`<p>Procurando por <strong>conserto de iphone salvador</strong>? A Reparo Avançado é a sua <strong>assistência técnica iphone</strong> de confiança na Boca do Rio. Temos técnicos qualificados para resolver qualquer defeito no seu dispositivo da Apple.</p>
    <p>Nossos serviços incluem a substituição de tela com display premium, troca de bateria para recuperar a saúde 100%, manutenção do conector de carga (Lightning/USB-C), conserto de câmera traseira, recuperação de Face ID e reparos de placa que outras assistências condenam.</p>\`,
    faqs: [
      { question: "Vocês reparam Face ID que parou de funcionar?", answer: "Sim! Somos especialistas no conserto do módulo TrueDepth e Face ID, restaurando a leitura facial do seu iPhone na maioria dos casos sem perder a biometria original." },
      { question: "A bateria instalada exibe a saúde nos ajustes?", answer: "Sim. Realizamos o transplante do flex da bateria original para a bateria nova para garantir que a saúde marque 100% nas configurações." },
      { question: "O conserto de placa do iPhone apaga meus dados?", answer: "O reparo de placa geralmente não afeta a memória, então os dados costumam permanecer intactos, mas é sempre altamente recomendável ter um backup atualizado." }
    ]
  },
`;

servicos = servicos.replace(/(export\s+const\s+servicosConsolidados\s*:\s*Record<string,\s*ServicoConsolidadoData>\s*=\s*\{)/, `$1\n${iphoneService}`);

fs.writeFileSync('src/data/servicosConsolidadosData.ts', servicos);

// 2. locaisConsolidadosData.ts
let locais = fs.readFileSync('src/data/locaisConsolidadosData.ts', 'utf8');

// Titles
locais = replaceField(locais, 'cajazeiras-e-regiao', 'title', 'Assistência Técnica de Celular em Cajazeiras e Região');
locais = replaceField(locais, 'miolo-e-centro-financeiro', 'title', 'Assistência Técnica de Celular no Miolo e Centro Financeiro');
locais = replaceField(locais, 'orla-norte-e-aeroporto', 'title', 'Assistência Técnica de Celular na Orla Norte e Aeroporto');
locais = replaceField(locais, 'regiao-metropolitana', 'title', 'Assistência Técnica de Celular na Região Metropolitana');

fs.writeFileSync('src/data/locaisConsolidadosData.ts', locais);

console.log('Fixed types and titles.');
