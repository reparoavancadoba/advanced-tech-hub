const fs = require('fs');
const urls = [
  'https://site.reparoavancado.com.br/blog/autorizada-ou-independente-como-escolher-assistencia-tecnica',
  'https://site.reparoavancado.com.br/blog/vale-a-pena-consertar-celular-ou-comprar-novo',
  'https://site.reparoavancado.com.br/blog/garantia-de-conserto-de-celular-o-que-perguntar',
  'https://site.reparoavancado.com.br/blog/iphone-nao-liga-tela-preta-maca-travada-11-ao-14',
  'https://site.reparoavancado.com.br/blog/iphone-11-usado-vale-a-pena-o-que-checar'
];

const requestedArticles = [
  { slug: "autorizada-ou-independente-como-escolher-assistencia-tecnica", title: "Assistência Autorizada ou Independente? Como Escolher", service: "assistência técnica de confiança", serviceSlug: "/assistencia-tecnica-salvador", relatedSlugs: ["quanto-custa-trocar-a-tela-do-celular-por-marca", "modo-de-manutencao-samsung-o-que-e", "diferenca-tela-original-primeira-linha"] },
  { slug: "vale-a-pena-consertar-celular-ou-comprar-novo", title: "Vale a Pena Consertar o Celular ou Comprar Outro?", service: "diagnóstico do celular", serviceSlug: "/conserto-de-celular", relatedSlugs: ["quanto-custa-trocar-a-tela-do-celular-por-marca", "troca-de-bateria-iphone-salvador-saude-100", "bateria-do-celular-estufada-e-perigoso-o-que-fazer"] },
  { slug: "garantia-de-conserto-de-celular-o-que-perguntar", title: "Garantia de Conserto de Celular: O Que Perguntar", service: "garantia de conserto", serviceSlug: "/assistencia-tecnica-salvador", relatedSlugs: ["autorizada-ou-independente-como-escolher-assistencia-tecnica", "quanto-custa-trocar-a-tela-do-celular-por-marca", "vale-a-pena-consertar-celular-ou-comprar-novo"] },
  { slug: "iphone-nao-liga-tela-preta-maca-travada-11-ao-14", title: "iPhone Não Liga: Tela Preta ou Maçã Travada? (11 ao 14)", service: "iPhone que não liga", serviceSlug: "/celular-nao-liga", relatedSlugs: ["celular-carrega-mas-nao-liga-causas", "celular-liga-mas-a-tela-nao-acende", "iphone-11-nao-carrega-conector-ou-bateria"] },
  { slug: "iphone-11-usado-vale-a-pena-o-que-checar", title: "iPhone 11 Usado Vale a Pena? O Que Checar Antes", service: "iPhone seminovo", serviceSlug: "/conserto-de-iphone", relatedSlugs: ["iphone-11-nao-carrega-conector-ou-bateria", "troca-de-bateria-iphone-salvador-saude-100", "como-economizar-bateria-do-celular"] }
];

async function check() {
  for (let i = 0; i < urls.length; i++) {
    const u = urls[i];
    const a = requestedArticles[i];
    try {
      const res = await fetch(u, { cache: 'no-store' });
      if (!res.ok) {
        console.log(`❌ ${u} retornou status ${res.status}`);
        continue;
      }
      const html = await res.text();
      
      const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
      const rootContent = rootMatch ? rootMatch[1] : '';
      const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const wordCount = text ? text.split(/\s+/).length : 0;
      
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : '';
      const titleOk = title === a.title;
      
      const hasBlogPosting = html.includes('"@type":"BlogPosting"');
      const hasBreadcrumb = html.includes('"@type":"BreadcrumbList"');
      
      // Count links to serviceSlug
      const serviceLinkCount = (html.match(new RegExp(`href="${a.serviceSlug}"`, 'g')) || []).length;
      
      // Check related slugs in Leia Também
      const relatedOk = a.relatedSlugs.every(slug => html.includes(`href="/blog/${slug}"`));
      
      // Check WhatsApp link
      const waLinkMatch = html.match(/href="https:\/\/wa\.me\/[^"]+text=([^"]+)"/);
      let waOk = false;
      if (waLinkMatch) {
        const waText = decodeURIComponent(waLinkMatch[1]);
        waOk = waText.includes(a.title) && waText.includes(a.service);
      } else {
        const waLinks = html.match(/href="https:\/\/wa\.me\/[^"]+"/g);
        // Maybe it's without text?
      }

      let hasUndefined = html.includes('undefined') || html.includes('null') || html.includes('NaN');
      if (html.includes('null')) {
         hasUndefined = text.includes('undefined') || text.includes('null') || text.includes('NaN');
      }

      console.log(`\n✅ ${a.slug}`);
      console.log(`- Status 200: OK`);
      console.log(`- Contagem de palavras HTML bruto: ${wordCount} (> 500: ${wordCount > 500})`);
      console.log(`- Title exato: ${titleOk} ("${title}")`);
      console.log(`- Schema (BlogPosting, BreadcrumbList): ${hasBlogPosting}, ${hasBreadcrumb}`);
      console.log(`- Link para ${a.serviceSlug} (min 1): ${serviceLinkCount}`);
      console.log(`- Leia também slugs exatos: ${relatedOk}`);
      console.log(`- Zero occorrências undefined/null/NaN: ${!hasUndefined}`);
    } catch(e) {
      console.log(`Erro em ${u}: ${e.message}`);
    }
  }
  
  // Regression check
  for (const p of ['https://site.reparoavancado.com.br/', 'https://site.reparoavancado.com.br/troca-de-tela']) {
    const res = await fetch(p, { cache: 'no-store' });
    const html = await res.text();
    const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
    const rootContent = rootMatch ? rootMatch[1] : '';
    const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text ? text.split(/\s+/).length : 0;
    console.log(`\n✅ Regressão ${p}: ${wordCount} palavras`);
  }
}
check();
