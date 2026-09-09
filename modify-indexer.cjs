const fs = require('fs');
const redirects = fs.readFileSync('public/_redirects', 'utf8').split('\n').filter(l => l.includes(' 301')).map(l => 'https://site.reparoavancado.com.br' + l.split(' ')[0]);

let indexer = fs.readFileSync('scripts/run-indexer.ts', 'utf8');
const customUrls = [
  'https://site.reparoavancado.com.br/conserto-de-celular',
  'https://site.reparoavancado.com.br/reparo-em-placa',
  'https://site.reparoavancado.com.br/blog/celular-xiaomi-nao-liga-o-que-fazer',
  'https://site.reparoavancado.com.br/blog/diferenca-tela-original-primeira-linha',
  ...redirects
].map(u => '"' + u + '"').join(',\n    ');

indexer = indexer.replace('const priorityUrls: string[] = [];', 'const priorityUrls: string[] = [\n    ' + customUrls + '\n  ];');

fs.writeFileSync('scripts/run-indexer.ts', indexer, 'utf8');
console.log('Modified run-indexer.ts to prioritize ' + redirects.length + ' redirects + 4 core pages.');
