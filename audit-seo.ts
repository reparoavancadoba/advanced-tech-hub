import { allPosts } from './src/data/blogData';
import * as fs from 'fs';

let markdown = '# Auditoria SEO - Blog Posts\n\n';
markdown += '| Slug | Title (Chars) | Meta Description (Chars) | Alertas |\n';
markdown += '|---|---|---|---|\n';

let issuesCount = 0;

allPosts.forEach(post => {
  let alerts = [];
  
  const title = post.title || '';
  const desc = post.metaDescription || '';
  
  // 1. Check title duplication / awkward phrases
  if (title.toLowerCase().includes('celular de celular') || title.toLowerCase().includes('de celulares em celulares')) {
    alerts.push('Frase duplicada (celular de celular)');
  }
  
  // 2. Check outdated "9 anos"
  if (desc.includes('9 anos') || title.includes('9 anos')) {
    alerts.push('Uso de "9 anos" desatualizado');
  }
  
  // 3. Length checks
  if (title.length < 30) alerts.push('Title muito curto');
  if (title.length > 65) alerts.push('Title longo (>65)');
  if (desc.length < 100) alerts.push('Meta desc muito curta');
  if (desc.length > 160) alerts.push('Meta desc longa (>160)');
  
  // 4. Generic checks
  if (title.toLowerCase().startsWith('conserto de celular - ')) alerts.push('Title generico?');
  
  markdown += '| ' + post.slug + ' | ' + title.replace(/\|/g, '') + ' (' + title.length + ') | ' + desc.replace(/\|/g, '') + ' (' + desc.length + ') | ' + alerts.join(', ') + ' |\n';
  
  if (alerts.length > 0) issuesCount++;
});

markdown += '\n\nTotal de artigos: ' + allPosts.length + '\nCom alertas: ' + issuesCount + '\n';

fs.writeFileSync('seo_audit_blog.md', markdown);
console.log('Audit saved to seo_audit_blog.md');
