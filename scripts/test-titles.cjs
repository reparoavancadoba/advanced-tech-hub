const { chromium } = require('playwright');
const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  return handler(request, response, { public: 'dist', cleanUrls: true });
});

const urls = [
  'troca-de-tela', 'troca-de-bateria', 'reparo-em-placa', 'conserto-de-celular', 'celular-nao-liga', 'celular-nao-carrega', 'celular-caiu-na-agua', 'conserto-de-tablet', 'conserto-de-notebook', 'conserto-de-iphone',
  'assistencia-tecnica-salvador', 'assistencia-tecnica-boca-do-rio', 'assistencia-tecnica-pituba', 'assistencia-tecnica-imbui', 'assistencia-tecnica-brotas', 'assistencia-tecnica-caminho-das-arvores',
  'assistencia-tecnica-boca-do-rio-e-orla', 'assistencia-tecnica-miolo-e-centro-financeiro'
];

server.listen(4173, async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  console.log('--- TITLES ---');
  for (const u of urls) {
    await page.goto(`http://localhost:4173/${u}`);
    // Wait for hydration (wait for network idle or a short delay)
    await page.waitForTimeout(500);
    const title = await page.title();
    console.log(`/${u}: ${title}`);
  }
  
  await browser.close();
  server.close();
});
