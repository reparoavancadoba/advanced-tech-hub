const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

const titleOverrides = {
  "troca-tela-iphone-true-tone-salvador": "Troca de Tela iPhone com True Tone em Salvador",
  "biometria-tela-parou-troca-amoled-salvador": "Biometria Parou? Troca de Tela AMOLED Salvador",
  "troca-vidro-vs-tela-completa-economia-salvador": "Troca de Vidro vs Tela Completa: Qual Compensa?",
  "troca-vidro-ou-tela-completa-celular-diferenca": "Diferença entre Vidro e Tela Completa",
  "troca-de-tela-iphone-15-pro-max-salvador": "Troca de Tela iPhone 15 Pro Max em Salvador",
  "tela-samsung-galaxy-s24-ultra-troca-salvador": "Troca de Tela Samsung Galaxy S24 Ultra",
  
  "iphone-caiu-na-agua-desoxidacao-salvador": "iPhone Caiu na Água? Desoxidação Urgente",
  "vedacao-celular-protecao-agua-tempo-salvador": "Vedação de Celular: Proteção Contra Água",
  "cuidados-maresia-orla-salvador-limpeza": "Cuidados com Maresia na Orla de Salvador",
  
  "conector-carga-iphone-limpeza-troca-salvador": "Conector do iPhone: Limpeza e Troca",
  "erro-umidade-samsung-conector-salvador": "Erro de Umidade no Samsung? Troca do Conector",
  "troca-conector-carga-usb-c-celular-salvador": "Troca de Conector USB-C de Celular em Salvador",

  "motorola-nao-carrega-avaliacao-salvador": "Motorola Não Carrega? Avaliação em Salvador",
  "higienizacao-conector-cabo-carregar-salvador": "Limpeza de Conector e Cabo do Celular",

  "celular-esquentando-descarregando-rapido-bateria": "Esquentando e Descarregando Rápido?",
  "troca-bateria-samsung-galaxy-salvador": "Troca de Bateria Samsung Galaxy em Salvador"
};

function shortenText(text, maxLen) {
  if (text.length <= maxLen) return text;
  if (maxLen === 65) {
      let t = text.replace(/ em Salvador(?: - BA)?$/i, '');
      t = t.replace(/ \| Reparo Avançado$/i, '');
      if (t.length <= maxLen) return t;
  }
  const truncated = text.substring(0, maxLen - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace > 0 ? lastSpace : truncated.length) + '...';
}

for (const f of files) {
  const filePath = path.join(dataDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // We will split the content by "slug: " and process each chunk
  // This ensures we always know which slug we are working with
  const parts = content.split(/slug:\s*(['"])/);
  if (parts.length > 1) {
    let newContent = parts[0]; // before first slug
    
    for (let i = 1; i < parts.length; i += 3) {
      const quoteChar = parts[i];
      const slug = parts[i+1];
      let chunk = parts[i+2]; // everything after the slug until the next slug
      
      // Now replace title in this chunk
      chunk = chunk.replace(/(title:\s*)(['"])(.*?)\2/, (match, prefix, tQuote, oldTitle) => {
        let newTitle = titleOverrides[slug] ? titleOverrides[slug] : oldTitle;
        if (newTitle.length > 65) {
          newTitle = shortenText(newTitle, 65);
        }
        return `${prefix}${tQuote}${newTitle}${tQuote}`;
      });
      
      // Replace metaDescription in this chunk
      chunk = chunk.replace(/(metaDescription:\s*)(['"])(.*?)\2/, (match, prefix, mQuote, oldMeta) => {
        let newMeta = oldMeta;
        if (newMeta.length > 160) {
          newMeta = shortenText(newMeta, 160);
        }
        return `${prefix}${mQuote}${newMeta}${mQuote}`;
      });
      
      newContent += `slug: ${quoteChar}${slug}${quoteChar}${chunk}`;
    }
    
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}
console.log("Safe chunk-based SEO fixes applied.");
