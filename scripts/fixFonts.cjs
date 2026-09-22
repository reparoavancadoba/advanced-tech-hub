const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/@import url\('https:\/\/fonts.googleapis.com[^)]+'\);\n?/g, '');
fs.writeFileSync('src/index.css', css);

let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('fonts.googleapis.com/css2')) {
  html = html.replace('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>', '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">');
  fs.writeFileSync('index.html', html);
  console.log('Fixed google fonts import');
}
