const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'src/data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));

const titleOverrides = {
  "troca-tela-iphone-true-tone-salvador": "Troca de Tela iPhone com True Tone",
  "biometria-tela-parou-troca-amoled-salvador": "Biometria Parou? Troca de Tela AMOLED",
  "troca-vidro-vs-tela-completa-economia-salvador": "Troca de Vidro vs Tela Completa",
  "troca-vidro-ou-tela-completa-celular-diferenca": "Diferença entre Vidro e Tela Completa",
  "troca-de-tela-iphone-15-pro-max-salvador": "Troca de Tela iPhone 15 Pro Max",
  "tela-samsung-galaxy-s24-ultra-troca-salvador": "Troca de Tela Samsung Galaxy S24 Ultra",
  
  "iphone-caiu-na-agua-desoxidacao-salvador": "iPhone Caiu na Água? Desoxidação Urgente",
  "vedacao-celular-protecao-agua-tempo-salvador": "Vedação de Celular: Proteção Contra Água",
  "cuidados-maresia-orla-salvador-limpeza": "Cuidados com Maresia na Orla de Salvador",
  
  "conector-carga-iphone-limpeza-troca-salvador": "Conector do iPhone: Limpeza e Troca",
  "erro-umidade-samsung-conector-salvador": "Erro de Umidade no Samsung? Troca",
  "troca-conector-carga-usb-c-celular-salvador": "Troca de Conector USB-C de Celular",

  "motorola-nao-carrega-avaliacao-salvador": "Motorola Não Carrega? Avaliação na Loja",
  "higienizacao-conector-cabo-carregar-salvador": "Limpeza de Conector e Cabo do Celular",

  "celular-esquentando-descarregando-rapido-bateria": "Esquentando e Descarregando Rápido?",
  "troca-bateria-samsung-galaxy-salvador": "Troca de Bateria Samsung Galaxy",
  "bateria-celular-descarregando-rapido": "Bateria Descarregando Rápido? Resolva",
  
  // A few length violations based on the report
  "iphone-nao-liga-avaliacao-placa-salvador": "iPhone Não Liga? Avaliação de Placa",
  "vidro-traseiro-iphone-reparo-laser-salvador": "Troca de Vidro Traseiro iPhone a Laser",
  "camera-iphone-tremula-manchas-salvador": "Câmera do iPhone Tremendo ou com Manchas",
  "loja-realme-poco-salvador-pecas": "Assistência Especializada Realme e Poco",
  "recuperacao-conta-google-micloud-salvador": "Recuperação de Conta Google e MiCloud",
  "limpeza-tecnica-celular-sexta-feira-salvador": "Limpeza Técnica Preventiva de Celular",
  "celular-esquentando-limpeza-interna-salvador": "Celular Esquentando? Limpeza Interna",
  "checklist-manutencao-preventiva-salvador": "Checklist de Manutenção Preventiva",
  "mitos-verdades-celular-no-arroz-salvador": "Mitos e Verdades: Celular no Arroz",
  "reparo-avancado-melhor-avaliacao-boca-do-rio": "A Melhor Assistência da Boca do Rio",
  "celular-nao-carrega-causas-solucoes": "Celular Não Carrega? Causas e Soluções",
  "face-id-nao-funciona-iphone-causas": "Face ID Não Funciona? Causas Comuns",
  "assistencia-tecnica-celular-salvador": "Assistência Técnica de Celular Especializada",
  "conserto-de-celular-salvador": "Conserto de Celular: Problemas Mais Comuns",
  "troca-de-bateria-celular-salvador": "Troca de Bateria: 7 Sinais de Que Chegou a Hora",
  "camera-celular-embacada-quebrada-conserto-salvador": "Câmera Embaçada ou Quebrada? Conserto Rápido",
  "conserto-botao-power-volume-celular-salvador": "Conserto de Botão Power e Volume de Celular",
  "onde-consertar-celular-boca-do-rio-salvador": "Onde Consertar Seu Celular na Boca do Rio",
  "celular-tela-preta-mas-funciona-salvador": "Celular com Tela Preta mas Funciona?",
  "conserto-celular-pituba-imbui-costa-azul": "Conserto de Celular Perto da Pituba e Imbuí",
  "como-escolher-assistencia-tecnica-celular-confiavel": "Como Escolher Uma Assistência Confiável",
  "assistencia-tecnica-boca-do-rio-conserto-rapido": "Assistência Técnica de Celular Rápida",
  "melhor-assistencia-tecnica-salvador-reparo-avancado": "Sua Melhor Escolha Para Conserto de Celular",
  "iphone-descarregando-rapido-calor-salvador": "iPhone Descarregando Rápido no Calor?",
  "troca-tela-samsung-s23-s24-salvador": "Troca de Tela Samsung Linha Galaxy S",
  "assistencia-tecnica-xiaomi-pituba-regiao": "Assistência Técnica Xiaomi e Região",
  "quanto-custa-consertar-celular-salvador-cuidado": "Quanto Custa Consertar o Celular?",
  "troca-de-bateria-iphone-11-12-13-original": "Troca de Bateria iPhone 11, 12 e 13",
  "celular-nao-liga-causas": "Por Que o Celular Não Liga? Diagnóstico Completo",
  "samsung-com-tela-preta": "Samsung com Tela Preta? Descubra o Motivo",
  "bateria-celular-descarregando-rapido": "Bateria Descarregando Rápido? Como Resolver"
};

function shortenMeta(text) {
  const maxLen = 155;
  if (text.length <= 160) return text;
  const truncated = text.substring(0, maxLen - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace > 0 ? lastSpace : truncated.length) + '...';
}

for (const f of files) {
  const filePath = path.join(dataDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the slug object
  const slugRegex = /slug:\s*(['"])(.*?)\1/g;
  let match;
  const positions = [];
  while ((match = slugRegex.exec(content)) !== null) {
    positions.push({ slug: match[2], index: match.index });
  }

  // Iterate backwards so string replacements don't mess up earlier indices
  for (let i = positions.length - 1; i >= 0; i--) {
    const current = positions[i];
    const startIndex = current.index;
    const endIndex = i === positions.length - 1 ? content.length : positions[i+1].index;
    
    let block = content.substring(startIndex, endIndex);

    // Replace Title
    if (titleOverrides[current.slug]) {
      // Replaces the first title occurrence in this block
      block = block.replace(/title:\s*(['"])(.*?)\1/, `title: "${titleOverrides[current.slug]}"`);
    }

    // Shorten Meta
    block = block.replace(/metaDescription:\s*(['"])(.*?)\1/, (fullMatch, quote, metaText) => {
      if (metaText.length > 160) {
        return `metaDescription: ${quote}${shortenMeta(metaText)}${quote}`;
      }
      return fullMatch;
    });

    content = content.substring(0, startIndex) + block + content.substring(endIndex);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Safe SEO fixes applied.");
