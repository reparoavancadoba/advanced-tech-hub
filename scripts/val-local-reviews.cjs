const fs = require('fs');

const pages = [
  'dist/index.html',
  'dist/troca-de-tela/index.html',
  'dist/assistencia-tecnica-salvador/index.html',
  'dist/blog/parceria-manutencao-celulares-grupo-artemp/index.html'
];

for (const p of pages) {
  try {
    const html = fs.readFileSync(p, 'utf8');
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    // Strip HTML tags for word count
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    const hasAvalia = text.toLowerCase().includes('avalia');
    
    console.log(`✅ ${p}: ${wordCount} words. Contém 'avalia': ${hasAvalia}`);
  } catch (e) {
    console.log(`❌ ${p} error: ${e.message}`);
  }
}
