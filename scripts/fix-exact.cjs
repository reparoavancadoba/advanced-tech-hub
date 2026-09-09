const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

for (const f of files) {
  const filePath = path.join(dataDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('Celular Descarregando Rápido em Salvador? Reparo Avançado Resolve!')) {
    console.log(`Found in ${f}`);
    content = content.replace('Celular Descarregando Rápido em Salvador? Reparo Avançado Resolve!', 'Celular Descarregando Rápido em Salvador? Reparo Avançado');
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log("Done");
