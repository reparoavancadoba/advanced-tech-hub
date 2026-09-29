const fs = require('fs');

const pages = [
  'dist/index.html',
  'dist/troca-de-tela/index.html',
  'dist/conserto-de-iphone/index.html',
  'dist/assistencia-tecnica-salvador/index.html',
  'dist/assistencia-tecnica-brotas/index.html',
  'dist/assistencia-tecnica-pituba/index.html',
  'dist/blog/iphone-11-nao-carrega-conector-ou-bateria/index.html',
  'dist/blog/como-economizar-bateria-do-celular/index.html',
  'dist/blog/celular-xiaomi-nao-liga-o-que-fazer/index.html',
  'dist/blog/bateria-do-celular-estufada-e-perigoso-o-que-fazer/index.html'
];

for (const p of pages) {
  try {
    const html = fs.readFileSync(p, 'utf8');
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    // Strip HTML tags for word count
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    const charCount = text.length;
    console.log(`✅ ${p}: ${wordCount} words, ${charCount} chars`);
  } catch (e) {
    console.log(`❌ ${p} error: ${e.message}`);
  }
}
