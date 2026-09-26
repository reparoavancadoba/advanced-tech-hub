const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Replace the seoContent block and its injection with nothing.
// The script currently looks like this:
/*
  const seoContent = `
    <div id="seo-prerender" data-seo-prerender="true" style="font-size:16px;color:#333;line-height:1.6;padding:20px;max-width:800px;margin:0 auto;font-family:sans-serif;">
      <header>
        <h1>${h1}</h1>
      </header>
      <main>
        ${contentHtml}
      </main>
      <footer>
        <p>${businessInfo.name} - ${businessInfo.streetAddress}, ${businessInfo.addressLocality}, ${businessInfo.city} - ${businessInfo.state}. CEP: ${businessInfo.postalCode}. Telefone: ${businessInfo.telephone}</p>
        <a href="https://wa.me/${WA_NUMBER}">Fale com um Técnico no WhatsApp</a>
      </footer>
    </div>
  `;

  if (schemaScript) {
      html = html.replace('</head>', `${schemaScript}</head>`);
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);
*/

prerender = prerender.replace(
  /const seoContent = `[\s\S]*?`;\s*if \(schemaScript\) \{\s*html = html\.replace\('<\/head>', `\$\{schemaScript\}<\/head>`\);\s*\}\s*html = html\.replace\('<div id="root"><\/div>', `<div id="root">\$\{seoContent\}<\/div>`\);/,
  `  if (schemaScript) {\n      html = html.replace('</head>', \`\${schemaScript}</head>\`);\n  }`
);

// We should also handle the old version in case patch-visible.cjs was different.
prerender = prerender.replace(
  /const seoContent = `[\s\S]*?`;\s*if \(schemaScript\) \{\s*html = html\.replace\('<\/head>', `\$\{schemaScript\}<\/head>`\);\s*\}/,
  `  if (schemaScript) {\n      html = html.replace('</head>', \`\${schemaScript}</head>\`);\n  }`
);
prerender = prerender.replace(
  /html = html\.replace\('<div id="root"><\/div>', `<div id="root">\$\{seoContent\}<\/div>`\);/,
  ``
);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Removed seoContent completely from prerender.ts');
