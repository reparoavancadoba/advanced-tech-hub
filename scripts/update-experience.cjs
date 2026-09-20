const fs = require('fs');

let modifiedCount = 0;
let modifiedFiles = [];

const replaceInFile = (file, searchStr, replaceStr) => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(searchStr)) {
    let occurrences = content.split(searchStr).length - 1;
    content = content.split(searchStr).join(replaceStr);
    fs.writeFileSync(file, content);
    modifiedCount += occurrences;
    if (!modifiedFiles.includes(file)) modifiedFiles.push(file);
    console.log(`Replaced ${occurrences} occurrences in ${file}`);
  }
};

const replaceRegexInFile = (file, regex, replaceStr) => {
  let content = fs.readFileSync(file, 'utf8');
  let match = content.match(regex);
  if (match) {
    let occurrences = match.length;
    content = content.replace(regex, replaceStr);
    fs.writeFileSync(file, content);
    modifiedCount += occurrences;
    if (!modifiedFiles.includes(file)) modifiedFiles.push(file);
    console.log(`Replaced ${occurrences} occurrences in ${file} (Regex)`);
  }
};

replaceInFile('src/config/business.ts', 'experience: "mais de 7 anos"', 'experience: "desde 2018"');

replaceInFile('src/pages/Atendimento.tsx', 'mais de 7 anos de tradição', 'tradição desde 2018');
replaceInFile('src/pages/LocalConsolidado.tsx', 'mais de 7 anos de experiência', 'experiência desde 2018');
replaceInFile('src/pages/Orcamento.tsx', 'mais de 7 anos de experiência', 'experiência desde 2018');
replaceRegexInFile('src/pages/Index.tsx', /Mais de 7 anos de experiência/i, 'Experiência desde 2018');

console.log('Total replaced:', modifiedCount);
console.log('Files changed:', modifiedFiles);
