const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "src/data");
const files = fs.readdirSync(dataDir).filter(f => f.startsWith("editorialPosts") && f.endsWith(".ts"));

console.log("=== CORRIGINDO CORRUPÇÕES DE MARCA ===");
let totalFixed = 0;

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, "utf8");
  
  // Substituir variações incorretas de "___ Avançado" para "Reparo Avançado"
  // Focamos em palavras conhecidas que foram injetadas.
  // 1. conserto Avançado (case-insensitive para a primeira palavra)
  // 2. avaliação Avançado
  // 3. Diagnóstico Avançado
  
  const regexes = [
    { pattern: /[Cc]onserto Avançado/g, replace: "Reparo Avançado" },
    { pattern: /[Aa]valiação Avançado/g, replace: "Reparo Avançado" },
    { pattern: /[Dd]iagnóstico Avançado/g, replace: "Reparo Avançado" },
    { pattern: /[Cc]onserto avançado/g, replace: "Reparo Avançado" },
  ];
  
  let changed = false;
  regexes.forEach(({ pattern, replace }) => {
    const matches = content.match(pattern);
    if (matches) {
      totalFixed += matches.length;
      content = content.replace(pattern, replace);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Corrigido em: ${file}`);
  }
});

console.log(`-> Total de corrupções substituídas: ${totalFixed}`);
