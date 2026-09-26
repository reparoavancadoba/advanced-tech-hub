async function check() {
  const res = await fetch('https://site.reparoavancado.com.br/');
  const html = await res.text();
  
  // Strip style tags
  const htmlNoStyle = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  
  const hasPhrase = htmlNoStyle.includes('conserto de celular perto de mim');
  console.log('Phrase "conserto de celular perto de mim" in production raw HTML:', hasPhrase ? 'YES' : 'NO');
  
  // Count all pages that previously had hidden content
  const urls = [
    'https://site.reparoavancado.com.br/',
    'https://site.reparoavancado.com.br/troca-de-tela',
    'https://site.reparoavancado.com.br/troca-de-bateria',
    'https://site.reparoavancado.com.br/conserto-de-iphone',
    'https://site.reparoavancado.com.br/assistencia-tecnica-salvador',
    'https://site.reparoavancado.com.br/assistencia-tecnica-brotas',
    'https://site.reparoavancado.com.br/assistencia-tecnica-pituba',
    'https://site.reparoavancado.com.br/blog/iphone-11-nao-carrega-conector-ou-bateria',
    'https://site.reparoavancado.com.br/blog/como-economizar-bateria-do-celular',
    'https://site.reparoavancado.com.br/blog/celular-xiaomi-nao-liga-o-que-fazer',
  ];
  
  console.log('\n--- Confirming <div id="root"> content ---');
  for (const url of urls) {
    const r = await fetch(url);
    const h = await r.text();
    const rootMatch = h.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1].trim() : '';
    const isEmpty = rootContent === '' || rootContent.length < 5;
    console.log(`${isEmpty ? '✅' : '❌'} ${url}: root div content length = ${rootContent.length} chars ${isEmpty ? '(empty = clean)' : '(NOT EMPTY - still has injected content!)'}`);
  }
}

check();
