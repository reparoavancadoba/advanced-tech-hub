// Section 1: Full inventory
const fs = require('fs');
const path = require('path');

// 1a. Count articles in data files
// We need to actually import the data. Let's count slugs from the TS files directly.
const dataFiles = [
    'src/data/editorialPosts.ts',
    'src/data/editorialPostsBatch2.ts',
    'src/data/editorialPostsBatch3.ts',
    'src/data/editorialPostsBatch4.ts',
    'src/data/editorialPostsBatch5.ts',
    'src/data/editorialPostsBatch6.ts',
    'src/data/editorialPostsBatch7.ts',
    'src/data/editorialPostsBatch8.ts',
    'src/data/editorialPostsBatch9.ts',
    'src/data/editorialPostsBatch10.ts',
];

let editorialSlugs = [];
dataFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    const content = fs.readFileSync(f, 'utf8');
    const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
    matches.forEach(m => editorialSlugs.push({ slug: m[1], file: path.basename(f) }));
});

// blogData.ts also generates "problemPosts" dynamically
const blogDataContent = fs.readFileSync('src/data/blogData.ts', 'utf8');
const problemSlugs = [...blogDataContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
// But blogData.ts also has service definitions with slugs, filter to just the problemPosts
// The problemPosts are generated from the problemTopics array
const problemTopicMatches = [...blogDataContent.matchAll(/slug:\s*"([^"]+)",\s*\n\s*title:/g)];

console.log('=== EDITORIAL SLUGS BY FILE ===');
let fileCounts = {};
editorialSlugs.forEach(s => {
    fileCounts[s.file] = (fileCounts[s.file] || 0) + 1;
});
Object.entries(fileCounts).forEach(([f, c]) => console.log(`  ${f}: ${c} articles`));
console.log(`  Total editorial: ${editorialSlugs.length}`);

// Count problem posts - these are generated dynamically in blogData.ts
// Let's look at the problemTopics array
const problemTopicsMatch = blogDataContent.match(/const problemTopics[\s\S]*?\];/);
let problemCount = 0;
if (problemTopicsMatch) {
    const topics = [...problemTopicsMatch[0].matchAll(/slug:\s*["']([^"']+)["']/g)];
    problemCount = topics.length;
    console.log(`  problemPosts (generated): ${problemCount} articles`);
    topics.forEach(t => editorialSlugs.push({ slug: t[1], file: 'blogData.ts (problemPosts)' }));
}

const totalInData = editorialSlugs.length;
console.log(`\nTOTAL IN DATA FILES: ${totalInData}`);

// 1b. Count in dist/blog/
const distBlogDir = 'dist/blog';
let distSlugs = [];
if (fs.existsSync(distBlogDir)) {
    distSlugs = fs.readdirSync(distBlogDir).filter(d => {
        const p = path.join(distBlogDir, d);
        return fs.statSync(p).isDirectory() && d !== 'pagina' && fs.existsSync(path.join(p, 'index.html'));
    });
}
console.log(`\nTOTAL IN dist/blog/: ${distSlugs.length}`);

// 1c. Count in sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const sitemapBlogUrls = [...sitemap.matchAll(/<loc>https:\/\/site\.reparoavancado\.com\.br\/blog\/([^<]+)<\/loc>/g)]
    .map(m => m[1])
    .filter(s => !s.startsWith('pagina/'));
console.log(`TOTAL IN SITEMAP: ${sitemapBlogUrls.length}`);

// 1d. Compare
const dataSlugsSet = new Set(editorialSlugs.map(s => s.slug));
const distSlugsSet = new Set(distSlugs);
const sitemapSlugsSet = new Set(sitemapBlogUrls);

console.log('\n=== DIVERGENCES ===');

const inDataNotDist = [...dataSlugsSet].filter(s => !distSlugsSet.has(s));
const inDistNotData = [...distSlugsSet].filter(s => !dataSlugsSet.has(s));
const inDataNotSitemap = [...dataSlugsSet].filter(s => !sitemapSlugsSet.has(s));
const inSitemapNotData = [...sitemapSlugsSet].filter(s => !dataSlugsSet.has(s));

console.log(`In data but NOT in dist/: ${inDataNotDist.length}`);
if (inDataNotDist.length) console.log('  ', inDataNotDist);
console.log(`In dist/ but NOT in data: ${inDistNotData.length}`);
if (inDistNotData.length) console.log('  ', inDistNotData);
console.log(`In data but NOT in sitemap: ${inDataNotSitemap.length}`);
if (inDataNotSitemap.length) console.log('  ', inDataNotSitemap);
console.log(`In sitemap but NOT in data: ${inSitemapNotData.length}`);
if (inSitemapNotData.length) console.log('  ', inSitemapNotData);

// Also check for duplicate slugs
const allSlugsArr = editorialSlugs.map(s => s.slug);
const seen = {};
const duplicates = [];
allSlugsArr.forEach(s => {
    if (seen[s]) duplicates.push(s);
    seen[s] = true;
});
if (duplicates.length) console.log(`\nDUPLICATE SLUGS: ${duplicates}`);

