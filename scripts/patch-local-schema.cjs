const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

code = code.replace(
  'generatePage(urlPath, title, description, h1, contentHtml, local.schema);',
  `
  if (urlPath === '/assistencia-tecnica-salvador' && local.schema) {
    local.schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "165"
    };
  }
  generatePage(urlPath, title, description, h1, contentHtml, local.schema);
  `
);

fs.writeFileSync('scripts/prerender.ts', code);
console.log('Patched local.schema in prerender');
