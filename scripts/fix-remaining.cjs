const fs = require('fs');

// 1. Fix Blog.tsx
let blog = fs.readFileSync('src/pages/Blog.tsx', 'utf8');
blog = blog.replace(
  /const filtered = allPosts\.filter\(p => p\.isEditorial \|\| p\.category !== 'conserto'\);/,
  'const filtered = allPosts;'
);
fs.writeFileSync('src/pages/Blog.tsx', blog);

// 2. Validate vercel.json
let vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

// We ensure all 14 consolidated slugs have a redirect!
const mapping = {
  'celular-nao-carrega-causas': '/blog/celular-motorola-nao-carrega',
  'celular-nao-carrega-causas-solucoes': '/blog/celular-motorola-nao-carrega',
  'celular-nao-carrega-salvador': '/blog/celular-motorola-nao-carrega',
  'motorola-nao-carrega-avaliacao-salvador': '/blog/celular-motorola-nao-carrega',
  'higienizacao-conector-cabo-carregar-salvador': '/blog/celular-motorola-nao-carrega',
  'celular-caiu-na-agua-o-que-fazer': '/blog/aviso-umidade-detectada',
  'celular-caiu-na-agua-desoxidacao-salvador': '/blog/aviso-umidade-detectada',
  'celular-molhou-chuva-praia-salvador-socorro': '/blog/aviso-umidade-detectada',
  'celular-caiu-no-mar-vale-a-pena-consertar': '/blog/aviso-umidade-detectada',
  'troca-de-bateria-celular-salvador': '/blog/bateria-celular-descarregando-rapido',
  'celular-descarregando-rapido': '/blog/bateria-celular-descarregando-rapido',
  'celular-esquentando-descarregando-rapido-bateria': '/blog/bateria-celular-descarregando-rapido',
  'troca-vidro-ou-tela-completa-celular-diferenca': '/blog/vale-pena-trocar-vidro-ou-tela-completa',
  'troca-vidro-vs-tela-completa-economia-salvador': '/blog/vale-pena-trocar-vidro-ou-tela-completa'
};

// Remove any existing redirects for these 14 from vercel.json
vercel.redirects = vercel.redirects.filter(r => !Object.keys(mapping).map(k => '/blog/' + k).includes(r.source));

// Insert them correctly
Object.entries(mapping).forEach(([src, dest]) => {
  vercel.redirects.push({
    source: '/blog/' + src,
    destination: dest,
    permanent: true
  });
});

fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 2));
console.log('Fixed Blog.tsx and vercel.json');
