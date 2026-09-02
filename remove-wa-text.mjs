import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Strings estáticas simples com aspas duplas ou simples
  // "https://wa.me/5571991981437?text=Olá! Gostaria..." -> "https://wa.me/5571991981437"
  content = content.replace(/["']https:\/\/wa\.me\/5571991981437\?text=[^"']+["']/g, '"https://wa.me/5571991981437"');

  // 2. Template literals (crases)
  // `https://wa.me/5571991981437?text=${encodeURIComponent(`...`)}` -> "https://wa.me/5571991981437"
  // Vamos usar uma regex que pega de `https até a última crase do statement
  content = content.replace(/`https:\/\/wa\.me\/5571991981437\?text=[^`]+`/g, '"https://wa.me/5571991981437"');

  // 3. Caso especial locaisData.ts (onde a variável WHATSAPP_NUMBER é usada)
  // `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  content = content.replace(/`https:\/\/wa\.me\/\$\{WHATSAPP_NUMBER\}\?text=[^`]+`/g, '`https://wa.me/${WHATSAPP_NUMBER}`');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Atualizado: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walk(srcDir);
console.log('Script finalizado.');
