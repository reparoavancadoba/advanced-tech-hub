const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('pageerror', err => {
    console.error('Page Error:', err.toString());
  });
  page.on('console', msg => {
    if(msg.type() === 'error') console.log('Console Error:', msg.text());
  });

  await page.goto('https://site.reparoavancado.com.br/blog/iphone-nao-liga-tela-preta-maca-travada-11-ao-14', { waitUntil: 'networkidle0' });
  
  const content = await page.content();
  console.log('Site length:', content.length);
  
  await browser.close();
})();
