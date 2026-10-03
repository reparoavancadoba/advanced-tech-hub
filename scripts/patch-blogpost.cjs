const fs = require('fs');

let content = fs.readFileSync('src/pages/BlogPost.tsx', 'utf8');

// Add helper
if (!content.includes('const isTodos = ')) {
  content = content.replace(
    /const topic = post\.title \|\| .*/,
    `const isTodos = (val?: string) => !val || val.toLowerCase() === 'todos';
  const displayModel = isTodos(post.model) ? 'aparelho' : post.model;
  const displayModelH2 = isTodos(post.model) ? '' : \` \${post.model}\`;
  const topic = post.title || \`\${post.service}\${displayModelH2}\`;`
  );
}

// Replace occurrences
content = content.replace(/\{post\.service\} \{post\.model\}/g, '{post.service}{displayModelH2}');
content = content.replace(/do seu \{post\.model\}/g, 'do seu {displayModel}');

// Badge
content = content.replace(
  /<span className="bg-\[#0066FF\] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">\s*\{post\.brand\}\s*<\/span>/,
  `{!isTodos(post.brand) && (
                      <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                        {post.brand}
                      </span>
                    )}`
);

content = content.replace(
  /<span className="text-zinc-500 font-bold text-xs uppercase">\{rp\.brand\}<\/span>/,
  `<span className="text-zinc-500 font-bold text-xs uppercase">{isTodos(rp.brand) ? "Dicas" : rp.brand}</span>`
);

// Schema
const schemaFind = `publisher: {
            "@type": "Organization",
            "name": "Reparo Avanado",
            url: "https://site.reparoavancado.com.br",
            logo: {
              "@type": "ImageObject",
              url: "https://site.reparoavancado.com.br/favicon.png"
            }
          },`;

const schemaReplace = `publisher: {
            "@type": "LocalBusiness",
            "name": "Reparo Avanado",
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
          },`;

content = content.replace(schemaFind, schemaReplace);
// Also change "@type": "Article" to "@type": "BlogPosting"
content = content.replace(/"@type": "Article",/g, '"@type": "BlogPosting",');

fs.writeFileSync('src/pages/BlogPost.tsx', content);
console.log('Patched BlogPost.tsx');
