const fs = require('fs');

// STEP 1: Search and replace misleading content (smartwatch, icloud, frp, etc)
const filesToCheck = [
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

filesToCheck.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    
    // Remove smartwatch/apple watch mentions if they exist in services/problems
    if (content.match(/smartwatch|apple watch|applewatch/i)) {
        // Find and remove full lines or entries. Let's just do a manual inspection or blind replace.
        // I will let the script replace occurrences if they are simple, but for complex ones, I'll log.
    }
});
