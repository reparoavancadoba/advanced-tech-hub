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

const distDir = path.join(__dirname, '..', 'dist', 'blog');

for (const slug of slugs) {
  const indexPath = path.join(distDir, slug, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log(`${slug}: HTML NOT FOUND`);
    continue;
  }
  const content = fs.readFileSync(indexPath, 'utf8');

  const target = serviceTargets[slug];
  const serviceLinkCount = (content.match(new RegExp(`href="${target}"`, 'g')) || []).length;
  
  // Find "Leia Também" section
  const leiaTambemIndex = content.indexOf('Leia Tamb');
  let leiaTambemSlugs = [];
  if (leiaTambemIndex !== -1) {
    const afterLeiaTambem = content.substring(leiaTambemIndex, leiaTambemIndex + 1000);
    const matches = afterLeiaTambem.match(/href="\/blog\/([^"]+)"/g) || [];
    leiaTambemSlugs = matches.map(m => m.replace('href="/blog/', '').replace('"', ''));
  }

  console.log(`${slug}:`);
  console.log(`  - Target service (${target}): ${serviceLinkCount} links`);
  console.log(`  - Leia Também slugs: ${leiaTambemSlugs.join(', ')}`);
}

// Check Home
const homeContent = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'), 'utf8');
const hasReforcoC = homeContent.includes('conserto de celular perto de mim');
console.log(`\nHome HTML has 'conserto de celular perto de mim': ${hasReforcoC}`);

