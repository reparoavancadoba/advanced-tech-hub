const fs = require('fs');
let slugs = ['celular-carregamento-sem-fio-nao-funciona-salvador', 'notebook-esquentando-desligando-sozinho', 'notebook-lento-quando-trocar-ssd-resolve', 'vidro-traseiro-samsung-quebrado-troca-salvador'];
let newTitles = [
  'Carregamento Sem Fio Não Funciona? Veja as Causas',
  'Notebook Esquentando e Desligando Sozinho? Entenda',
  'Notebook Lento: Quando o SSD Realmente Resolve?',
  'Vidro Traseiro do Samsung Quebrado? Como Consertar'
];

for (let i=1; i<=10; i++) {
  let file = i === 1 ? 'src/data/editorialPosts.ts' : 'src/data/editorialPostsBatch' + i + '.ts';
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    slugs.forEach((slug, idx) => {
      if (content.includes(slug)) {
        let regex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?title:\\s*['"])(.*?)(['"])`);
        content = content.replace(regex, `$1${newTitles[idx]}$3`);
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(file, content);
      console.log('Updated', file);
    }
  }
}
