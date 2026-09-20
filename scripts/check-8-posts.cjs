const fs = require('fs');
let bd = fs.readFileSync('src/data/blogData.ts', 'utf8');
const pStart = bd.indexOf('export const problemPosts');
const pEnd = bd.indexOf('export const categoryLabels');
let pp = bd.substring(pStart, pEnd);

let blocks = pp.split('slug:').slice(1);
blocks.forEach(b => {
  const match = b.match(/^\s*['"]?(.*?)['"]?,/);
  if (match) {
    const slug = match[1];
    if (b.includes('category: "conserto"') || b.includes("category: 'conserto'")) {
      console.log(slug);
    }
  }
});
