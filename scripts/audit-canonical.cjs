const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), 'dist', 'blog');

const slugs = [
  'celular-nao-carrega-causas-solucoes',
  'conector-carga-iphone-mau-contato-limpeza-troca',
  'vale-pena-trocar-vidro-ou-tela-completa',
  'iphone-descarregando-rapido-calor-salvador',
  'motorola-edge-nao-liga-boca-do-rio',
  'assistencia-tecnica-boca-do-rio-conserto-rapido',
  'melhor-assistencia-tecnica-salvador-reparo-avancado',
  'celular-caiu-no-mar-armacao-desoxidacao',
  'conserto-celular-imbui-stiep-rapido',
  'assistencia-tecnica-xiaomi-pituba-regiao',
  'quanto-custa-consertar-celular-salvador-cuidado'
];

console.log("=== CANONICAL TAG AUDIT ===\n");

for (const slug of slugs) {
  const htmlPath = path.join(distDir, slug, 'index.html');
  const exists = fs.existsSync(htmlPath);
  
  if (!exists) {
    console.log(`[${slug}]`);
    console.log(`  Pre-rendered HTML: NOT FOUND (no dist/blog/${slug}/index.html)`);
    console.log("");
    continue;
  }
  
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  // Extract canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : 'NOT FOUND';
  
  // Extract title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'NOT FOUND';
  
  // Extract meta description
  const metaMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const metaDesc = metaMatch ? metaMatch[1] : 'NOT FOUND';
  
  // Extract H1
  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const h1 = h1Match ? h1Match[1] : 'NOT FOUND';
  
  // Check if canonical is self-referencing
  const expectedCanonical = `https://site.reparoavancado.com.br/blog/${slug}`;
  const isSelfCanonical = canonical === expectedCanonical;
  
  console.log(`[${slug}]`);
  console.log(`  Title: ${title}`);
  console.log(`  H1: ${h1}`);
  console.log(`  Meta: ${metaDesc.substring(0, 80)}...`);
  console.log(`  Canonical: ${canonical}`);
  console.log(`  Self-referencing: ${isSelfCanonical ? 'YES ✅' : 'NO ❌ (expected: ' + expectedCanonical + ')'}`);
  console.log("");
}

// Now check content similarity - extract the "Direto ao Ponto" section from each
console.log("\n=== CONTENT UNIQUENESS CHECK ===\n");

const contentMap = {};
for (const slug of slugs) {
  const htmlPath = path.join(distDir, slug, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;
  
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  // Get unique content markers: H1 + first 200 chars of body text
  const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].trim() : '';
  
  // Extract all visible text from <p> tags (first 500 chars)
  const pMatches = html.match(/<p[^>]*>([^<]+)<\/p>/gi);
  const bodyText = pMatches ? pMatches.slice(0, 5).map(p => p.replace(/<[^>]+>/g, '').trim()).join(' ').substring(0, 300) : '';
  
  contentMap[slug] = { h1, bodyText };
  console.log(`[${slug}]`);
  console.log(`  H1: ${h1}`);
  console.log(`  Body preview: ${bodyText.substring(0, 150)}...`);
  console.log("");
}
