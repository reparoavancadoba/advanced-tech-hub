import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, 'src', 'data', 'editorialPostsBatch3.ts');
let content = fs.readFileSync(file, 'utf8');

// Achar a posicao de slug: "meu-celular-caiu-na-agua-o-que-fazer"
const searchStr = 'slug: "meu-celular-caiu-na-agua-o-que-fazer"';
const idx = content.indexOf(searchStr);

if (idx !== -1) {
  // Achar o início do objeto "{"
  let startIdx = content.lastIndexOf('{', idx);
  
  // Achar o final do objeto "}" (cuidado com as chaves internas)
  let braces = 1;
  let endIdx = startIdx + 1;
  while(braces > 0 && endIdx < content.length) {
    if (content[endIdx] === '{') braces++;
    if (content[endIdx] === '}') braces--;
    endIdx++;
  }
  
  // Inclui uma possivel virgula depois
  if (content[endIdx] === ',') endIdx++;
  
  content = content.slice(0, startIdx) + content.slice(endIdx);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Removido com sucesso de editorialPostsBatch3.ts");
} else {
  console.log("Nao encontrado.");
}
