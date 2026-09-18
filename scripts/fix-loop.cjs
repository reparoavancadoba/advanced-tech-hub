const fs = require('fs');

// 1. Fix vercel.json loop
let v = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
v.redirects.forEach(r => {
    if (r.source.includes('(itaigara|caminho-das-arvores)')) {
        r.source = r.source.replace('(itaigara|caminho-das-arvores)', '(itaigara)');
    }
});
fs.writeFileSync('vercel.json', JSON.stringify(v, null, 2));

// 2. Fix servicosConsolidadosData.ts (H1 and avaliacao)
let sData = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');
sData = sData.replace(/avaliação gratuit[ao]/gi, 'diagnóstico gratuito');
sData = sData.replace(/avaliação grátis/gi, 'diagnóstico grátis');
sData = sData.replace(/h1:\s*["']reparo de placa[^"']*["']/gi, 'h1: "Reparo de Placa de Celular"');
sData = sData.replace(/h1:\s*["']troca de tela[^"']*["']/gi, 'h1: "Troca de Tela de Celular"');
sData = sData.replace(/h1:\s*["']troca de bateria[^"']*["']/gi, 'h1: "Troca de Bateria de Celular"');
sData = sData.replace(/h1:\s*["']conserto de celular[^"']*["']/gi, 'h1: "Conserto de Celular"');
fs.writeFileSync('src/data/servicosConsolidadosData.ts', sData);

// Fix blogData.ts and editorial posts for avaliação
const files = [
    'src/data/blogData.ts',
    'src/data/editorialPosts.ts',
    'src/data/editorialPostsBatch2.ts',
    'src/data/editorialPostsBatch3.ts',
    'src/data/editorialPostsBatch4.ts',
    'src/data/editorialPostsBatch5.ts',
    'src/data/editorialPostsBatch6.ts',
    'src/data/editorialPostsBatch7.ts',
    'src/data/editorialPostsBatch8.ts',
    'src/data/editorialPostsBatch9.ts'
];
files.forEach(f => {
    if (fs.existsSync(f)) {
        let text = fs.readFileSync(f, 'utf8');
        text = text.replace(/avaliação gratuit[ao]/gi, 'diagnóstico gratuito');
        text = text.replace(/avaliação grátis/gi, 'diagnóstico grátis');
        fs.writeFileSync(f, text);
    }
});

// Also fix in prerender.ts and locaisData
if (fs.existsSync('scripts/prerender.ts')) {
    let text = fs.readFileSync('scripts/prerender.ts', 'utf8');
    text = text.replace(/avaliação gratuit[ao]/gi, 'diagnóstico gratuito');
    text = text.replace(/avaliação grátis/gi, 'diagnóstico grátis');
    fs.writeFileSync('scripts/prerender.ts', text);
}
