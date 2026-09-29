const fs = require('fs');
const path = require('path');

// 1. 6 artigos editoriais sem headings vazios
const artigosCheck = ['parceria-manutencao-celulares-grupo-artemp', 'autorizada-ou-independente-como-escolher-assistencia-tecnica', 'vale-a-pena-consertar-celular-ou-comprar-novo', 'garantia-de-conserto-de-celular-o-que-perguntar', 'iphone-nao-liga-tela-preta-maca-travada-11-ao-14', 'iphone-11-usado-vale-a-pena-o-que-checar'];

let pass1 = true;
for (const slug of artigosCheck) {
  const file = fs.readFileSync(`dist/blog/${slug}/index.html`, 'utf8');
  if (file.includes('O Problema:') || file.includes('Causas Comuns')) {
    console.log(`❌ Falha no artigo editorial ${slug}`);
    pass1 = false;
  }
}
if (pass1) console.log('✅ 1. Artigos editoriais sem seções vazias');

// 2. Home title + 4 region titles
const home = fs.readFileSync('dist/index.html', 'utf8');
if (home.includes('<title>Assistência Técnica de Celular em Salvador | Reparo Avançado</title>')) {
  console.log('✅ 2a. Home title atualizado');
} else {
  console.log('❌ 2a. Home title incorreto');
}

const regionsCheck = [
  { p: 'assistencia-tecnica-miolo-e-centro-financeiro', t: 'Assistência Técnica de Celular no Miolo e Centro Financeiro</title>' },
  { p: 'assistencia-tecnica-orla-norte-e-aeroporto', t: 'Assistência Técnica de Celular na Orla Norte e Aeroporto</title>' },
  { p: 'assistencia-tecnica-cajazeiras-e-regiao', t: 'Assistência Técnica de Celular em Cajazeiras e Região</title>' },
  { p: 'assistencia-tecnica-regiao-metropolitana', t: 'Assistência Técnica de Celular na Região Metropolitana</title>' }
];

let pass2b = true;
for (const r of regionsCheck) {
  const file = fs.readFileSync(`dist/${r.p}/index.html`, 'utf8');
  if (!file.includes(r.t)) {
    console.log(`❌ Falha no title de ${r.p}`);
    pass2b = false;
  }
}
if (pass2b) console.log('✅ 2b. Region titles atualizados');

// 3. Palavras nas institucionais
function wordCount(html) {
  const match = html.match(/data-seo-prerender[\s\S]*?<\/div>/);
  if (!match) return 0;
  const text = match[0].replace(/<[^>]+>/g, ' ');
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

const instPages = ['servicos', 'contato', 'localizacao', 'locais-de-atendimento'];
console.log('3. Institucionais:');
for (const p of instPages) {
  const file = fs.readFileSync(`dist/${p}/index.html`, 'utf8');
  const count = wordCount(file);
  console.log(` - ${p}: ${count} palavras no prerender`);
}

// 4. Pilot URLs in sitemap
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const urls = sitemap.match(/<url>/g);
const totalSitemap = urls ? urls.length : 0;
const infoMatches = sitemap.match(/<loc>https:\/\/site\.reparoavancado\.com\.br\/informacoes/g);
const infoSitemap = infoMatches ? infoMatches.length : 0;
console.log(`4. Sitemap: Total ${totalSitemap}, Informações: ${infoSitemap}`);

// 5. Palavras do piloto informacoes
const infoPages = fs.readdirSync('dist/informacoes');
console.log('5. Piloto Informações (palavras no prerender):');
let infoPass = true;
for (const d of infoPages) {
  if (d.endsWith('.html')) continue; // skip index.html for a moment
  if (fs.statSync(`dist/informacoes/${d}`).isDirectory()) {
    const file = fs.readFileSync(`dist/informacoes/${d}/index.html`, 'utf8');
    const count = wordCount(file);
    console.log(` - ${d}: ${count} palavras`);
    if (count < 250) infoPass = false;
  }
}
if (infoPass) console.log('✅ Páginas do piloto com conteúdo completo (>250)');

// 6. CSS hiding gone
if (home.includes('data-seo-prerender]{height:0;overflow:hidden;opacity:0;position:absolute')) {
  console.log('❌ 6. CSS hiding AINDA PRESENTE');
} else if (home.includes('data-seo-prerender]{font-family')) {
  console.log('✅ 6. CSS hiding removido e substituído por estilizado');
} else {
  console.log('❌ 6. CSS missing completely');
}

// 7. Trava de regressão
const homeWC = wordCount(home);
const trocaWC = wordCount(fs.readFileSync('dist/troca-de-tela/index.html', 'utf8'));
console.log(`7. Trava de regressão: Home: ${homeWC} (min 203), Troca de Tela: ${trocaWC} (min 310)`);
if (homeWC >= 203 && trocaWC >= 310) {
  console.log('✅ Tudo OK, sem regressões.');
} else {
  console.log('❌ REGRESSÃO ENCONTRADA!');
}
