const fs = require('fs');

let c = fs.readFileSync('src/data/blogData.ts', 'utf8');
let replaced = c.replace(/\.filter\(p => !\[.*?\].includes\(p\.slug\)\)/, '');
fs.writeFileSync('src/data/blogData_temp.ts', replaced);
