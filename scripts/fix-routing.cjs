const fs = require('fs');
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

const replaceService = `if (combined.match(/\\b(tablet|ipad|tab)/)) return '/conserto-de-tablet';
  if (combined.match(/\\b(notebook|macbook|laptop|ssd|ram|dobradiça|teclado)/)) return '/conserto-de-notebook';
  if (combined.match(/\\b(agua|água|umidade|maresia|oxidação|oxidacao|molhou|banho|desoxida|caiu.*(agua|água|mar|piscina|vaso|chuva)|arroz)/)) return '/celular-caiu-na-agua';`;

prerender = prerender.replace(/if \(combined\.match\(\/\\b\(agua.*?\)\) return '\/celular-caiu-na-agua';/, replaceService);

const serviceNames = `'/conserto-de-tablet': 'Conserto de Tablet',
  '/conserto-de-notebook': 'Conserto de Notebook',`;
prerender = prerender.replace(/const servicePageNames: Record<string, string> = \{/, `const servicePageNames: Record<string, string> = {\n  ${serviceNames}`);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Service routing updated for notebook and tablet.');