// Section 2: Check vercel.json for redirect rules that could catch /blog/ paths
console.log('\n=== VERCEL.JSON REDIRECT ANALYSIS ===');
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const blogCatchingRules = [];
(vercel.redirects || []).forEach((r, i) => {
    // Check if any rule could match /blog/something
    const source = r.source;
    // Rules starting with /blog/ would be problematic
    if (source.startsWith('/blog/')) {
        blogCatchingRules.push(r);
    }
    // Also check generic rules that might catch blog paths
    // e.g., /celular-nao-carrega could be matched if slug contains it
});
console.log(`Redirect rules starting with /blog/: ${blogCatchingRules.length}`);
blogCatchingRules.forEach(r => console.log(`  ${r.source} -> ${r.destination}`));

// Check rewrites too
(vercel.rewrites || []).forEach((r, i) => {
    if (r.source && r.source.includes('blog')) {
        console.log(`Rewrite touching blog: ${r.source} -> ${r.destination}`);
    }
});

// The actual problem: rules like /celular-nao-carrega -> service page
// These are exact match or prefix match that could be confused
// Let's find the specific problem
const articleSlugsFlat = [...distSlugsSet];
const problematicArticles = [];
articleSlugsFlat.forEach(slug => {
    const fullPath = `/blog/${slug}`;
    (vercel.redirects || []).forEach(r => {
        // Simple check: does the source pattern match this article path?
        // Vercel uses path-to-regexp. Let's check for literal matches or simple patterns
        const src = r.source;
        if (fullPath === src || fullPath.startsWith(src)) {
            problematicArticles.push({ slug, rule: r.source, dest: r.destination });
        }
    });
});
if (problematicArticles.length) {
    console.log(`\nArticles caught by redirect rules:`);
    problematicArticles.forEach(p => console.log(`  /blog/${p.slug} matched by ${p.rule} -> ${p.dest}`));
}

// Section 6: Check datePublished fallback
console.log('\n=== DATE ANALYSIS ===');
let articlesWithRealDate = 0;
let articlesWithFallback = 0;
let fallbackArticles = [];
editorialSlugs.forEach(s => {
    const file = s.file;
    const filePath = dataFiles.find(f => path.basename(f) === file) || (file.includes('blogData') ? 'src/data/blogData.ts' : null);
    // We can't easily check without importing. Let's check the dist HTML instead.
});

// Check dates in dist HTML
distSlugs.forEach(slug => {
    const html = fs.readFileSync(path.join(distBlogDir, slug, 'index.html'), 'utf8');
    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (schemaMatch) {
        try {
            const schema = JSON.parse(schemaMatch[1]);
            const graph = schema['@graph'] || [schema];
            const bp = graph.find(g => g['@type'] === 'BlogPosting');
            if (bp) {
                const dp = bp.datePublished;
                if (dp === '2024-01-01T08:00:00-03:00' || dp === '2024-01-01') {
                    articlesWithFallback++;
                    fallbackArticles.push(slug);
                } else {
                    articlesWithRealDate++;
                }
            }
        } catch(e) {}
    }
});
console.log(`Articles with real datePublished: ${articlesWithRealDate}`);
console.log(`Articles with fallback datePublished (2024-01-01): ${articlesWithFallback}`);
if (fallbackArticles.length <= 20) console.log('Fallback articles:', fallbackArticles);

// Section 4: Count "avaliação" in article bodies
console.log('\n=== AVALIAÇÃO SCAN IN ARTICLE DATA ===');
let avaliacaoOccurrences = 0;
let oPlacaOccurrences = 0;
let doPlacaOccurrences = 0;
const allFiles = ['src/data/blogData.ts', ...dataFiles];
allFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    const content = fs.readFileSync(f, 'utf8');
    // Count "avaliação" where context is diagnosis
    const matches = content.match(/avaliação/gi) || [];
    avaliacaoOccurrences += matches.length;
    const oPlaca = content.match(/\bo placa\b/gi) || [];
    oPlacaOccurrences += oPlaca.length;
    const doPlaca = content.match(/\bdo placa\b/gi) || [];
    doPlacaOccurrences += doPlaca.length;
});
console.log(`Total "avaliação" occurrences in data files: ${avaliacaoOccurrences}`);
console.log(`"o placa" occurrences: ${oPlacaOccurrences}`);
console.log(`"do placa" occurrences: ${doPlacaOccurrences}`);

// Section 5: Check motorola-nao-carrega mapping
console.log('\n=== ARTICLE SERVICE MAPPING CHECK ===');
const chargeRelatedSlugs = articleSlugsFlat.filter(s => 
    s.includes('carrega') || s.includes('conector') || s.includes('carga') || s.includes('usb')
);
chargeRelatedSlugs.forEach(slug => {
    const html = fs.readFileSync(path.join(distBlogDir, slug, 'index.html'), 'utf8');
    const serviceLink = html.match(/href="(\/troca-de-tela|\/troca-de-bateria|\/reparo-em-placa|\/conserto-de-celular|\/celular-nao-liga|\/celular-nao-carrega|\/celular-caiu-na-agua)"/);
    if (serviceLink) {
        console.log(`  /blog/${slug} -> ${serviceLink[1]}`);
    }
});
