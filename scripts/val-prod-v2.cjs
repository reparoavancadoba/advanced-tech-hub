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

async function checkUrl(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    
    // Strip <style> tags - Tailwind sr-only class contains clip:rect and width:1px, that's fine
    const htmlNoStyle = html.replace(/<style[\s\S]*?<\/style>/gi, '');
    
    // Check for the actual hidden-text div patterns in content (NOT in CSS)
    const hasSeoPrerender = htmlNoStyle.includes('data-seo-prerender');
    const hasHiddenDiv = htmlNoStyle.includes('position:absolute;width:1px;height:1px') ||
                          (htmlNoStyle.includes('clip:rect(0,0,0,0)') && htmlNoStyle.includes('width:1px'));
    
    if (hasSeoPrerender || hasHiddenDiv) {
      console.log(`❌ ${url}: STILL HAS HIDDEN DIV IN CONTENT`);
      if (hasSeoPrerender) console.log('   → data-seo-prerender found');
      if (hasHiddenDiv) console.log('   → hidden CSS in body');
      return false;
    } else {
      console.log(`✅ ${url}: CLEAN`);
      return true;
    }
  } catch (err) {
    console.error(`⚠️  ${url}: FETCH ERROR - ${err.message}`);
    return false;
  }
}

async function validate() {
  console.log('Validating 10 production URLs (excluding <style> tags)...\n');
  let clean = 0;
  for (const url of urls) {
    if (await checkUrl(url)) clean++;
  }
  console.log(`\nResults: ${clean}/${urls.length} pages are clean.`);
  if (clean === urls.length) {
    console.log('✅ SUCCESS: All pages have NO hidden text div in content.');
  }
}

validate();
