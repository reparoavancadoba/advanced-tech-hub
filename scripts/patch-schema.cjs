const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

// 1. Create a specific schema for Home
const homeSchemaDef = `const homeLocalBusinessSchema = JSON.parse(JSON.stringify(baseLocalBusinessSchema));
Object.assign(homeLocalBusinessSchema, {
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "165"
  }
});`;

code = code.replace(
  "generatePage('/', 'Conserto de Celular em Salvador | Reparo Avançado',",
  homeSchemaDef + "\n  generatePage('/', 'Conserto de Celular em Salvador | Reparo Avançado',"
);

code = code.replace(
  "baseLocalBusinessSchema);\n  generatePage('/servicos',",
  "homeLocalBusinessSchema);\n  generatePage('/servicos',"
);

code = code.replace(
  "baseLocalBusinessSchema);\r\n  generatePage('/servicos',",
  "homeLocalBusinessSchema);\r\n  generatePage('/servicos',"
);

// 2. Add aggregateRating to /assistencia-tecnica-salvador
const localLoopMatch = code.match(/const localBusinessSchema = JSON\.parse\(JSON\.stringify\(baseLocalBusinessSchema\)\);/);
if (localLoopMatch) {
  code = code.replace(
    /const localBusinessSchema = JSON\.parse\(JSON\.stringify\(baseLocalBusinessSchema\)\);/,
    `const localBusinessSchema = JSON.parse(JSON.stringify(baseLocalBusinessSchema));
    if (urlPath === '/assistencia-tecnica-salvador') {
      localBusinessSchema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "165"
      };
    }`
  );
}

fs.writeFileSync('scripts/prerender.ts', code);
console.log('Patched prerender.ts!');
