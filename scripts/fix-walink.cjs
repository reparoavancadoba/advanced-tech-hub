const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src/pages/BlogPost.tsx');

let content = fs.readFileSync(file, 'utf8');

const regex = /const topic = [^;]+;[\s\S]*?const waLink = [^;]+;/;
const replacement = `const topic = post.title || \`\${post.service} \${post.model}\`;
  const customMessage = \`Olá! Vi o artigo sobre \${topic} no blog de vocês e gostaria de um orçamento.\`;
  const waLink = \`https://wa.me/5571991981437?text=\${encodeURIComponent(customMessage)}\`;`;

content = content.replace(regex, replacement);

fs.writeFileSync(file, content);
console.log("Fixed!");
