const fs = require('fs');

let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Replace the schema injection block
const oldBlock = `  if (schemaScript) {\r\n      html = html.replace('</head>', \`\${schemaScript}</head>\`);\r\n  }`;

const newBlock = `  // Inject style to hide pre-rendered content from visual display (crawlers still read it)
  const seoHideStyle = '<style>[data-seo-prerender]{height:0;overflow:hidden;opacity:0;position:absolute;pointer-events:none}</style>';
  html = html.replace('</head>', \`\${seoHideStyle}\${schemaScript}</head>\`);`;

if (code.includes(oldBlock)) {
  code = code.replace(oldBlock, newBlock);
  fs.writeFileSync('scripts/prerender.ts', code);
  console.log('Patched successfully');
} else {
  // Try with LF only
  const oldBlockLF = oldBlock.replace(/\r\n/g, '\n');
  if (code.includes(oldBlockLF)) {
    code = code.replace(oldBlockLF, newBlock);
    fs.writeFileSync('scripts/prerender.ts', code);
    console.log('Patched successfully (LF)');
  } else {
    console.log('Target not found');
    // Show what's around line 93
    const lines = code.split(/\r?\n/);
    console.log('Lines 92-96:');
    console.log(JSON.stringify(lines.slice(91, 96)));
  }
}
