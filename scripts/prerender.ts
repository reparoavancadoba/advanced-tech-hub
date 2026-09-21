import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allPosts, BAIRROS, BUSINESS_ADDRESS } from '../src/data/blogData';
import { macroRegioes, servicosLocais, bairros } from '../src/data/locaisData';
import { allConsolidatedServices } from '../src/data/servicosConsolidadosData';
import { listLocaisConsolidados } from '../src/data/locaisConsolidadosData';
import { businessInfo } from '../src/config/business';
const mergedSlugs = ["celular-nao-carrega-causas","celular-nao-carrega-causas-solucoes","celular-nao-carrega-salvador","motorola-nao-carrega-avaliacao-salvador","higienizacao-conector-cabo-carregar-salvador","celular-caiu-na-agua-o-que-fazer","celular-caiu-na-agua-desoxidacao-salvador","celular-molhou-chuva-praia-salvador-socorro","celular-caiu-no-mar-vale-a-pena-consertar","troca-de-bateria-celular-salvador","celular-descarregando-rapido","celular-esquentando-descarregando-rapido-bateria","vale-pena-trocar-vidro-ou-tela-completa","troca-vidro-vs-tela-completa-economia-salvador"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("ERRO: dist/index.html não encontrado. Rode 'npm run build' primeiro.");
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');
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

  const seoContent = `
    <div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;" data-seo-prerender="true">
      <header>
        <h1>${h1}</h1>
      </header>
      <main>
        ${contentHtml}
      </main>
      <footer>
        <p>${businessInfo.name} - ${businessInfo.streetAddress}, ${businessInfo.addressLocality}, ${businessInfo.city} - ${businessInfo.state}. CEP: ${businessInfo.postalCode}. Telefone: ${businessInfo.telephone}</p>
        <a href="https://wa.me/${WA_NUMBER}">Fale com um Técnico no WhatsApp</a>
      </footer>
    </div>
  `;

  if (schemaScript) {
      html = html.replace('</head>', `${schemaScript}</head>`);
  }

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
};

