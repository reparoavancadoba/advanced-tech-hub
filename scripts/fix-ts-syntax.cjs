const fs = require('fs');
let content = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

// I replaced `];` with `{ slug: "conserto-de-tablet"... }` but I missed a comma before `{ slug` and I removed `];`. 
// Actually the error says:
// Expected "]" but found ","
// 37 |        }
// 38 |      ]
// 39 |    },
// 40 |    {
// 41 |      slug: "conserto-de-notebook",
// Wait! I replaced `];` which was at the end of the `allConsolidatedServices` array.
// Let's print out what the array looks like around there.

const match = content.match(/conserto-de-tablet[\s\S]*?faqs[\s\S]*?\]\s*\}\s*,\s*\{\s*slug: "conserto-de-notebook"[\s\S]*?\]\s*\}\s*\];/);

if (!content.includes('];') || content.match(/\];/g).length < 2) {
   // I might have removed `];` entirely and forgot to add it back at the end!
}

// Let's just fix it by reading the file and replacing the broken part.
// The broken part is at the end of the `allConsolidatedServices` definition.
let fixed = content.replace(/      \}\n    \]\n  \},\n  \{\n    slug: "conserto-de-notebook"/, '      }\n    ]\n  },\n  {\n    slug: "conserto-de-notebook"');
fs.writeFileSync('src/data/servicosConsolidadosData.ts', fixed);

console.log(content.substring(content.indexOf('conserto-de-tablet') - 100, content.indexOf('conserto-de-tablet') + 200));

