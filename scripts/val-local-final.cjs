const fs = require('fs');

const pages = [
  'dist/index.html',
  'dist/troca-de-tela/index.html',
  'dist/assistencia-tecnica-salvador/index.html',
  'dist/blog/autorizada-ou-independente-como-escolher-assistencia-tecnica/index.html',
  'dist/blog/vale-a-pena-consertar-celular-ou-comprar-novo/index.html',
  'dist/blog/garantia-de-conserto-de-celular-o-que-perguntar/index.html',
  'dist/blog/iphone-nao-liga-tela-preta-maca-travada-11-ao-14/index.html',
  'dist/blog/iphone-11-usado-vale-a-pena-o-que-checar/index.html'
];

for (const p of pages) {
  try {
    const html = fs.readFileSync(p, 'utf8');
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    
    let hasUndefined = html.includes('undefined') || html.includes('null') || html.includes('NaN');
    if (html.includes('null')) {
       hasUndefined = text.includes('undefined') || text.includes('null') || text.includes('NaN');
    }
    
    console.log(`✅ ${p}: ${wordCount} words. Errors: ${hasUndefined}`);
  } catch (e) {
    console.log(`❌ ${p} error: ${e.message}`);
  }
}
