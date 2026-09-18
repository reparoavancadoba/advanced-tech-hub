import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allPosts, BAIRROS, BUSINESS_ADDRESS } from '../src/data/blogData';
import { macroRegioes, servicosLocais, bairros } from '../src/data/locaisData';
import { allConsolidatedServices } from '../src/data/servicosConsolidadosData';
import { listLocaisConsolidados } from '../src/data/locaisConsolidadosData';
import { businessInfo } from '../src/config/business';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("ERRO: dist/index.html não encontrado. Rode 'npm run build' primeiro.");
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

function generatePage(urlPath: string, title: string, description: string, h1: string, contentHtml: string, schemaObj: any = null) {
  const fullUrl = `https://site.reparoavancado.com.br${urlPath}`;
  
  let html = template;
  
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${description}">`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${description}">`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${title}">`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${description}">`);

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
        <a href="https://wa.me/${businessInfo.whatsapp}">Fale com um Técnico no WhatsApp</a>
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
    "image": "https://site.reparoavancado.com.br/favicon.png",
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

// Organic content for programmatics
function buildProgrammaticContent(servico: any, macro: any) {
  let contentHtml = `<p>A Reparo Avançado oferece serviços de ${servico.shortName.toLowerCase()} na região de ${macro.name}. ${servico.description}</p>`;
  contentHtml += `<h2>Bairros Atendidos</h2><p>Nossa área de cobertura nesta região inclui os seguintes locais: ${macro.bairrosInternos.join(', ')}.</p>`;
  if (servico.problems && servico.problems.length) {
     contentHtml += `<h2>Problemas que resolvemos</h2><ul>${servico.problems.map((p:string) => `<li>${p}</li>`).join('')}</ul>`;
  }
  if (servico.solution) { contentHtml += `<h2>Solução Especializada</h2><p>${servico.solution}</p>`; }
  if (servico.faqs && servico.faqs.length) {
     contentHtml += `<h2>Perguntas Frequentes</h2>` + servico.faqs.map((f:any) => `<h3>${f.question}</h3><p>${f.answer}</p>`).join('');
  }
  return contentHtml;
}

// Organic content for bairros
function buildLocalConsolidadoContent(local: any) {
  let contentHtml = `<p>${local.description}</p>`;
  contentHtml += `<p>Se você está procurando assistência técnica em ${local.title.replace('Assistência técnica em ', '')}, visite nossa loja ou solicite uma avaliação.</p>`;
  contentHtml += `<h2>Serviços Disponíveis</h2><ul>${allConsolidatedServices.map(s => `<li>${s.h1.replace(' em Salvador', '')}: ${s.metaDescription}</li>`).join('')}</ul>`;
  return contentHtml;
}

// 0. Institucionais
generatePage('/', 'Conserto de Celular em Salvador | Reparo Avançado', 'Assistência técnica de celular na Boca do Rio, Salvador: troca de tela, bateria e reparo de placa com orçamento gratuito e garantia de 90 dias.', 'Assistência técnica de celular em Salvador', '<p>Laboratório técnico para conserto de celulares, troca de tela, bateria e reparo de placas.</p>', baseLocalBusinessSchema);
generatePage('/servicos', 'Nossos Serviços | Reparo Avançado', 'Conheça os serviços especializados da Reparo Avançado em Salvador: troca de tela, substituição de bateria, banho químico e reparo avançado de placas.', 'Nossos Serviços', '<p>Oferecemos consertos especializados para diversas marcas e modelos.</p>', baseLocalBusinessSchema);
generatePage('/blog', 'Blog da Reparo Avançado', 'Acompanhe o blog da Reparo Avançado. Dicas, guias, novidades e tutoriais completos sobre conserto de celulares, troca de tela e placas em Salvador.', 'Blog da Reparo Avançado', '<p>Confira nossos artigos e novidades.</p>', baseLocalBusinessSchema);
generatePage('/locais-de-atendimento', 'Locais de Atendimento | Reparo Avançado', 'Confira todos os bairros e regiões de Salvador atendidos pela Reparo Avançado. Oferecemos assistência técnica especializada para celulares e notebooks.', 'Locais de Atendimento', '<p>Veja as áreas que cobrimos na nossa assistência técnica em Salvador.</p>', baseLocalBusinessSchema);
generatePage('/contato', 'Contato | Reparo Avançado', 'Entre em contato com a Reparo Avançado pelo WhatsApp ou visite nossa assistência técnica na Boca do Rio, Salvador, para diagnósticos e reparos.', 'Contato', '<p>Entre em contato com nossa equipe técnica.</p>', baseLocalBusinessSchema);
generatePage('/orcamento', 'Orçamento Gratuito | Reparo Avançado', 'Solicite um orçamento gratuito e sem compromisso para o conserto do seu celular em Salvador. Reparos rápidos, peças originais e garantia de 90 dias.', 'Orçamento Gratuito', '<p>Peça já seu orçamento sem compromisso.</p>', baseLocalBusinessSchema);
generatePage('/localizacao', 'Nossa Localização | Reparo Avançado', 'Veja como chegar na Reparo Avançado. Assistência técnica especializada localizada na Rua Abelardo Andrade de Carvalho, 8, Boca do Rio, Salvador - BA.', 'Nossa Localização', '<p>Venha nos visitar em nosso laboratório de última geração na Boca do Rio.</p>', baseLocalBusinessSchema);

// 1. Gerar Páginas do Blog
allPosts.forEach(post => {
  const urlPath = `/blog/${post.slug}`;
  const title = post.title;
  const description = post.metaDescription || post.description;
  const h1 = post.h1;
  
  let contentHtml = `<p><strong>Resumo:</strong> ${description}</p>`;
  if (post.tldr) contentHtml += `<h2>Direto ao Ponto (Resumo Rápido)</h2><p>${post.tldr}</p>`;
  contentHtml += `<h2>O Problema: ${post.service} ${post.model}</h2>`;
  if (post.problems && post.problems.length) contentHtml += `<ul>${post.problems.map(p => `<li>${p}</li>`).join('')}</ul>`;
  contentHtml += `<h2>Causas Comuns</h2>`;
  if (post.causes && post.causes.length) contentHtml += `<ul>${post.causes.map(c => `<li>${c}</li>`).join('')}</ul>`;
  
  if (post.sections) {
     contentHtml += post.sections.map(section => {
       let secHtml = `<h2>${section.title}</h2><p>${section.content}</p>`;
       if (section.subsections) {
         secHtml += section.subsections.map(sub => `<h3>${sub.title}</h3><p>${sub.content}</p>`).join('');
       }
       return secHtml;
     }).join('');
  }

  if (post.solution) contentHtml += `<h2>Solução Técnica da Reparo Avançado</h2><p>${post.solution}</p>`;
  if (post.whenToSeek) contentHtml += `<h2>Quando Procurar a Reparo Avançado</h2><p>${post.whenToSeek}</p>`;
  if (post.costInfo) contentHtml += `<h2>Quanto Custa ${post.service} ${post.model}?</h2><p>${post.costInfo}</p>`;

  let faqHtml = '';
  if (post.faq && post.faq.length) {
    faqHtml = post.faq.map(f => `<h3>${f.question}</h3><p>${f.answer}</p>`).join('');
  }
  let bairrosHtml = `<h2>Atendimento em Salvador - Boca do Rio</h2><p>A Reparo Avançado está localizada na ${BUSINESS_ADDRESS}. Atendemos clientes de toda Salvador, com destaque para os bairros:</p><p>${BAIRROS.join(', ')}</p>`;
  const fullContent = contentHtml + (faqHtml ? `<h2>Perguntas Frequentes</h2>${faqHtml}` : '') + bairrosHtml;

  const datePublished = post.datePublished || "2024-01-01T08:00:00-03:00";
  const dateModified = post.dateModified || datePublished;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": { "@type": "Person", "name": "Especialista Técnico Reparo Avançado" },
    "publisher": { "@type": "Organization", "name": businessInfo.name, "logo": { "@type": "ImageObject", "url": "https://site.reparoavancado.com.br/favicon.png" } }
  };
  generatePage(urlPath, title, description, h1, fullContent, blogSchema);
});

