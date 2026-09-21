const fs = require('fs');
let c = fs.readFileSync('scripts/prerender.ts', 'utf8');
const lines = c.split('\n');
console.log(lines.find(l => l.includes("generatePage('/', ")));
console.log(c.substring(0, 1000));
