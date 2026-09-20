const https = require('https');
const fs = require('fs');
const DOMAIN = 'https://site.reparoavancado.com.br';

function fetchUrl(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method, timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, data }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); resolve({ status: 504, headers: {}, data: '' }); });
    req.end();
  });
}

async function run() {
  console.log('--- 1. Validating 9 Service Pages ---');
  const services = [
    '/troca-de-tela', '/troca-de-bateria', '/reparo-em-placa', '/conserto-de-celular',
    '/celular-nao-liga', '/celular-nao-carrega', '/celular-caiu-na-agua',
    '/conserto-de-tablet', '/conserto-de-notebook'
  ];
  for (const s of services) {
    const res = await fetchUrl(DOMAIN + s, 'HEAD');
    console.log(`[${res.status}] ${s}`);
  }

  console.log('\n--- 2. Validating Sitemap ---');
  const sitemapRes = await fetchUrl(DOMAIN + '/sitemap.xml');
  const urls = (sitemapRes.data.match(/<loc>(.*?)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
  console.log(`Total URLs in sitemap: ${urls.length}`);
  
  // Test a small batch to confirm 200s
  let okCount = 0;
  // Doing concurrent checks
  const results = await Promise.all(urls.map(u => fetchUrl(u, 'HEAD').catch(e => ({status: 500}))));
  results.forEach(r => { if(r.status === 200) okCount++; });
  console.log(`Sitemap URLs responding 200: ${okCount}/${urls.length}`);

  console.log('\n--- 3. Validating Redirects ---');
  const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const redirects = vercel.redirects;
  
  // Check the specific ones
  const toCheck = [
    { source: '/blog/celular-nao-carrega-causas', expectedDest: '/blog/celular-motorola-nao-carrega' },
    { source: '/blog/celular-caiu-na-agua-o-que-fazer', expectedDest: '/blog/aviso-umidade-detectada' },
    { source: '/blog/troca-de-vidro-apple-watch-salvador', expectedDest: '/conserto-de-celular' },
    { source: '/blog/bateria-apple-watch-inchada-tela-descolando', expectedDest: '/conserto-de-celular' }
  ];

  for (const rc of toCheck) {
    const res = await fetchUrl(DOMAIN + rc.source, 'GET'); // GET to see redirects if any, but wait, node https doesn't follow redirects by default!
    if (res.status === 301 || res.status === 308) {
      const loc = res.headers.location;
      let finalDest = loc.startsWith('http') ? loc : DOMAIN + loc;
      const resFinal = await fetchUrl(finalDest, 'HEAD');
      console.log(`[${res.status}] ${rc.source} -> ${loc} (Final: [${resFinal.status}])`);
    } else {
      console.log(`[${res.status}] ${rc.source} (Expected 301)`);
    }
  }

  console.log('\n--- 4. Validating Blog Index ---');
  const blogRes = await fetchUrl(DOMAIN + '/blog');
  const consolidated = ['celular-nao-carrega-causas', 'celular-caiu-na-agua-o-que-fazer', 'troca-de-vidro-apple-watch-salvador'];
  let foundAny = false;
  for (const c of consolidated) {
    if (blogRes.data.includes(`href="/blog/${c}"`)) {
      console.log(`WARNING: Found ${c} in blog index!`);
      foundAny = true;
    }
  }
  if (!foundAny) {
    console.log('Blog index is clean from consolidated/removed articles.');
  }
}

run().catch(console.error);
