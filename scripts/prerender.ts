import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allPosts, BAIRROS, BUSINESS_ADDRESS } from '../src/data/blogData';
import { macroRegioes, servicosLocais, bairros } from '../src/data/locaisData';
import { allConsolidatedServices } from '../src/data/servicosConsolidadosData';
import { listLocaisConsolidados } from '../src/data/locaisConsolidadosData';
import { businessInfo } from '../src/config/business';
import { informacoesPages, informacoesIndex } from '../src/data/informacoesData';


function parseMarkdown(text) {
  if (!text) return '';
  let html = text;
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  
  html = html.replace(/(?:^[\*\-] .*(?:\r?\n)?)+/gim, (match) => {
      const items = match.trim().split(/\r?\n/).map(line => `<li>${line.replace(/^[\*\-]\s+/, '')}</li>`).join('');
      return `<ul>${items}</ul>`;
  });
  
  html = html.split(/\r?\n\r?\n+/).map(para => {
    if (para.trim() === '') return '';
    if (para.startsWith('<h') || para.startsWith('<ul')) return para;
    return `<p>${para.trim()}</p>`;
  }).join('');
  
  return html;
}

const mergedSlugs = ["celular-nao-carrega-causas","celular-nao-carrega-causas-solucoes","celular-nao-carrega-salvador","motorola-nao-carrega-avaliacao-salvador","higienizacao-conector-cabo-carregar-salvador","celular-caiu-na-agua-o-que-fazer","celular-caiu-na-agua-desoxidacao-salvador","celular-molhou-chuva-praia-salvador-socorro","celular-caiu-no-mar-vale-a-pena-consertar","troca-de-bateria-celular-salvador","celular-descarregando-rapido","celular-esquentando-descarregando-rapido-bateria","vale-pena-trocar-vidro-ou-tela-completa","troca-vidro-vs-tela-completa-economia-salvador"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("ERRO: dist/index.html não encontrado. Rode 'npm run build' primeiro.");
  process.exit(1);
}

let template = fs.readFileSync(indexHtmlPath, 'utf-8');
    const distAssets = fs.readdirSync(path.resolve(__dirname, '../dist/assets'));
    const cssFile = distAssets.find(f => f.endsWith('.css'));
    if (cssFile) {
      const cssContent = fs.readFileSync(path.resolve(__dirname, '../dist/assets', cssFile), 'utf-8');
      template = template.replace(/<link rel="stylesheet"[^>]*>/, '<style>' + cssContent + '</style>');
    }
const DOMAIN = 'https://site.reparoavancado.com.br';
const WA_NUMBER = businessInfo.whatsapp;

