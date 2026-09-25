const fs = require('fs');
const files = [
  'src/data/blogData.ts',
  'src/data/editorialPosts.ts',
  'src/data/editorialPostsBatch2.ts',
  'src/data/editorialPostsBatch3.ts',
  'src/data/editorialPostsBatch4.ts',
  'src/data/editorialPostsBatch5.ts',
  'src/data/editorialPostsBatch6.ts',
  'src/data/editorialPostsBatch7.ts',
  'src/data/editorialPostsBatch8.ts',
  'src/data/editorialPostsBatch9.ts',
  'src/data/editorialPostsBatch10.ts',
];

const slugRegex = /slug:\s*["']([^"']+)["']/g;
const allSlugs = [];
for (const f of files) {
  const data = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = slugRegex.exec(data)) !== null) {
    allSlugs.push(m[1]);
  }
  slugRegex.lastIndex = 0;
}
console.log(allSlugs.join('\n'));
