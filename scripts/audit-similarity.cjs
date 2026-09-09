const fs = require('fs');
const path = require('path');

// The 10 flagged slugs
const flaggedSlugs = [
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

// Map of which data file each slug is in, and what "type" they might be
const dataDir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

// Find which file each slug belongs to
console.log("=== SLUG LOCATION MAP ===\n");
for (const slug of flaggedSlugs) {
  for (const f of files) {
    const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
    if (content.includes(`"${slug}"`)) {
      // Extract title around this slug
      const idx = content.indexOf(`"${slug}"`);
      const block = content.substring(idx, idx + 500);
      const titleMatch = block.match(/title:\s*["']([^"']+)["']/);
      const categoryMatch = block.match(/category:\s*["']([^"']+)["']/);
      const serviceMatch = block.match(/service:\s*["']([^"']+)["']/);
      const brandMatch = block.match(/brand:\s*["']([^"']+)["']/);
      
      console.log(`[${slug}]`);
      console.log(`  File: ${f}`);
      console.log(`  Title: ${titleMatch ? titleMatch[1] : '?'}`);
      console.log(`  Category: ${categoryMatch ? categoryMatch[1] : '?'}`);
      console.log(`  Service: ${serviceMatch ? serviceMatch[1] : '?'}`);
      console.log(`  Brand: ${brandMatch ? brandMatch[1] : '?'}`);
      console.log("");
      break;
    }
  }
}

// Now check the prerendered dist for content length (proxy for thin content)
console.log("\n=== CONTENT LENGTH CHECK (dist HTML) ===\n");
const distDir = path.join(process.cwd(), 'dist', 'blog');

for (const slug of flaggedSlugs) {
  const htmlPath = path.join(distDir, slug, 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    // Count unique words in visible text (strip HTML)
    const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ')
                         .trim();
    const wordCount = textOnly.split(' ').length;
    console.log(`[${slug}] HTML size: ${html.length} bytes, ~${wordCount} words`);
  }
}

// Compare with a few "normal" blog posts for baseline
console.log("\n=== BASELINE: Normal blog post sizes ===\n");
const baselines = ['samsung-reiniciando-sozinho-logo', 'troca-de-bateria-iphone-salvador-saude-100', 'como-saber-hora-trocar-bateria-iphone'];
for (const slug of baselines) {
  const htmlPath = path.join(distDir, slug, 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ')
                         .trim();
    const wordCount = textOnly.split(' ').length;
    console.log(`[${slug}] HTML size: ${html.length} bytes, ~${wordCount} words`);
  }
}
