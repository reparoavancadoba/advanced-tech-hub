const fs = require('fs');
let code = fs.readFileSync('src/data/blogData.ts', 'utf8');

if (!code.includes("import { editorialPostsBatch12 }")) {
  code = code.replace(
    /import \{ editorialPostsBatch11 \} from "\.\/editorialPostsBatch11";/,
    `import { editorialPostsBatch11 } from "./editorialPostsBatch11";\nimport { editorialPostsBatch12 } from "./editorialPostsBatch12";`
  );
  fs.writeFileSync('src/data/blogData.ts', code);
  console.log('Fixed import');
}
