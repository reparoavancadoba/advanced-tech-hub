const fs = require('fs');

let s = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');
if (s.includes('dos conserto')) {
    console.log('Found dos conserto in servicosConsolidadosData.ts');
    s = s.replace(/dos conserto/g, 'dos consertos');
    fs.writeFileSync('src/data/servicosConsolidadosData.ts', s);
}

let l = fs.readFileSync('src/data/locaisConsolidadosData.ts', 'utf8');
let matches = [...l.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Paths in locaisConsolidados:', matches);
