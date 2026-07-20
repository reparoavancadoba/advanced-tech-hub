import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allPosts } from '../src/data/blogData';
import { bairros } from '../src/data/locaisData';
import { allConsolidatedServices } from '../src/data/servicosConsolidadosData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("ERRO: dist/index.html não encontrado. Rode 'npm run build' primeiro.");
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

function generatePage(urlPath, title, description, h1, contentHtml, faqHtml = '') {
  const fullUrl = `https://site.reparoavancado.com.br${urlPath}`;
  
  let html = template;
  
  // Substituir Meta Tags
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${description}">`);
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${description}">`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${title}">`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${description}">`);

  // Montar conteúdo legível para o Googlebot dentro do <div id="root">
  // Quando o React carregar (createRoot), ele vai sobrescrever isso de forma invisível para o usuário, mas o Google já terá lido o código-fonte!
  const seoContent = `
    <div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;" data-seo-prerender="true">
      <header>
        <h1>${h1}</h1>
      </header>
      <main>
        <p><strong>Resumo:</strong> ${description}</p>
        ${contentHtml}
        ${faqHtml ? `<h2>Dúvidas Frequentes (FAQ)</h2>${faqHtml}` : ''}
      </main>
      <footer>
        <a href="https://wa.me/5571999999999">Fale com um Técnico no WhatsApp</a>
      </footer>
    </div>
  `;

  // Injetar no root
  html = html.replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);

  // Criar diretório e salvar arquivo
  const outDir = path.join(distPath, urlPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Gerado SSG: ${urlPath} -> index.html`);
}

// 1. Gerar Páginas do Blog
import { BAIRROS, BUSINESS_ADDRESS } from '../src/data/blogData';

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

  let bairrosHtml = `<h2>Atendimento em Salvador – Boca do Rio</h2><p>A Reparo Avançado está localizada na ${BUSINESS_ADDRESS}. Atendemos clientes de toda Salvador, com destaque para os bairros:</p><p>${BAIRROS.join(', ')}</p>`;
  
  // Substituir os headers hardcoded no seoContent padrão (já que eles variam ou nós customizamos acima)
  const fullContent = contentHtml + (faqHtml ? `<h2>Perguntas Frequentes</h2>${faqHtml}` : '') + bairrosHtml;

  generatePage(urlPath, title, description, h1, fullContent, '');
});

// 2. Gerar Páginas de Bairros (LocalConsolidado) - Agora Macro Regiões
import { macroRegioes } from '../src/data/locaisData';

macroRegioes.forEach(macro => {
  const urlPath = `/assistencia-tecnica-${macro.slug}`;
  const title = `Assistência Técnica de Celular na ${macro.name} | Reparo Avançado`;
  const description = `Precisando consertar celular na região da ${macro.name}, Salvador? A Reparo Avançado oferece diagnóstico grátis e conserto na hora.`;
  const h1 = `Assistência Técnica na ${macro.name}`;
  const contentHtml = `<p>Atendemos rapidamente em toda a região, cobrindo especificamente os bairros: <strong>${macro.bairrosInternos.join(', ')}</strong>. Serviços de troca de tela, bateria, e reparo em placa.</p>`;
  generatePage(urlPath, title, description, h1, contentHtml);
});

allConsolidatedServices.forEach(servico => {
  const urlPath = `/${servico.slug}`;
  const title = `${servico.title} | Na Hora & Garantia`;
  const description = `Especialistas em ${servico.h1} em Salvador. Serviços rápidos para iPhone, Samsung e Motorola com peças originais e garantia.`;
  const h1 = servico.title;
  const contentHtml = `<p>${servico.description}</p>`;
  generatePage(urlPath, title, description, h1, contentHtml);
});

// 4. Gerar Páginas Programáticas (Bairro + Serviço) - Agora Macro Regiões
allConsolidatedServices.forEach(servico => {
  macroRegioes.forEach(macro => {
    const urlPath = `/conserto/${servico.slug}/na/${macro.slug}`;
    const title = `${servico.h1} na ${macro.name} | Na Hora & Garantia`;
    const description = `Precisando de ${servico.h1.toLowerCase()} na região da ${macro.name}, Salvador? Conte com a Reparo Avançado. Avaliação gratuita!`;
    const h1 = `${servico.h1} na ${macro.name}`;
    const contentHtml = `<p>Oferecemos o serviço de ${servico.h1.toLowerCase()} com atendimento dedicado para moradores e trabalhadores de toda a região, incluindo os bairros: <strong>${macro.bairrosInternos.join(', ')}</strong>.</p>`;
    generatePage(urlPath, title, description, h1, contentHtml);
  });
});

console.log('✅ SSG Pré-renderização concluída com sucesso!');
