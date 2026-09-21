const fs = require('fs');

// 1. Modify src/data/servicosConsolidadosData.ts
let servicos = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

// Helper to replace values
function replaceField(content, slug, field, newValue) {
  let regex = new RegExp(`(["']${slug}["']:\\s*\\{[\\s\\S]*?${field}:\\s*["'])(.*?)(["'])`);
  return content.replace(regex, `$1${newValue}$3`);
}

// TROCA DE TELA
servicos = replaceField(servicos, 'troca-de-tela', 'description', 'Se a tela do seu celular quebrou, manchou ou parou de responder ao toque, nossa troca de tela celular é a solução definitiva. Especializados na troca de tela iphone (para tela quebrada iphone) e na troca de tela samsung, oferecemos a substituição completa com peças premium.');

// TROCA DE BATERIA
servicos = replaceField(servicos, 'troca-de-bateria', 'description', 'A bateria original perde capacidade com o tempo. Realizamos a troca de bateria iphone com peças de alta qualidade e também a troca de bateria samsung, devolvendo autonomia máxima.');

// REPARO EM PLACA
servicos = replaceField(servicos, 'reparo-em-placa', 'description', 'Quando outras lojas condenam, nós fazemos o reparo de placa celular. Utilizando equipamentos de ponta para microssoldagem celular, ressuscitamos aparelhos considerados sem conserto, como curtos totais, falhas de carga e defeitos de áudio.');

// CELULAR CAIU NA AGUA
servicos = replaceField(servicos, 'celular-caiu-na-agua', 'description', 'Um celular molhado sofre oxidação interna rápida. O nosso conserto de celular molhado através da desoxidação de celular em banho ultrassônico aumenta significativamente as chances de salvação do dispositivo.');

// TROCA DE BATERIA FAQ
let trocabatRegex = /("troca-de-bateria":\s*\{[\s\S]*?faqs:\s*\[)/;
let batFaq = `\n      { question: "A saúde da bateria aparece em 100% depois da troca?", answer: "Fazemos o transplante do flex da bateria original para a nova, para que a saúde seja exibida corretamente nos ajustes do iPhone." },`;
servicos = servicos.replace(trocabatRegex, `$1${batFaq}`);

// CONSERTO DE IPHONE FIXES
servicos = replaceField(servicos, 'conserto-de-iphone', 'title', 'Conserto de iPhone em Salvador | Reparo Avançado');
servicos = replaceField(servicos, 'conserto-de-iphone', 'metaDescription', 'Conserto de iPhone em Salvador. Tela, bateria, Face ID, câmera e placa. Orçamento rápido pelo WhatsApp.');
// description with H2 inside
let iphoneDesc = 'Seu iPhone parou? Conte com a nossa assistência técnica iphone para um conserto rápido. <h2>Serviços de Conserto de iPhone</h2> Realizamos os serviços reais: tela, bateria, placa, Face ID, câmera, conector, e realizamos diagnóstico antes do orçamento.';
servicos = replaceField(servicos, 'conserto-de-iphone', 'description', iphoneDesc);

servicos = replaceField(servicos, 'conserto-de-iphone', 'solution', 'Os serviços reais (tela, bateria, placa, Face ID, câmera, conector) são realizados com peças premium e diagnóstico antes do orçamento.');

fs.writeFileSync('src/data/servicosConsolidadosData.ts', servicos);

// 2. Modify src/data/locaisConsolidadosData.ts (for "salvador" keywords)
let locais = fs.readFileSync('src/data/locaisConsolidadosData.ts', 'utf8');
locais = replaceField(locais, 'salvador', 'description', 'Seja qual for o problema, a nossa assistência técnica celular atende toda a capital. Temos o laboratório mais completo para reparos complexos na Boca do Rio.');
fs.writeFileSync('src/data/locaisConsolidadosData.ts', locais);

// 3. Modify scripts/prerender.ts (Add conserto-de-iphone to hardcoded links)
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');
let linkIphone = `<li><a href="/conserto-de-iphone">Conserto de iPhone</a></li>`;
if (!prerender.includes(linkIphone)) {
  prerender = prerender.replace(/(<h2>Principais Serviços<\/h2>\s*<ul>)/, `$1\n    ${linkIphone}`);
}
fs.writeFileSync('scripts/prerender.ts', prerender);

console.log('Fixed everything.');
