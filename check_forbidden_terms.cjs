const fs = require('fs');
const path = require('path');

const forbiddenTerms = [
  'assistência técnica',
  'assistencia tecnica',
  'suporte técnico',
  'suporte tecnico',
  'técnico',
  'tecnico',
  'especialista',
  'especializado',
  'diagnóstico',
  'diagnostico',
  'manutenção',
  'manutencao',
  'microsoldagem',
  'placa',
  'hardware',
  'software',
  'desbloqueio',
  'recuperação',
  'recuperacao',
  'remoção de vírus',
  'remocao de virus',
  'conserto avançado',
  'conserto avancado',
  'suporte remoto'
];

let violationsCount = 0;

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.vercel') {
        scanDir(fullPath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html') || file.endsWith('.xml') || file.endsWith('.json')) {
      if (file === 'check_forbidden_terms.cjs' || file === 'package.json' || file === 'package-lock.json' || file === 'bun.lock' || file === 'bun.lockb' || file === 'components.json' || file === 'tsconfig.json') continue;
      
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, idx) => {
        // Check general forbidden terms
        forbiddenTerms.forEach((term) => {
          const lowerLine = line.toLowerCase();
          const lowerTerm = term.toLowerCase();

          // We ignore imports, links, component names, slugs in code
          if (lowerLine.includes(lowerTerm)) {
            // Exclude lines that are just React component imports, typescript definitions, or path strings
            if (line.includes('import ') || line.includes('Route ') || line.includes('path:') || line.includes('slug:') || line.includes('href="/') || line.includes('to="/') || line.includes('icon:') || line.includes('iconName:') || line.includes('image:')) {
              return;
            }
            
            // Exclude domain and logo asset names
            if (lowerLine.includes('reparoavancado') || lowerLine.includes('reparo-avancado')) {
              return;
            }

            // Exclude sitemap locations that are just slugs/URLs
            if (line.includes('<loc>https://') && (term === 'placa' || term === 'software' || term === 'manutencao' || term === 'manutenção')) {
              return;
            }

            console.log(`VIOLATION: ${path.relative(process.cwd(), fullPath)}:L${idx + 1} [Term: ${term}] -> ${line.trim()}`);
            violationsCount++;
          }
        });

        // Check for "reparo" that is NOT "Reparo Avançado"
        const lowerLine = line.toLowerCase();
        if (lowerLine.includes('reparo')) {
          // If it doesn't contain "Reparo Avançado" (case-insensitive check) and is not an import/route
          const hasBrand = lowerLine.includes('reparo avançado') || lowerLine.includes('reparo avancado') || lowerLine.includes('reparoavancado') || lowerLine.includes('reparo-avancado');
          const isCodeOnly = line.includes('import ') || line.includes('Route ') || line.includes('path:') || line.includes('slug:') || line.includes('href="/') || line.includes('to="/') || line.includes('icon:') || line.includes('image:');
          
          if (!hasBrand && !isCodeOnly) {
            console.log(`VIOLATION: ${path.relative(process.cwd(), fullPath)}:L${idx + 1} [Term: reparo (generic)] -> ${line.trim()}`);
            violationsCount++;
          }
        }
      });
    }
  }
}

scanDir('.');

console.log(`\nScan complete. Total violations found: ${violationsCount}`);
if (violationsCount > 0) {
  process.exit(1);
} else {
  console.log('✅ All files are compliant!');
}
