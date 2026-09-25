const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch11.ts', 'utf8');

// Update serviceSlug for each article
content = content.replace(/serviceSlug: "conector-de-carga-iphone-11"/, 'serviceSlug: "celular-nao-carrega"');
content = content.replace(/serviceSlug: "economia-bateria-editorial"/, 'serviceSlug: "troca-de-bateria"');
content = content.replace(/serviceSlug: "troca-bateria-estufada-editorial"/, 'serviceSlug: "troca-de-bateria"');
content = content.replace(/serviceSlug: "diagnostico-bateria-editorial"/, 'serviceSlug: "troca-de-bateria"');
content = content.replace(/serviceSlug: "diagnostico-nao-liga-editorial"/, 'serviceSlug: "reparo-em-placa"');
content = content.replace(/serviceSlug: "diagnostico-tela-editorial"/, 'serviceSlug: "troca-de-tela"');
content = content.replace(/serviceSlug: "modo-manutencao-samsung-editorial"/, 'serviceSlug: "assistencia-tecnica-salvador"');
content = content.replace(/serviceSlug: "orcamento-troca-tela-editorial"/, 'serviceSlug: "troca-de-tela"');

fs.writeFileSync('src/data/editorialPostsBatch11.ts', content);