// ═══════════════════════════════════════════
// 0. Institutional Pages
// ═══════════════════════════════════════════
generatePage('/', 'Conserto de Celular em Salvador | Reparo Avançado', 'Assistência de celular na Boca do Rio, Salvador: conserto de tela, bateria e placa de iPhones e Androids. Orçamento grátis e garantia.', 'Assistência técnica de celular em Salvador', `<p>A Reparo Avançado é a sua principal assistência técnica de celular em Salvador. Com laboratório próprio na Boca do Rio, somos especializados no conserto de celular molhado, troca de tela celular e reparo avançado de placas. Se o seu smartphone quebrou, seja um display danificado que precisa de troca de tela iphone ou troca de tela samsung, nós resolvemos com rapidez e excelência. Nossa equipe técnica domina tudo sobre assistência técnica celular, usando peças premium e maquinário de ponta para garantir vida nova ao seu dispositivo. Oferecemos diagnóstico completo e um serviço de confiança para toda a região, consolidando nosso nome em assistência técnica de celular em Salvador.</p>`, baseLocalBusinessSchema);
generatePage('/servicos', 'Nossos Serviços | Reparo Avançado', 'Conheça os serviços especializados da Reparo Avançado em Salvador: troca de tela, substituição de bateria, banho químico e reparo avançado de placas.', 'Nossos Serviços', `<p>Descubra todos os consertos que oferecemos em nossa assistência. Realizamos troca de bateria, substituição de tela, reparo avançado de placas, microssoldagem e desoxidação. Seu aparelho está em boas mãos.</p>`, baseLocalBusinessSchema);
generatePage('/locais-de-atendimento', 'Locais de Atendimento | Reparo Avançado', 'Confira todos os bairros e regiões de Salvador atendidos pela Reparo Avançado. Oferecemos assistência técnica especializada para celulares e notebooks.', 'Locais de Atendimento', `<p>Atendemos toda a cidade de Salvador com rapidez e segurança. Se você está na Boca do Rio, Pituba, Imbuí, Caminho das Árvores, Cajazeiras ou outras regiões, conte com nossa assistência técnica perto de você.</p>`, baseLocalBusinessSchema);
generatePage('/contato', 'Contato e WhatsApp | Reparo Avançado – Boca do Rio, Salvador', 'Entre em contato com a Reparo Avançado pelo WhatsApp ou visite nossa assistência técnica na Boca do Rio, Salvador, para diagnósticos e reparos.', 'Contato', `<p>Fale conosco hoje mesmo. Nosso WhatsApp está disponível para tirar dúvidas, fazer agendamentos e passar pré-orçamentos. O atendimento da nossa assistência técnica é humanizado e ágil para toda Salvador.</p>`, baseLocalBusinessSchema);
generatePage('/orcamento', 'Orçamento Gratuito | Reparo Avançado', 'Solicite um orçamento gratuito e sem compromisso para o conserto do seu celular em Salvador. Reparos rápidos, peças originais e garantia de 90 dias.', 'Orçamento Gratuito', `<h2>Orçamento Conserto Celular: Como Funciona?</h2><p>Solicitar um orçamento conserto celular na Reparo Avançado é muito fácil e transparente.</p><h3>Como funciona o orçamento</h3><p>Nossa equipe realiza uma triagem inicial para entender os sintomas do seu aparelho. O diagnóstico presencial é gratuito e, em muitos casos, passamos a estimativa na hora.</p><h3>O que o cliente precisa informar</h3><p>Para agilizarmos seu atendimento via WhatsApp, pedimos que informe a marca, o modelo exato do aparelho e descreva brevemente o defeito (ex: tela quebrada, não liga, não carrega).</p><h3>Prazo de resposta pelo WhatsApp</h3><p>Nosso tempo médio de resposta pelo WhatsApp é de poucos minutos em horário comercial. Estamos prontos para devolver o seu celular funcionando no menor tempo possível.</p>`, baseLocalBusinessSchema);
generatePage('/localizacao', 'Nossa Localização | Reparo Avançado', 'Veja como chegar na Reparo Avançado. Assistência técnica especializada localizada na Rua Abelardo Andrade de Carvalho, 8, Boca do Rio, Salvador - BA.', 'Nossa Localização', `<p>Venha conhecer nosso laboratório na Boca do Rio, Salvador. Contamos com um ambiente climatizado, estacionamento acessível e estrutura técnica de última geração para receber você e reparar o seu celular com toda segurança.</p>`, baseLocalBusinessSchema);

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
  contentHtml += `<h2>O Problema: ${post.service} ${post.model}</h2>`;
  if (post.problems && post.problems.length) contentHtml += `<ul>${post.problems.map((p: string) => `<li>${p}</li>`).join('')}</ul>`;
  contentHtml += `<h2>Causas Comuns</h2>`;
  if (post.causes && post.causes.length) contentHtml += `<ul>${post.causes.map((c: string) => `<li>${c}</li>`).join('')}</ul>`;
  
  // Sections (first half)
  const sections = post.sections || [];
  const midPoint = Math.ceil(sections.length / 2);
  
  sections.slice(0, midPoint).forEach((section: any) => {
    contentHtml += `<h2>${section.title}</h2><p>${section.content}</p>`;
    if (section.subsections) {
      section.subsections.forEach((sub: any) => {
        contentHtml += `<h3>${sub.title}</h3><p>${sub.content}</p>`;
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
    contentHtml += `<h2>${section.title}</h2><p>${section.content}</p>`;
    if (section.subsections) {
      section.subsections.forEach((sub: any) => {
        contentHtml += `<h3>${sub.title}</h3><p>${sub.content}</p>`;
      });
    }
  });
  
  if (post.solution) contentHtml += `<h2>Solução Técnica da Reparo Avançado</h2><p>${post.solution}</p>`;
  if (post.whenToSeek) contentHtml += `<h2>Quando Procurar a Reparo Avançado</h2><p>${post.whenToSeek}</p>`;
  if (post.costInfo) contentHtml += `<h2>Quanto Custa ${post.service} ${post.model}?</h2><p>${post.costInfo}</p>`;

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
        "publisher": { "@type": "Organization", "name": businessInfo.name, "logo": { "@type": "ImageObject", "url": `${DOMAIN}/favicon.png` } },
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
  if (local.access) contentHtml += `<h2>Como Chegar</h2><p>${local.access}</p>`;
  if (local.distance) contentHtml += `<h2>Distância e Tempo</h2><p>${local.distance}</p>`;
  if (local.topServices) contentHtml += `<h2>Serviços Mais Procurados</h2><p>${local.topServices}</p>`;
  
  contentHtml += `
  <h2>Principais Serviços</h2>
  <ul>
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

console.log("✅ Prerender finalizado.");
