const fs = require('fs');
let code = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
code = code.replace(
  '{ name: "Brotas", path: "/assistencia-tecnica-brotas" }',
  '{ name: "Brotas", path: "/assistencia-tecnica-brotas" },\n  { name: "Informações", path: "/informacoes" }'
);
fs.writeFileSync('src/components/FooterSection.tsx', code);
