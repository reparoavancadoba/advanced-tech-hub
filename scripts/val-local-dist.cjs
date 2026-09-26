const fs = require('fs');
const path = require('path');

// Check LOCAL dist files for the actual hidden-text div (not Tailwind CSS classes)
const pages = [
  'dist/index.html',
  'dist/troca-de-tela/index.html',
  'dist/conserto-de-iphone/index.html',
  'dist/assistencia-tecnica-salvador/index.html',
  'dist/assistencia-tecnica-brotas/index.html',
  'dist/assistencia-tecnica-pituba/index.html',
  'dist/blog/iphone-11-nao-carrega-conector-ou-bateria/index.html',
  'dist/blog/como-economizar-bateria-do-celular/index.html',
  'dist/blog/celular-xiaomi-nao-liga-o-que-fazer/index.html',
  'dist/blog/bateria-do-celular-estufada-e-perigoso-o-que-fazer/index.html',
];

let cleanCount = 0;
let totalPages = 0;

for (const file of pages) {
  if (!fs.existsSync(file)) {
    console.log(`⚠️  ${file}: NOT FOUND`);
    continue;
  }
  totalPages++;
  const html = fs.readFileSync(file, 'utf8');
  
  // Look for the actual hidden-text content div (data-seo-prerender attribute)
  const hasSeoPrerender = html.includes('data-seo-prerender');
  
  // Look for position:absolute;width:1px;height:1px OUTSIDE of <style> tags
  // Strip all <style>...</style> blocks first
  const htmlNoStyle = html.replace(/<style[\s\S]*?<\/style>/gi, '');
  const hasHiddenDivInContent = htmlNoStyle.includes('position:absolute;width:1px;height:1px') ||
                                 (htmlNoStyle.includes('clip:rect(0,0,0,0)') && htmlNoStyle.includes('width:1px'));
  
  if (hasSeoPrerender || hasHiddenDivInContent) {
    console.log(`❌ ${file}: STILL HAS HIDDEN DIV`);
    if (hasSeoPrerender) console.log('   → Found data-seo-prerender attribute');
    if (hasHiddenDivInContent) console.log('   → Found hidden CSS in body content (not <style>)');
  } else {
    console.log(`✅ ${file}: CLEAN`);
    cleanCount++;
  }
}

console.log(`\nLocal dist results: ${cleanCount}/${totalPages} pages are clean.`);

// Also check what the production validator was catching
console.log('\n--- Diagnosing production false positive ---');
const homeHtml = fs.readFileSync('dist/index.html', 'utf8');
const allMatches = [...homeHtml.matchAll(/clip:rect\(0,0,0,0\)/g)];
console.log(`Total "clip:rect(0,0,0,0)" in dist/index.html: ${allMatches.length}`);

// Check where they appear (inside <style> or not)
const styleContent = homeHtml.match(/<style[\s\S]*?<\/style>/gi) || [];
let inStyleCount = 0;
for (const s of styleContent) {
  inStyleCount += (s.match(/clip:rect\(0,0,0,0\)/g) || []).length;
}
console.log(`  Inside <style> tags: ${inStyleCount}`);
console.log(`  Outside <style> tags (BAD): ${allMatches.length - inStyleCount}`);
