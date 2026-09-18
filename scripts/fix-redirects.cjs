const fs = require('fs');

// 1. Fix vercel.json to remove strategic bairros from redirect
let v = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const excludedBairros = ['boca-do-rio', 'pituba', 'imbui', 'brotas'];

v.redirects = v.redirects.map(r => {
    if (r.source && r.source.includes('assistencia-tecnica-:bairro(')) {
        let match = r.source.match(/\((.*?)\)/);
        if (match) {
            let bairrosList = match[1].split('|').filter(b => !excludedBairros.includes(b));
            if (bairrosList.length > 0) {
                r.source = r.source.replace(/\(.*\)/, '(' + bairrosList.join('|') + ')');
            } else {
                return null;
            }
        }
    }
    // Also remove them from the programmatic redirects
    if (r.source && r.source.includes('conserto/:servico/em/:bairro(')) {
        let match = r.source.match(/\((.*?)\)/);
        if (match) {
            let bairrosList = match[1].split('|').filter(b => !excludedBairros.includes(b));
            if (bairrosList.length > 0) {
                r.source = r.source.replace(/\(.*\)/, '(' + bairrosList.join('|') + ')');
            } else {
                return null;
            }
        }
    }
    return r;
}).filter(Boolean);
fs.writeFileSync('vercel.json', JSON.stringify(v, null, 2));

// 2. Fix generate-sitemap.ts
let s = fs.readFileSync('scripts/generate-sitemap.ts', 'utf8');

// Remove SPA fallback
s = s.replace('/* /index.html 200', '');

// Skip strategic bairros in redirect generation
s = s.replace(/macro\.oldSlugs\.forEach\(bairro => \{/g, `macro.oldSlugs.forEach(bairro => {
      if (['boca-do-rio', 'pituba', 'imbui', 'brotas'].includes(bairro)) return;`);

// Remove boca-do-rio from strategicLocals if requested, but wait, the plan said to remove it from sitemap.
// Let's remove 'assistencia-tecnica-boca-do-rio' from strategicLocals array.
s = s.replace(/"assistencia-tecnica-boca-do-rio",\s*/g, '');

fs.writeFileSync('scripts/generate-sitemap.ts', s);
