const fs = require('fs');
let code = fs.readFileSync('src/pages/GuiaAssistencia.tsx', 'utf8');

code = code.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport SiteLayout from "@/components/SiteLayout";\nimport { Helmet } from "react-helmet-async";');

code = code.replace('const HomeSeoSection = () => {', 'const GuiaAssistencia = () => {');
code = code.replace('export default HomeSeoSection;', 'export default GuiaAssistencia;');

code = code.replace('return (\n    <>', 'return (\n    <SiteLayout>\n      <Helmet>\n        <title>Guia de Assistência Técnica em Salvador | Reparo Avançado</title>\n        <meta name="description" content="Guia completo de assistência técnica em Salvador. Especialistas em Apple, Samsung, Xiaomi e reparo de placas." />\n      </Helmet>');
code = code.replace('</>\n  );', '</SiteLayout>\n  );');

fs.writeFileSync('src/pages/GuiaAssistencia.tsx', code);
