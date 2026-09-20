// Post-build validation for Briefing 3
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

function walkHtml(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    fs.readdirSync(dir).forEach(file => {
        const fp = path.join(dir, file);
        if (fs.statSync(fp).isDirectory()) {
            results = results.concat(walkHtml(fp));
        } else if (fp.endsWith('.html') && !fp.includes('404')) {
            results.push(fp);
        }
    });
    return results;
}

const allHtmlFiles = walkHtml(distDir);
const blogDir = path.join(distDir, 'blog');

// Get article dirs (exclude pagina/)
let articleDirs = [];
if (fs.existsSync(blogDir)) {
    articleDirs = fs.readdirSync(blogDir).filter(d => {
        const p = path.join(blogDir, d);
        return fs.statSync(p).isDirectory() && d !== 'pagina' && fs.existsSync(path.join(p, 'index.html'));
    });
}

const articlePaths = articleDirs.map(d => `/blog/${d}`);
const servicePages = ['/troca-de-tela', '/troca-de-bateria', '/reparo-em-placa', '/conserto-de-celular', '/celular-nao-liga', '/celular-nao-carrega', '/celular-caiu-na-agua'];

console.log('=== BRIEFING 3 VALIDATION ===\n');

// 1. /blog index: count unique article links across all pagination pages
const blogIndexPath = path.join(distDir, 'blog', 'index.html');
let allBlogLinks = new Set();
// Check main blog page
if (fs.existsSync(blogIndexPath)) {
    const html = fs.readFileSync(blogIndexPath, 'utf8');
    const links = html.match(/href="\/blog\/[^"]+"/g) || [];
    links.forEach(l => {
        const m = l.match(/href="(\/blog\/[^"]+)"/);
        if (m && !m[1].startsWith('/blog/pagina/')) allBlogLinks.add(m[1]);
    });
}
// Check pagination pages
const paginaDir = path.join(blogDir, 'pagina');
if (fs.existsSync(paginaDir)) {
    fs.readdirSync(paginaDir).forEach(d => {
        const p = path.join(paginaDir, d, 'index.html');
        if (fs.existsSync(p)) {
            const html = fs.readFileSync(p, 'utf8');
            const links = html.match(/href="\/blog\/[^"]+"/g) || [];
            links.forEach(l => {
                const m = l.match(/href="(\/blog\/[^"]+)"/);
                if (m && !m[1].startsWith('/blog/pagina/')) allBlogLinks.add(m[1]);
            });
        }
    });
}
console.log(`[1] /blog + pagination unique article links: ${allBlogLinks.size}/${articleDirs.length}`);

// 2. Orphan articles
const linkedArticles = new Set();
allHtmlFiles.forEach(fp => {
    const html = fs.readFileSync(fp, 'utf8');
    const relPath = fp.replace(distDir, '').replace(/\\/g, '/').replace('/index.html', '');
    articlePaths.forEach(ap => {
        if (relPath !== ap && html.includes(`href="${ap}"`)) {
            linkedArticles.add(ap);
        }
    });
});
const orphans = articlePaths.filter(ap => !linkedArticles.has(ap));
console.log(`[2] Orphan articles: ${orphans.length}`);
if (orphans.length > 0 && orphans.length <= 10) console.log('   Orphans:', orphans);

// 3. Articles with service page link
let withServiceLink = 0;
let withoutServiceLink = [];
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const has = servicePages.some(sp => html.includes(`href="${sp}"`));
    if (has) withServiceLink++;
    else withoutServiceLink.push(d);
});
console.log(`[3] Articles with service link: ${withServiceLink}/${articleDirs.length}`);

// 4. Articles with "Leia também" (2-4 links)
let withRelated = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    if (html.includes('Leia Também') || html.includes('Leia também')) {
        // Count article links in that section
        const idx = html.indexOf('Leia Também');
        if (idx > -1) {
            const chunk = html.substring(idx, idx + 2000);
            const links = (chunk.match(/href="\/blog\/[^"]+"/g) || []).length;
            if (links >= 2) withRelated++;
        }
    }
});
console.log(`[4] Articles with "Leia também" (2+ links): ${withRelated}/${articleDirs.length}`);

// 5. CTA blocks (WhatsApp)
let withMidCTA = 0;
let withEndCTA = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const asides = html.match(/<aside[^>]*>[\s\S]*?<\/aside>/g) || [];
    if (asides.length >= 2) { withMidCTA++; withEndCTA++; }
    else if (asides.length === 1) { withEndCTA++; }
});
console.log(`[5] Articles with 2 CTA blocks: ${withMidCTA}/${articleDirs.length}`);

