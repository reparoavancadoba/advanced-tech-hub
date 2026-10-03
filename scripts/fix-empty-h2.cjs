const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

const anchor = `generatePage(urlPath, title, description, h1, contentHtml, blogSchema);`;
const replace = `contentHtml = contentHtml.replace(/<h2>\\s*<\\/h2>/g, '');\n  generatePage(urlPath, title, description, h1, contentHtml, blogSchema);`;

if (prerender.includes(anchor)) {
    prerender = prerender.replace(anchor, replace);
    fs.writeFileSync('scripts/prerender.ts', prerender);
    console.log('✅ Injected <h2></h2> cleanup');
} else {
    console.log('❌ Anchor not found');
}
