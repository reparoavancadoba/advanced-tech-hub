const fs = require('fs');
const path = require('path');

const files = [
  'src/data/blogData.ts',
  'src/data/editorialPosts.ts',
  'src/data/editorialPostsBatch2.ts',
  'src/data/editorialPostsBatch3.ts',
  'src/data/editorialPostsBatch4.ts',
  'src/data/editorialPostsBatch5.ts',
  'src/data/editorialPostsBatch6.ts',
  'src/data/editorialPostsBatch7.ts',
  'src/data/locaisConsolidadosData.ts',
  'src/data/servicosConsolidadosData.ts'
];

let markdown = `# Auditoria de SEO - Títulos e Meta Descriptions\n\n`;
markdown += `| Origem | Slug | Título | Caracteres | Meta Description | Caracteres | Avisos |\n`;
markdown += `|---|---|---|---|---|---|---|\n`;

let totalIssues = 0;

function extractFields(text) {
  // Simple regex parser for object literals
  // This looks for slug: "...", title: "..." etc.
  const results = [];
  
  // We match blocks that look like objects { slug: ..., title: ... }
  // A naive approach: find all occurrences of slug, and then look nearby for title and metaDescription
  const objectRegex = /\{[\s\S]*?slug\s*:\s*["']([^"']+)["'][\s\S]*?\}/g;
  
  let match;
  while ((match = objectRegex.exec(text)) !== null) {
    const block = match[0];
    const slug = match[1];
    
    let title = "";
    const titleMatch = block.match(/title\s*:\s*["']([^"']+)["']/);
    if (titleMatch) title = titleMatch[1];
    
    let meta = "";
    const metaMatch = block.match(/metaDescription\s*:\s*["']([^"']+)["']/);
    if (metaMatch) meta = metaMatch[1];
    
    results.push({ slug, title, meta });
  }
  return results;
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`Arquivo não encontrado: ${file}`);
    continue;
  }
  
  const content = fs.readFileSync(file, 'utf8');
  const items = extractFields(content);
  const type = path.basename(file).replace('.ts', '');
  
  for (const item of items) {
    let issues = [];
    const tLower = item.title.toLowerCase();
    
    if (tLower.includes('celular de celulares') || tLower.includes('conserto de celular de') || tLower.includes('conserto de conserto')) {
      issues.push('Template bug (repetição de palavras)');
    }
    if (item.meta.includes('9 anos')) {
      issues.push('Contém "9 anos" (desatualizado)');
    }
    if (!item.title.trim()) issues.push('Title vazio');
    if (!item.meta.trim()) issues.push('Description vazio');
    
    if (issues.length > 0) totalIssues++;
    
    markdown += `| ${type} | \`${item.slug}\` | ${item.title} | ${item.title.length} | ${item.meta} | ${item.meta.length} | **${issues.join(', ')}** |\n`;
  }
}

markdown += `\n**Total de problemas detectados: ${totalIssues}**\n`;

fs.writeFileSync('C:\\Users\\Paulo Lopes\\.gemini\\antigravity\\brain\\060fa536-930c-4eaf-a2a9-03962d77c4ba\\seo-audit.md', markdown, 'utf8');
console.log('Auditoria concluída e salva como artefato!');
