const fs = require('fs');
const p = 'src/data/blogData.ts';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/title: `\$\{problem\} em Salvador\? Reparo Avançado Resolve!`/, 'title: `${problem} em Salvador? Reparo Avançado`');
fs.writeFileSync(p, c);
