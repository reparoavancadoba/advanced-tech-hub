const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

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
    const filePath = path.join(distDir, l, 'index.html');
    if (!fs.existsSync(filePath)) {
        console.log("Missing file:", filePath);
        localTexts[l] = [];
        return;
    }
    
    let html = fs.readFileSync(filePath, 'utf8');
    // Remove scripts and styles
    html = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    html = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    // Get everything inside body
    let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : html;
    
    // Remove all HTML tags
    let text = body.replace(/<[^>]+>/g, ' ');
    // Normalize spaces
    text = text.replace(/\s+/g, ' ').trim().toLowerCase();
    
    localTexts[l] = text.split(' ').filter(w => w.length > 2);
});

for (let i = 0; i < locals.length; i++) {
    for (let j = i + 1; j < locals.length; j++) {
        let w1 = localTexts[locals[i]];
        let w2 = new Set(localTexts[locals[j]]);
        
        if (w1.length === 0 || w2.size === 0) continue;
        
        let common = w1.filter(w => w2.has(w));
        let sim1 = common.length / w1.length;
        let sim2 = common.length / w2.size;
        let sim = Math.round(Math.max(sim1, sim2) * 100);
        
        if (sim > maxSim) {
            maxSim = sim;
            maxPair = [locals[i], locals[j]];
        }
    }
}

console.log(`✅ Max Similarity: ${maxSim}% between ${maxPair[0]} and ${maxPair[1]}`);

let linksCount = {};
locals.forEach(l => {
    const filePath = path.join(distDir, l, 'index.html');
    if (fs.existsSync(filePath)) {
        let html = fs.readFileSync(filePath, 'utf8');
        let matches = html.match(/href="\/troca-de-tela"/g);
        linksCount[l] = matches ? matches.length : 0;
    }
});

console.log("Internal Links counts (href=/troca-de-tela):");
console.log(linksCount);
