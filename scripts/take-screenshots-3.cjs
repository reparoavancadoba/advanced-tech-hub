const puppeteer = require('puppeteer');
const path = require('path');

const outDir = 'C:\\Users\\Paulo Lopes\\.gemini\\antigravity\\brain\\060fa536-930c-4eaf-a2a9-03962d77c4ba';

const urls = [
    { name: 'home', url: 'http://localhost:4174/' },
    { name: 'boca-do-rio', url: 'http://localhost:4174/assistencia-tecnica-boca-do-rio' },
    { name: 'artigo-5A', url: 'http://localhost:4174/blog/diferenca-tela-original-primeira-linha' }
];

const viewports = [
    { name: '390px', width: 390, height: 2000 },
    { name: '1440px', width: 1440, height: 2000 }
];

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const u of urls) {
        for (const v of viewports) {
            await page.setViewport({ width: v.width, height: v.height });
            await page.goto(u.url, { waitUntil: 'domcontentloaded' });
            
            // Wait a bit for layout
            await new Promise(r => setTimeout(r, 2000));
            
            if (u.name === 'artigo-5A') {
                 await page.evaluate(() => window.scrollBy(0, 800));
            } else if (u.name === 'boca-do-rio') {
                 await page.evaluate(() => window.scrollBy(0, 1500));
            }
            const filePath = path.join(outDir, `print_${u.name}_${v.name}.png`);
            await page.screenshot({ path: filePath, fullPage: false });
            console.log(`Saved ${filePath}`);
        }
    }
    await browser.close();
})();
