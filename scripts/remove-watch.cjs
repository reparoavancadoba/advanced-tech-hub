const fs = require('fs');
let content = fs.readFileSync('src/data/editorialPostsBatch6.ts', 'utf8');
content = content.replace(/\{\s*slug:\s*"bateria-apple-watch-inchada-tela-descolando"[\s\S]*?\}\s*\]\s*\},/g, '');
fs.writeFileSync('src/data/editorialPostsBatch6.ts', content);
