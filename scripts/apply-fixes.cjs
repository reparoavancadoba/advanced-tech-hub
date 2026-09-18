const fs = require('fs');
const path = require('path');

function walkSync(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkSync(fullPath, callback);
    } else {
      callback(fullPath);
    }
  });
}

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (let r of replacements) {
    content = content.replace(r.from, r.to);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

// 1. Robots.txt
const robotsPath = path.join(__dirname, '../public/robots.txt');
if (fs.existsSync(robotsPath)) {
  replaceInFile(robotsPath, [
    { from: /Disallow: \/_next\/\n/g, to: '' },
    { from: /Disallow: \/static\/\n/g, to: '' },
    { from: /Disallow: \/_next\/\r\n/g, to: '' },
    { from: /Disallow: \/static\/\r\n/g, to: '' },
  ]);
}

// 2. Text Replacements in components and data files
walkSync(path.join(__dirname, '../src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    replaceInFile(filePath, [
      { from: /avaliação Rápido/g, to: 'Diagnóstico Rápido' },
      { from: /avaliações precisos/g, to: 'diagnósticos precisos' },
      { from: /a maioria dos conserto realizados/g, to: 'a maioria dos consertos é realizada' },
      { from: /oficina na (\{loc\.name\})/g, to: 'Assistência técnica em $1' },
      { from: /oficina na Salvador/g, to: 'Assistência técnica em Salvador' },
      { from: /oficina na Boca do Rio e Orla/g, to: 'Assistência técnica na Boca do Rio e Orla' },
      { from: /oficina na/gi, to: 'Assistência técnica na' }, // Fallback for others
      { from: /profissionals/g, to: 'profissionais' },
      { from: /assistência técnicaes/gi, to: 'Assistência Técnica' },
    ]);
  }
});

// 3. Remove hardcoded +5.000, 4.9/5, 8 anos from ServicoConsolidado.tsx
const servicoConsolFilePath = path.join(__dirname, '../src/pages/ServicoConsolidado.tsx');
if (fs.existsSync(servicoConsolFilePath)) {
  replaceInFile(servicoConsolFilePath, [
    { from: /✅ Mais de 5\.000 aparelhos reparados/g, to: '✅ Mais de 7 anos de experiência' },
    { from: /⭐ Avaliação 4\.9\/5 · Mais de 8 anos de experiência em Salvador/g, to: '⭐ Orçamento gratuito · Atendimento imediato pelo WhatsApp' },
    { from: /Orçamento gratuito · Atendimento imediato pelo WhatsApp/g, to: '⭐ Atendimento imediato pelo WhatsApp' } // Quick fix to avoid duplicate lines if I messed up
  ]);
}
