const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace('import Localizacao from "./pages/Localizacao.tsx";', 'import Localizacao from "./pages/Localizacao.tsx";\nimport GuiaAssistencia from "./pages/GuiaAssistencia.tsx";');

code = code.replace('            {/* P', '            <Route path="/guia-assistencia-tecnica-salvador" element={<GuiaAssistencia />} />\n            {/* P');

fs.writeFileSync('src/App.tsx', code);
