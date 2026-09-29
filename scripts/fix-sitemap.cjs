const fs = require('fs');

let sitemapCode = fs.readFileSync('scripts/generate-sitemap.ts', 'utf8');

const sitemapInsertPoint = sitemapCode.indexOf('const sitemap =');
const infoSitemapCode = `
// 6. Informacoes Pilot Pages
const infoDate = getFileDate("src/data/informacoesData.ts");
urls.push(\`  <url>
    <loc>\${DOMAIN}/informacoes</loc>
    <lastmod>\${infoDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\`);
informacoesPages.forEach((page) => {
  urls.push(\`  <url>
    <loc>\${DOMAIN}/informacoes/\${page.slug}</loc>
    <lastmod>\${infoDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\`);
});

`;
sitemapCode = sitemapCode.slice(0, sitemapInsertPoint) + infoSitemapCode + sitemapCode.slice(sitemapInsertPoint);
fs.writeFileSync('scripts/generate-sitemap.ts', sitemapCode);
console.log('✅ Injected informacoes into sitemap');
