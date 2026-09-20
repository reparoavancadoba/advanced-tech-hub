const fs = require('fs');

const dataFiles = [
    'src/data/blogData.ts',
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
    'src/data/servicosConsolidadosData.ts',
    'src/data/locaisConsolidadosData.ts',
];

let fixedCount = 0;

dataFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    const before = content;
    
    // Fix masculine articles preceding "avaliação" (result of old blind replace)
    content = content.replace(/\bO avaliação\b/g, 'O diagnóstico');
    content = content.replace(/\bo avaliação\b/gi, 'o diagnóstico');
    content = content.replace(/\bDo avaliação\b/g, 'Do diagnóstico');
    content = content.replace(/\bdo avaliação\b/gi, 'do diagnóstico');
    content = content.replace(/\bNo avaliação\b/g, 'No diagnóstico');
    content = content.replace(/\bno avaliação\b/gi, 'no diagnóstico');
    content = content.replace(/\bUm avaliação\b/g, 'Um diagnóstico');
    content = content.replace(/\bum avaliação\b/gi, 'um diagnóstico');
    content = content.replace(/\baos avaliação\b/gi, 'aos diagnósticos');
    
    // Fix specific remaining technical instances
    content = content.replace(/avaliação detalhado/gi, 'diagnóstico detalhado');
    content = content.replace(/avaliação de urgência/gi, 'diagnóstico de urgência');
    content = content.replace(/avaliação e conserto/gi, 'diagnóstico e conserto');
    content = content.replace(/avaliação de circuito/gi, 'diagnóstico de circuito');
    content = content.replace(/avaliação de porta/gi, 'diagnóstico de porta');
    content = content.replace(/avaliação de carga/gi, 'diagnóstico de carga');
    content = content.replace(/avaliação diferencial/gi, 'diagnóstico diferencial');
    content = content.replace(/avaliação incorreto/gi, 'diagnóstico incorreto');
    content = content.replace(/avaliação exato/gi, 'diagnóstico exato');
    content = content.replace(/A avaliação para/gi, 'O diagnóstico para');
    content = content.replace(/A avaliação da/gi, 'O diagnóstico da');
    content = content.replace(/uma avaliação presencial/gi, 'um diagnóstico presencial');
    content = content.replace(/uma avaliação sem c/gi, 'um orçamento sem c');
    content = content.replace(/fazer um avaliação/gi, 'fazer um diagnóstico');
    content = content.replace(/avaliação do processador/gi, 'diagnóstico do processador');
    content = content.replace(/avaliação do estado/gi, 'diagnóstico do estado');
    content = content.replace(/avaliação Reinicialização/gi, 'diagnóstico de Reinicialização');
    content = content.replace(/Falta de transparência no avaliação/gi, 'Falta de transparência no orçamento');
    content = content.replace(/avaliação presencial/gi, 'diagnóstico presencial');
    content = content.replace(/Precisa avaliar o/gi, 'Precisa diagnosticar o');
    content = content.replace(/O orçamento .* avaliação/gi, (m) => m.replace(/avaliação/i, 'diagnóstico'));
    
    if (content !== before) {
        fs.writeFileSync(f, content);
        fixedCount++;
    }
});

console.log(`Fixed remaining avaliação gender/context issues in ${fixedCount} files.`);
