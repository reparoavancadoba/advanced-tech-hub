const fs = require('fs');

let content = fs.readFileSync('src/data/editorialPostsBatch3.ts', 'utf8');

// The file has two "sections: [" arrays for aviso-umidade-detectada.
// Find the first "sections: [" right after "isEditorial: true,"
const regex = /(isEditorial: true,\s*)sections:\s*\[\s*\{\s*id:\s*"aviso-umidade"[\s\S]*?\}\s*\],\s*(author: "Equipe Reparo Avançado",)/;

if (regex.test(content)) {
    content = content.replace(regex, "$1$2");
    
    // Now prepend to the correct sections array
    content = content.replace(
      /(dateModified:\s*".*?",\s*faq:\s*\[[\s\S]*?\],\s*sections:\s*\[\s*)/,
      `$1{
          id: "aviso-umidade",
          title: "Aviso de umidade aparecendo na tela do celular: o que significa",
          content: "O aviso de umidade aparece quando o celular detecta líquido ou sujeira úmida no conector de carga. É uma proteção: o aparelho bloqueia o carregamento pelo cabo até o conector secar. Em muitos casos, o aviso some sozinho depois que o conector seca. Evite colocar objetos dentro do conector e não use calor direto para secar."
        },
        `
    );
    
    fs.writeFileSync('src/data/editorialPostsBatch3.ts', content);
    console.log('Fixed duplicate section in editorialPostsBatch3.ts');
} else {
    console.log('Duplicate section block not found or already fixed');
}
