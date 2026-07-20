const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data');
const files = [
  'editorialPosts.ts',
  'editorialPostsBatch2.ts',
  'editorialPostsBatch3.ts',
  'editorialPostsBatch4.ts',
  'editorialPostsBatch5.ts'
];

function refactorTitle(title, slug) {
  // Try to generate an intent-driven title based on slug
  const parts = slug.split('-');
  
  if (slug.includes('bateria')) {
    if (slug.includes('iphone')) return `Bateria do iPhone Acabando Rápido? Diagnóstico em Salvador`;
    return `Bateria do Celular Viciada? Como Resolver em Salvador`;
  }
  if (slug.includes('face-id')) return `Face ID Parou de Funcionar? Saiba Como Consertar na Hora`;
  if (slug.includes('nao-liga') || slug.includes('maca')) return `Celular Não Liga ou Travou na Maçã? Avaliação Grátis`;
  if (slug.includes('tela') || slug.includes('display')) {
    if (slug.includes('verde')) return `Tela Verde no Celular após Atualização? O Que Fazer`;
    if (slug.includes('roxa') || slug.includes('mancha')) return `Mancha Roxa na Tela do Celular Crescendo? Entenda o Defeito`;
    return `Tela do Celular Quebrou? Conserto Rápido em Salvador`;
  }
  if (slug.includes('agua') || slug.includes('mar')) return `Celular Caiu na Água? Não Coloque no Arroz! Desoxidação Urgente`;
  if (slug.includes('placa')) return `Problema na Placa do Celular? Conserto Avançado em Salvador`;
  if (slug.includes('carrega')) return `Celular Não Carrega? Defeito no Conector ou Bateria?`;
  if (slug.includes('camera')) return `Câmera do Celular Embaçada ou Tremendo? Como Consertar`;
  if (slug.includes('microfone') || slug.includes('audio')) return `Áudio do WhatsApp Mudo ou Baixo? Conserto de Microfone`;
  if (slug.includes('touch')) return `Touch do Celular Parou ou Clica Sozinho? Diagnóstico Grátis`;
  if (slug.includes('reiniciando')) return `Celular Reiniciando Sozinho? Entenda a Causa do Loop`;
  if (slug.includes('wifi') || slug.includes('bluetooth')) return `Wi-Fi do Celular Não Liga (Ficou Cinza)? Conserto de Placa`;
  if (slug.includes('sujeira') || slug.includes('conector')) return `Mau Contato no Carregador? Limpeza de Conector em Salvador`;
  if (slug.includes('original') || slug.includes('paralela')) return `Tela Original ou Paralela? Qual a Melhor Opção para seu Celular`;

  // Fallback
  return `${title.split('|')[0].trim()}? Diagnóstico em Salvador`;
}

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all blocks
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let match;
    const slugs = [];
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(match[1]);
    }

    slugs.forEach(slug => {
      // Find the title for this slug
      const blockRegex = new RegExp(`slug:\\s*["']${slug}["'][\\s\\S]*?title:\\s*["']([^"']+)["']`);
      const blockMatch = content.match(blockRegex);
      if (blockMatch) {
        const oldTitle = blockMatch[1];
        if (oldTitle.includes('|') || oldTitle.includes('conserto Avançado')) {
           const newTitle = refactorTitle(oldTitle, slug);
           content = content.replace(`title: "${oldTitle}"`, `title: "${newTitle}"`);
           content = content.replace(`title: '${oldTitle}'`, `title: "${newTitle}"`);
        }
      }
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
