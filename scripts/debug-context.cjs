const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch3.ts', 'utf8');

// Dump the exact bytes around "DICA" in the motorola article
const idx = content.indexOf('Essa press');
console.log('MOTOROLA CONTEXT (raw):');
console.log(content.substring(idx - 10, idx + 300));
console.log('---');
const idx2 = content.indexOf('Hard Reset');
console.log('XIAOMI CONTEXT (raw):');
console.log(content.substring(idx2 - 10, idx2 + 300));
