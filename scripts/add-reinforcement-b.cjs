const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch3.ts', 'utf8');

// ─── Reforço B: celular-xiaomi-nao-liga-o-que-fazer ─────────────────────────
const xiaomiOld = `[/DICA]\"\r\n      }\r\n    ]\r\n  },\r\n  {\r\n    slug: \"como-saber-hora-trocar-bateria-iphone\"`;
const xiaomiNew = `[/DICA]\"\r\n      },\r\n      {\r\n        id: \"poco-x3-placa\",\r\n        title: \"POCO X3: quando o problema é a placa, não a bateria\",\r\n        content: \"No POCO X3 especificamente, quando o aparelho não liga mesmo depois de carregado por horas, o problema tem mais chance de estar na placa do que nos modelos Redmi comuns — o POCO X3 tem histórico de falha em componentes de alimentação na placa. Vale priorizar o diagnóstico de placa se as tentativas básicas (outro carregador, reinicialização forçada) não resolverem.\"\r\n      }\r\n    ]\r\n  },\r\n  {\r\n    slug: \"como-saber-hora-trocar-bateria-iphone\"`;

if (content.includes(xiaomiOld)) {
  content = content.replace(xiaomiOld, xiaomiNew);
  fs.writeFileSync('src/data/editorialPostsBatch3.ts', content);
  console.log('✅ Reinforcement B added to celular-xiaomi-nao-liga-o-que-fazer');
} else {
  console.log('❌ Reinforcement B: target not found');
  // Try LF only
  const xiaomiOld2 = `[/DICA]\"\n      }\n    ]\n  },\n  {\n    slug: "como-saber-hora-trocar-bateria-iphone"`;
  if (content.includes(xiaomiOld2)) {
    const xiaomiNew2 = `[/DICA]\"\n      },\n      {\n        id: "poco-x3-placa",\n        title: "POCO X3: quando o problema é a placa, não a bateria",\n        content: "No POCO X3 especificamente, quando o aparelho não liga mesmo depois de carregado por horas, o problema tem mais chance de estar na placa do que nos modelos Redmi comuns — o POCO X3 tem histórico de falha em componentes de alimentação na placa. Vale priorizar o diagnóstico de placa se as tentativas básicas (outro carregador, reinicialização forçada) não resolverem."\n      }\n    ]\n  },\n  {\n    slug: "como-saber-hora-trocar-bateria-iphone"`;
    content = content.replace(xiaomiOld2, xiaomiNew2);
    fs.writeFileSync('src/data/editorialPostsBatch3.ts', content);
    console.log('✅ Reinforcement B added (LF variant)');
  } else {
    console.log('❌ Still not found');
  }
}
