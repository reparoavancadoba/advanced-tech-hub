const baseUrl = 'https://site.reparoavancado.com.br';
const sitemapUrl = `${baseUrl}/sitemap.xml`;

const urlsToCheck = [
  // Artigos Editoriais
  '/blog/parceria-manutencao-celulares-grupo-artemp',
  '/blog/autorizada-ou-independente-como-escolher-assistencia-tecnica',
  '/blog/vale-a-pena-consertar-celular-ou-comprar-novo',
  '/blog/garantia-de-conserto-de-celular-o-que-perguntar',
  '/blog/iphone-nao-liga-tela-preta-maca-travada-11-ao-14',
  '/blog/iphone-11-usado-vale-a-pena-o-que-checar',
  
  // Regiões e Home
  '/',
  '/assistencia-tecnica-miolo-e-centro-financeiro',
  '/assistencia-tecnica-orla-norte-e-aeroporto',
  '/assistencia-tecnica-cajazeiras-e-regiao',
  '/assistencia-tecnica-regiao-metropolitana',

  // Institucionais
  '/servicos',
  '/contato',
  '/localizacao',
  '/locais-de-atendimento',

  // Trava
  '/troca-de-tela',
  
  // Pilot informacoes
  '/informacoes/celular-nao-carrega-boca-do-rio',
  '/informacoes/celular-nao-carrega-brotas',
  '/informacoes/conserto-de-iphone-boca-do-rio',
  '/informacoes/conserto-de-iphone-pituba',
  '/informacoes/conserto-de-samsung-brotas',
  '/informacoes/conserto-de-samsung-imbui',
  '/informacoes/troca-de-bateria-celular-boca-do-rio',
  '/informacoes/troca-de-bateria-celular-imbui',
  '/informacoes/troca-de-tela-celular-boca-do-rio',
  '/informacoes/troca-de-tela-celular-pituba',
  '/informacoes'
];

function wordCount(html) {
  const match = html.match(/data-seo-prerender[\s\S]*?<\/div>/);
  if (!match) return 0;
  // user wants ONLY main content without header/footer for the pilot
  // So we strip out header and footer blocks
  let mainContent = match[0];
  mainContent = mainContent.replace(/<header>[\s\S]*?<\/header>/i, '');
  mainContent = mainContent.replace(/<footer>[\s\S]*?<\/footer>/i, '');
  const text = mainContent.replace(/<[^>]+>/g, ' ');
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function fullWordCount(html) {
  const match = html.match(/data-seo-prerender[\s\S]*?<\/div>/);
  if (!match) return 0;
  const text = match[0].replace(/<[^>]+>/g, ' ');
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

async function validateProd() {
  console.log('--- BUSCANDO EM PRODUÇÃO ---');
  let failures = 0;
  
  try {
    const r = await fetch(baseUrl + '/');
    const homeHtml = await r.text();
    
    // Check Home Title
    const matchHome = homeHtml.match(/<title>(.*?)<\/title>/);
    console.log(`HOME TITLE: ${matchHome ? matchHome[1] : 'NOT FOUND'}`);
    
    // Check CSS Rule
    if (homeHtml.includes('data-seo-prerender]{height:0')) {
        console.log('❌ REGRA CSS ANTIGA AINDA PRESENTE NA HOME!');
        failures++;
    } else if (homeHtml.includes('data-seo-prerender]{font-family')) {
        console.log('✅ Nova regra CSS estilizada encontrada.');
    } else {
        console.log('❌ CSS HIDING NAO ENCONTRADO!');
    }
  } catch (e) {
    console.log('Falha na home', e.message);
  }

  // 1. Artigos
  for (let i = 0; i < 6; i++) {
    const p = urlsToCheck[i];
    try {
      const res = await fetch(baseUrl + p);
      const html = await res.text();
      const hasProblema = html.includes('O Problema:');
      const hasCausas = html.includes('Causas Comuns');
      const hasEmptyH2 = html.includes('<h2></h2>');
      console.log(`${p}: ${hasProblema || hasCausas || hasEmptyH2 ? '❌ FALHOU (contém resíduos)' : '✅ OK (sem template antigo)'}`);
    } catch(e) {}
  }

  // 2. Region titles
  for (let i = 7; i <= 10; i++) {
    const p = urlsToCheck[i];
    try {
      const res = await fetch(baseUrl + p);
      const html = await res.text();
      const t = html.match(/<title>(.*?)<\/title>/);
      console.log(`${p}: Título => ${t ? t[1] : 'ERRO'}`);
    } catch (e) {}
  }

  // 3. Institucionais
  for (let i = 11; i <= 14; i++) {
    const p = urlsToCheck[i];
    try {
      const res = await fetch(baseUrl + p);
      const html = await res.text();
      console.log(`${p}: ${fullWordCount(html)} palavras`);
    } catch (e) {}
  }

  // 4. Sitemap
  try {
    const res = await fetch(sitemapUrl);
    const text = await res.text();
    const urls = text.match(/<url>/g);
    const total = urls ? urls.length : 0;
    const infos = text.match(/<loc>https:\/\/site\.reparoavancado\.com\.br\/informacoes/g);
    const infoCount = infos ? infos.length : 0;
    console.log(`SITEMAP TOTAL (DEPOIS): ${total}`);
    console.log(`SITEMAP /informacoes: ${infoCount} (antes era 0)`);
  } catch (e) {}

  // 5. Piloto informacoes
  console.log('--- PALAVRAS PILOTO (Sem menu/rodapé) ---');
  for (let i = 16; i <= 26; i++) {
    const p = urlsToCheck[i];
    try {
      const res = await fetch(baseUrl + p);
      if (!res.ok) {
        console.log(`${p}: ERRO ${res.status}`);
        continue;
      }
      const html = await res.text();
      const c = wordCount(html);
      console.log(`${p}: ${c} palavras`);
    } catch (e) {}
  }

  // 6. Trava
  try {
    const resH = await fetch(baseUrl + '/');
    const hWC = fullWordCount(await resH.text());
    const resT = await fetch(baseUrl + '/troca-de-tela');
    const tWC = fullWordCount(await resT.text());
    console.log(`TRAVA: Home ${hWC} (min 203) | Troca de Tela ${tWC} (min 310)`);
  } catch(e) {}
}

validateProd();
