const fs = require('fs');

let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Find where "console.log('Gerado SSG: / (homepage) -> index.html" is
const marker = "console.log('Gerado SSG: / (homepage) -> index.html (conteudo SEO do Hero injetado)');";
const splitCode = code.split(marker);

const newCheck = `
// 6. Pre-build Mojibake Check (Pure Node.js implementation)
function checkMojibake(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkMojibake(fullPath);
    } else if (fullPath.endsWith('.html')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Mojibake regex for common Latin-1 encoding issues disguised as UTF-8
      const mojibakePattern = /Ã[£©§ªóíáµ]/;
      
      if (mojibakePattern.test(content)) {
        console.error('❌ MOJIBAKE FOUND IN FILE: ' + fullPath);
        console.error('MATCHED STRING:', content.match(new RegExp('.{0,20}' + mojibakePattern.source + '.{0,20}'))[0]);
        process.exit(1); // Fail the build!
      }
    }
  }
}

try {
  console.log('Running Mojibake preventative check...');
  checkMojibake(distPath);
  console.log('✅ No mojibake found in generated HTML files.');
} catch (e) {
  console.error('❌ Error running mojibake check:', e);
  process.exit(1);
}
`;

const finalCode = splitCode[0] + marker + "\n\n" + newCheck;
fs.writeFileSync('scripts/prerender.ts', finalCode, 'utf8');
