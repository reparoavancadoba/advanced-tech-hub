const fs = require('fs');

let b4 = fs.readFileSync('src/data/editorialPostsBatch4.ts', 'utf8');
const regex4 = /\s*\{\s*question: "E se o touch parou\?"[\s\S]*?\}\s*\]\s*\},/;
b4 = b4.replace(regex4, '');
fs.writeFileSync('src/data/editorialPostsBatch4.ts', b4);

let b6 = fs.readFileSync('src/data/editorialPostsBatch6.ts', 'utf8');
const regex6 = /\{\s*slug:\s*"bateria-apple-watch-inchada-tela-descolando"[\s\S]*?\}\s*\]\s*\},/;
// I already partially removed it in Batch 6? Let's check if the tail is still there
console.log(b6.substring(b6.indexOf('troca-bateria-ipad-descarregando-rapido') - 300, b6.indexOf('troca-bateria-ipad-descarregando-rapido') + 50));

