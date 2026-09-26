const fs = require('fs');

let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

// Replace the buggy generatePage with the final cleaned up one
// I will extract everything between `function generatePage` and `console.log(Gerado SSG`

const newGeneratePage = `function generatePage(urlPath: string, title: string, description: string, h1: string, contentHtml: string, schemaObj: any = null) {
  const fullUrl = \`\${DOMAIN}\${urlPath}\`;
  
  let html = template;
  
  html = html.replace(/<title>.*?<\\/title>/, \`<title>\${title}</title>\`);
  html = html.replace(/<meta name="description" content=".*?"\\s*\\/?>/,  \`<meta name="description" content="\${description}">\`);
  html = html.replace(/<link rel="canonical" href=".*?"\\s*\\/?>/,  \`<link rel="canonical" href="\${fullUrl}" />\`);
  html = html.replace(/<meta property="og:title" content=".*?"\\s*\\/?>/,  \`<meta property="og:title" content="\${title}">\`);
  html = html.replace(/<meta property="og:description" content=".*?"\\s*\\/?>/,  \`<meta property="og:description" content="\${description}">\`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\\s*\\/?>/,  \`<meta name="twitter:title" content="\${title}">\`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\\s*\\/?>/,  \`<meta name="twitter:description" content="\${description}">\`);

  if (schemaObj) {
      const schemaScript = \`\\n    <script type="application/ld+json">\\n    \${JSON.stringify(schemaObj)}\\n    </script>\\n\`;
      html = html.replace('</head>', \`\${schemaScript}</head>\`);
  }

  const outDir = path.join(distPath, urlPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(\`Gerado SSG: \${urlPath}\`);
}`;

code = code.replace(/function generatePage[\s\S]*?console\.log\(`Gerado SSG: \$\{urlPath\}`\);\n\}/, newGeneratePage);

fs.writeFileSync('scripts/prerender.ts', code);
console.log('Patched generatePage properly!');
