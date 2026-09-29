const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('import InformacaoPage')) {
  code = code.replace(
    'import Localizacao from "./pages/Localizacao";',
    'import Localizacao from "./pages/Localizacao";\nimport InformacoesIndex from "./pages/InformacoesIndex";\nimport InformacaoPage from "./pages/InformacaoPage";'
  );
  fs.writeFileSync('src/App.tsx', code);
  console.log('App patched');
}
