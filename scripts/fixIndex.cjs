const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

if(!c.includes('preconnect')) {
  c = c.replace('<head>', `<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="image" href="/hero-mobile.webp" media="(max-width: 800px)">
    <link rel="preload" as="image" href="/hero-desktop.webp" media="(min-width: 801px)">`);
  
  c = c.replace(/fonts\.googleapis\.com\/css2\?[^"']+/g, (match) => {
    if (!match.includes('display=swap')) {
      return match + '&display=swap';
    }
    return match;
  });
  fs.writeFileSync('index.html', c);
  console.log('Fixed index.html');
}
