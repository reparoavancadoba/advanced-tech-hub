const fs = require('fs');

const correctMergedSlugs = [
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

// Fix prerender.ts
let pre = fs.readFileSync('scripts/prerender.ts', 'utf8');
pre = pre.replace(/const mergedSlugs = \[.*?\];/, `const mergedSlugs = ${JSON.stringify(correctMergedSlugs)};`);
fs.writeFileSync('scripts/prerender.ts', pre);

// Fix generate-sitemap.ts
let sitemapStr = fs.readFileSync('scripts/generate-sitemap.ts', 'utf8');
sitemapStr = sitemapStr.replace(/!\[.*?\].includes\(p.slug\)/g, `!${JSON.stringify(correctMergedSlugs)}.includes(p.slug)`);
fs.writeFileSync('scripts/generate-sitemap.ts', sitemapStr);

// Fix vercel.json
let vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
// Remove bad redirects
vercel.redirects = vercel.redirects.filter(r => r.source !== '/blog/celular-nao-carrega' && r.source !== '/blog/celular-caiu-na-agua');
// Add smartwatch redirects
vercel.redirects.push({ source: '/blog/troca-de-vidro-apple-watch-salvador', destination: '/conserto-de-celular', permanent: true });
vercel.redirects.push({ source: '/blog/bateria-apple-watch-inchada-tela-descolando', destination: '/conserto-de-celular', permanent: true });
fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 2));

console.log('Fixed scripts and vercel.json');
