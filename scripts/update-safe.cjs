const fs = require('fs');
const p = 'scripts/fix-seo-titles-safe.cjs';
let c = fs.readFileSync(p, 'utf8');
c = c.replace('"troca-bateria-samsung-galaxy-salvador": "Troca de Bateria Samsung Galaxy",', '"troca-bateria-samsung-galaxy-salvador": "Troca de Bateria Samsung Galaxy",\n  "bateria-celular-descarregando-rapido": "Bateria Descarregando Rápido? Resolva",');
fs.writeFileSync(p, c);
console.log("Updated script");
