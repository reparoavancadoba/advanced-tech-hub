const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch3.ts', 'utf8');

// The file has two "sections: [" arrays for aviso-umidade-detectada.
// Let's remove the first one entirely, and prepend its object to the second one.

// Let's just find the exact block and replace it.
const badBlock = `
        sections: [
          {
            id: "aviso-umidade",
            title: "Aviso de umidade aparecendo na tela do celular: o que significa",
            content: "O aviso de umidade aparece quando o celular detecta líquido ou sujeira úmida no conector de carga. É uma proteção: o aparelho bloqueia o carregamento pelo cabo até o conector secar. Em muitos casos, o aviso some sozinho depois que o conector seca. Evite colocar objetos dentro do conector e não use calor direto para secar."
          }
        ],
      author: "Equipe Reparo Avançado",`;

const goodBlock = `
      author: "Equipe Reparo Avançado",`;

// We remove the bad block.
content = content.replace(badBlock, goodBlock);

// And prepend the object to the existing sections array.
const existingSections = `
      sections: [
        {`;

const newSections = `
      sections: [
        {
          id: "aviso-umidade",
          title: "Aviso de umidade aparecendo na tela do celular: o que significa",
          content: "O aviso de umidade aparece quando o celular detecta lquido ou sujeira mida no conector de carga.  uma proteo: o aparelho bloqueia o carregamento pelo cabo at o conector secar. Em muitos casos, o aviso some sozinho depois que o conector seca. Evite colocar objetos dentro do conector e no use calor direto para secar."
        },
        {`;
content = content.replace(existingSections, newSections);
fs.writeFileSync('src/data/editorialPostsBatch3.ts', content);
console.log('Fixed syntax error in editorialPostsBatch3.ts');
