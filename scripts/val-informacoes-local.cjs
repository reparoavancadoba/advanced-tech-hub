const fs = require('fs');

const pages = [
  'dist/informacoes/troca-de-tela-celular-boca-do-rio/index.html',
  'dist/informacoes/troca-de-tela-celular-pituba/index.html',
  'dist/informacoes/troca-de-bateria-celular-boca-do-rio/index.html',
  'dist/informacoes/troca-de-bateria-celular-imbui/index.html',
  'dist/informacoes/conserto-de-iphone-boca-do-rio/index.html',
  'dist/informacoes/conserto-de-iphone-pituba/index.html',
  'dist/informacoes/conserto-de-samsung-brotas/index.html',
  'dist/informacoes/conserto-de-samsung-imbui/index.html',
  'dist/informacoes/celular-nao-carrega-boca-do-rio/index.html',
  'dist/informacoes/celular-nao-carrega-brotas/index.html',
  'dist/informacoes/index.html'
];

const contents = [];

for (const p of pages) {
  try {
    const html = fs.readFileSync(p, 'utf8');
    
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    contents.push(text);

    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : '';
    
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const h1 = h1Match ? h1Match[1] : '';

    const hasServiceSchema = html.includes('"@type":"Service"');
    const hasAreaServed = html.includes('"areaServed"');
    const hasBreadcrumb = html.includes('"@type":"BreadcrumbList"');
    const hasAggregateRating = html.includes('"aggregateRating"');
    
    const footerLink = html.includes('href="/informacoes"') && html.includes('Informações');

    let hasHiddenCSS = false;
    if (html.includes('position:absolute') && html.includes('1px')) hasHiddenCSS = true;

    console.log(`\n✅ ${p}`);
    console.log(`- HTML Word Count: ${wordCount} (> 250: ${wordCount > 250})`);
    console.log(`- Title: ${title}`);
    console.log(`- H1: ${h1}`);
    console.log(`- Schema Service+Area: ${hasServiceSchema && hasAreaServed}, Breadcrumb: ${hasBreadcrumb}, AggregateRating: ${hasAggregateRating}`);
    console.log(`- Footer link Informações: ${footerLink}`);
    console.log(`- Hidden CSS (position absolute 1px): ${hasHiddenCSS}`);
  } catch(e) {
    console.log(`Error reading ${p}`);
  }
}

function jaccard(s1, s2) {
  const set1 = new Set(s1.split(' '));
  const set2 = new Set(s2.split(' '));
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return (intersection.size / union.size) * 100;
}

if (contents.length === 11) {
  console.log("\nSimilaridade:");
  console.log(`1x2: ${jaccard(contents[0], contents[1]).toFixed(2)}%`);
  console.log(`3x4: ${jaccard(contents[2], contents[3]).toFixed(2)}%`);
  console.log(`5x6: ${jaccard(contents[4], contents[5]).toFixed(2)}%`);
  console.log(`7x8: ${jaccard(contents[6], contents[7]).toFixed(2)}%`);
  console.log(`9x10: ${jaccard(contents[8], contents[9]).toFixed(2)}%`);
}

for (const p of ['dist/index.html', 'dist/troca-de-tela/index.html']) {
  const html = fs.readFileSync(p, 'utf8');
  const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
  const rootContent = rootMatch ? rootMatch[1] : '';
  const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const wordCount = text ? text.split(/\s+/).length : 0;
  console.log(`\n✅ Regressão ${p}: ${wordCount} palavras`);
}
