const fs = require('fs');

function truncateDesc(filePath) {
    if (!fs.existsSync(filePath)) return;
    let s = fs.readFileSync(filePath, 'utf8');
    s = s.replace(/metaDescription:\s*"([^"]+)"/g, (match, desc) => {
        if (desc.length > 158) {
            let truncated = desc.substring(0, 155).trim();
            truncated = truncated.substring(0, Math.min(truncated.length, truncated.lastIndexOf(' '))) + '...';
            return 'metaDescription: "' + truncated + '"';
        } else if (desc.length < 120 && desc.length > 50) {
            return 'metaDescription: "' + desc + ' Veja como consertar de forma rápida."';
        }
        return match;
    });
    fs.writeFileSync(filePath, s);
}

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
    'src/data/editorialPostsBatch9.ts',
    'src/data/locaisConsolidadosData.ts',
    'src/data/servicosConsolidadosData.ts'
];

files.forEach(f => truncateDesc(f));
