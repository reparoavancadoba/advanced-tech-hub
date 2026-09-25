const fs = require('fs');
const path = require('path');

const slugs = [
  'iphone-11-nao-carrega-conector-ou-bateria',
  'como-economizar-bateria-do-celular',
  'bateria-do-celular-estufada-e-perigoso-o-que-fazer',
  'bateria-esquentando-amarela-nao-carrega-100',
  'celular-carrega-mas-nao-liga-causas',
  'celular-liga-mas-a-tela-nao-acende',
  'modo-de-manutencao-samsung-o-que-e',
  'quanto-custa-trocar-a-tela-do-celular-por-marca'
];

const distDir = path.join(__dirname, '..', 'dist', 'blog');

for (const slug of slugs) {
  console.log(`\n--- Validating ${slug} ---`);
  const indexPath = path.join(distDir, slug, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log(`❌ File not found: ${indexPath}`);
    continue;
  }
  
  const content = fs.readFileSync(indexPath, 'utf8');
  
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}`);
  
  const hasBreadcrumb = content.includes('"@type":"BreadcrumbList"');
  const hasBlogPosting = content.includes('"@type":"BlogPosting"');
  console.log(`BreadcrumbList: ${hasBreadcrumb ? '✅' : '❌'}, BlogPosting: ${hasBlogPosting ? '✅' : '❌'}`);
  
  const serviceTargets = {
    'iphone-11-nao-carrega-conector-ou-bateria': '/celular-nao-carrega',
    'como-economizar-bateria-do-celular': '/troca-de-bateria',
    'bateria-do-celular-estufada-e-perigoso-o-que-fazer': '/troca-de-bateria',
    'bateria-esquentando-amarela-nao-carrega-100': '/troca-de-bateria',
    'celular-carrega-mas-nao-liga-causas': '/reparo-em-placa',
    'celular-liga-mas-a-tela-nao-acende': '/troca-de-tela',
    'modo-de-manutencao-samsung-o-que-e': '/assistencia-tecnica-salvador',
    'quanto-custa-trocar-a-tela-do-celular-por-marca': '/troca-de-tela'
  };
  
  const target = serviceTargets[slug];
  const countTargets = (content.match(new RegExp(`href="${target}"`, 'g')) || []).length;
  console.log(`Link to service (${target}): count = ${countTargets} ${countTargets >= 1 ? '✅' : '❌'}`);
  
  const countLeiaTambemLinks = (content.match(/<a href="\/blog\/[^"]+"[^>]*class="[^"]*group[^"]*"[^>]*>/g) || []).length;
  console.log(`Leia também links: count = ${countLeiaTambemLinks} ${countLeiaTambemLinks >= 2 || (slug === 'modo-de-manutencao-samsung-o-que-e' && countLeiaTambemLinks === 0) ? '✅' : '❌'}`);
  
  const undefinedCount = (content.match(/undefined/g) || []).length;
  const nullCount = (content.match(/null/g) || []).length;
  const nanCount = (content.match(/NaN/g) || []).length;
  console.log(`undefined: ${undefinedCount}, null: ${nullCount}, NaN: ${nanCount}`);
  
  const waMatch = content.match(/href="https:\/\/wa\.me\/\d+\?text=([^"]+)"/);
  if (waMatch) {
    console.log(`WhatsApp CTA: ${decodeURIComponent(waMatch[1])}`);
  } else {
    console.log('WhatsApp CTA: NOT FOUND');
  }
}
