const fs = require('fs');

let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

const parseMarkdownFunc = `
function parseMarkdown(text) {
  if (!text) return '';
  let html = text;
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>');
  
  html = html.replace(/(?:^[\\*\\-] .*(?:\\r?\\n)?)+/gim, (match) => {
      const items = match.trim().split(/\\r?\\n/).map(line => \`<li>\${line.replace(/^[\\*\\-]\\s+/, '')}</li>\`).join('');
      return \`<ul>\${items}</ul>\`;
  });
  
  html = html.split(/\\r?\\n\\r?\\n+/).map(para => {
    if (para.trim() === '') return '';
    if (para.startsWith('<h') || para.startsWith('<ul')) return para;
    return \`<p>\${para.trim()}</p>\`;
  }).join('');
  
  return html;
}
`;

// Inject function at the top after imports
if (!code.includes('function parseMarkdown')) {
  code = code.replace(
    'const mergedSlugs',
    parseMarkdownFunc + '\nconst mergedSlugs'
  );
}

// Replace the blog post building logic
code = code.replace(
  'contentHtml += `<h2>${section.title}</h2><p>${section.content}</p>`;',
  'contentHtml += `<h2>${section.title}</h2>${parseMarkdown(section.content)}`;'
);

code = code.replace(
  'contentHtml += `<h3>${sub.title}</h3><p>${sub.content}</p>`;',
  'contentHtml += `<h3>${sub.title}</h3>${parseMarkdown(sub.content)}`;'
);

// Second half replacement
code = code.replace(
  'contentHtml += `<h2>${section.title}</h2><p>${section.content}</p>`;',
  'contentHtml += `<h2>${section.title}</h2>${parseMarkdown(section.content)}`;'
);

code = code.replace(
  'contentHtml += `<h3>${sub.title}</h3><p>${sub.content}</p>`;',
  'contentHtml += `<h3>${sub.title}</h3>${parseMarkdown(sub.content)}`;'
);

// Replace post.solution, whenToSeek, costInfo which might also have markdown!
code = code.replace(
  'if (post.solution) contentHtml += `<h2>Solução Técnica da Reparo Avançado</h2><p>${post.solution}</p>`;',
  'if (post.solution) contentHtml += `<h2>Solução Técnica da Reparo Avançado</h2>${parseMarkdown(post.solution)}`;'
);
code = code.replace(
  'if (post.whenToSeek) contentHtml += `<h2>Quando Procurar a Reparo Avançado</h2><p>${post.whenToSeek}</p>`;',
  'if (post.whenToSeek) contentHtml += `<h2>Quando Procurar a Reparo Avançado</h2>${parseMarkdown(post.whenToSeek)}`;'
);
code = code.replace(
  'if (post.costInfo) contentHtml += `<h2>Quanto Custa ${post.service} ${post.model}?</h2><p>${post.costInfo}</p>`;',
  'if (post.costInfo) contentHtml += `<h2>Quanto Custa ${post.service} ${post.model}?</h2>${parseMarkdown(post.costInfo)}`;'
);


fs.writeFileSync('scripts/prerender.ts', code);
console.log('Prerender Markdown parser added.');
