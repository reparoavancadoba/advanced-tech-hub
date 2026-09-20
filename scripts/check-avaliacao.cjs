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

dataFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        if (line.toLowerCase().includes('avaliação')) {
            // Show context
            const trimmed = line.trim().substring(0, 120);
            console.log(`${f}:${i+1}: ${trimmed}`);
        }
    });
});
