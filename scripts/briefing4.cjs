const fs = require('fs');

// 1. Home description check
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');
// Fix home description to ensure < 160 chars
prerender = prerender.replace(
    /generatePage\('\/', 'Conserto de Celular em Salvador \| Reparo Avançado', '.*?',/g,
    `generatePage('/', 'Conserto de Celular em Salvador | Reparo Avançado', 'Assistência de celular na Boca do Rio, Salvador: conserto de tela, bateria e placa de iPhones e Androids. Orçamento grátis e garantia.',`
);

// 2. Add dynamic origin tracking to local and service pages
// For local pages:
prerender = prerender.replace(
    /function buildLocalConsolidadoContent\(local: any\) \{/g,
    `function buildLocalConsolidadoContent(local: any) {\n  const waMsgLocal = encodeURIComponent(\`Olá! Vim pela página de assistencia em \${local.title} e preciso de conserto.\`);\n`
);

// We need to inject the CTA button in local pages
prerender = prerender.replace(
    /if \(!macros\.includes\(local\.slug\)\) \{/g,
    `contentHtml += \`<aside style="border:2px solid #25D366;padding:16px;margin:24px 0;border-radius:8px;background:#f0fff4;">\n    <p><strong>Fale com um técnico agora</strong></p>\n    <a href="https://wa.me/\${WA_NUMBER}?text=\${waMsgLocal}" style="color:#25D366;font-weight:bold;">Chamar no WhatsApp</a>\n  </aside>\`;\n  if (!macros.includes(local.slug)) {`
);

// For service pages:
prerender = prerender.replace(
    /let faqHtml = '';/g,
    `const waMsgService = encodeURIComponent(\`Olá! Vim pela página de \${servico.h1} e preciso de ajuda com meu aparelho.\`);\n  contentHtml += \`<aside style="border:2px solid #25D366;padding:16px;margin:24px 0;border-radius:8px;background:#f0fff4;">\n    <p><strong>Fale com um técnico agora sobre \${servico.h1}</strong></p>\n    <a href="https://wa.me/\${WA_NUMBER}?text=\${waMsgService}" style="color:#25D366;font-weight:bold;">Chamar no WhatsApp</a>\n  </aside>\`;\n  let faqHtml = '';`
);

// 3. Merging logic
// Groups
const mergeGroups = {
    'celular-motorola-nao-carrega': [
        'celular-nao-carrega-causas', 'celular-nao-carrega-causas-solucoes', 
        'celular-nao-carrega-salvador', 'motorola-nao-carrega-avaliacao-salvador', 
        'higienizacao-conector-cabo-carregar-salvador', 'celular-nao-carrega'
    ],
    'aviso-umidade-detectada': [
        'celular-caiu-na-agua-o-que-fazer', 'celular-caiu-na-agua-desoxidacao-salvador', 
        'celular-molhou-chuva-praia-salvador-socorro', 'celular-caiu-no-mar-vale-a-pena-consertar',
        'celular-caiu-na-agua'
    ],
    'bateria-celular-descarregando-rapido': [
        'troca-de-bateria-celular-salvador', 'celular-descarregando-rapido', 
        'celular-esquentando-descarregando-rapido-bateria'
    ],
    'vale-pena-trocar-vidro-ou-tela-completa': [
        'troca-vidro-ou-tela-completa-celular-diferenca', 'troca-vidro-vs-tela-completa-economia-salvador'
    ]
};

let mergedSlugs = [];
Object.values(mergeGroups).forEach(g => mergedSlugs.push(...g));

// Inject merged slugs filtering into prerender
prerender = prerender.replace(
    /const sortedPosts = \[\.\.\.allPosts\]/g,
    `const mergedSlugs = ${JSON.stringify(mergedSlugs)};\nconst sortedPosts = [...allPosts].filter(p => !mergedSlugs.includes(p.slug))`
);

prerender = prerender.replace(
    /allPosts\.forEach\(post => \{/g,
    `allPosts.filter(p => !mergedSlugs.includes(p.slug)).forEach(post => {`
);

// Filter topicGroups to not link to merged slugs
prerender = prerender.replace(
    /if \(\!topicGroups\[group\]\) topicGroups\[group\] = \[\];/g,
    `if (!topicGroups[group]) topicGroups[group] = [];\n  if (mergedSlugs.includes(post.slug)) return;`
);

// Make sure `allPosts.forEach` for incomingLinks avoids them
prerender = prerender.replace(
    /allPosts\.forEach\(p => \{ incomingLinks\[p\.slug\] = 0; \}\);/g,
    `allPosts.filter(p => !mergedSlugs.includes(p.slug)).forEach(p => { incomingLinks[p.slug] = 0; });`
);

fs.writeFileSync('scripts/prerender.ts', prerender);

// 4. Update Sitemap
let sitemap = fs.readFileSync('scripts/generate-sitemap.ts', 'utf8');
sitemap = sitemap.replace(
    /allPosts\.forEach/g,
    `allPosts.filter(p => !${JSON.stringify(mergedSlugs)}.includes(p.slug)).forEach`
);
// Also adjust pagination logic in sitemap
sitemap = sitemap.replace(
    /const totalBlogPages = Math\.ceil\(allPosts\.length \/ POSTS_PER_PAGE\);/g,
    `const totalBlogPages = Math.ceil(allPosts.filter(p => !${JSON.stringify(mergedSlugs)}.includes(p.slug)).length / POSTS_PER_PAGE);`
);
fs.writeFileSync('scripts/generate-sitemap.ts', sitemap);

// 5. Update vercel.json with 301 redirects for the merged ones
let vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
if (!vercel.redirects) vercel.redirects = [];
Object.entries(mergeGroups).forEach(([survivor, merged]) => {
    merged.forEach(slug => {
        vercel.redirects.push({
            source: `/blog/${slug}`,
            destination: `/blog/${survivor}`,
            permanent: true
        });
    });
});
fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 2));

console.log('Briefing 4 modifications applied.');
