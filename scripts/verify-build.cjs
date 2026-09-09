const fs = require('fs');
const path = require('path');

const distBlogPath = path.join(process.cwd(), 'dist/blog');
if (!fs.existsSync(distBlogPath)) {
  console.log("Pasta dist/blog não encontrada!");
  process.exit(1);
}

const folders = fs.readdirSync(distBlogPath);
let total = 0;
let cleanCount = 0;
let problems = [];

for (const folder of folders) {
  const indexPath = path.join(distBlogPath, folder, 'index.html');
  if (fs.existsSync(indexPath)) {
    total++;
    const content = fs.readFileSync(indexPath, 'utf8');
    let fileProblems = [];

    // 1. Resumo duplicado
    // Se "Resumo:" ou "<strong>Resumo:</strong>" aparecer > 1 vez
    const resumoCount = (content.match(/<strong>Resumo:<\/strong>/g) || []).length;
    if (resumoCount > 1) {
      fileProblems.push("Resumo duplicado");
    }

    // 2. Mojibake pattern
    const mojibakePattern = /Ã[¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß]/;
    if (mojibakePattern.test(content)) {
      fileProblems.push("Mojibake encontrado (caractere corrompido)");
    }

    // 3. Wrong WA numbers (anything 5571... that is not 5571991981437)
    const waMatches = content.match(/5571\d{8,9}/g) || [];
    const wrongWa = waMatches.filter(n => n !== "5571991981437");
    if (wrongWa.length > 0) {
      fileProblems.push("WhatsApp errado encontrado: " + wrongWa[0]);
    }

    // 4. Brand corruption
    if (/conserto Avançado/i.test(content) || /avaliação Avançado/i.test(content) || /Diagnóstico Avançado/i.test(content) || /avaliação avançado/i.test(content)) {
      fileProblems.push("Corrupção de marca encontrada");
    }

    if (fileProblems.length > 0) {
      problems.push({ slug: folder, issues: fileProblems });
    } else {
      cleanCount++;
    }
  }
}

console.log("=== RELATÓRIO FINAL ===");
console.log(`- Total de artigos verificados: ${total}`);
console.log(`- Artigos 100% limpos: ${cleanCount}`);
console.log(`- Artigos com problema restante: ${problems.length}`);

if (problems.length > 0) {
  console.log("\nLista de problemas:");
  problems.forEach(p => {
    console.log(`  * ${p.slug}: ${p.issues.join(", ")}`);
  });
}