// 6. Dates visible + schema
let withDatesVisible = 0;
let withDatesSchema = 0;
let withBreadcrumb = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const bodyHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    if (bodyHtml.includes('Publicado em')) withDatesVisible++;
    if (html.includes('BreadcrumbList')) withBreadcrumb++;
    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (schemaMatch) {
        try {
            const schema = JSON.parse(schemaMatch[1]);
            const graph = schema['@graph'] || [schema];
            const bp = graph.find(g => g['@type'] === 'BlogPosting');
            if (bp && bp.datePublished && bp.dateModified) withDatesSchema++;
        } catch(e) {}
    }
});
console.log(`[6] Articles with visible dates: ${withDatesVisible}/${articleDirs.length}`);
console.log(`[7] Articles with dates in schema: ${withDatesSchema}/${articleDirs.length}`);
console.log(`[8] Articles with BreadcrumbList: ${withBreadcrumb}/${articleDirs.length}`);

// 7. Images without alt
let imgsNoAlt = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const imgs = html.match(/<img[^>]*>/g) || [];
    imgs.forEach(img => { if (!img.match(/alt="[^"]+"/)) imgsNoAlt++; });
});
console.log(`[9] Images without alt: ${imgsNoAlt}`);

// 8. Sitemap URL count
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const sitemapUrls = (sitemap.match(/<loc>/g) || []).length;
console.log(`[10] Sitemap URL count: ${sitemapUrls}`);

// Sitemap URLs responding 200
const sitemapLocs = [...sitemap.matchAll(/<loc>https:\/\/site\.reparoavancado\.com\.br(.*?)<\/loc>/g)].map(m => m[1]);
let missing = [];
sitemapLocs.forEach(url => {
    let filePath = path.join(distDir, url, 'index.html');
    if (url === '/') filePath = path.join(distDir, 'index.html');
    if (!fs.existsSync(filePath)) missing.push(url);
});
console.log(`[11] Sitemap URLs responding 200: ${sitemapLocs.length - missing.length}/${sitemapLocs.length}`);
if (missing.length > 0) console.log('   Missing:', missing);

// 9. Check for undefined/null/NaN
let undefinedCount = 0;
allHtmlFiles.forEach(fp => {
    const html = fs.readFileSync(fp, 'utf8');
    const bodyHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    if (bodyHtml.match(/\bundefined\b/) || bodyHtml.match(/\bnull\b/) || bodyHtml.match(/\bNaN\b/)) {
        undefinedCount++;
    }
});
console.log(`[12] Pages with undefined/null/NaN: ${undefinedCount}`);

// 10. H1 of /reparo-em-placa
const reparoPath = path.join(distDir, 'reparo-em-placa', 'index.html');
if (fs.existsSync(reparoPath)) {
    const html = fs.readFileSync(reparoPath, 'utf8');
    const h1Match = html.match(/<h1>(.*?)<\/h1>/);
    console.log(`[13] /reparo-em-placa H1: "${h1Match ? h1Match[1] : 'NOT FOUND'}"`);
}

// 11. caminho-das-arvores description length
const caPath = path.join(distDir, 'assistencia-tecnica-caminho-das-arvores', 'index.html');
if (fs.existsSync(caPath)) {
    const html = fs.readFileSync(caPath, 'utf8');
    const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
    if (descMatch) console.log(`[14] caminho-das-arvores desc: ${descMatch[1].length} chars`);
}

// 12. Service link distribution
let serviceLinkCounts = {};
servicePages.forEach(sp => { serviceLinkCounts[sp] = 0; });
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    servicePages.forEach(sp => {
        if (html.includes(`href="${sp}"`)) serviceLinkCounts[sp]++;
    });
});
console.log('\n[15] Service link distribution:');
Object.entries(serviceLinkCounts).forEach(([sp, count]) => {
    console.log(`   ${sp}: ${count} articles`);
});

// 13. Check for avaliação gratuita
let avaliacaoPages = [];
allHtmlFiles.forEach(fp => {
    const html = fs.readFileSync(fp, 'utf8');
    const bodyHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    if (bodyHtml.toLowerCase().includes('avaliação gratuita') || bodyHtml.toLowerCase().includes('avaliação grátis')) {
        avaliacaoPages.push(fp.replace(distDir, '').replace(/\\/g, '/'));
    }
});
console.log(`\n[16] Pages with "avaliação gratuita/grátis": ${avaliacaoPages.length}`);
if (avaliacaoPages.length > 0 && avaliacaoPages.length <= 5) console.log('   Pages:', avaliacaoPages);
