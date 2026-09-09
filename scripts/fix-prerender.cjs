const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'scripts/prerender.ts');

let content = fs.readFileSync(file, 'utf8');

// Fix WA number
content = content.replace(/5571999999999/g, "5571991981437");

// Fix duplicate Resumo logic in generatePage
content = content.replace(
  /<p><strong>Resumo:<\/strong> \$\{description\}<\/p>\s*\$\{contentHtml\}/, 
  '${contentHtml}'
);

// Fix mojibake
// We'll just replace the whole blocks that have mojibake because the file might be read with weird chars
content = content.replace(/if\s*\(post.tldr\)\s*contentHtml\s*\+=\s*`<h2>.*?<\/h2><p>\$\{post.tldr\}<\/p>`;/, 'if (post.tldr) contentHtml += `<h2>Direto ao Ponto (Resumo Rápido)</h2><p>${post.tldr}</p>`;');
content = content.replace(/<h2>Solu.*?nica da Reparo Avan.*?o<\/h2>/, '<h2>Solução Técnica da Reparo Avançado</h2>');
content = content.replace(/<h2>Quando Procurar a Reparo Avan.*?o<\/h2>/, '<h2>Quando Procurar a Reparo Avançado</h2>');
content = content.replace(/<h2>D.*?vidas Frequentes \(FAQ\)<\/h2>/, '<h2>Dúvidas Frequentes (FAQ)</h2>');
content = content.replace(/>Fale com um T.*?cnico no WhatsApp</, '>Fale com um Técnico no WhatsApp<');

fs.writeFileSync(file, content, 'utf8');
console.log("Fixed prerender.ts");
