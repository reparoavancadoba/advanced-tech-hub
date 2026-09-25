const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch3.ts', 'utf8');

// ─── Reforço A: celular-motorola-nao-carrega ────────────────────────────────
const motoOld = `[/DICA]\"\r\n      }\r\n    ]\r\n  },\r\n  {\r\n    slug: \"diferenca-tela-original-primeira-linha\"`;
const motoNew = `[/DICA]\"\r\n      },\r\n      {\r\n        id: \"moto-g8-conector\",\r\n        title: \"Moto G8: o defeito mais comum de conector de carga\",\r\n        content: \"O Moto G8 tem um histórico conhecido de falha no conector de carga — é um dos modelos Motorola com mais relatos desse problema especificamente. Se o seu Moto G8 só carrega em posições específicas do cabo, ou parou de reconhecer o carregador, o conector costuma ser o primeiro suspeito, antes mesmo da bateria.\"\r\n      }\r\n    ]\r\n  },\r\n  {\r\n    slug: \"diferenca-tela-original-primeira-linha\"`;

if (content.includes(motoOld)) {
  content = content.replace(motoOld, motoNew);
  console.log('✅ Reinforcement A added to celular-motorola-nao-carrega');
} else {
  console.log('❌ Reinforcement A: target not found');
}

// ─── Reforço B: celular-xiaomi-nao-liga-o-que-fazer ─────────────────────────
// The xiaomi article closes with the content and then the next article/section
const idx = content.indexOf("Hard Reset For");
const ctx = content.substring(idx - 10, idx + 500);
console.log('Xiaomi closing context:');
console.log(JSON.stringify(ctx));

fs.writeFileSync('src/data/editorialPostsBatch3.ts', content);
