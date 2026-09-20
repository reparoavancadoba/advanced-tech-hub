const fs = require('fs');
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

const match = prerender.match(/const mergedSlugs = \[[^\]]*\];/);
if (match) {
   prerender = prerender.replace(match[0], '');
   prerender = prerender.replace("import { allPosts } from '../src/data/blogData';", "import { allPosts } from '../src/data/blogData';\n" + match[0]);
   fs.writeFileSync('scripts/prerender.ts', prerender);
   console.log('Hoisted mergedSlugs');
} else {
   console.log('Not found');
}
