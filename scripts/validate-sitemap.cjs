const fs = require('fs');
const path = require('path');

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>https:\/\/site\.reparoavancado\.com\.br(.*?)<\/loc>/g)].map(m => m[1]);

let all200 = true;
let total = urls.length;
let missing = [];

urls.forEach(url => {
    let filePath = path.join(__dirname, '..', 'dist', url, 'index.html');
    if (url === '/') {
        filePath = path.join(__dirname, '..', 'dist', 'index.html');
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

// Check meta descriptions length
const distFiles = [];
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

walkSync(path.join(__dirname, '..', 'dist'), (f) => {
    if (f.endsWith('.html') && !f.includes('404.html')) distFiles.push(f);
});

let okCount = 0;
let totalCount = distFiles.length;
let outOfRange = [];

distFiles.forEach(f => {
    let html = fs.readFileSync(f, 'utf8');
    let m = html.match(/<meta name="description" content="(.*?)">/);
    if (m) {
        let desc = m[1];
        if (desc.length >= 120 && desc.length <= 160) {
            okCount++;
        } else {
            outOfRange.push({ file: f.replace(path.join(__dirname, '..', 'dist'), ''), len: desc.length });
        }
    }
});

console.log(`Descriptions: ${okCount}/${totalCount} in range (120-160)`);
if (outOfRange.length > 0) {
    console.log('Out of range samples:', outOfRange.slice(0, 10));
}

// Check duplication
const programmatics = distFiles.filter(f => f.includes('conserto'));
if (programmatics.length >= 2) {
    const text1 = fs.readFileSync(programmatics[0], 'utf8').match(/<main>(.*?)<\/main>/)[1].replace(/<[^>]+>/g, '');
    const text2 = fs.readFileSync(programmatics[1], 'utf8').match(/<main>(.*?)<\/main>/)[1].replace(/<[^>]+>/g, '');
    
    // Calculate simple similarity
    const w1 = text1.split(' ');
    const w2 = new Set(text2.split(' '));
    const common = w1.filter(w => w2.has(w));
    const sim = Math.round((common.length / w1.length) * 100);
    console.log(`Similarity between programmatic 1 and 2: ~${sim}%`);
}

