const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPosts.ts', 'utf8');

const regex = /relatedSlugs: \["celular-travando-lento-resetar-salvador"\]\s*\},[\s\S]*?slug: "conserto-de-celular-salvador"/;
const fix = 'relatedSlugs: ["celular-travando-lento-resetar-salvador"]\n  },\n  {\n    slug: "conserto-de-celular-salvador"';

content = content.replace(regex, fix);

fs.writeFileSync('src/data/editorialPosts.ts', content);
console.log('Fixed syntax in editorialPosts.ts');
