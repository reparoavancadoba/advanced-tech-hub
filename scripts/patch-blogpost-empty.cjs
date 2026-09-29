const fs = require('fs');

let code = fs.readFileSync('src/pages/BlogPost.tsx', 'utf8');

// Using regex for flexibility
const replaceSintomas = (str) => str.replace(
  /<section id="sintomas">[\s\S]*?<\/section>/g,
  `{post.problems && post.problems.length > 0 && (
$&
)}`
);

const replaceCausas = (str) => str.replace(
  /<section id="causas">[\s\S]*?<\/section>/g,
  `{post.causes && post.causes.length > 0 && (
$&
)}`
);

const replaceSolucao = (str) => str.replace(
  /<section id="solucao">[\s\S]*?<\/section>/g,
  `{post.solution && post.solution.trim() !== '' && (
$&
)}`
);

const replaceQuando = (str) => str.replace(
  /<section id="quando">[\s\S]*?<\/section>/g,
  `{post.whenToSeek && post.whenToSeek.trim() !== '' && (
$&
)}`
);

const replaceCusto = (str) => str.replace(
  /<section id="custo">[\s\S]*?<\/section>/g,
  `{post.costInfo && post.costInfo.trim() !== '' && (
$&
)}`
);

code = replaceSintomas(code);
code = replaceCausas(code);
code = replaceSolucao(code);
code = replaceQuando(code);
code = replaceCusto(code);

fs.writeFileSync('src/pages/BlogPost.tsx', code);
console.log("Patched successfully");
