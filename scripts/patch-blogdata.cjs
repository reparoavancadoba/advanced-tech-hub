const fs = require('fs');
let code = fs.readFileSync('src/data/blogData.ts', 'utf8');

if (!code.includes('editorialPostsBatch12')) {
  code = code.replace(
    /import { editorialPostsBatch11 } from '\.\/editorialPostsBatch11';/,
    `import { editorialPostsBatch11 } from './editorialPostsBatch11';\nimport { editorialPostsBatch12 } from './editorialPostsBatch12';`
  );
  
  code = code.replace(
    /\.\.\.editorialPostsBatch11,/,
    `...editorialPostsBatch11, ...editorialPostsBatch12,`
  );
  fs.writeFileSync('src/data/blogData.ts', code);
  console.log('blogData.ts updated');
} else {
  console.log('Already in blogData.ts');
}
