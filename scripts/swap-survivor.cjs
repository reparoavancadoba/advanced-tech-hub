const fs = require('fs');

// 1. Update vercel.json
let v = fs.readFileSync('vercel.json', 'utf8');
// Original:
// {
//   "source": "/blog/troca-vidro-ou-tela-completa-celular-diferenca",
//   "destination": "/blog/vale-pena-trocar-vidro-ou-tela-completa",
//   "permanent": true
// }
v = v.replace(
  /"source": "\/blog\/troca-vidro-ou-tela-completa-celular-diferenca",\s*"destination": "\/blog\/vale-pena-trocar-vidro-ou-tela-completa"/g,
  '"source": "/blog/vale-pena-trocar-vidro-ou-tela-completa",\n      "destination": "/blog/troca-vidro-ou-tela-completa-celular-diferenca"'
);
v = v.replace(
  /"destination": "\/blog\/vale-pena-trocar-vidro-ou-tela-completa"/g,
  '"destination": "/blog/troca-vidro-ou-tela-completa-celular-diferenca"'
);
fs.writeFileSync('vercel.json', v);

// 2. Update blogData.ts
let b = fs.readFileSync('src/data/blogData.ts', 'utf8');
b = b.replace(/"troca-vidro-ou-tela-completa-celular-diferenca"/g, '"vale-pena-trocar-vidro-ou-tela-completa"');
fs.writeFileSync('src/data/blogData.ts', b);

// 3. Update prerender.ts
let p = fs.readFileSync('scripts/prerender.ts', 'utf8');
p = p.replace(/"troca-vidro-ou-tela-completa-celular-diferenca"/g, '"vale-pena-trocar-vidro-ou-tela-completa"');
fs.writeFileSync('scripts/prerender.ts', p);

console.log('Replacements done.');
