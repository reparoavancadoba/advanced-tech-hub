const fs = require('fs');

let fileSlugs = [];

function countExports(file) {
  let c = fs.readFileSync(file, 'utf8');
  let m = c.match(/slug:\s*['"](.*?)['"]/g);
  if (m) fileSlugs.push(...m.map(x => x.replace(/slug:\s*['"](.*?)['"]/, '$1')));
}

countExports('src/data/editorialPosts.ts');
countExports('src/data/editorialPostsBatch2.ts');
countExports('src/data/editorialPostsBatch3.ts');
countExports('src/data/editorialPostsBatch4.ts');
countExports('src/data/editorialPostsBatch5.ts');
countExports('src/data/editorialPostsBatch6.ts');
countExports('src/data/editorialPostsBatch7.ts');
countExports('src/data/editorialPostsBatch8.ts');
countExports('src/data/editorialPostsBatch9.ts');
countExports('src/data/editorialPostsBatch10.ts');

let bd = fs.readFileSync('src/data/blogData.ts', 'utf8');
const pStart = bd.indexOf('export const problemPosts');
const pEnd = bd.indexOf('export const categoryLabels');
let pp = bd.substring(pStart, pEnd);
let m = pp.match(/slug:\s*['"](.*?)['"]/g);
if (m) fileSlugs.push(...m.map(x => x.replace(/slug:\s*['"](.*?)['"]/, '$1')));

let merged = [
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

fileSlugs = fileSlugs.filter(s => !merged.includes(s));

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const blogUrls = sitemap.match(/<loc>.*?\/blog\/([^<]+)<\/loc>/g) || [];
let sitemapSlugs = blogUrls.map(u => u.match(/\/blog\/([^<]+)/)[1]).filter(s => !s.startsWith('pagina/'));

let missing = fileSlugs.filter(s => !sitemapSlugs.includes(s));
console.log('Missing from sitemap:');
console.log(missing);
console.log('Total missing:', missing.length);
