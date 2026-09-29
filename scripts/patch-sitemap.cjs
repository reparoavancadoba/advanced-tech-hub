const fs = require('fs');

const targetFile = 'scripts/generate-sitemap.ts';
let code = fs.readFileSync(targetFile, 'utf8');

if (!code.includes('informacoesData')) {
  code = code.replace(
    'import { allConsolidatedServices } from "../src/data/servicosConsolidadosData";',
    'import { allConsolidatedServices } from "../src/data/servicosConsolidadosData";\nimport { informacoesPages, informacoesIndex } from "../src/data/informacoesData";'
  );
  
  const injectLogic = `
// ═══════════════════════════════════════════
// INFORMACOES PAGES (PILOTO)
// ═══════════════════════════════════════════
urls.push({ loc: \`/informacoes\`, lastmod: new Date().toISOString().split("T")[0], changefreq: "weekly", priority: "0.8" });
informacoesPages.forEach(page => {
  urls.push({
    loc: \`/informacoes/\${page.slug}\`,
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.7"
  });
});
`;
  
  code = code.replace("const sitemapContent =", injectLogic + "\nconst sitemapContent =");
  fs.writeFileSync(targetFile, code);
  console.log('Sitemap patched.');
}
