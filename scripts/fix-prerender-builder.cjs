const fs = require('fs');
let s = fs.readFileSync('scripts/prerender.ts', 'utf8');

// The new function we want
const newFunction = `function buildLocalConsolidadoContent(local: any) {
  let contentHtml = \`<p>\${local.description}</p>\`;
  if (local.access) contentHtml += \`<h2>Como Chegar</h2><p>\${local.access}</p>\`;
  if (local.distance) contentHtml += \`<h2>Distância e Tempo</h2><p>\${local.distance}</p>\`;
  if (local.topServices) contentHtml += \`<h2>Serviços Mais Procurados</h2><p>\${local.topServices}</p>\`;
  
  contentHtml += \`
  <h2>Principais Serviços</h2>
  <ul>
    <li><a href="/troca-de-tela">Troca de Tela de Celular</a></li>
    <li><a href="/troca-de-bateria">Substituição de Bateria</a></li>
    <li><a href="/reparo-em-placa">Reparo de Placa Mãe</a></li>
    <li><a href="/conserto-de-celular">Conserto de Celular (Geral)</a></li>
    <li><a href="/celular-nao-liga">Aparelho Que Não Liga</a></li>
    <li><a href="/celular-nao-carrega">Reparo de Conector e Carregamento</a></li>
    <li><a href="/celular-caiu-na-agua">Desoxidação (Caiu na Água)</a></li>
  </ul>
  \`;
  
  const macros = ['salvador', 'boca-do-rio-e-orla', 'miolo-e-centro-financeiro', 'centro-e-sul', 'orla-norte-e-aeroporto', 'cajazeiras-e-regiao', 'regiao-metropolitana'];
  if (!macros.includes(local.slug)) {
     contentHtml += \`<p>Veja também nossa página de cobertura ampla da região: <a href="/assistencia-tecnica-salvador">Assistência em Salvador</a>.</p>\`;
  }
  
  return contentHtml;
}`;

// We need to replace the entire old function.
// Since we don't know exactly what it looks like currently (could be the old one or the broken new one),
// we will find the start "function buildLocalConsolidadoContent" and the end "return contentHtml;\n}"
const startIdx = s.indexOf('function buildLocalConsolidadoContent');
if (startIdx !== -1) {
    let endIdx = s.indexOf('return contentHtml;', startIdx);
    if (endIdx !== -1) {
        endIdx = s.indexOf('}', endIdx) + 1; // get the closing brace
        s = s.substring(0, startIdx) + newFunction + s.substring(endIdx);
    }
}

fs.writeFileSync('scripts/prerender.ts', s);
