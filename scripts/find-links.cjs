const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

console.log("=== STARTING AUDIT ===");

for (const f of files) {
  const filePath = path.join(dataDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find markdown links `[text](/path)` or HTML `href="/path"`
  const regex = /(?:href=["']|\]\()(\/[^\s'"\)]+)/g;
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    console.log(`[${f}] Link: ${match[1]}`);
  }
}
console.log("=== END OF AUDIT ===");
