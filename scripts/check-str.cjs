const fs = require('fs');
let b = fs.readFileSync('src/pages/Blog.tsx', 'utf8');
console.log(b.includes("!== 'conserto'"));
console.log(b.includes('!== "conserto"'));
console.log(b.includes('!== conserto'));
