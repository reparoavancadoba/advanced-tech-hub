const fs = require('fs');
let content = fs.readFileSync('scripts/prerender.ts', 'utf8');

// 1. Add internal links to articles
const linkHtml = `<p>Conheça a nossa <a href="/assistencia-tecnica-salvador">assistência técnica de celular em Salvador</a>, com loja na <a href="/assistencia-tecnica-boca-do-rio">Boca do Rio</a>.</p>`;
if (!content.includes('assistência técnica de celular em Salvador')) {
    content = content.replace(
        /(\/\/\s*END-OF-ARTICLE CTA \(Section 5\))/,
        `${linkHtml}\n    $1`
    );
}

// 2. Add Link Nossa loja na Boca do Rio na home
if (!content.includes('Nossa loja na Boca do Rio"')) {
    content = content.replace(
        /(const homeContentHtml = .*?)(<\/p>)/,
        `$1<br><a href="/assistencia-tecnica-boca-do-rio">Nossa loja na Boca do Rio</a>$2`
    );
}

// 3. Boca do Rio tem as seções
const bdrSection = `
    if (local.slug === "boca-do-rio") {
      contentHtml += \`<h2>Nossa loja na Boca do Rio</h2><p>A Reparo Avançado fica na própria Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, CEP 41706-710, em Salvador. Você pode trazer o aparelho direto na loja ou pedir a coleta e entrega na região.</p><ul><li>Endereço: R. Abelardo Andrade de Carvalho, 8 – Boca do Rio, Salvador – BA, 41706-710</li><li>Horário: segunda a sexta, das 8h às 18h; sábado, das 8h às 17h</li><li>Telefone e WhatsApp: (71) 99198-1437</li><li>Avaliação no Google: nota 5,0</li></ul><iframe title="Mapa da Reparo Avançado na Boca do Rio" src="https://www.google.com/maps?q=R.+Abelardo+Andrade+de+Carvalho,+8,+Boca+do+Rio,+Salvador+-+BA,+41706-710&output=embed" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>\`;
    }
`;
if (!content.includes('Nossa loja na Boca do Rio</h2>')) {
    content = content.replace(
        /(let contentHtml = \`<p>\$\{local\.description\}<\/p>\`;)/,
        `$1\n${bdrSection}`
    );
}

fs.writeFileSync('scripts/prerender.ts', content);
console.log('Patched prerender.ts for SEO HTML');
