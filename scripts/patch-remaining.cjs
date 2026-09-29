const fs = require('fs');
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

// PATCH 1a:
prerender = prerender.replace(
  /contentHtml \+\= \`<h2>O Problema: \$\{post\.service\} \$\{post\.model\}<\/h2>\`;\s*if \(post\.problems && post\.problems\.length\) contentHtml \+\= \`<ul>\$\{post\.problems\.map\(\(p: string\) => \`<li>\$\{p\}<\/li>\`\)\.join\(''\)\}<\/ul>\`;\s*contentHtml \+\= \`<h2>Causas Comuns<\/h2>\`;\s*if \(post\.causes && post\.causes\.length\) contentHtml \+\= \`<ul>\$\{post\.causes\.map\(\(c: string\) => \`<li>\$\{c\}<\/li>\`\)\.join\(''\)\}<\/ul>\`;/g,
  `if (!post.isEditorial) {
    contentHtml += \`<h2>O Problema: \${post.service} \${post.model}</h2>\`;
    if (post.problems && post.problems.length) contentHtml += \`<ul>\${post.problems.map((p: string) => \`<li>\${p}</li>\`).join('')}</ul>\`;
    contentHtml += \`<h2>Causas Comuns</h2>\`;
    if (post.causes && post.causes.length) contentHtml += \`<ul>\${post.causes.map((c: string) => \`<li>\${c}</li>\`).join('')}</ul>\`;
  }`
);

// PATCH 1b:
prerender = prerender.replace(
  /if \(post\.solution\) contentHtml \+\= \`<h2>Solução Técnica da Reparo Avançado<\/h2>\$\{parseMarkdown\(post\.solution\)\}\`;\s*if \(post\.whenToSeek\) contentHtml \+\= \`<h2>Quando Procurar a Reparo Avançado<\/h2>\$\{parseMarkdown\(post\.whenToSeek\)\}\`;\s*if \(post\.costInfo\) contentHtml \+\= \`<h2>Quanto Custa \$\{post\.service\} \$\{post\.model\}\?<\/h2>\$\{parseMarkdown\(post\.costInfo\)\}\`;/g,
  `if (!post.isEditorial) {
    if (post.solution) contentHtml += \`<h2>Solução Técnica da Reparo Avançado</h2>\${parseMarkdown(post.solution)}\`;
    if (post.whenToSeek) contentHtml += \`<h2>Quando Procurar a Reparo Avançado</h2>\${parseMarkdown(post.whenToSeek)}\`;
    if (post.costInfo) contentHtml += \`<h2>Quanto Custa \${post.service} \${post.model}?</h2>\${parseMarkdown(post.costInfo)}\`;
  }`
);

// PATCH 5b:
prerender = prerender.replace(
  /let contentHtml = page\.content;\s*contentHtml = contentHtml\.replace\(\/\^## \(\.\*\$\)\/gim, '<h2>\$1<\/h2>'\);\s*contentHtml = contentHtml\.replace\(\/\\\*\\\*\(\.\*\?\)\\\*\\\*\/gim, '<strong>\$1<\/strong>'\);\s*contentHtml = contentHtml\.replace\(\/\(\?:\^- \.\*\\n\?\)\+\/gim, \(match\) => \{\s*const items = match\.trim\(\)\.split\('\\n'\)\.map\(line => \`<li>\$\{line\.replace\(\/\^- \/, ''\)\}<\/li>\`\)\.join\(''\);\s*return \`<ul>\$\{items\}<\/ul>\`;\s*\}\);\s*contentHtml = contentHtml\.replace\(\/\^\(\?!<\(\?:h2\|ul\|li\)>\$\)\.\+\/gim, '<p>console\.log\("✅ Prerender finalizado\."\);<\/p>'\);/g,
  `let contentHtml = parseMarkdown(page.content);`
);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Regex patches applied');
