const fs = require('fs');
const file = fs.readFileSync('src/data/informacoesData.ts', 'utf8');

const matches = file.match(/content:\s*`([\s\S]*?)`/g);
for (let i = 0; i < matches.length; i++) {
  const text = matches[i].replace(/content:\s*`/, '').replace(/`$/, '');
  console.log(`Página ${i+1}: ${text.trim().split(/\s+/).length} palavras no markdown bruto`);
}
