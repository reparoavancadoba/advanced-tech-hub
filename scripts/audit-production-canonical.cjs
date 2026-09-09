const https = require('https');

const slugs = [
  'conector-carga-iphone-mau-contato-limpeza-troca',
  'vale-pena-trocar-vidro-ou-tela-completa',
  'iphone-descarregando-rapido-calor-salvador',
  'motorola-edge-nao-liga-boca-do-rio',
  'assistencia-tecnica-boca-do-rio-conserto-rapido',
  'melhor-assistencia-tecnica-salvador-reparo-avancado',
  'celular-caiu-no-mar-armacao-desoxidacao',
  'conserto-celular-imbui-stiep-rapido',
  'assistencia-tecnica-xiaomi-pituba-regiao',
  'quanto-custa-consertar-celular-salvador-cuidado'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function main() {
  console.log("=== PRODUCTION CANONICAL CHECK (what Google actually sees) ===\n");
  
  for (const slug of slugs) {
    const url = `https://site.reparoavancado.com.br/blog/${slug}`;
    try {
      const { status, body } = await fetchUrl(url);
      
      // Extract canonical from the served HTML
      const canonicalMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : 'NOT FOUND IN HTML';
      
      // Also check for canonical in the prerender block (data-seo-prerender)
      const prerenderCanonical = body.match(/data-seo-prerender[^>]*>[\s\S]*?<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      
      const expectedCanonical = `https://site.reparoavancado.com.br/blog/${slug}`;
      const isSelf = canonical === expectedCanonical;
      
      console.log(`[${slug}]`);
      console.log(`  HTTP Status: ${status}`);
      console.log(`  Canonical in HTML: ${canonical}`);
      if (prerenderCanonical) console.log(`  Canonical in prerender block: ${prerenderCanonical[1]}`);
      console.log(`  Self-referencing: ${isSelf ? 'YES ✅' : 'NO ❌'}`);
      if (!isSelf) console.log(`  Expected: ${expectedCanonical}`);
      console.log("");
    } catch (e) {
      console.log(`[${slug}] ERROR: ${e.message}\n`);
    }
  }
}

main();
