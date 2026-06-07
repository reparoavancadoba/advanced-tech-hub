const fs = require('fs');
const path = require('path');

const filesToRestore = [
  'src/data/servicosConsolidadosData.ts',
  'src/data/locaisConsolidadosData.ts',
  'src/data/locaisData.ts',
  'src/data/blogData.ts',
  'src/data/editorialPosts.ts',
  'src/pages/Atendimento.tsx',
  'src/pages/BlogPost.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Servicos.tsx',
  'src/pages/ServicoConsolidado.tsx',
  'src/pages/LocalConsolidado.tsx',
  'src/pages/LocaisDeAtendimento.tsx',
  'index.html'
];

const brandReplacements = [
  { search: /conserto Avançado/g, replace: 'Reparo Avançado' },
  { search: /Conserto Avançado/g, replace: 'Reparo Avançado' },
  { search: /conserto Avancado/g, replace: 'Reparo Avançado' },
  { search: /Conserto Avancado/g, replace: 'Reparo Avançado' }
];

console.log('Restoring brand name "Reparo Avançado"...');

filesToRestore.forEach((fileRelPath) => {
  const fullPath = path.resolve(fileRelPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fileRelPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  brandReplacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Restored brand name in: ${fileRelPath}`);
  }
});

console.log('Brand name restoration complete.');
