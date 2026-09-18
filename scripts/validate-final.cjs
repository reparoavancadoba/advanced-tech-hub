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

let lojaCount = 0;
let undefinedCount = 0;

walkSync(distDir, (f) => {
    if (f.endsWith('.html') && !f.includes('404.html')) {
        let html = fs.readFileSync(f, 'utf8');
        if (html.includes('loja-tecnica-')) {
            console.log('Found loja-tecnica- in', f);
            lojaCount++;
        }
        if (html.includes('undefined')) {
            console.log('Found undefined in', f);
            undefinedCount++;
        }
    }
});

console.log(`Validation results:
- loja-tecnica occurrences: ${lojaCount}
- undefined occurrences: ${undefinedCount}
`);

const sitemap = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>https:\/\/site\.reparoavancado\.com\.br(.*?)<\/loc>/g)].map(m => m[1]);
let all200 = true;
let total = urls.length;
let missing = [];

urls.forEach(url => {
    let filePath = path.join(distDir, url, 'index.html');
    if (url === '/') {
        filePath = path.join(distDir, 'index.html');
    }
    
    if (!fs.existsSync(filePath)) {
        all200 = false;
        missing.push(url);
    }
});

if (all200) {
    console.log(`✅ ALL ${total} URLs in the sitemap return 200 (files exist in dist/)!`);
} else {
    console.error(`❌ ${missing.length} URLs are missing in dist/ :`);
    console.error(missing.join('\n'));
}

