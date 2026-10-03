const fs = require('fs');

let content = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Replace the block-scoped declaration
content = content.replace(
  /if \(!post\.isEditorial\) \{\s*const displayModelH2 = \(\!post\.model \|\| post\.model\.toLowerCase\(\) === "todos"\) \? "" : ` \$\{post\.model\}`;/,
  `const displayModelH2 = (!post.model || post.model.toLowerCase() === "todos") ? "" : \` \${post.model}\`;
  if (!post.isEditorial) {`
);

fs.writeFileSync('scripts/prerender.ts', content);
console.log('Fixed block-scope in prerender');
