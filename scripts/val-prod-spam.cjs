const urls = [
  'https://site.reparoavancado.com.br/',
  'https://site.reparoavancado.com.br/troca-de-tela',
  'https://site.reparoavancado.com.br/conserto-de-iphone',
  'https://site.reparoavancado.com.br/assistencia-tecnica-salvador',
  'https://site.reparoavancado.com.br/assistencia-tecnica-brotas',
  'https://site.reparoavancado.com.br/assistencia-tecnica-pituba',
  'https://site.reparoavancado.com.br/blog/iphone-11-nao-carrega-conector-ou-bateria',
  'https://site.reparoavancado.com.br/blog/como-economizar-bateria-do-celular',
  'https://site.reparoavancado.com.br/blog/celular-xiaomi-nao-liga-o-que-fazer',
  'https://site.reparoavancado.com.br/blog/bateria-do-celular-estufada-e-perigoso-o-que-fazer'
];

async function checkUrl(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    
    // Check if the html still contains the prerendered seo block that we just deleted
    // or ANY div with position:absolute and clip:rect
    const hasHiddenDiv = html.includes('clip:rect(0,0,0,0)') || html.includes('width:1px;height:1px');
    const hasOldSeoBlock = html.includes('data-seo-prerender');
    
    if (hasHiddenDiv || hasOldSeoBlock) {
      console.log(`❌ ${url}: STILL HAS HIDDEN DIV OR SEO BLOCK`);
      return false;
    } else {
      console.log(`✅ ${url}: CLEAN`);
      return true;
    }
  } catch (err) {
    console.error(`Error fetching ${url}: ${err.message}`);
    return false;
  }
}

async function validate() {
  console.log('Validating production URLs for hidden text spam...\n');
  let cleanCount = 0;
  for (const url of urls) {
    const isClean = await checkUrl(url);
    if (isClean) cleanCount++;
  }
  
  console.log(`\nResults: ${cleanCount}/${urls.length} pages are clean.`);
  if (cleanCount === urls.length) {
    console.log('SUCCESS: All 10 test pages have NO hidden text div.');
  }
}

validate();
