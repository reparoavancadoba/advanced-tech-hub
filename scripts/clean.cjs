const fs = require('fs');
let c = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

let lines = c.split('\n');

// Find lines from 39 to 44 and clear them
// 39 |  
// 40 |    
// 41 |        { question: "A bateria instalada exibe a saúde nos ajustes?", answer: "Sim. ...
// 42 |        { question: "O conserto de placa do iPhone apaga meus dados?", answer: "O reparo de placa ...
// 43 |      ]
// 44 |  },

for (let i = 39; i <= 44; i++) {
  lines[i] = '';
}

fs.writeFileSync('src/data/servicosConsolidadosData.ts', lines.join('\n'));
console.log('Fixed lines 39-44.');
