const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

const injectLogic = `
// ═══════════════════════════════════════════
// INFORMACOES PAGES (PILOTO)
// ═══════════════════════════════════════════
{
  const indexUrl = '/informacoes';
  const indexSchema = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": DOMAIN + "/" },
        { "@type": "ListItem", "position": 2, "name": "Informações", "item": DOMAIN + "/informacoes" }
      ]
    }
  ];
  let indexHtml = \`<p>\${informacoesIndex.text}</p><ul>\`;
  informacoesPages.forEach(p => {
    indexHtml += \`<li><a href="/informacoes/\${p.slug}">\${p.title}</a></li>\`;
  });
  indexHtml += \`</ul>\`;
  generatePage(indexUrl, informacoesIndex.title, informacoesIndex.meta, informacoesIndex.h1, indexHtml, indexSchema);

  informacoesPages.forEach(page => {
    const urlPath = \`/informacoes/\${page.slug}\`;
    
    let contentHtml = page.content;
    contentHtml = contentHtml.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    contentHtml = contentHtml.replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>');
    
    contentHtml = contentHtml.replace(/(?:^- .*\\n?)+/gim, (match) => {
        const items = match.trim().split('\\n').map(line => \`<li>\${line.replace(/^- /, '')}</li>\`).join('');
        return \`<ul>\${items}</ul>\`;
    });
    
    contentHtml = contentHtml.replace(/^(?!<(?:h2|ul|li)>|$).+/gim, '<p>$&</p>');

    const waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(page.whatsapp);
    contentHtml += \`<p><a href="\${waUrl}">Falar no WhatsApp</a></p>\`;
    contentHtml += \`<p><strong>Serviço:</strong> <a href="\${page.serviceSlug}">Conheça nosso serviço</a> | <strong>Local:</strong> <a href="\${page.localSlug}">Atendimento na região</a></p>\`;

    const pageSchema = [
      {
        "@type": "Service",
        "serviceType": page.h1,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Reparo Avançado",
          "address": BUSINESS_ADDRESS
        },
        "areaServed": {
           "@type": "Place",
           "name": page.areaServed
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": DOMAIN + "/" },
          { "@type": "ListItem", "position": 2, "name": "Informações", "item": DOMAIN + "/informacoes" },
          { "@type": "ListItem", "position": 3, "name": page.h1, "item": DOMAIN + urlPath }
        ]
      }
    ];

    generatePage(urlPath, page.title, page.meta, page.h1, contentHtml, pageSchema);
  });
}
`;

if (!code.includes('INFORMACOES PAGES (PILOTO)')) {
  code = code.replace('console.log("✅ Prerender finalizado.");', injectLogic + '\nconsole.log("✅ Prerender finalizado.");');
  fs.writeFileSync('scripts/prerender.ts', code);
  console.log('Patched');
} else {
  console.log('Already there');
}
