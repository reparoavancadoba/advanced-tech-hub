const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch4.ts', 'utf8');
console.log(content.substring(content.indexOf('samsung-reiniciando-sozinho-logo') - 300, content.indexOf('samsung-reiniciando-sozinho-logo') + 50));
