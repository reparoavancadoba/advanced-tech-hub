const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

// The old seoContent had style="position:absolute;width:1px;height:1px;..."
code = code.replace(
  '<div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;" data-seo-prerender="true">',
  '<div data-seo-prerender="true">'
);

// We must also remove the homeVisibleBlock logic I added in 636a81d, since now the seoContent itself is visible on ALL pages.
const homeBlockStart = '  // For the home page, also inject a visible SEO paragraph';
const homeBlockEnd = '  html = html.replace(\'<div id="root"></div>\', `<div id="root">${seoContent}</div>`);\n  }';

const idxStart = code.indexOf(homeBlockStart);
const idxEnd = code.indexOf(homeBlockEnd);

if (idxStart !== -1 && idxEnd !== -1) {
  code = code.substring(0, idxStart) + '  html = html.replace(\'<div id="root"></div>\', `<div id="root">${seoContent}</div>`);' + code.substring(idxEnd + homeBlockEnd.length);
  console.log('Removed custom homeVisibleBlock');
}

fs.writeFileSync('scripts/prerender.ts', code);
console.log('Patched prerender.ts to make seoContent visible!');
