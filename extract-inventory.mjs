import fs from 'fs';
import path from 'path';

function extract() {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
        console.log("Sitemap not found.");
        return;
    }
    
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    const matches = xml.match(/<loc>(.*?)<\/loc>/g);
    
    if (matches) {
        const urls = matches.map(m => m.replace(/<\/?loc>/g, ''));
        console.log(`Encontradas ${urls.length} URLs no sitemap.`);
        fs.writeFileSync('inventory_urls.json', JSON.stringify(urls, null, 2));
        console.log("Salvo em inventory_urls.json");
    }
}

extract();
