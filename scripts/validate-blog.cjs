const https = require('https');

const DOMAIN = 'https://site.reparoavancado.com.br';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- Checking Blog Index ---');
  let totalLinks = new Set();
  let currentPage = 1;
  let totalPages = 1;

  while (currentPage <= totalPages) {
    const url = currentPage === 1 ? `${DOMAIN}/blog` : `${DOMAIN}/blog/pagina/${currentPage}`;
    const res = await fetchUrl(url);
    if (res.status !== 200) {
      console.log(`Failed to fetch ${url}: ${res.status}`);
      break;
    }
    
    // Extract total pages from footer if it's the first page
    if (currentPage === 1) {
      const match = res.data.match(/Página.*?de (\d+)/);
      if (match) {
        totalPages = parseInt(match[1], 10);
        console.log(`Total paginations detected: ${totalPages}`);
      }
    }

    // Extract all blog post links
    const regex = /href="\/blog\/([^"]+)"/g;
    let match;
    while ((match = regex.exec(res.data)) !== null) {
      const slug = match[1];
      if (!slug.startsWith('pagina/')) {
        totalLinks.add(slug);
      }
    }
    currentPage++;
  }

  console.log(`\nPages checked: ${totalPages}`);
  console.log(`Total unique blog links found: ${totalLinks.size}`);

  // Check if any of the found links is in the consolidated/removed list
  const consolidated = [
    'celular-nao-carrega-causas',
    'celular-nao-carrega-causas-solucoes',
    'celular-nao-carrega-salvador',
    'motorola-nao-carrega-avaliacao-salvador',
    'higienizacao-conector-cabo-carregar-salvador',
    'celular-caiu-na-agua-o-que-fazer',
    'celular-caiu-na-agua-desoxidacao-salvador',
    'celular-molhou-chuva-praia-salvador-socorro',
    'celular-caiu-no-mar-vale-a-pena-consertar',
    'troca-de-bateria-celular-salvador',
    'celular-descarregando-rapido',
    'celular-esquentando-descarregando-rapido-bateria',
    'troca-vidro-ou-tela-completa-celular-diferenca',
    'troca-vidro-vs-tela-completa-economia-salvador',
    'troca-de-vidro-apple-watch-salvador',
    'bateria-apple-watch-inchada-tela-descolando'
  ];

  let badLinks = [];
  for (const link of totalLinks) {
    if (consolidated.includes(link)) {
      badLinks.push(link);
    }
  }

  if (badLinks.length > 0) {
    console.log(`WARNING: Found ${badLinks.length} consolidated links still visible!`);
    console.log(badLinks);
  } else {
    console.log('SUCCESS: No consolidated/removed links found on the blog index!');
  }
}

run().catch(console.error);
