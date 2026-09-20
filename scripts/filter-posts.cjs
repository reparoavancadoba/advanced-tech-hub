const fs = require('fs');

const mergedSlugs = [
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

let content = fs.readFileSync('src/data/blogData.ts', 'utf8');

const targetStr = `export const allPosts: BlogPost[] = [...problemPosts, ...editorialPosts];`;
const newStr = `export const allPosts: BlogPost[] = [...problemPosts, ...editorialPosts].filter(p => !${JSON.stringify(mergedSlugs)}.includes(p.slug));`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync('src/data/blogData.ts', content);
  console.log('Successfully filtered allPosts globally');
} else {
  console.log('Target string not found!');
}
