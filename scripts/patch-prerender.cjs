const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.ts', 'utf8');

const regexPublisher = /"publisher":\s*\{\s*"@type":\s*"Organization",\s*"name":\s*businessInfo\.name,\s*"logo":\s*\{\s*"@type":\s*"ImageObject",\s*"url":\s*`\$\{DOMAIN\}\/favicon\.png`\s*\}\s*\}/;

const schemaReplace = `"publisher": {
          "@type": "LocalBusiness",
          "name": businessInfo.name,
          "logo": { "@type": "ImageObject", "url": \`\${DOMAIN}/favicon.png\` },
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

if (regexPublisher.test(content)) {
    content = content.replace(regexPublisher, schemaReplace);
}

// And the H2 logic
if (!content.includes('const displayModelH2')) {
    content = content.replace(
        /contentHtml \+= `<h2>O Problema: \$\{post\.service\} \$\{post\.model\}<\/h2>`;/,
        `const displayModelH2 = (!post.model || post.model.toLowerCase() === "todos") ? "" : \` \${post.model}\`;
    contentHtml += \`<h2>O Problema: \${post.service}\${displayModelH2}</h2>\`;`
    );

    content = content.replace(
        /if \(post\.costInfo\) contentHtml \+= `<h2>Quanto Custa \$\{post\.service\} \$\{post\.model\}\?<\/h2>\$\{parseMarkdown\(post\.costInfo\)\}`;/,
        `if (post.costInfo) contentHtml += \`<h2>Quanto Custa \${post.service}\${displayModelH2}?</h2>\${parseMarkdown(post.costInfo)}\`;`
    );
}

fs.writeFileSync('scripts/prerender.ts', content);
console.log('Patched prerender.ts');
