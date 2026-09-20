const fs = require('fs');
const cp = require('child_process');

console.log('--- VERCEL REDIRECTS ---');
let vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const r = vercel.redirects.filter(r => r.source.includes('celular-nao-carrega-causas'));
console.log(r);

console.log('\n--- ALL REDIRECTS ---');
const consolidated = [
  'celular-nao-carrega-causas',
  'celular-nao-carrega-causas-solucoes',
  'celular-nao-carrega-salvador',
  'motorola-nao-carrega-avaliacao-salvador',
  'higienizacao-conector-cabo-carregar-salvador',
  'celular-caiu-na-agua-o-que-fazer',
  'celular-caiu-na-agua-desoxidacao-salvador',
  'celular-molhou-chuva-praia-salvador-socorro',
  'celular-caiu-no-mar-vale-a-pena-consertar',
  'troca-de-bateria-celular-salvador',
  'celular-descarregando-rapido',
  'celular-esquentando-descarregando-rapido-bateria',
  'troca-vidro-ou-tela-completa-celular-diferenca',
  'troca-vidro-vs-tela-completa-economia-salvador'
];

consolidated.forEach(slug => {
  const match = vercel.redirects.find(red => red.source === `/blog/${slug}`);
  console.log(`${slug} -> ${match ? match.destination : 'MISSING!'}`);
});

console.log('\n--- RAW SLUG COUNT ---');
// use node to count instead of grep to avoid cross-platform issues
const files = fs.readdirSync('src/data').filter(f => f.includes('editorialPosts') || f === 'blogData.ts');
let totalSlugs = 0;
let slugsFound = [];
files.forEach(f => {
  const content = fs.readFileSync(`src/data/${f}`, 'utf8');
  const matches = content.match(/slug:\s*['"](.*?)['"]/g);
  if (matches) {
    totalSlugs += matches.length;
    slugsFound.push(...matches.map(m => m.replace(/slug:\s*['"](.*?)['"]/, '$1')));
  }
});
console.log(`Raw count: ${totalSlugs}`);

console.log('\n--- 8 FILTERED POSTS ---');
let bd = fs.readFileSync('src/data/blogData.ts', 'utf8');
const pStart = bd.indexOf('export const problemPosts');
const pEnd = bd.indexOf('export const categoryLabels');
let pp = bd.substring(pStart, pEnd);

// Find posts with category: "conserto"
let blocks = pp.split('slug:').slice(1);
blocks.forEach(b => {
  const slug = b.match(/^\s*['"](.*?)['"]/)[1];
  if (b.includes('category: "conserto"') || b.includes("category: 'conserto'")) {
    console.log(slug);
  }
});
