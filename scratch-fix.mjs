import fs from 'fs';
import path from 'path';

const dirs = ['src/components/home', 'src/components', 'src/pages'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    if(!file.endsWith('.tsx')) return;
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    
    let oldContent = content;
    
    // Remove variations of px-4, md:px-6, lg:px-8 etc. on <section> tags
    const regex = /(<(?:section|main|footer|header)[^>]*?className=["'][^"']*?)\s+(?:sm:|md:|lg:|xl:)?px-\d+(?:\s+(?:sm:|md:|lg:|xl:)?px-\d+)*/g;
    content = content.replace(regex, '$1');
    content = content.replace(regex, '$1');
    content = content.replace(regex, '$1');
    
    // CARDS: "Empilhar em 1 coluna no mobile" -> ensure grid-cols-1 on sm
    content = content.replace(/className=["']([^"']*?)(\bgrid-cols-[2-9]\b)([^"']*?)["']/g, (match, p1, p2, p3) => {
        if (!p1.includes('grid-cols-1') && !p3.includes('grid-cols-1') && !p1.includes('md:grid-cols-') && !p3.includes('md:grid-cols-') && !p1.includes('sm:grid-cols-') && !p3.includes('sm:grid-cols-')) {
            return `className="${p1}grid-cols-1 sm:${p2}${p3}"`;
        }
        return match;
    });

    if(oldContent !== content) {
      console.log(`Updated ${p}`);
      fs.writeFileSync(p, content);
    }
  });
});
