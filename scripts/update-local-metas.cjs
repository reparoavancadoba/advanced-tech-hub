const fs = require('fs');

['src/data/locaisConsolidadosData.ts', 'src/data/servicosConsolidadosData.ts'].forEach(f => {
    if (!fs.existsSync(f)) return;
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/metaDescription:\s*"([^"]+)"/g, (match, desc) => {
        let cleaned = desc.replace(/ Veja como consertar de forma rápida\.?/, '');
        cleaned = cleaned.replace(/ Veja dicas e onde consertar\.?/, '');
        cleaned = cleaned.replace(/ Solicite um orçamento grátis\.?/, '');
        
        if (cleaned.endsWith('...')) cleaned = cleaned.replace(/\s*\.\.\.$/, '.');
        
        cleaned = cleaned.replace(/avaliação gratuit[ao]/gi, 'diagnóstico gratuito');
        cleaned = cleaned.replace(/avaliação grátis/gi, 'diagnóstico grátis');
        
        return 'metaDescription: "' + cleaned + '"';
    });
    fs.writeFileSync(f, s);
});
