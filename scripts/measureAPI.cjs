const fetch = require('node-fetch'); // usually available in newer node if not we can use built-in https or dynamic import
// Let's use https just in case node fetch is not there
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

const urls = [
  'https://site.reparoavancado.com.br/',
  'https://site.reparoavancado.com.br/troca-de-tela',
  'https://site.reparoavancado.com.br/blog/troca-de-tela-celular-salvador-original'
];

async function measure() {
  for (const site of urls) {
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${site}&strategy=mobile`;
    console.log('Fetching', site);
    try {
      const data = await fetchJson(url);
      if (data.lighthouseResult) {
        const score = data.lighthouseResult.categories.performance.score * 100;
        const fcp = data.lighthouseResult.audits['first-contentful-paint'].displayValue;
        const lcp = data.lighthouseResult.audits['largest-contentful-paint'].displayValue;
        console.log(`URL: ${site}`);
        console.log(`Score: ${score}, FCP: ${fcp}, LCP: ${lcp}`);
      } else {
        console.log(`Failed for ${site}:`, data.error ? data.error.message : 'Unknown error');
      }
    } catch (e) {
      console.log('Error for', site, e.message);
    }
    // sleep
    await new Promise(r => setTimeout(r, 5000));
  }
}

measure();
