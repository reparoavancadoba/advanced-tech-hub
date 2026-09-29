const urls = [
  'https://site.reparoavancado.com.br/informacoes/troca-de-tela-celular-boca-do-rio',
  'https://site.reparoavancado.com.br/informacoes/troca-de-tela-celular-pituba',
  'https://site.reparoavancado.com.br/informacoes/troca-de-bateria-celular-boca-do-rio',
  'https://site.reparoavancado.com.br/informacoes/troca-de-bateria-celular-imbui',
  'https://site.reparoavancado.com.br/informacoes/conserto-de-iphone-boca-do-rio',
  'https://site.reparoavancado.com.br/informacoes/conserto-de-iphone-pituba',
  'https://site.reparoavancado.com.br/informacoes/conserto-de-samsung-brotas',
  'https://site.reparoavancado.com.br/informacoes/conserto-de-samsung-imbui',
  'https://site.reparoavancado.com.br/informacoes/celular-nao-carrega-boca-do-rio',
  'https://site.reparoavancado.com.br/informacoes/celular-nao-carrega-brotas',
  'https://site.reparoavancado.com.br/informacoes'
];

async function check() {
  const contents = [];
  
  for (const url of urls) {
    try {
      const res = await fetch(url, {cache: 'no-store'});
      if (!res.ok) {
        console.log(`❌ ERRO: ${url} retornou ${res.status}`);
        continue;
      }
      const html = await res.text();
      
      const rootMatch = html.match(/<div id="root">([\\s\\S]*?)<\/div>/);
      const rootContent = rootMatch ? rootMatch[1] : '';
      const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\\s+/g, ' ').trim();
      const wordCount = text ? text.split(/\\s+/).length : 0;
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

      console.log(`\\n✅ ${url}`);
      console.log(`- HTML Word Count: ${wordCount} (> 250: ${wordCount > 250})`);
      console.log(`- Title: ${title}`);
      console.log(`- H1: ${h1}`);
      console.log(`- Schema Service+Area: ${hasServiceSchema && hasAreaServed}, Breadcrumb: ${hasBreadcrumb}, AggregateRating: ${hasAggregateRating}`);
      console.log(`- Footer link Informações: ${footerLink}`);
      console.log(`- Hidden CSS (position absolute 1px): ${hasHiddenCSS}`);

    } catch(e) {
      console.log(`Error on ${url}: ${e.message}`);
    }
  }

  // Similarity
  function jaccard(s1, s2) {
    const set1 = new Set(s1.split(' '));
    const set2 = new Set(s2.split(' '));
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return (intersection.size / union.size) * 100;
  }
  
  if (contents.length === 11) {
    console.log("\\nSimilaridade:");
    console.log(`1x2: ${jaccard(contents[0], contents[1]).toFixed(2)}%`);
    console.log(`3x4: ${jaccard(contents[2], contents[3]).toFixed(2)}%`);
    console.log(`5x6: ${jaccard(contents[4], contents[5]).toFixed(2)}%`);
    console.log(`7x8: ${jaccard(contents[6], contents[7]).toFixed(2)}%`);
    console.log(`9x10: ${jaccard(contents[8], contents[9]).toFixed(2)}%`);
  }

  // Regression
  for (const p of ['https://site.reparoavancado.com.br/', 'https://site.reparoavancado.com.br/troca-de-tela']) {
    const res = await fetch(p, { cache: 'no-store' });
    const html = await res.text();
    const rootMatch = html.match(/<div id="root">([\\s\\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\\s+/).length : 0;
    console.log(`\\n✅ Regressão ${p}: ${wordCount} palavras`);
  }
}

check();
