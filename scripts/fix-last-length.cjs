const fs = require('fs');
const p = 'src/data/blogData.ts';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/title:\s*['"]Celular Descarregando Rápido\? Troca de Bateria em Salvador['"]/, 'title: "Celular Descarregando Rápido? Troca de Bateria"');
fs.writeFileSync(p, c);
console.log("Done");
