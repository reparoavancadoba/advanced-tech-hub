const fs = require('fs');
const path = require('path');
let sizeOf;
try {
  sizeOf = require('image-size');
} catch (e) {
  console.log("image-size not loaded yet");
}

function processFiles(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) { 
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // 1. Revert contrast
      content = content.replace(/text-slate-500/g, 'text-slate-400');
      content = content.replace(/text-foreground\/80/g, 'text-muted-foreground');

      // 2. Fix images if sizeOf is available
      if (sizeOf) {
        // Regex to match <img ... src="/something.png" ... width={400} height={300} ... >
        content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
          if (attrs.includes('width={400} height={300}')) {
            // Find the src attribute
            const srcMatch = attrs.match(/src=["']([^"']+)["']/);
            if (srcMatch && srcMatch[1]) {
              let imgSrc = srcMatch[1];
              // Assuming images are in public/ folder
              if (imgSrc.startsWith('/')) imgSrc = imgSrc.substring(1);
              const imgPath = path.join(process.cwd(), 'public', imgSrc);
              try {
                if (fs.existsSync(imgPath)) {
                  const dims = sizeOf(imgPath);
                  attrs = attrs.replace('width={400} height={300}', `width={${dims.width}} height={${dims.height}}`);
                } else {
                  // try to find it in src/assets if it's an import? No, if it's imported, src={importedVar}. 
                  // In that case srcMatch won't be a string. Oh, src={logo} wouldn't match src=["'].
                  attrs = attrs.replace(' width={400} height={300}', '');
                }
              } catch (e) {
                attrs = attrs.replace(' width={400} height={300}', '');
              }
            } else {
              // no static src string, e.g. src={logo}
              attrs = attrs.replace(' width={400} height={300}', '');
            }
          }
          
          // 3. Remove lazy loading from above-the-fold images (like Navbar logo)
          if (fullPath.includes('Navbar.tsx') || fullPath.includes('HeroSection.tsx')) {
            attrs = attrs.replace(/ loading=["']lazy["']/, '');
          }
          
          return `<img${attrs}>`;
        });
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed ' + fullPath);
      }
    }
  });
}

processFiles('src');
