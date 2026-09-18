const fs = require('fs');

let s = fs.readFileSync('scripts/prerender.ts', 'utf8');
s = s.replace(
    'contentHtml += `<h2>Solução Especializada</h2><p>${servico.solution}</p>`;',
    'if (servico.solution) { contentHtml += `<h2>Solução Especializada</h2><p>${servico.solution}</p>`; }'
);
fs.writeFileSync('scripts/prerender.ts', s);
