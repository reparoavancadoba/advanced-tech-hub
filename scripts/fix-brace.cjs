const fs = require('fs');
let content = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

// Currently it's:
//     ]
//   }
// },
//   "conserto-de-tablet": {
// Let's replace `}\n},\n  "conserto-de-tablet": {` with `}\n  },\n  "conserto-de-tablet": {` 
// Actually just replace `},\n  "conserto-de-tablet": {` with `,\n  "conserto-de-tablet": {`

content = content.replace(/\},\n  "conserto-de-tablet": \{/g, ',\n  "conserto-de-tablet": {');

// Just to be safe, there's `};` at the very end. Let's make sure `allConsolidatedServices` is exported!
console.log(content.substring(content.indexOf('conserto-de-notebook') + 2000));
fs.writeFileSync('src/data/servicosConsolidadosData.ts', content);
