const fs = require('fs');
const path = require('path');

// ============================================================
// FIX 1: vercel.json — prevent /blog/ redirect capture
// ============================================================
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

// Remove ALL /blog/ redirect rules — these were legacy redirects for old programmatic
// pages that no longer exist. Real blog articles should never be caught.
const beforeCount = vercel.redirects.length;
vercel.redirects = vercel.redirects.filter(r => !r.source.startsWith('/blog/'));
const removedCount = beforeCount - vercel.redirects.length;
console.log(`FIX 1: Removed ${removedCount} /blog/ redirect rules from vercel.json`);

fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 2));

// ============================================================
// FIX 2: "avaliação" → "diagnóstico" in article bodies (context-aware)
// FIX 2b: "o placa" → "a placa", "do placa" → "da placa"
// ============================================================
const dataFiles = [
    'src/data/blogData.ts',
    'src/data/editorialPosts.ts',
    'src/data/editorialPostsBatch2.ts',
    'src/data/editorialPostsBatch3.ts',
    'src/data/editorialPostsBatch4.ts',
    'src/data/editorialPostsBatch5.ts',
    'src/data/editorialPostsBatch6.ts',
    'src/data/editorialPostsBatch7.ts',
    'src/data/editorialPostsBatch8.ts',
    'src/data/editorialPostsBatch9.ts',
    'src/data/editorialPostsBatch10.ts',
    'src/data/servicosConsolidadosData.ts',
    'src/data/locaisConsolidadosData.ts',
];

let totalAvaliacaoFixed = 0;
let totalOPlacaFixed = 0;
let totalDoPlacaFixed = 0;
let totalNoPlacaFixed = 0;
let totalUmPlacaFixed = 0;

dataFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    const before = content;
    
    // Context-aware avaliação replacement:
    // "avaliação gratuita" → "diagnóstico gratuito" (exam context)
    // "avaliação grátis" → "diagnóstico grátis"
    // "avaliação completa" → "diagnóstico completo" (exam context)
    // "avaliação do circuito" → "diagnóstico do circuito"
    // "avaliação de/da/do" (followed by technical terms) → "diagnóstico de/da/do"
    // "avaliação profissional" → "diagnóstico profissional"
    // "avaliação técnica" → "diagnóstico técnico"
    // "avaliação térmica/térmico" → "análise térmica" (heat context)
    // "avaliação 100%" → "diagnóstico 100%"
    // BUT keep: "avaliação" when it means customer review/rating/score
    
    // Replace specific known patterns
    content = content.replace(/avaliação gratuit[ao]/gi, 'diagnóstico gratuito');
    content = content.replace(/avaliação grátis/gi, 'diagnóstico grátis');
    content = content.replace(/avaliação complet[ao]/gi, 'diagnóstico completo');
    content = content.replace(/avaliação profissional/gi, 'diagnóstico profissional');
    content = content.replace(/avaliação técnic[ao]/gi, 'diagnóstico técnico');
    content = content.replace(/avaliação do circuito/gi, 'diagnóstico do circuito');
    content = content.replace(/avaliação da placa/gi, 'diagnóstico da placa');
    content = content.replace(/avaliação de precisão/gi, 'diagnóstico de precisão');
    content = content.replace(/avaliação minucios[ao]/gi, 'diagnóstico minucioso');
    content = content.replace(/avaliação de temperatura/gi, 'diagnóstico de temperatura');
    content = content.replace(/avaliação visual/gi, 'inspeção visual');
    content = content.replace(/avaliação 100%/gi, 'diagnóstico 100%');
    content = content.replace(/avaliação com equipamento/gi, 'diagnóstico com equipamento');
    content = content.replace(/avaliação com multímetro/gi, 'diagnóstico com multímetro');
    content = content.replace(/avaliação com microscópio/gi, 'diagnóstico com microscópio');
    // "avaliação térmica/térmico" → "análise térmica"  
    content = content.replace(/avaliação térmic[ao]/gi, 'análise térmica');
    // "avaliação de curto" → "diagnóstico de curto"
    content = content.replace(/avaliação de curto/gi, 'diagnóstico de curto');
    // "avaliações minuciosos" → "diagnósticos minuciosos"
    content = content.replace(/avaliações minucios[ao]s/gi, 'diagnósticos minuciosos');
    // Generic: "avaliação" at start of sentence or after period (likely technical context)
    // Don't replace "avaliação" when preceded by "melhor" (rating context) or in compound like "boa avaliação"
    
    // Fix remaining standalone "avaliação" ONLY where clearly technical
    // These patterns occur in service descriptions, not in review context
    content = content.replace(/Nossa avaliação/gi, 'Nosso diagnóstico');
    content = content.replace(/para avaliação/gi, 'para diagnóstico');
    content = content.replace(/fazer avaliação/gi, 'fazer diagnóstico');
    content = content.replace(/levar .* para avaliação/gi, (m) => m.replace(/avaliação/i, 'diagnóstico'));
    content = content.replace(/a avaliação/gi, (match, offset) => {
        // Check context: if near technical words, replace
        const context = content.substring(Math.max(0, offset - 50), offset + 50).toLowerCase();
        if (context.includes('circuito') || context.includes('placa') || context.includes('componente') || 
            context.includes('técnic') || context.includes('aparelho') || context.includes('celular') ||
            context.includes('profissional') || context.includes('gratuito') || context.includes('grátis') ||
            context.includes('loja') || context.includes('laboratório') || context.includes('equip')) {
            return match.replace(/avaliação/i, 'diagnóstico');
        }
        return match;
    });
    
    // Gender concordance fixes
    const oPlacaBefore = (content.match(/\bo placa\b/g) || []).length;
    const doPlacaBefore = (content.match(/\bdo placa\b/g) || []).length;
    const noPlacaBefore = (content.match(/\bno placa\b/g) || []).length;
    const umPlacaBefore = (content.match(/\bum placa\b/g) || []).length;
    
    content = content.replace(/\bo placa\b/g, 'a placa');
    content = content.replace(/\bdo placa\b/g, 'da placa');
    content = content.replace(/\bno placa\b/g, 'na placa');
    content = content.replace(/\bum placa\b/g, 'uma placa');
    content = content.replace(/\bO placa\b/g, 'A placa');
    content = content.replace(/\bDo placa\b/g, 'Da placa');
    content = content.replace(/\bNo placa\b/g, 'Na placa');
    content = content.replace(/\bUm placa\b/g, 'Uma placa');
    
    if (content !== before) {
        fs.writeFileSync(f, content);
        const avalFixed = (before.match(/avaliação/gi) || []).length - (content.match(/avaliação/gi) || []).length;
        totalAvaliacaoFixed += Math.max(0, avalFixed);
        totalOPlacaFixed += oPlacaBefore;
        totalDoPlacaFixed += doPlacaBefore;
        totalNoPlacaFixed += noPlacaBefore;
        totalUmPlacaFixed += umPlacaBefore;
    }
});

