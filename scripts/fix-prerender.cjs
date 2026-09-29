const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

const badCode = `let contentHtml = page.content;
    contentHtml = contentHtml.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    contentHtml = contentHtml.replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>');
    
    contentHtml = contentHtml.replace(/(?:^- .*\\n?)+/gim, (match) => {
        const items = match.trim().split('\\n').map(line => \`<li>\${line.replace(/^- /, '')}</li>\`).join('');
        return \`<ul>\${items}</ul>\`;
    });
    
    contentHtml = contentHtml.replace(/^(?!<(?:h2|ul|li)>|$).+/gim, '<p>console.log("✅ Prerender finalizado.");</p>');`;

if (prerender.includes(badCode)) {
    prerender = prerender.replace(badCode, `let contentHtml = parseMarkdown(page.content);`);
    console.log('✅ Bad regex replaced with parseMarkdown');
} else {
    console.log('❌ Bad regex NOT FOUND!');
    // Fallback: search for console.log("✅ Prerender finalizado.")
    const p1 = prerender.indexOf('let contentHtml = page.content;');
    const p2 = prerender.indexOf('console.log("✅ Prerender finalizado.");</p>\');');
    if (p1 > -1 && p2 > -1) {
        const toReplace = prerender.substring(p1, p2 + 48);
        prerender = prerender.replace(toReplace, 'let contentHtml = parseMarkdown(page.content);');
        console.log('✅ Replaced using substring extraction');
    }
}

fs.writeFileSync('scripts/prerender.ts', prerender);
