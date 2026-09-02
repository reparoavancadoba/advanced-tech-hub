import { allPosts as blogPosts } from './src/data/blogData.ts';
import { editorialPosts } from './src/data/editorialPosts.ts';
import { editorialPostsBatch2 } from './src/data/editorialPostsBatch2.ts';
import { editorialPostsBatch3 } from './src/data/editorialPostsBatch3.ts';
import { editorialPostsBatch4 } from './src/data/editorialPostsBatch4.ts';
import { editorialPostsBatch5 } from './src/data/editorialPostsBatch5.ts';
import { editorialPostsBatch6 } from './src/data/editorialPostsBatch6.ts';
import { editorialPostsBatch7 } from './src/data/editorialPostsBatch7.ts';
import { locaisConsolidados } from './src/data/locaisConsolidadosData.ts';
import { servicosConsolidados } from './src/data/servicosConsolidadosData.ts';
import fs from 'fs';

const allBlogPosts = [
  ...blogPosts,
  ...editorialPosts,
  ...editorialPostsBatch2,
  ...editorialPostsBatch3,
  ...editorialPostsBatch4,
  ...editorialPostsBatch5,
  ...editorialPostsBatch6,
  ...editorialPostsBatch7
];

let csv = `Type;Slug;Title;Title Length;Description;Description Length;Issues\n`;

function getIssues(title: string, desc: string) {
  let issues = [];
  if (!title) title = "";
  if (!desc) desc = "";
  if (title.toLowerCase().includes('celular de celulares') || title.toLowerCase().match(/conserto de celular de/i) || title.toLowerCase().match(/conserto de conserto/i)) {
    issues.push('Template bug (repetição de palavras)');
  }
  if (desc.includes('9 anos')) {
    issues.push('Contém "9 anos" (desatualizado)');
  }
  if (title.trim() === '') issues.push('Title vazio');
  if (desc.trim() === '') issues.push('Description vazio');
  return issues.join(', ');
}

allBlogPosts.forEach(post => {
  const issues = getIssues(post.title, post.metaDescription);
  csv += `Blog;${post.slug};"${post.title}";${post.title?.length};"${post.metaDescription}";${post.metaDescription?.length};"${issues}"\n`;
});

locaisConsolidados.forEach(local => {
  const issues = getIssues(local.title, local.metaDescription);
  csv += `Local;${local.slug};"${local.title}";${local.title?.length};"${local.metaDescription}";${local.metaDescription?.length};"${issues}"\n`;
});

servicosConsolidados.forEach(serv => {
  const issues = getIssues(serv.title, serv.metaDescription);
  csv += `Servico;${serv.slug};"${serv.title}";${serv.title?.length};"${serv.metaDescription}";${serv.metaDescription?.length};"${issues}"\n`;
});

fs.writeFileSync('audit-seo.csv', csv, 'utf8');
console.log('Audit completed: audit-seo.csv generated');
