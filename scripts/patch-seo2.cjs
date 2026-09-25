const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

prerender = prerender.replace(
  /function getServicePageForPost\(post: any\): string \{([\s\S]*?)const slug/,
  'function getServicePageForPost(post: any): string {\n  if (post.serviceSlug) {\n    return post.serviceSlug.startsWith("/") ? post.serviceSlug : `/${post.serviceSlug}`;\n  }\n  const slug'
);

prerender = prerender.replace(
  /function getRelatedPosts\(post: any\): any\[\] \{([\s\S]*?)const group/,
  'function getRelatedPosts(post: any): any[] {\n  if (post.relatedSlugs && post.relatedSlugs.length > 0) {\n    return post.relatedSlugs.map((s: string) => allPosts.find((p: any) => p.slug === s)).filter(Boolean);\n  }\n  const group'
);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Patched scripts/prerender.ts successfully!');
