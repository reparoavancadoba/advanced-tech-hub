const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

for (const f of files) {
  const filePath = path.join(dataDir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('celular-descarregando-rapido')) {
    // Find the slug block
    const slugRegex = /slug:\s*(['"])celular-descarregando-rapido\1/;
    const match = slugRegex.exec(content);
    
    if (match) {
      console.log(`Found in ${f}`);
      // find title around here
      const blockStart = match.index;
      // find next title
      const titleRegex = /title:\s*(['"])(.*?)\1/;
      const titleMatch = titleRegex.exec(content.substring(blockStart));
      
      if (titleMatch) {
        console.log(`Title is: ${titleMatch[2]}`);
        
        // We will replace it with a shorter version
        const newTitle = titleMatch[2].substring(0, 60);
        console.log(`New Title is: ${newTitle}`);
        
        // Replace in file
        const newContent = content.substring(0, blockStart + titleMatch.index) + 
                           `title: ${titleMatch[1]}${newTitle}${titleMatch[1]}` +
                           content.substring(blockStart + titleMatch.index + titleMatch[0].length);
        
        fs.writeFileSync(filePath, newContent, 'utf8');
      }
    }
  }
}
console.log("Done");
