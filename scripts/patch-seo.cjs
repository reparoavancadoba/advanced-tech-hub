const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

prerender = prerender.replace(
  'function getServicePageForPost(post: any): string {\n  const slug',
  'function getServicePageForPost(post: any): string {\n  if (post.serviceSlug) {\n    return post.serviceSlug.startsWith("/") ? post.serviceSlug : `/${post.serviceSlug}`;\n  }\n  const slug'
);

prerender = prerender.replace(
  'function getRelatedPosts(post: any): any[] {\n  const group',
  'function getRelatedPosts(post: any): any[] {\n  if (post.relatedSlugs && post.relatedSlugs.length > 0) {\n    return post.relatedSlugs.map((s: string) => allPosts.find((p: any) => p.slug === s)).filter(Boolean);\n  }\n  const group'
);

// We need to add the SEO block to index.html for the home page.
// The user says NewCtaBlock.tsx is not rendered.
// Let's modify index.html to include the phrase natively so SEO bots see it.
const indexHtmlPath = 'index.html';
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

if (!indexHtml.includes('conserto de celular perto de mim')) {
  const seoDiv = `\n    <div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Fale com nossos técnicos e resolva o problema do seu aparelho rápido. Somos a referência em conserto de celular perto de mim para quem mora na Boca do Rio e região de Salvador.</div>\n`;
  indexHtml = indexHtml.replace('<body>', '<body>' + seoDiv);
  fs.writeFileSync(indexHtmlPath, indexHtml);
  console.log('Patched index.html with SEO block');
}

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('Patched scripts/prerender.ts');
