const fs = require('fs');
const html = fs.readFileSync('dist/assistencia-tecnica-salvador/index.html', 'utf8');
const matches = html.match(/href="\/[a-z-A-Z0-9]+"/g) || [];
console.log(matches);
