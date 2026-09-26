const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

prerender = prerender.replace(
  '<div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;" data-seo-prerender="true">',
  '<div id="seo-prerender" data-seo-prerender="true" style="font-size:16px;color:#333;line-height:1.6;padding:20px;max-width:800px;margin:0 auto;font-family:sans-serif;">'
);

// We should also remove the custom `homeVisibleBlock` logic I added earlier, since the main block is now visible anyway.
prerender = prerender.replace(
  `  // For the home page, also inject a visible SEO paragraph (not hidden) so
  // crawlers that don't execute JS (GPTBot, ClaudeBot, etc.) still see the text.
  if (urlPath === '/') {
    const visibleText = contentHtml.replace(/<[^>]+>/g, ' ').replace(/\\s+/g, ' ').trim();
    const homeVisibleBlock = \`<div id="seo-static-home" style="font-size:14px;color:#444;padding:16px;max-width:800px;margin:0 auto;"><p>\${visibleText}</p></div>\`;
    html = html.replace('<div id="root"></div>', \`<div id="root">\${seoContent}</div>\${homeVisibleBlock}\`);
  } else {
    html = html.replace('<div id="root"></div>', \`<div id="root">\${seoContent}</div>\`);
  }`,
  `  html = html.replace('<div id="root"></div>', \`<div id="root">\${seoContent}</div>\`);`
);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Removed hidden text CSS from prerender.ts');
