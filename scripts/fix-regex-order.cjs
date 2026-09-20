const fs = require('fs');
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

const regexConector = `  if (combined.match(/\\b(conector|carga|usb-c|usb|não\\.carrega|nao\\.carrega|nao-carrega|carreg)/)) return '/celular-nao-carrega';\n  if (combined.match(/\\b(bateria|descarreg|saúde|saude|incha|esquenta|aquece|superaquec)/)) return '/troca-de-bateria';`;

prerender = prerender.replace(
  /if \(combined\.match\(\/\\b\(bateria.*?return '\/troca-de-bateria';\n  if \(combined\.match\(\/\\b\(conector.*?return '\/celular-nao-carrega';/,
  regexConector
);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Fixed bateria vs conector order.');
