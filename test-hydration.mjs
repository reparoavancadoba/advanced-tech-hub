import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const urls = [
    "https://site.reparoavancado.com.br/assistencia-tecnica-boca-do-rio-e-orla",
    "https://site.reparoavancado.com.br/assistencia-tecnica-miolo-e-centro-financeiro",
    "https://site.reparoavancado.com.br/assistencia-tecnica-centro-e-sul",
    "https://site.reparoavancado.com.br/assistencia-tecnica-orla-norte-e-aeroporto",
    "https://site.reparoavancado.com.br/assistencia-tecnica-cajazeiras-e-regiao",
    "https://site.reparoavancado.com.br/assistencia-tecnica-regiao-metropolitana"
  ];

  console.log("Iniciando Teste Visual com Navegador Real (Chromium)...");
  
  for (const url of urls) {
    console.log(`\nNavegando para: ${url}`);
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    // Aguarda a hidratação do React por 3 segundos
    console.log("Aguardando 3 segundos para a hidratação completa do React...");
    await page.waitForTimeout(3000);
    
    // Verifica o título H1
    const h1 = await page.$eval('h1', el => el.innerText).catch(() => "NENHUM H1 ENCONTRADO");
    console.log(`H1 estabilizado na tela: "${h1}"`);
    
    // Procura por traços de "não encontrado" no DOM
    const bodyText = await page.$eval('body', el => el.innerText.toLowerCase());
    const hasNotFound = bodyText.includes("não encontrado") || bodyText.includes("not found");
    
    if (hasNotFound) {
      console.log("❌ FALHA! A tela de NotFound assumiu a página.");
    } else {
      console.log("✅ SUCESSO! Conteúdo real mantido. Nenhuma tela de NotFound detectada.");
    }
  }

  await browser.close();
})();
