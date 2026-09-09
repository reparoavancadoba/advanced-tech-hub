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
  
  // Truncate some known words
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
  let lines = fs.readFileSync(filePath, 'utf8').split('\n');
  
  let currentSlug = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Look for slug
    const slugMatch = line.match(/slug:\s*(['"])(.*?)\1/);
    if (slugMatch) {
      currentSlug = slugMatch[2];
    }
    
    // Sometimes there are blank lines or other fields
    if (currentSlug) {
      // Handle title
      const titleMatch = line.match(/^(.*?)title:\s*(['"])(.*?)\2(,?)(.*?)$/);
      if (titleMatch) {
        let prefix = titleMatch[1];
        let quote = titleMatch[2];
        let title = titleMatch[3];
        let suffix = titleMatch[4] + titleMatch[5];
        
        if (titleOverrides[currentSlug]) {
          title = titleOverrides[currentSlug];
        }
        
        if (title.length > 65) {
          title = shortenText(title, 65);
        }
        
        // Escape the quote character if it appears in the new title
        // In practice, our overrides and shortenings won't introduce unescaped outer quotes
        lines[i] = `${prefix}title: ${quote}${title}${quote}${suffix}`;
      }
      
      // Handle metaDescription
      const metaMatch = line.match(/^(.*?)metaDescription:\s*(['"])(.*?)\2(,?)(.*?)$/);
      if (metaMatch) {
        let prefix = metaMatch[1];
        let quote = metaMatch[2];
        let meta = metaMatch[3];
        let suffix = metaMatch[4] + metaMatch[5];
        
        if (meta.length > 160) {
          meta = shortenText(meta, 160);
        }
        
        lines[i] = `${prefix}metaDescription: ${quote}${meta}${quote}${suffix}`;
      }
    }
  }
  
  fs.writeFileSync(filePath, lines.join('\n'));
}

console.log("Safe SEO fixes applied.");
