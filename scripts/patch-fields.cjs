const fs = require('fs');
let code = fs.readFileSync('src/data/editorialPostsBatch12.ts', 'utf8');

code = code.replace(/category: /g, 'brand: "",\n    model: "",\n    description: "",\n    problems: [],\n    causes: [],\n    solution: "",\n    whenToSeek: "",\n    costInfo: "",\n    isEditorial: true,\n    category: ');

fs.writeFileSync('src/data/editorialPostsBatch12.ts', code);
console.log('Fields added');
