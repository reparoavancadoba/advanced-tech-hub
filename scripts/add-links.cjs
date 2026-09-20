const fs = require('fs');
let content = fs.readFileSync('scripts/prerender.ts', 'utf8');

const targetStr = `    <li><a href="/celular-caiu-na-agua">Desoxidação (Caiu na Água)</a></li>`;
const newLinks = `    <li><a href="/conserto-de-tablet">Conserto de Tablet</a></li>\n    <li><a href="/conserto-de-notebook">Conserto de Notebook</a></li>`;

content = content.replace(targetStr, targetStr + '\n' + newLinks);
fs.writeFileSync('scripts/prerender.ts', content);
console.log('Added links');
