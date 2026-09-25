const fs = require('fs');

// Find the actual slug celular-xiaomi-nao-liga-o-que-fazer
const files = [
  'src/data/editorialPostsBatch3.ts',
  'src/data/editorialPostsBatch4.ts',
  'src/data/editorialPostsBatch5.ts',
];

for (const f of files) {
  const data = fs.readFileSync(f, 'utf8');
  if (data.includes(`slug: "celular-xiaomi-nao-liga-o-que-fazer"`)) {
    console.log(`Article slug found in: ${f}`);
  }
  if (data.includes(`slug: "celular-motorola-nao-carrega"`)) {
    console.log(`Motorola slug found in: ${f}`);
  }
}
