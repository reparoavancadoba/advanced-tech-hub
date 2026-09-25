const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\Paulo Lopes\\.gemini\\antigravity\\brain\\060fa536-930c-4eaf-a2a9-03962d77c4ba';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const viewports = [
    { width: 375, height: 667, name: '375px' },
    { width: 390, height: 844, name: '390px' },
    { width: 412, height: 915, name: '412px' },
    { width: 1440, height: 900, name: '1440px' }
  ];

  const urls = [
    { path: '/', name: 'home' },
    { path: '/troca-de-tela', name: 'troca-de-tela' }
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    for (const u of urls) {
      await page.goto(`http://localhost:5174${u.path}`);
      await page.waitForTimeout(1000); // wait for render
      const screenshotPath = path.join(targetDir, `screenshot_${u.name}_${vp.name}.png`);
      await page.screenshot({ path: screenshotPath });
      console.log(`Saved ${screenshotPath}`);
    }
  }

  await browser.close();
}

takeScreenshots().catch(console.error);
