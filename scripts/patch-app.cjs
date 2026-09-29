const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('InformacaoPage')) {
  code = code.replace(
    'import BlogPost from "./pages/BlogPost";',
    'import BlogPost from "./pages/BlogPost";\nimport InformacoesIndex from "./pages/InformacoesIndex";\nimport InformacaoPage from "./pages/InformacaoPage";'
  );
  code = code.replace(
    '<Route path="/blog/:slug" element={<BlogPost />} />',
    '<Route path="/blog/:slug" element={<BlogPost />} />\n        <Route path="/informacoes" element={<InformacoesIndex />} />\n        <Route path="/informacoes/:slug" element={<InformacaoPage />} />'
  );
  fs.writeFileSync('src/App.tsx', code);
  console.log('App.tsx patched');
}
