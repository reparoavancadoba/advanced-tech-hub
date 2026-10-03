const fs = require('fs');

// Patch BlogPost.tsx to render HTML in FAQ
let blogPost = fs.readFileSync('src/pages/BlogPost.tsx', 'utf8');
blogPost = blogPost.replace(
  /<p className="text-zinc-400 p-5 pt-0 mt-2 leading-relaxed">\s*\{item\.answer\}\s*<\/p>/,
  `<div className="text-zinc-400 p-5 pt-0 mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />`
);
fs.writeFileSync('src/pages/BlogPost.tsx', blogPost);
console.log('Patched BlogPost.tsx FAQ');

// Patch prerender.ts FAQ just in case it doesn't already allow HTML (it's string interpolation so it does allow HTML naturally)
