const https = require('https');
const fs = require('fs');

const urls = [
  'https://site.reparoavancado.com.br/',
  'https://site.reparoavancado.com.br/servicos',
  'https://site.reparoavancado.com.br/locais-de-atendimento',
  'https://site.reparoavancado.com.br/contato',
  'https://site.reparoavancado.com.br/orcamento',
  'https://site.reparoavancado.com.br/localizacao',
  'https://site.reparoavancado.com.br/troca-de-tela',
  'https://site.reparoavancado.com.br/troca-de-bateria',
  'https://site.reparoavancado.com.br/conserto-de-iphone',
  'https://site.reparoavancado.com.br/assistencia-tecnica-salvador',
  'https://site.reparoavancado.com.br/assistencia-tecnica-pituba',
  'https://site.reparoavancado.com.br/blog/troca-de-tela-celular-salvador-original',
  'https://site.reparoavancado.com.br/blog/iphone-caiu-na-agua-desoxidacao-salvador',
  'https://site.reparoavancado.com.br/blog/bateria-samsung-desliga-30-porcento'
];

async function measurePageSpeed(url) {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile`;
  
  return new Promise((resolve) => {
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const score = json.lighthouseResult.categories.performance.score * 100;
          const fcp = json.lighthouseResult.audits['first-contentful-paint'].displayValue;
          const lcp = json.lighthouseResult.audits['largest-contentful-paint'].displayValue;
          resolve({ url, score, fcp, lcp });
        } catch (e) {
          resolve({ url, error: 'Failed to parse' });
        }
      });
    }).on('error', (e) => {
      resolve({ url, error: e.message });
    });
  });
}

async function run() {
  const results = [];
  console.log('Starting measurements...');
  for (const url of urls) {
    console.log(`Measuring ${url}...`);
    const res = await measurePageSpeed(url);
    results.push(res);
    console.log(res);
    // Add a delay to avoid rate limits
    await new Promise(r => setTimeout(r, 2000));
  }
  fs.writeFileSync('pagespeed_before.json', JSON.stringify(results, null, 2));
  console.log('Finished. Saved to pagespeed_before.json');
}

run();
