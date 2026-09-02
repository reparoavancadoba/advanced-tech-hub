const fs = require('fs');

let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Replace the condition to check both .html and .js
code = code.replace(
  "else if (fullPath.endsWith('.html')) {", 
  "else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {"
);

fs.writeFileSync('scripts/prerender.ts', code, 'utf8');