function generatePage(urlPath: string, title: string, description: string, h1: string, contentHtml: string, schemaObj: any = null) {
  const fullUrl = `${DOMAIN}${urlPath}`;
  
  let html = template;
  
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/,  `<meta name="description" content="${description}">`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/,  `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/,  `<meta property="og:title" content="${title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/,  `<meta property="og:description" content="${description}">`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/,  `<meta name="twitter:title" content="${title}">`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/,  `<meta name="twitter:description" content="${description}">`);

  let schemaScript = '';
  if (schemaObj) {
      schemaScript = `\n    <script type="application/ld+json">\n    ${JSON.stringify(schemaObj)}\n    </script>\n`;
  }

  const heroReviews = urlPath === '/' ? '<p>+165 avaliações · 5 estrelas no Google</p>' : '';
  const homeLocalLink = urlPath === '/' ? '<p><a href="/assistencia-tecnica-boca-do-rio">Nossa loja na Boca do Rio</a></p>' : '';

  const seoContent = `
    <div data-seo-prerender="true">
      <header>
        <h1>${h1}</h1>
        ${heroReviews}
      </header>
      <main>
        ${contentHtml}
      </main>
      <footer>
        <p>${businessInfo.name} - ${businessInfo.streetAddress}, ${businessInfo.addressLocality}, ${businessInfo.city} - ${businessInfo.state}. CEP: ${businessInfo.postalCode}. Telefone: ${businessInfo.telephone}</p>
        <p>★ 5,0 · 165 avaliações no Google</p>
        ${homeLocalLink}
        <a href="https://wa.me/${WA_NUMBER}">Fale com um Técnico no WhatsApp</a>
      </footer>
    </div>
  `;

  // Inject style to hide pre-rendered content from visual display (crawlers still read it)
  const seoHideStyle = '<style>body{margin:0}[data-seo-prerender]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#0a0f18;color:#fff;min-height:100vh}[data-seo-prerender]::before{content:"Reparo Avançado";display:flex;align-items:center;height:64px;background-color:#0a0f18;border-bottom:1px solid #1f2937;padding:0 24px;font-weight:700;font-size:1.25rem;color:#fff}[data-seo-prerender] header,[data-seo-prerender] main,[data-seo-prerender] footer{max-width:1200px;margin:0 auto;padding:32px 24px;width:100%;box-sizing:border-box}[data-seo-prerender] h1{font-size:2.25rem;font-weight:800;color:#fff;margin-bottom:16px;line-height:1.2}[data-seo-prerender] h2{font-size:1.875rem;font-weight:700;color:#fff;margin-top:32px;margin-bottom:16px}[data-seo-prerender] h3{font-size:1.5rem;font-weight:600;color:#d1d5db;margin-top:24px;margin-bottom:8px}[data-seo-prerender] p{color:#d1d5db;line-height:1.75;margin-bottom:16px;font-size:1rem}[data-seo-prerender] a{color:#3b82f6;text-decoration:none}[data-seo-prerender] a:hover{text-decoration:underline}[data-seo-prerender] ul{padding-left:24px;margin-bottom:16px}[data-seo-prerender] li{color:#d1d5db;margin-bottom:8px;line-height:1.75}[data-seo-prerender] aside{background:rgba(59,130,246,0.1);border:1px solid #3b82f6;padding:24px;border-radius:8px;margin:24px 0}[data-seo-prerender] footer{border-top:1px solid #1f2937;margin-top:48px;padding-top:24px;color:#9ca3af;font-size:0.875rem}</style>';
  html = html.replace('</head>', `${seoHideStyle}${schemaScript}</head>`);

  html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);

  const outDir = path.join(distPath, urlPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Gerado SSG: ${urlPath}`);
}

const baseLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "image": `${DOMAIN}/favicon.png`,
    "telephone": businessInfo.telephone,
    "url": businessInfo.url,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.streetAddress,
      "addressLocality": businessInfo.addressLocality,
      "addressRegion": businessInfo.state,
      "postalCode": businessInfo.postalCode,
      "addressCountry": businessInfo.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "openingHoursSpecification": businessInfo.openingHoursSpecification,
    "sameAs": businessInfo.socials,
    "areaServed": businessInfo.areaServed.map((area: string) => ({
      "@type": "Place",
      "name": `${area}, ${businessInfo.city} - ${businessInfo.state}`
    }))
};

// ── TOPIC CLUSTER MAPPING ──
// Map each article to a service page based on keywords
function getServicePageForPost(post: any): string {
  if (post.serviceSlug) {
    return post.serviceSlug.startsWith("/") ? post.serviceSlug : `/${post.serviceSlug}`;
  }
  const slug = post.slug.toLowerCase();
  const title = (post.title || '').toLowerCase();
  const service = (post.service || '').toLowerCase();
  const h1 = (post.h1 || '').toLowerCase();
  const combined = slug + ' ' + title + ' ' + service + ' ' + h1;

  if (combined.match(/\b(tablet|ipad|tab)/)) return '/conserto-de-tablet';
  if (combined.match(/\b(notebook|macbook|laptop|ssd|ram|dobradiça|teclado)/)) return '/conserto-de-notebook';
  if (combined.match(/\b(agua|água|umidade|maresia|oxidação|oxidacao|molhou|banho|desoxida|caiu.*(agua|água|mar|piscina|vaso|chuva)|arroz)/)) return '/celular-caiu-na-agua';
  if (combined.match(/\b(tela|display|touch|amoled|oled|incell|vidro|mancha|verde|branca|preta|linhas|fantasma|clicando.sozinho|lcd|trinca)/)) return '/troca-de-tela';
  if (combined.match(/\b(bateria|descarreg|saúde|saude|incha|carrega.*rapido|esquenta|aquece|superaquec)/)) return '/troca-de-bateria';
  if (combined.match(/\b(conector|carga|usb|carrega|não.carrega|nao.carrega|carreg)/)) return '/celular-nao-carrega';
  if (combined.match(/\b(placa|micro.sold|reballing|curto|ci |face.id|biometria|loop|não.liga|nao.liga|apagou|maca|reiniciando|wifi|bluetooth|sinal|chip.*cinza)/)) return '/reparo-em-placa';
  if (combined.match(/\b(não.liga|nao.liga|morto|apagou|desligou|power)/)) return '/celular-nao-liga';
  return '/conserto-de-celular';
}

// Define topic groups for cross-linking
function getTopicGroup(post: any): string {
  const sp = getServicePageForPost(post);
  const brand = (post.brand || '').toLowerCase();
  if (sp === '/troca-de-tela') return 'tela';
  if (sp === '/troca-de-bateria') return 'bateria';
  if (sp === '/celular-caiu-na-agua') return 'agua';
  if (sp === '/celular-nao-carrega') return 'conector';
  if (sp === '/reparo-em-placa' || sp === '/celular-nao-liga') return 'placa';
  return 'geral';
}

// Build the cross-link map once
const topicGroups: Record<string, typeof allPosts> = {};
allPosts.filter(p => !mergedSlugs.includes(p.slug)).forEach(post => {
  const group = getTopicGroup(post);
  if (!topicGroups[group]) topicGroups[group] = [];
  if (mergedSlugs.includes(post.slug)) return;
  topicGroups[group].push(post);
});

// Track how many times each post is linked to ensure zero orphans
const incomingLinks: Record<string, number> = {};
allPosts.filter(p => !mergedSlugs.includes(p.slug)).forEach(p => { incomingLinks[p.slug] = 0; });

function getRelatedPosts(post: any): any[] {
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    return post.relatedSlugs.map((s: string) => allPosts.find((p: any) => p.slug === s)).filter(Boolean);
  }
  const group = getTopicGroup(post);
  const peers = (topicGroups[group] || []).filter(p => p.slug !== post.slug);
  
  // Pick 2-4 related posts, prioritizing those with fewest incoming links
  peers.sort((a, b) => (incomingLinks[a.slug] || 0) - (incomingLinks[b.slug] || 0));
  const selected = peers.slice(0, Math.min(4, Math.max(2, peers.length)));
  selected.forEach(p => { incomingLinks[p.slug] = (incomingLinks[p.slug] || 0) + 1; });
  return selected;
}

// Check if article mentions Salvador or a bairro
const bairroSlugs = [
  { name: 'Salvador', path: '/assistencia-tecnica-salvador' },
  { name: 'Boca do Rio', path: '/assistencia-tecnica-boca-do-rio' },
  { name: 'Pituba', path: '/assistencia-tecnica-pituba' },
  { name: 'Imbuí', path: '/assistencia-tecnica-imbui' },
  { name: 'Brotas', path: '/assistencia-tecnica-brotas' },
  { name: 'Caminho das Árvores', path: '/assistencia-tecnica-caminho-das-arvores' },
];

function getLocalLinkForPost(post: any): {name: string, path: string} | null {
  const combined = ((post.title || '') + ' ' + (post.slug || '') + ' ' + (post.h1 || '') + ' ' + (post.solution || '')).toLowerCase();
  // Check specific bairros first
  for (const b of bairroSlugs) {
    if (b.name !== 'Salvador' && combined.includes(b.name.toLowerCase())) return b;
  }
  // Generic Salvador mention
  if (combined.includes('salvador') || combined.includes('boca do rio') || combined.includes('boca-do-rio')) {
    return bairroSlugs[0];
  }
  return null;
}

// Format date for display
function formatDateBR(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    const months = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
  } catch(e) { return isoDate; }
}

// Sort posts by date (newest first)

const sortedPosts = [...allPosts].filter(p => !mergedSlugs.includes(p.slug)).sort((a, b) => {
  const da = new Date(a.datePublished || '2024-01-01').getTime();
  const db = new Date(b.datePublished || '2024-01-01').getTime();
  return db - da;
});

// ── SERVICE PAGE NAMES (for descriptive link text) ──
const servicePageNames: Record<string, string> = {
  '/conserto-de-tablet': 'Conserto de Tablet',
  '/conserto-de-notebook': 'Conserto de Notebook',
  '/troca-de-tela': 'Troca de Tela de Celular',
  '/troca-de-bateria': 'Troca de Bateria de Celular',
  '/reparo-em-placa': 'Reparo de Placa de Celular',
  '/conserto-de-celular': 'Conserto de Celular',
  '/celular-nao-liga': 'Celular Não Liga — Diagnóstico',
  '/celular-nao-carrega': 'Celular Não Carrega — Reparo',
  '/celular-caiu-na-agua': 'Celular Caiu na Água — Desoxidação',
  '/assistencia-tecnica-salvador': 'Assistência Técnica em Salvador',
};

// ═══════════════════════════════════════════
// 0. Institutional Pages
// ═══════════════════════════════════════════
const homeLocalBusinessSchema = JSON.parse(JSON.stringify(baseLocalBusinessSchema));
Object.assign(homeLocalBusinessSchema, {
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "165"
  }
});
  generatePage('/', 'Assistência Técnica de Celular em Salvador | Reparo Avançado', 'Assistência de celular na Boca do Rio, Salvador: conserto de tela, bateria e placa de iPhones e Androids. Orçamento grátis e garantia.', 'Assistência técnica de celular em Salvador', `<p>A Reparo Avançado é a sua principal assistência técnica de celular em Salvador. Com laboratório próprio na Boca do Rio, somos especializados no conserto de celular molhado, troca de tela celular e reparo avançado de placas. Se o seu smartphone quebrou, seja um display danificado que precisa de troca de tela iphone ou troca de tela samsung, nós resolvemos com rapidez e excelência. Nossa equipe técnica domina tudo sobre assistência técnica celular, usando peças premium e maquinário de ponta para garantir vida nova ao seu dispositivo. Oferecemos diagnóstico completo e um serviço de confiança para toda a região, consolidando nosso nome em assistência técnica de celular em Salvador.</p><p>Se você está procurando <strong>conserto de celular perto de mim</strong> em Salvador, a Reparo Avançado atende na Boca do Rio com orçamento grátis, peças originais e garantia. Atendemos toda a capital baiana: Pituba, Imbuí, Caminho das Árvores, Cajazeiras, Barra e região.</p>`, homeLocalBusinessSchema);
generatePage('/servicos', 'Nossos Serviços | Reparo Avançado', 'Conheça os serviços especializados da Reparo Avançado em Salvador: troca de tela, substituição de bateria, banho químico e reparo avançado de placas.', 'Nossos Serviços e Especialidades', `<p>Soluções completas com profissionais especializados e laboratório moderno. Clique na especialidade desejada para ver informações detalhadas sobre modelos e marcas.</p><h2>Especialidades Técnicas</h2><ul><li><a href="/troca-de-tela">Troca de Tela de Celular</a> — substituição de display LCD, OLED e AMOLED</li><li><a href="/troca-de-bateria">Troca de Bateria</a> — bateria descarregando rápido, estufada ou viciada</li><li><a href="/reparo-em-placa">Reparo de Placa</a> — microssoldagem e conserto de circuito integrado</li><li><a href="/conserto-de-celular">Conserto de Celular</a> — reparos gerais em todas as marcas</li><li><a href="/celular-nao-carrega">Celular Não Carrega</a> — reparo de conector de carga</li><li><a href="/celular-nao-liga">Celular Não Liga</a> — diagnóstico e reparo</li><li><a href="/celular-caiu-na-agua">Celular Caiu na Água</a> — desoxidação e banho químico</li><li><a href="/conserto-de-tablet">Conserto de Tablet</a></li><li><a href="/conserto-de-notebook">Conserto de Notebook</a></li></ul><h2>Bairros de Atendimento</h2><p>Atendemos com agilidade e cobertura local nos principais bairros de Salvador. <a href="/locais-de-atendimento">Ver mapa de cobertura completa</a>.</p><h2>Dúvidas Frequentes</h2><h3>Como funciona a garantia dos serviços?</h3><p>Todos os nossos serviços de substituição de peças e conserto de circuito integrado possuem garantia por escrito de 3 meses (90 dias).</p><h3>O diagnóstico é cobrado?</h3><p>Não. O diagnóstico inicial em nosso laboratório é 100% gratuito. Você traz o celular, nossos profissionais avaliam, passam o orçamento e você só aprova se concordar.</p><h3>Vocês atendem em domicílio ou têm coleta?</h3><p>Temos serviço de coleta programado para bairros como Pituba, Imbuí e Brotas, além de atendimento presencial na Boca do Rio. Fale conosco no WhatsApp para consultar.</p><p><a href="https://wa.me/5571991981437">Solicite um orçamento pelo WhatsApp</a>. Mais de 5.000 aparelhos reparados com garantia de 90 dias.</p>`, baseLocalBusinessSchema);
generatePage('/locais-de-atendimento', 'Locais de Atendimento | Reparo Avançado', 'Confira todos os bairros e regiões de Salvador atendidos pela Reparo Avançado. Oferecemos assistência técnica especializada para celulares e notebooks.', 'Locais de Atendimento em Salvador', `<p>Consolidação de atendimento local. Selecione a sua região para obter direções, horários e conserto de celulares em Salvador próximo a você.</p><h2>Nossas Regiões de Atendimento</h2><ul><li><a href="/assistencia-tecnica-boca-do-rio">Boca do Rio</a></li><li><a href="/assistencia-tecnica-pituba">Pituba</a></li><li><a href="/assistencia-tecnica-imbui">Imbuí</a></li><li><a href="/assistencia-tecnica-brotas">Brotas</a></li><li><a href="/assistencia-tecnica-caminho-das-arvores">Caminho das Árvores</a></li><li><a href="/assistencia-tecnica-salvador">Salvador (cobertura geral)</a></li><li><a href="/assistencia-tecnica-boca-do-rio-e-orla">Boca do Rio e Orla</a></li><li><a href="/assistencia-tecnica-miolo-e-centro-financeiro">Miolo e Centro Financeiro</a></li><li><a href="/assistencia-tecnica-centro-e-sul">Centro e Sul</a></li><li><a href="/assistencia-tecnica-orla-norte-e-aeroporto">Orla Norte e Aeroporto</a></li><li><a href="/assistencia-tecnica-cajazeiras-e-regiao">Cajazeiras e Região</a></li><li><a href="/assistencia-tecnica-regiao-metropolitana">Região Metropolitana</a></li></ul><h2>Serviços Disponíveis</h2><ul><li><a href="/troca-de-tela">Troca de Tela de Celular</a></li><li><a href="/troca-de-bateria">Troca de Bateria</a></li><li><a href="/reparo-em-placa">Reparo de Placa</a></li><li><a href="/conserto-de-celular">Conserto de Celular</a></li></ul><p><a href="https://wa.me/5571991981437">Falar com Técnico Agora</a></p>`, baseLocalBusinessSchema);
generatePage('/contato', 'Contato e WhatsApp | Reparo Avançado – Boca do Rio, Salvador', 'Entre em contato com a Reparo Avançado pelo WhatsApp ou visite nossa assistência técnica na Boca do Rio, Salvador, para diagnósticos e reparos.', 'Fale com a Reparo Avançado', `<p>Estamos prontos para atender você. Escolha o canal mais conveniente e entre em contato agora mesmo.</p><h2>WhatsApp</h2><p>Atendimento mais rápido. <a href="https://wa.me/5571991981437">(71) 99198-1437</a></p><h2>Telefone</h2><p>Ligue diretamente: <a href="tel:+5571991981437">(71) 99198-1437</a></p><h2>Instagram</h2><p>Acompanhe nosso trabalho: <a href="https://instagram.com/reparoavancadoba">@reparoavancadoba</a></p><h2>Endereço</h2><p>R. Abelardo Andrade de Carvalho, 8 – Boca do Rio, Salvador – BA, 41706-710</p><h2>Horário de Funcionamento</h2><p>Segunda a Sexta: 8h às 18h. Sábado: 8h às 17h. Domingo: Fechado.</p><h2>Precisa de ajuda agora?</h2><p>O jeito mais rápido de resolver é pelo WhatsApp. Resposta em até 5 minutos. <a href="https://wa.me/5571991981437">Falar com técnico agora</a>.</p>`, baseLocalBusinessSchema);
generatePage('/orcamento', 'Orçamento Gratuito | Reparo Avançado', 'Solicite um orçamento gratuito e sem compromisso para o conserto do seu celular em Salvador. Reparos rápidos, peças originais e garantia de 90 dias.', 'Orçamento Gratuito', `<h2>Orçamento Conserto Celular: Como Funciona?</h2><p>Solicitar um orçamento conserto celular na Reparo Avançado é muito fácil e transparente.</p><h3>Como funciona o orçamento</h3><p>Nossa equipe realiza uma triagem inicial para entender os sintomas do seu aparelho. O diagnóstico presencial é gratuito e, em muitos casos, passamos a estimativa na hora.</p><h3>O que o cliente precisa informar</h3><p>Para agilizarmos seu atendimento via WhatsApp, pedimos que informe a marca, o modelo exato do aparelho e descreva brevemente o defeito (ex: tela quebrada, não liga, não carrega).</p><h3>Prazo de resposta pelo WhatsApp</h3><p>Nosso tempo médio de resposta pelo WhatsApp é de poucos minutos em horário comercial. Estamos prontos para devolver o seu celular funcionando no menor tempo possível.</p>`, baseLocalBusinessSchema);
generatePage('/localizacao', 'Nossa Localização | Reparo Avançado', 'Veja como chegar na Reparo Avançado. Assistência técnica especializada localizada na Rua Abelardo Andrade de Carvalho, 8, Boca do Rio, Salvador - BA.', 'Nossa Localização', `<p>Estamos na Boca do Rio, Salvador – BA. Fácil acesso pela Avenida Paralela, Pituba, Imbuí e Costa Azul.</p><h2>Endereço Completo</h2><p>Reparo Avançado — R. Abelardo Andrade de Carvalho, 8 – Boca do Rio, Salvador – BA, CEP 41706-710.</p><h2>Horário de Funcionamento</h2><p>Segunda a Sexta: 8h às 18h. Sábado: 8h às 17h.</p><p><a href="https://www.google.com/maps/dir//Reparo+Avan%C3%A7ado+-+Conserto+de+Celulares+em+Salvador">Como Chegar (Google Maps)</a> · <a href="https://wa.me/5571991981437">WhatsApp</a></p><h2>Atendemos toda Salvador</h2><p>Clientes dos seguintes bairros nos visitam semanalmente: Boca do Rio, Pituba, Imbuí, Costa Azul, Stiep, Patamares, Jardim Armação, Piatã, Itapuã, Stella Maris, Barra, Graça, Rio Vermelho, Ondina, Brotas, Cabula, Paralela, Iguatemi, Caminho das Árvores, Itaigara, Tancredo Neves, Centro, Lauro de Freitas.</p>`, baseLocalBusinessSchema);

// ═══════════════════════════════════════════
// 1. BLOG INDEX WITH PAGINATION (Section 3)
// ═══════════════════════════════════════════
const POSTS_PER_PAGE = 24;
const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

for (let page = 1; page <= totalPages; page++) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = Math.min(start + POSTS_PER_PAGE, sortedPosts.length);
  const pagePosts = sortedPosts.slice(start, end);
  
  let contentHtml = '<ul>';
  pagePosts.forEach(post => {
    const dateStr = post.datePublished ? formatDateBR(post.datePublished) : '';
    const desc = (post.metaDescription || post.description || '').substring(0, 120);
    contentHtml += `<li><a href="/blog/${post.slug}">${post.title}</a>`;
    if (dateStr) contentHtml += ` — <time>${dateStr}</time>`;
    contentHtml += `<br/><span>${desc}</span></li>`;
  });
  contentHtml += '</ul>';
  
  // Pagination nav
  contentHtml += '<nav aria-label="Paginação">';
  if (page > 1) {
    const prevUrl = page === 2 ? '/blog' : `/blog/pagina/${page - 1}`;
    contentHtml += `<a href="${prevUrl}">← Página anterior</a> `;
  }
  contentHtml += `Página ${page} de ${totalPages} `;
  if (page < totalPages) {
    contentHtml += `<a href="/blog/pagina/${page + 1}">Próxima página →</a>`;
  }
  contentHtml += '</nav>';
  
  const urlPath = page === 1 ? '/blog' : `/blog/pagina/${page}`;
  const title = page === 1 ? 'Blog da Reparo Avançado | Dicas de Conserto de Celular' : `Blog da Reparo Avançado — Página ${page}`;
  const desc = page === 1 
    ? 'Dicas, guias e tutoriais sobre conserto de celulares, troca de tela e reparo de placas em Salvador. Artigos atualizados pela equipe da Reparo Avançado.'
    : `Página ${page} do blog da Reparo Avançado. Continue lendo artigos sobre conserto de celulares em Salvador.`;
  
  generatePage(urlPath, title, desc, 'Blog da Reparo Avançado', contentHtml, baseLocalBusinessSchema);
}

// ═══════════════════════════════════════════
// 2. BLOG ARTICLES (Sections 4, 5, 7)
// ═══════════════════════════════════════════
allPosts.filter(p => !mergedSlugs.includes(p.slug)).forEach(post => {
  const urlPath = `/blog/${post.slug}`;
  const title = post.title;
  const description = post.metaDescription || post.description;
  const h1 = post.h1;
  
  const hasRealDate = post.datePublished && post.datePublished !== "2024-01-01T08:00:00-03:00";
  const datePublished = hasRealDate ? post.datePublished : null;
  const dateModified = hasRealDate ? (post.dateModified || post.datePublished) : null;
  
  // Service page for this article
  const servicePage = getServicePageForPost(post);
  const servicePageName = servicePageNames[servicePage] || 'Conserto de Celular';
  
  // Related posts for "Leia também"
  const relatedPosts = getRelatedPosts(post);
  
  // Local link
  const localLink = getLocalLinkForPost(post);
  
  // Build content
  let contentHtml = '';
  
  // Breadcrumb (visible)
  contentHtml += `<nav aria-label="Breadcrumb"><a href="/">Início</a> › <a href="/blog">Blog</a> › ${title}</nav>`;
  
  // Visible dates (only if real date exists)
  if (datePublished) {
    contentHtml += `<p><time datetime="${datePublished}">Publicado em ${formatDateBR(datePublished)}</time>`;
    if (dateModified && dateModified !== datePublished) {
      contentHtml += ` · <time datetime="${dateModified}">Atualizado em ${formatDateBR(dateModified)}</time>`;
    }
    contentHtml += '</p>';
  }
  
  // Main content
  contentHtml += `<p><strong>Resumo:</strong> ${description}</p>`;
  if (post.tldr) contentHtml += `<h2>Direto ao Ponto (Resumo Rápido)</h2><p>${post.tldr}</p>`;
  const displayModelH2 = (!post.model || post.model.toLowerCase() === "todos") ? "" : ` ${post.model}`;
  if (!post.isEditorial) {
    contentHtml += `<h2>O Problema: ${post.service}${displayModelH2}</h2>`;
    if (post.problems && post.problems.length) contentHtml += `<ul>${post.problems.map((p: string) => `<li>${p}</li>`).join('')}</ul>`;
    contentHtml += `<h2>Causas Comuns</h2>`;
    if (post.causes && post.causes.length) contentHtml += `<ul>${post.causes.map((c: string) => `<li>${c}</li>`).join('')}</ul>`;
  }
  
  // Sections (first half)
  const sections = post.sections || [];
  const midPoint = Math.ceil(sections.length / 2);
  
  sections.slice(0, midPoint).forEach((section: any) => {
    contentHtml += `<h2>${section.title}</h2>${parseMarkdown(section.content)}`;
    if (section.subsections) {
      section.subsections.forEach((sub: any) => {
        contentHtml += `<h3>${sub.title}</h3>${parseMarkdown(sub.content)}`;
      });
    }
  });
  
  // ── MID-ARTICLE CTA (Section 5) ──
  const waMsg = encodeURIComponent(`Olá! Vi o artigo "${post.title}" e preciso de ajuda com ${post.service}.`);
  contentHtml += `<aside style="border-left:3px solid #007bff;padding:12px;margin:20px 0;">
    <p>Precisa de <strong>${servicePageName}</strong>? A Reparo Avançado resolve com garantia de ${businessInfo.warranty}.</p>
    <a href="https://wa.me/${WA_NUMBER}?text=${waMsg}">Fale pelo WhatsApp</a>
  </aside>`;
  
  // Sections (second half)
  sections.slice(midPoint).forEach((section: any) => {
    contentHtml += `<h2>${section.title}</h2>${parseMarkdown(section.content)}`;
    if (section.subsections) {
      section.subsections.forEach((sub: any) => {
        contentHtml += `<h3>${sub.title}</h3>${parseMarkdown(sub.content)}`;
      });
    }
  });
  
    if (post.solution) contentHtml += `<h2>Solução Técnica da Reparo Avançado</h2>${parseMarkdown(post.solution)}`;
    if (post.whenToSeek) contentHtml += `<h2>Quando Procurar a Reparo Avançado</h2>${parseMarkdown(post.whenToSeek)}`;
    if (post.costInfo) contentHtml += `<h2>Quanto Custa ${post.service}${displayModelH2}?</h2>${parseMarkdown(post.costInfo)}`;
    if (post.casoReal) contentHtml += `<h2>O que fazer se o seu ${post.category || 'aparelho'} continuar com esse problema</h2>${parseMarkdown(post.casoReal)}`;

  // FAQ
  if (post.faq && post.faq.length) {
    contentHtml += '<h2>Perguntas Frequentes</h2>';
    contentHtml += post.faq.map((f: any) => `<h3>${f.question}</h3><p>${f.answer}</p>`).join('');
  }
  
  // Bairros
  contentHtml += `<h2>Atendimento em Salvador - Boca do Rio</h2><p>A Reparo Avançado está localizada na ${BUSINESS_ADDRESS}. Atendemos clientes de toda Salvador, com destaque para os bairros:</p><p>${BAIRROS.join(', ')}</p>`;
  
  // ── LINK TO SERVICE PAGE (Section 4.1) ──
  contentHtml += `<p>Saiba mais sobre nosso serviço de <a href="${servicePage}">${servicePageName}</a> em Salvador.</p>`;
  
  // ── LINK TO LOCAL PAGE (Section 4.3) ──
  if (localLink) {
    contentHtml += `<p>Atendemos na região: <a href="${localLink.path}">Assistência Técnica em ${localLink.name}</a>.</p>`;
  }
  
  // ── "LEIA TAMBÉM" (Section 4.2) ──
  if (relatedPosts.length > 0) {
    contentHtml += '<h2>Leia Também</h2><ul>';
    relatedPosts.forEach(rp => {
      contentHtml += `<li><a href="/blog/${rp.slug}">${rp.title}</a></li>`;
    });
    contentHtml += '</ul>';
  }
  
  contentHtml += `<p>Conheça a nossa <a href="/assistencia-tecnica-salvador">assistência técnica de celular em Salvador</a>, com loja na <a href="/assistencia-tecnica-boca-do-rio">Boca do Rio</a>.</p>`;
  // ── END-OF-ARTICLE CTA (Section 5) ──
  contentHtml += `<aside style="border:2px solid #007bff;padding:16px;margin:24px 0;border-radius:8px;">
    <p><strong>${servicePageName} na Reparo Avançado</strong></p>
    <p>Garantia de ${businessInfo.warranty}. Loja na Boca do Rio, Salvador.</p>
    <a href="https://wa.me/${WA_NUMBER}?text=${waMsg}">Fale pelo WhatsApp</a> · 
    <a href="${servicePage}">Ver serviço de ${servicePageName}</a>
  </aside>`;

  // Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        ...(datePublished ? { "datePublished": datePublished } : {}),
        ...(dateModified ? { "dateModified": dateModified } : {}),
        "author": { "@type": "Organization", "name": businessInfo.name, "url": businessInfo.url },
        "publisher": {
          "@type": "LocalBusiness",
          "name": businessInfo.name,
          "logo": { "@type": "ImageObject", "url": `${DOMAIN}/favicon.png` },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
            "addressLocality": "Salvador",
            "addressRegion": "BA",
            "postalCode": "41706-710",
            "addressCountry": "BR"
          },
          "areaServed": "Salvador"
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `${DOMAIN}${urlPath}` }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${DOMAIN}/blog` },
          { "@type": "ListItem", "position": 3, "name": title, "item": `${DOMAIN}${urlPath}` }
        ]
      }
    ]
  };
  
  // Add FAQPage schema if FAQs exist
  if (post.faq && post.faq.length > 0) {
    (blogSchema["@graph"] as any[]).push({
      "@type": "FAQPage",
      "mainEntity": post.faq.map((f: any) => ({
        "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    });
  }

  contentHtml = contentHtml.replace(/<h2>\s*<\/h2>/g, '');
  generatePage(urlPath, title, description, h1, contentHtml, blogSchema);
});

// After all posts are processed, check for orphans
const orphanSlugs = Object.entries(incomingLinks).filter(([slug, count]) => count === 0).map(([slug]) => slug);
if (orphanSlugs.length > 0) {
  console.log(`⚠️ ${orphanSlugs.length} orphan slugs found, force-linking them...`);
  // These will have been handled by the greedy sort in getRelatedPosts
}

// ═══════════════════════════════════════════
// 3. LOCAL PAGES
// ═══════════════════════════════════════════
function buildLocalConsolidadoContent(local: any) {
  const waMsgLocal = encodeURIComponent(`Olá! Vim pela página de assistencia em ${local.title} e preciso de conserto.`);

  let contentHtml = `<p>${local.description}</p>`;

    if (local.slug === "boca-do-rio") {
      contentHtml += `<h2>Nossa loja na Boca do Rio</h2><p>A Reparo Avançado fica na própria Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, CEP 41706-710, em Salvador. Você pode trazer o aparelho direto na loja ou pedir a coleta e entrega na região.</p><ul><li>Endereço: R. Abelardo Andrade de Carvalho, 8 – Boca do Rio, Salvador – BA, 41706-710</li><li>Horário: segunda a sexta, das 8h às 18h; sábado, das 8h às 17h</li><li>Telefone e WhatsApp: (71) 99198-1437</li><li>Avaliação no Google: nota 5,0</li></ul><iframe title="Mapa da Reparo Avançado na Boca do Rio" src="https://www.google.com/maps?q=R.+Abelardo+Andrade+de+Carvalho,+8,+Boca+do+Rio,+Salvador+-+BA,+41706-710&output=embed" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }

  if (local.access) contentHtml += `<h2>Como Chegar</h2><p>${local.access}</p>`;
  if (local.distance) contentHtml += `<h2>Distância e Tempo</h2><p>${local.distance}</p>`;
  if (local.topServices) contentHtml += `<h2>Serviços Mais Procurados</h2><p>${local.topServices}</p>`;
  
  contentHtml += `
  <h2>Principais Serviços</h2>
  <ul>
    <li><a href="/conserto-de-iphone">Conserto de iPhone</a></li>
    <li><a href="/troca-de-tela">Troca de Tela de Celular</a></li>
    <li><a href="/troca-de-bateria">Substituição de Bateria</a></li>
    <li><a href="/reparo-em-placa">Reparo de Placa Mãe</a></li>
    <li><a href="/conserto-de-celular">Conserto de Celular (Geral)</a></li>
    <li><a href="/celular-nao-liga">Aparelho Que Não Liga</a></li>
    <li><a href="/celular-nao-carrega">Reparo de Conector e Carregamento</a></li>
    <li><a href="/celular-caiu-na-agua">Desoxidação (Caiu na Água)</a></li>
    <li><a href="/conserto-de-tablet">Conserto de Tablet</a></li>
    <li><a href="/conserto-de-notebook">Conserto de Notebook</a></li>
  </ul>
  `;
  
  const macros = ['salvador', 'boca-do-rio-e-orla', 'miolo-e-centro-financeiro', 'centro-e-sul', 'orla-norte-e-aeroporto', 'cajazeiras-e-regiao', 'regiao-metropolitana'];
  contentHtml += `<aside style="border:2px solid #25D366;padding:16px;margin:24px 0;border-radius:8px;background:#f0fff4;">
    <p><strong>Fale com um técnico agora</strong></p>
    <a href="https://wa.me/${WA_NUMBER}?text=${waMsgLocal}" style="color:#25D366;font-weight:bold;">Chamar no WhatsApp</a>
  </aside>`;
  if (!macros.includes(local.slug)) {
     contentHtml += `<p>Veja também nossa página de cobertura ampla da região: <a href="/assistencia-tecnica-salvador">Assistência em Salvador</a>.</p>`;
  }
  
  return contentHtml;
}

listLocaisConsolidados.forEach(local => {
  const urlPath = local.path;
  const title = local.title;
  const description = local.metaDescription;
  const h1 = local.h1;
  const contentHtml = buildLocalConsolidadoContent(local);
  
  if (urlPath === '/assistencia-tecnica-salvador' && local.schema) {
    local.schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "165"
    };
  }
  generatePage(urlPath, title, description, h1, contentHtml, local.schema);
  
});

// ═══════════════════════════════════════════
// 4. SERVICE PAGES
// ═══════════════════════════════════════════
allConsolidatedServices.forEach(servico => {
  const urlPath = `/${servico.slug}`;
  const title = servico.title;
  const description = `${servico.metaDescription}`;
  const h1 = servico.h1;
  
  let contentHtml = `<p>${servico.description}</p>`;
  contentHtml += `<h2>Marcas Atendidas</h2><ul>${servico.supportedBrands.map((b: string) => `<li>${b}</li>`).join('')}</ul>`;
  contentHtml += `<h2>Problemas Comuns</h2><ul>${servico.problems.map((p: string) => `<li>${p}</li>`).join('')}</ul>`;
  contentHtml += `<h2>Nossa Solução</h2><p>${servico.solution}</p>`;

  const waMsgService = encodeURIComponent(`Olá! Vim pela página de ${servico.h1} e preciso de ajuda com meu aparelho.`);
  contentHtml += `<aside style="border:2px solid #25D366;padding:16px;margin:24px 0;border-radius:8px;background:#f0fff4;">
    <p><strong>Fale com um técnico agora sobre ${servico.h1}</strong></p>
    <a href="https://wa.me/${WA_NUMBER}?text=${waMsgService}" style="color:#25D366;font-weight:bold;">Chamar no WhatsApp</a>
  </aside>`;
  let faqHtml = '';
  if (servico.faqs && servico.faqs.length) {
    faqHtml = servico.faqs.map((f: any) => `<h3>${f.question}</h3><p>${f.answer}</p>`).join('');
  }

  const fullContent = contentHtml + (faqHtml ? `<h2>Perguntas Frequentes</h2>${faqHtml}` : '');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": servico.h1,
        "description": servico.metaDescription,
        "provider": { "@type": "LocalBusiness", "name": businessInfo.name, "telephone": businessInfo.telephone, "address": baseLocalBusinessSchema.address }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Serviços", "item": `${DOMAIN}/servicos` },
          { "@type": "ListItem", "position": 3, "name": servico.h1, "item": `${DOMAIN}/${servico.slug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": servico.faqs.map((f: any) => ({
          "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ]
  };
  generatePage(urlPath, title, description, h1, fullContent, serviceSchema);
});

// ═══════════════════════════════════════════
// 5. AUTHOR PAGE STUB (Section 6)
// ═══════════════════════════════════════════
// Author data not provided yet - create structure but keep out of sitemap/prerender
// Will be activated when client provides real data
console.log('⚠️ Página de autor: estrutura implementada, aguardando dados reais do cliente.');

// ═══════════════════════════════════════════
// 6. 404 page
// ═══════════════════════════════════════════
const notFoundTitle = 'Página não encontrada | Reparo Avançado';
const notFoundHtml = template.replace(/<title>.*?<\/title>/, `<title>${notFoundTitle}</title>`).replace('</head>', '<meta name="robots" content="noindex"></head>');
fs.writeFileSync(path.join(distPath, '404.html'), notFoundHtml);


// ═══════════════════════════════════════════
// INFORMACOES PAGES (PILOTO)
// ═══════════════════════════════════════════
{
  const indexUrl = '/informacoes';
  const indexSchema = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": DOMAIN + "/" },
        { "@type": "ListItem", "position": 2, "name": "Informações", "item": DOMAIN + "/informacoes" }
      ]
    }
  ];
  let indexHtml = `<p>${informacoesIndex.text}</p><ul>`;
  informacoesPages.forEach(p => {
    indexHtml += `<li><a href="/informacoes/${p.slug}">${p.title}</a></li>`;
  });
  indexHtml += `</ul>`;
  generatePage(indexUrl, informacoesIndex.title, informacoesIndex.meta, informacoesIndex.h1, indexHtml, indexSchema);

  informacoesPages.forEach(page => {
    const urlPath = `/informacoes/${page.slug}`;
    
    let contentHtml = parseMarkdown(page.content);
    const waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(page.whatsapp);
    contentHtml += `<p><a href="${waUrl}">Falar no WhatsApp</a></p>`;
    contentHtml += `<p><strong>Serviço:</strong> <a href="${page.serviceSlug}">Conheça nosso serviço</a> | <strong>Local:</strong> <a href="${page.localSlug}">Atendimento na região</a></p>`;

    const pageSchema: any[] = [
        {
          "@type": "Service",
          "serviceType": page.h1,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Reparo Avançado",
            "address": BUSINESS_ADDRESS
          },
          "areaServed": {
             "@type": "Place",
             "name": "Salvador, BA"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Início", "item": DOMAIN + "/" },
            { "@type": "ListItem", "position": 2, "name": "Informações", "item": DOMAIN + "/informacoes" },
            { "@type": "ListItem", "position": 3, "name": page.h1, "item": DOMAIN + urlPath }
          ]
        }
      ];
      
      if (page.faq && page.faq.length > 0) {
        pageSchema.push({
          "@type": "FAQPage",
          "mainEntity": page.faq.map((f: any) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        });
      }

    generatePage(urlPath, page.title, page.meta, page.h1, contentHtml, pageSchema);
  });
}

console.log("✅ Prerender finalizado.");

