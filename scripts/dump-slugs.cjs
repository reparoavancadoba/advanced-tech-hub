const fs = require('fs');
const files = fs.readdirSync('src/data').filter(f => f.endsWith('.ts'));
let allSlugs = [];
files.forEach(f => {
  const content = fs.readFileSync('src/data/' + f, 'utf8');
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  matches.forEach(m => allSlugs.push({slug: m[1], file: f}));
});
fs.writeFileSync('slugs.json', JSON.stringify(allSlugs, null, 2));