console.log(`\nFIX 2: "avaliação" occurrences fixed: ${totalAvaliacaoFixed}`);
console.log(`FIX 2b: "o placa" fixed: ${totalOPlacaFixed}, "do placa" fixed: ${totalDoPlacaFixed}, "no placa" fixed: ${totalNoPlacaFixed}, "um placa" fixed: ${totalUmPlacaFixed}`);

// Check remaining
let remaining = 0;
dataFiles.forEach(f => {
    if (!fs.existsSync(f)) return;
    const content = fs.readFileSync(f, 'utf8');
    remaining += (content.match(/avaliação/gi) || []).length;
});
console.log(`Remaining "avaliação" in data files: ${remaining} (should be only in review/rating context)`);

// ============================================================
// FIX 3: Fix service mapping for charge-related articles
// This is done in prerender.ts logic. The regex for conector/carga/carrega
// needs to be checked before the bateria regex.
// ============================================================
console.log('\nFIX 3: Service mapping fix applied in prerender.ts (see below)');

// ============================================================
// FIX 4: Fix date fallback — articles without real dates should not show dates
// ============================================================
console.log('FIX 4: Date fallback fix applied in prerender.ts (see below)');

// ============================================================
// FIX 5: Rewrite prerender.ts with all fixes applied
// ============================================================
// The key fixes in prerender.ts:
// - Service mapping: move conector/carga/carrega BEFORE bateria in regex order
// - Date: only show dates when real (not 2024-01-01 fallback), don't declare fallback datePublished
// - Ensure ALL posts from allPosts go through the same rendering path (they already do via allPosts.forEach)

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Fix service mapping order: conector/carga BEFORE bateria
// Current order has bateria catching "descarreg" before conector catches "carrega"
// Need to reorder: check "conector|carga|usb|carrega|não.carrega|nao.carrega" BEFORE bateria
const oldBateriaRegex = `if (combined.match(/\\\\b(bateria|descarreg|saúde|saude|incha|carrega.*rapido|esquenta|aquece|superaquec)/)) return '/troca-de-bateria';
  if (combined.match(/\\\\b(conector|carga|usb|carrega|não.carrega|nao.carrega|carreg)/)) return '/celular-nao-carrega';`;

const newBateriaRegex = `if (combined.match(/\\\\b(conector|carga|usb-c|usb|não.carrega|nao.carrega|nao-carrega)/)) return '/celular-nao-carrega';
  if (combined.match(/\\\\b(bateria|descarreg|saúde|saude|incha|esquenta|aquece|superaquec)/)) return '/troca-de-bateria';`;

prerender = prerender.replace(oldBateriaRegex, newBateriaRegex);

// Fix: articles without real dates should not show dates or declare fallback
// Replace the date display section
prerender = prerender.replace(
    `const datePublished = post.datePublished || "2024-01-01T08:00:00-03:00";
  const dateModified = post.dateModified || datePublished;`,
    `const hasRealDate = post.datePublished && post.datePublished !== "2024-01-01T08:00:00-03:00";
  const datePublished = hasRealDate ? post.datePublished : null;
  const dateModified = hasRealDate ? (post.dateModified || post.datePublished) : null;`
);

// Fix the visible dates block to only show when real
prerender = prerender.replace(
    `// Visible dates
  contentHtml += \`<p><time datetime="\${datePublished}">Publicado em \${formatDateBR(datePublished)}</time>\`;
  if (dateModified !== datePublished) {
    contentHtml += \` · <time datetime="\${dateModified}">Atualizado em \${formatDateBR(dateModified)}</time>\`;
  }
  contentHtml += '</p>';`,
    `// Visible dates (only if real date exists)
  if (datePublished) {
    contentHtml += \`<p><time datetime="\${datePublished}">Publicado em \${formatDateBR(datePublished)}</time>\`;
    if (dateModified && dateModified !== datePublished) {
      contentHtml += \` · <time datetime="\${dateModified}">Atualizado em \${formatDateBR(dateModified)}</time>\`;
    }
    contentHtml += '</p>';
  }`
);

// Fix schema to not include dates when fallback
prerender = prerender.replace(
    `"datePublished": datePublished,
        "dateModified": dateModified,`,
    `...(datePublished ? { "datePublished": datePublished } : {}),
        ...(dateModified ? { "dateModified": dateModified } : {}),`
);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('FIX 5: prerender.ts updated with all fixes');

console.log('\n🎯 All fixes applied. Run npm run build.');
