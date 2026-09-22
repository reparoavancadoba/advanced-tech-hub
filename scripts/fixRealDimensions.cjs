const fs = require('fs');
const path = require('path');
const { imageSize } = require('image-size');

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

      // Ensure no stray width={400} height={300} are left
      content = content.replace(/ width=\{400\} height=\{300\}/g, '');
      
      // Remove loading="lazy" from above the fold images
      if (fullPath.includes('Navbar.tsx') || fullPath.includes('HeroSection.tsx') || fullPath.includes('HeroParticles.tsx')) {
        content = content.replace(/ loading=["']lazy["']/g, '');
      }

      // Add real widths and heights to images
      content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
        if (attrs.includes('fetchPriority') || attrs.includes('hero') || attrs.includes('width=')) return match;
        
        let newAttrs = attrs;
        const srcMatch = attrs.match(/src=["']([^"']+)["']/);
        if (srcMatch && srcMatch[1]) {
          let imgSrc = srcMatch[1];
          if (imgSrc.startsWith('/')) imgSrc = imgSrc.substring(1);
          const imgPath = path.join(process.cwd(), 'public', imgSrc);
          try {
            if (fs.existsSync(imgPath)) {
              const dims = imageSize(imgPath);
              if (dims && dims.width && dims.height) {
                newAttrs += ` width={${dims.width}} height={${dims.height}}`;
              }
            }
          } catch(e) {}
        } else if (attrs.includes('src={logo}')) {
          // Special case for logo
          try {
            const dims = imageSize(path.join(process.cwd(), 'src/assets/logo-reparo.png'));
            newAttrs += ` width={${dims.width}} height={${dims.height}}`;
          } catch(e) {}
        }

        return `<img${newAttrs}>`;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed real image dimensions in ' + fullPath);
      }
    }
  });
}

processFiles('src');
