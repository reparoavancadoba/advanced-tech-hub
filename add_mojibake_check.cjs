const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

const checkCode = `
// 6. Pre-build Mojibake Check
function checkMojibake(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkMojibake(fullPath);
    } else if (fullPath.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (/[\\xc3][\\xa3\\xa9\\xa7\\xaa\\xb3\\xad\\xe1\\xb5]/.test(content) || /Ã[£©§ªóíáµ]/.test(content)) {
        console.error('❌ MOJIBAKE FOUND IN FILE: ' + fullPath);
        process.exit(1);
      }
    }
  }
}

try {
  console.log('Running Mojibake preventative check...');
  checkMojibake(distPath);
  console.log('✅ No mojibake found in generated HTML files.');
} catch (e) {
  console.error('Error running mojibake check:', e);
  process.exit(1);
}
`;

fs.writeFileSync('scripts/prerender.ts', code + '\n' + checkCode);
