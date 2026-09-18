const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

function walkSync(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
        let fullPath = dir + '/' + file;
        if (fs.statSync(fullPath).isDirectory()) {
            walkSync(fullPath, callback);
        } else {
            callback(fullPath);
        }
    });
}

const sitemap = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>https:\/\/site\.reparoavancado\.com\.br(.*?)<\/loc>/g)].map(m => m[1]);
let missing = [];

urls.forEach(url => {
    let filePath = path.join(distDir, url, 'index.html');
    if (url === '/') filePath = path.join(distDir, 'index.html');
    if (!fs.existsSync(filePath)) missing.push(url);
});

console.log(`✅ ALL ${urls.length} URLs in the sitemap return 200: ${missing.length === 0}`);
if (missing.length) console.log("Missing:", missing);

// Check programmatic removal
console.log(`Programmatic URLs in sitemap: ${urls.filter(u => u.includes('/conserto/')).length}`);

// Check similarities between local pages
const locals = [
    '/assistencia-tecnica-boca-do-rio', '/assistencia-tecnica-pituba', '/assistencia-tecnica-imbui',
    '/assistencia-tecnica-brotas', '/assistencia-tecnica-caminho-das-arvores', '/assistencia-tecnica-salvador',
    '/assistencia-tecnica-boca-do-rio-e-orla', '/assistencia-tecnica-miolo-e-centro-financeiro',
    '/assistencia-tecnica-centro-e-sul', '/assistencia-tecnica-orla-norte-e-aeroporto',
    '/assistencia-tecnica-cajazeiras-e-regiao', '/assistencia-tecnica-regiao-metropolitana'
];

let maxSim = 0;
let maxPair = [];

const localTexts = {};
locals.forEach(l => {
    let html = fs.readFileSync(path.join(distDir, l, 'index.html'), 'utf8');
    let text = html.match(/<div data-seo-prerender="true">(.*?)<\/div>/)[1].replace(/<[^>]+>/g, ' ');
    localTexts[l] = text.split(' ').filter(w => w.trim().length > 0);
});

for (let i = 0; i < locals.length; i++) {
    for (let j = i + 1; j < locals.length; j++) {
        let w1 = localTexts[locals[i]];
        let w2 = new Set(localTexts[locals[j]]);
        let common = w1.filter(w => w2.has(w));
        let sim = Math.round((common.length / w1.length) * 100);
        if (sim > maxSim) {
            maxSim = sim;
            maxPair = [locals[i], locals[j]];
        }
    }
}
console.log(`Max Similarity: ${maxSim}% between ${maxPair[0]} and ${maxPair[1]}`);

let lojaCount = 0;
let undefCount = 0;
let avalGrata = 0;

walkSync(distDir, (f) => {
    if (f.endsWith('.html') && !f.includes('404.html')) {
        let html = fs.readFileSync(f, 'utf8');
        if (html.includes('loja-tecnica-')) lojaCount++;
        if (html.includes('undefined')) undefCount++;
        if (html.toLowerCase().includes('avaliação gratuita')) avalGrata++;
        if (html.toLowerCase().includes('avaliação grátis')) avalGrata++;
    }
});

console.log(`loja-tecnica occurrences: ${lojaCount}`);
console.log(`undefined occurrences: ${undefCount}`);
console.log(`avaliação gratuita occurrences: ${avalGrata}`);

