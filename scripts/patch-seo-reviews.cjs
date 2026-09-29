const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

const newSeoContent = `
  const heroReviews = urlPath === '/' ? '<p>+165 avaliações · 5 estrelas no Google</p>' : '';

  const seoContent = \`
    <div data-seo-prerender="true">
      <header>
        <h1>\${h1}</h1>
        \${heroReviews}
      </header>
      <main>
        \${contentHtml}
      </main>
      <footer>
        <p>\${businessInfo.name} - \${businessInfo.streetAddress}, \${businessInfo.addressLocality}, \${businessInfo.city} - \${businessInfo.state}. CEP: \${businessInfo.postalCode}. Telefone: \${businessInfo.telephone}</p>
        <p>★ 5,0 · 165 avaliações no Google</p>
        <a href="https://wa.me/\${WA_NUMBER}">Fale com um Técnico no WhatsApp</a>
      </footer>
    </div>
  \`;
`;

code = code.replace(
  /const seoContent = `[\s\S]*?<\/div>\s*`;/m,
  newSeoContent.trim()
);

fs.writeFileSync('scripts/prerender.ts', code);
console.log('Patched seoContent successfully');
