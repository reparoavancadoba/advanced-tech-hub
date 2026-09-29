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
    const res = await fetch(url, { cache: 'no-store' });
    const html = await res.text();
    
    const htmlNoStyle = html.replace(/<style[\s\S]*?<\/style>/gi, '');

    // Check if it STILL has the hidden CSS
    const hasHiddenDiv = htmlNoStyle.includes('position:absolute;width:1px;height:1px') ||
                         (htmlNoStyle.includes('clip:rect(0,0,0,0)') && htmlNoStyle.includes('width:1px'));
    
    // Extract root content
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    
    // Strip HTML tags for word count
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    const charCount = text.length;
    
    if (hasHiddenDiv) {
      console.log(`❌ ${url}: STILL HAS HIDDEN CSS IN CONTENT`);
      return false;
    } else {
      console.log(`✅ ${url}: ${wordCount} palavras, ${charCount} caracteres`);
      return true;
    }
  } catch (err) {
    console.error(`⚠️  ${url}: FETCH ERROR - ${err.message}`);
    return false;
  }
}

async function validate() {
  console.log('Validando produção (aguardando deploy...)\n');
  let clean = 0;
  for (const url of urls) {
    if (await checkUrl(url)) clean++;
  }
  console.log(`\nResults: ${clean}/${urls.length} pages are validated.`);
}

validate();
