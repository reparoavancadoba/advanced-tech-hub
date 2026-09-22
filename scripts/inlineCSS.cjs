const fs = require('fs');
const path = require('path');
let content = fs.readFileSync('scripts/prerender.ts', 'utf8');

if (!content.includes('<style>')) {
  // It reads `const indexHtml = fs.readFileSync(...)`
  const replacement = `const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
    const distAssets = fs.readdirSync(path.resolve(__dirname, '../dist/assets'));
    const cssFile = distAssets.find(f => f.endsWith('.css'));
    let inlinedHtml = indexHtml;
    if (cssFile) {
      const cssContent = fs.readFileSync(path.resolve(__dirname, '../dist/assets', cssFile), 'utf-8');
      inlinedHtml = inlinedHtml.replace(/<link rel="stylesheet"[^>]*>/, '<style>' + cssContent + '</style>');
    }`;
  
  content = content.replace(/const indexHtml = fs\.readFileSync\(indexHtmlPath, 'utf-8'\);/g, replacement);
  // Then replace the variable usage
  content = content.replace(/let html = indexHtml\.replace/g, 'let html = inlinedHtml.replace');
  
  fs.writeFileSync('scripts/prerender.ts', content);
  console.log('Added CSS inlining to prerender.ts');
}