// 2. Gerar Páginas de Bairros (LocalConsolidado) - todos de locaisConsolidados
listLocaisConsolidados.forEach(local => {
  const urlPath = local.path;
  const title = local.title;
  const description = local.metaDescription;
  const h1 = local.h1;
  const contentHtml = buildLocalConsolidadoContent(local);
  generatePage(urlPath, title, description, h1, contentHtml, local.schema);
});

// 3. Serviços Consolidados
allConsolidatedServices.forEach(servico => {
  const urlPath = `/${servico.slug}`;
  const title = `${servico.title} | Na Hora & Garantia`;
  const description = `${servico.metaDescription}`;
  const h1 = servico.h1;
  
  let contentHtml = `<p>${servico.description}</p>`;
  contentHtml += `<h2>Marcas Atendidas</h2><ul>${servico.supportedBrands.map((b: string) => `<li>${b}</li>`).join('')}</ul>`;
  contentHtml += `<h2>Problemas Comuns</h2><ul>${servico.problems.map((p: string) => `<li>${p}</li>`).join('')}</ul>`;
  contentHtml += `<h2>Nossa Solução</h2><p>${servico.solution}</p>`;

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
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://site.reparoavancado.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://site.reparoavancado.com.br/servicos" },
          { "@type": "ListItem", "position": 3, "name": servico.h1, "item": `https://site.reparoavancado.com.br/${servico.slug}` }
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

// 5. 404
const notFoundPath = '/404';
const notFoundTitle = 'Página não encontrada | Reparo Avançado';
const notFoundHtml = template.replace(/<title>.*?<\/title>/, `<title>${notFoundTitle}</title>`).replace('</head>', '<meta name="robots" content="noindex"></head>');
fs.writeFileSync(path.join(distPath, '404.html'), notFoundHtml);

console.log("✅ Prerender finalizado.");
