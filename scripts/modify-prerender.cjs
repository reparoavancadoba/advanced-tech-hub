const fs = require('fs');

let s = fs.readFileSync('scripts/prerender.ts', 'utf8');

const replacement = `function buildLocalConsolidadoContent(local: any) {
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
  
  // Link to macro if it's a bairro
  if (local.slug !== 'salvador' && local.slug !== 'boca-do-rio-e-orla' && local.slug !== 'miolo-e-centro-financeiro' && local.slug !== 'centro-e-sul' && local.slug !== 'orla-norte-e-aeroporto' && local.slug !== 'cajazeiras-e-regiao' && local.slug !== 'regiao-metropolitana') {
     contentHtml += \`<p>Veja também nossa página de cobertura ampla da região: <a href="/assistencia-tecnica-salvador">Assistência em Salvador</a>.</p>\`;
  }
  
  return contentHtml;
}`;

s = s.replace(/function buildLocalConsolidadoContent[\s\S]*?return contentHtml;\n\}/, replacement);

// Also replace the Home page title and description
s = s.replace(
  "generatePage('/', 'Reparo Avançado: Assistência técnica de celular em Salvador', 'Assistência técnica de celular focada em iPhone, Samsung e reparo de circuito integrado em Salvador. Mais de 7 anos de experiência na Boca do Rio. Orçamento gratuito!', 'Assistência técnica de celular em Salvador', '<p>Laboratório técnico para conserto de celulares, troca de tela, bateria e reparo de placas.</p>', baseLocalBusinessSchema);",
  "generatePage('/', 'Conserto de Celular em Salvador | Reparo Avançado', 'Assistência técnica de celular na Boca do Rio, Salvador: troca de tela, bateria e reparo de placa com orçamento gratuito e garantia de 90 dias.', 'Assistência técnica de celular em Salvador', '<p>Laboratório técnico para conserto de celulares, troca de tela, bateria e reparo de placas.</p>', baseLocalBusinessSchema);"
);

fs.writeFileSync('scripts/prerender.ts', s);
