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
  const content = fs.readFileSync(indexPath, 'utf8');

  const target = serviceTargets[slug];
  const serviceLinkCount = (content.match(new RegExp(`href="${target}"`, 'g')) || []).length;
  
  // Find "Leia Também" links
  const leiaTambemIndex = content.indexOf('Leia Tamb');
  let leiaTambemLinksCount = 0;
  if (leiaTambemIndex !== -1) {
    const afterLeiaTambem = content.substring(leiaTambemIndex, leiaTambemIndex + 1000); // 1000 chars should cover the list
    leiaTambemLinksCount = (afterLeiaTambem.match(/href="\/blog\/[^"]+"/g) || []).length;
  }

  // Find sidebar links (Você também pode gostar)
  const sidebarIndex = content.indexOf('também pode gostar');
  if (sidebarIndex !== -1) {
     const afterSidebar = content.substring(sidebarIndex, sidebarIndex + 2000);
     leiaTambemLinksCount += (afterSidebar.match(/href="\/blog\/[^"]+"/g) || []).length;
  }

  console.log(`${slug}:`);
  console.log(`  Service link (${target}): ${serviceLinkCount}`);
  console.log(`  Leia Tambem links: ${leiaTambemLinksCount}`);
}
