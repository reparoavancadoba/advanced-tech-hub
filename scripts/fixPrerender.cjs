const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('scripts/prerender.ts', 'utf8');

// I need to change:
// const template = fs.readFileSync(indexHtmlPath, 'utf-8');
// to:
// let template = fs.readFileSync(indexHtmlPath, 'utf-8');
// const distAssets = fs.readdirSync(path.resolve(__dirname, '../dist/assets'));
// const cssFile = distAssets.find(f => f.endsWith('.css'));
// if (cssFile) {
//   const cssContent = fs.readFileSync(path.resolve(__dirname, '../dist/assets', cssFile), 'utf-8');
//   template = template.replace(/<link rel="stylesheet"[^>]*>/, '<style>' + cssContent + '</style>');
// }

if (!content.includes('cssFile')) {
  content = content.replace(/const template = fs\.readFileSync\(indexHtmlPath, 'utf-8'\);/, 
  `let template = fs.readFileSync(indexHtmlPath, 'utf-8');
    const distAssets = fs.readdirSync(path.resolve(__dirname, '../dist/assets'));
    const cssFile = distAssets.find(f => f.endsWith('.css'));
    if (cssFile) {
      const cssContent = fs.readFileSync(path.resolve(__dirname, '../dist/assets', cssFile), 'utf-8');
      template = template.replace(/<link rel="stylesheet"[^>]*>/, '<style>' + cssContent + '</style>');
    }`);
  fs.writeFileSync('scripts/prerender.ts', content);
  console.log('Fixed CSS inlining');
}
