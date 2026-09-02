import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar tudo com RegExp pra não ter que buildar o TS
const srcDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(srcDir).filter(f => f.startsWith('editorialPosts') && f.endsWith('.ts'));

let allSlugs = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const slugMatches = content.match(/slug:\s*["']([^"']+)["']/g);
  const titleMatches = content.match(/h1:\s*["']([^"']+)["']/g);
  
  if (slugMatches) {
    slugMatches.forEach((s, i) => {
      const slug = s.replace(/slug:\s*["']|["']/g, '');
      const title = titleMatches && titleMatches[i] ? titleMatches[i].replace(/h1:\s*["']|["']/g, '') : 'NO_TITLE';
      allSlugs.push({ slug, title });
    });
  }
});

console.log(JSON.stringify(allSlugs, null, 2));
