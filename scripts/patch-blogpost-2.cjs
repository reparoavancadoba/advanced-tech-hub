const fs = require('fs');

let content = fs.readFileSync('src/pages/BlogPost.tsx', 'utf8');

const regexSchema = /publisher:\s*\{\s*"@type":\s*"Organization",[\s\S]*?logo:\s*\{\s*"@type":\s*"ImageObject",\s*url:\s*"https:\/\/site\.reparoavancado\.com\.br\/favicon\.png"\s*\}\s*\}/;

const schemaReplace = `publisher: {
          "@type": "LocalBusiness",
          "name": "Reparo Avançado",
          "url": "https://site.reparoavancado.com.br",
          "logo": {
            "@type": "ImageObject",
            "url": "https://site.reparoavancado.com.br/favicon.png"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
            "addressLocality": "Salvador",
            "addressRegion": "BA",
            "postalCode": "41706-710",
            "addressCountry": "BR"
          },
          "areaServed": "Salvador"
        }`;

if (regexSchema.test(content)) {
    content = content.replace(regexSchema, schemaReplace);
    fs.writeFileSync('src/pages/BlogPost.tsx', content);
    console.log('Replaced publisher schema in BlogPost');
} else {
    console.log('regex match not found');
}
