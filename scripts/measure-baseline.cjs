// Section 2 baseline measurement - run AFTER build
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

// 1. /blog page: characters and links
const blogIndexPath = path.join(distDir, 'blog', 'index.html');
if (fs.existsSync(blogIndexPath)) {
    const blogHtml = fs.readFileSync(blogIndexPath, 'utf8');
    // Strip scripts/styles, then tags
    let textOnly = blogHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    textOnly = textOnly.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    textOnly = textOnly.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`/blog text chars: ${textOnly.length}`);
    
    const blogLinks = (blogHtml.match(/href="\/blog\/[^"]+"/g) || []);
    const uniqueBlogLinks = [...new Set(blogLinks.map(l => l.match(/href="(\/blog\/[^"]+)"/)[1]))];
    console.log(`/blog href="/blog/..." links: ${blogLinks.length} total, ${uniqueBlogLinks.length} unique`);
} else {
    console.log('/blog index.html not found');
}

// 2. Count total articles
const blogDir = path.join(distDir, 'blog');
let articleDirs = [];
if (fs.existsSync(blogDir)) {
    articleDirs = fs.readdirSync(blogDir).filter(d => {
        const p = path.join(blogDir, d);
        return fs.statSync(p).isDirectory() && d !== 'pagina' && fs.existsSync(path.join(p, 'index.html'));
    });
}
console.log(`\nTotal article dirs in dist/blog/: ${articleDirs.length}`);

// 3. Orphans: articles NOT linked from any non-self page
const articlePaths = articleDirs.map(d => `/blog/${d}`);
const linkedArticles = new Set();

allHtmlFiles.forEach(fp => {
    const html = fs.readFileSync(fp, 'utf8');
    // Find which article path this file is for
    const relPath = fp.replace(distDir, '').replace(/\\/g, '/').replace('/index.html', '');
    
    articlePaths.forEach(ap => {
        if (relPath !== ap && html.includes(`href="${ap}"`)) {
            linkedArticles.add(ap);
        }
    });
});
const orphans = articlePaths.filter(ap => !linkedArticles.has(ap));
console.log(`Articles with at least 1 internal link: ${linkedArticles.size}`);
console.log(`Orphan articles (no link from any other page): ${orphans.length}`);

// 4. Articles with link to a service page
const servicePages = ['/troca-de-tela', '/troca-de-bateria', '/reparo-em-placa', '/conserto-de-celular', '/celular-nao-liga', '/celular-nao-carrega', '/celular-caiu-na-agua'];
let articlesWithServiceLink = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const hasServiceLink = servicePages.some(sp => html.includes(`href="${sp}"`));
    if (hasServiceLink) articlesWithServiceLink++;
});
console.log(`Articles with link to service page: ${articlesWithServiceLink}/${articleDirs.length}`);

// 5. Articles with link to another article
let articlesWithArticleLink = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const selfPath = `/blog/${d}`;
    const hasOtherArticleLink = articlePaths.some(ap => ap !== selfPath && html.includes(`href="${ap}"`));
    if (hasOtherArticleLink) articlesWithArticleLink++;
});
console.log(`Articles with link to another article: ${articlesWithArticleLink}/${articleDirs.length}`);

// 6. WhatsApp links
let articlesWithWhatsApp = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    if (html.includes('wa.me') || html.includes('api.whatsapp')) articlesWithWhatsApp++;
});
console.log(`Articles with WhatsApp link: ${articlesWithWhatsApp}/${articleDirs.length}`);

// 7. datePublished/dateModified visible in HTML and schema
let articlesWithDatesVisible = 0;
let articlesWithDatesSchema = 0;
let articlesWithAuthorSchema = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    // Check for visible date in text (outside scripts)
    const bodyHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    if (bodyHtml.match(/\d{4}-\d{2}-\d{2}/) || bodyHtml.match(/\d{2}\/\d{2}\/\d{4}/)) {
        articlesWithDatesVisible++;
    }
    // Check schema
    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (schemaMatch) {
        try {
            const schema = JSON.parse(schemaMatch[1]);
            if (schema.datePublished && schema.dateModified) articlesWithDatesSchema++;
            if (schema.author && schema.author.name && schema.author.name !== 'Especialista Técnico Reparo Avançado') {
                articlesWithAuthorSchema++;
            }
        } catch(e) {}
    }
});
console.log(`\nArticles with dates visible in HTML body: ${articlesWithDatesVisible}/${articleDirs.length}`);
console.log(`Articles with datePublished+dateModified in schema: ${articlesWithDatesSchema}/${articleDirs.length}`);
console.log(`Articles with real author in schema: ${articlesWithAuthorSchema}/${articleDirs.length}`);

// 8. Images without alt
let imagesNoAlt = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    const imgs = html.match(/<img[^>]*>/g) || [];
    imgs.forEach(img => {
        if (!img.match(/alt="[^"]+"/)) imagesNoAlt++;
    });
});
console.log(`\nImages without descriptive alt: ${imagesNoAlt}`);

// 9. Check H1 of /reparo-em-placa
const reparoPlacaPath = path.join(distDir, 'reparo-em-placa', 'index.html');
if (fs.existsSync(reparoPlacaPath)) {
    const html = fs.readFileSync(reparoPlacaPath, 'utf8');
    const h1Match = html.match(/<h1>(.*?)<\/h1>/);
    console.log(`\n/reparo-em-placa H1: "${h1Match ? h1Match[1] : 'NOT FOUND'}"`);
}

// 10. Check /assistencia-tecnica-caminho-das-arvores description length
const caPath = path.join(distDir, 'assistencia-tecnica-caminho-das-arvores', 'index.html');
if (fs.existsSync(caPath)) {
    const html = fs.readFileSync(caPath, 'utf8');
    const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
    if (descMatch) {
        console.log(`caminho-das-arvores description length: ${descMatch[1].length} chars`);
        console.log(`caminho-das-arvores description: "${descMatch[1]}"`);
    }
}

// 11. Check for residual avaliação
let pagesWithAvaliacao = 0;
allHtmlFiles.forEach(fp => {
    const html = fs.readFileSync(fp, 'utf8');
    const bodyHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    if (bodyHtml.toLowerCase().includes('avaliação gratuita') || bodyHtml.toLowerCase().includes('avaliação grátis')) {
        const rel = fp.replace(distDir, '').replace(/\\/g, '/');
        pagesWithAvaliacao++;
    }
});
console.log(`Pages with "avaliação gratuita/grátis" in body: ${pagesWithAvaliacao}`);

// 12. BreadcrumbList in articles
let articlesWithBreadcrumb = 0;
articleDirs.forEach(d => {
    const html = fs.readFileSync(path.join(blogDir, d, 'index.html'), 'utf8');
    if (html.includes('BreadcrumbList')) articlesWithBreadcrumb++;
});
console.log(`Articles with BreadcrumbList: ${articlesWithBreadcrumb}/${articleDirs.length}`);
