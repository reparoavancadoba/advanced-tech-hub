const fs = require('fs');

const content = fs.readFileSync('dist/blog/iphone-11-nao-carrega-conector-ou-bateria/index.html', 'utf8');

const matches = content.match(/href="([^"]+)"/g) || [];
console.log(matches.filter(l => l.includes('celular') || l.includes('troca')).join('\n'));
