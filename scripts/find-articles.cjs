const fs = require('fs');
const files = [
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

for (const f of files) {
  const data = fs.readFileSync(f, 'utf8');
  if (data.includes('celular-motorola-nao-carrega') || data.includes('celular-xiaomi-nao-liga-o-que-fazer')) {
    console.log(`Found in: ${f}`);
  }
}
