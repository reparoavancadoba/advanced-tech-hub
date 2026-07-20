// Sitemap generator - runs at build time
import { writeFileSync } from "fs";
import { allPosts } from "../src/data/blogData";

const DOMAIN = "https://site.reparoavancado.com.br";
const today = new Date().toISOString().split("T")[0];

// 1. Static Core Pages
const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/servicos", priority: "0.9", changefreq: "monthly" },
  { loc: "/blog", priority: "0.9", changefreq: "daily" },
  { loc: "/locais-de-atendimento", priority: "0.8", changefreq: "weekly" },
  { loc: "/orcamento", priority: "0.9", changefreq: "monthly" },
  { loc: "/contato", priority: "0.8", changefreq: "monthly" },
  { loc: "/localizacao", priority: "0.8", changefreq: "monthly" },
];

const urls = staticPages.map(
  (p) => `  <url>
    <loc>${DOMAIN}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
);

// 2. Consolidated Service Pages
const consolidatedServices = [
  "troca-de-tela",
  "troca-de-bateria",
  "reparo-em-placa",
  "conserto-de-celular",
  "celular-nao-carrega",
  "celular-nao-liga",
  "celular-caiu-na-agua"
];

consolidatedServices.forEach((service) => {
  urls.push(`  <url>
    <loc>${DOMAIN}/${service}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
});

// 3. Strategic Local Pages
const strategicLocals = [
  "assistencia-tecnica-salvador",
  "assistencia-tecnica-boca-do-rio",
  "assistencia-tecnica-pituba",
  "assistencia-tecnica-imbui",
  "assistencia-tecnica-brotas"
];

strategicLocals.forEach((local) => {
  urls.push(`  <url>
    <loc>${DOMAIN}/${local}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
});

// 4. Programmatic SEO Pages (The Macro-Region Generator)
const programmaticUrls: string[] = [];
import { macroRegioes, servicosLocais } from "../src/data/locaisData";

servicosLocais.forEach((servico) => {
  macroRegioes.forEach((macro) => {
    programmaticUrls.push(`  <url>
    <loc>${DOMAIN}/conserto/${servico.slug}/na/${macro.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });
});
urls.push(...programmaticUrls);

// 5. Active Blog Articles (Editorial + Problem Posts)
allPosts.forEach((post) => {
  const priority = post.isEditorial ? "0.8" : "0.6";
  urls.push(`  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`);
});


const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`✅ Sitemap gerado com sucesso contendo ${urls.length} URLs fortes.`);

// Gerar Netlify _redirects automaticamente para redirecionamentos 301
const redirectLines: string[] = [
  "# Netlify Redirects - Gerado automaticamente no build",
  "",
  "# 1. Artigos Ativos (Bypass de wildcards para carregar no React Router)",
];

allPosts.forEach((post) => {
  redirectLines.push(`/blog/${post.slug} /index.html 200`);
});

redirectLines.push(
  "",
  "# 2. Redirecionamentos 301 de Artigos de Modelo Obsoletos",
  "/blog/troca-de-tela-* /troca-de-tela 301",
  "/blog/troca-tela-* /troca-de-tela 301",
  "/blog/troca-de-bateria-* /troca-de-bateria 301",
  "/blog/reparo-de-placa-* /reparo-em-placa 301",
  "/blog/conector-de-carga-* /celular-nao-carrega 301",
  "/blog/aparelho-nao-liga-* /celular-nao-liga 301",
  "/blog/aparelho-nao-carrega-* /celular-nao-carrega 301",
  "/blog/desoxidacao-* /celular-caiu-na-agua 301",
  "/blog/celular-nao-liga-* /celular-nao-liga 301",
  "/blog/celular-nao-carrega-* /celular-nao-carrega 301",
  "/blog/celular-caiu-na-agua-* /celular-caiu-na-agua 301",
  "/blog/troca-de-microfone-* /conserto-de-celular 301",
  "/blog/alto-falante-audio-* /conserto-de-celular 301",
  "/blog/cameras-* /conserto-de-celular 301",
  "/blog/face-id-* /conserto-de-celular 301",
  "/blog/biometria-* /conserto-de-celular 301",
  "/blog/software-* /conserto-de-celular 301",
  "/blog/upgrade-ssd-* /conserto-de-celular 301",
  "/blog/upgrade-ram-* /conserto-de-celular 301",
  "/blog/limpeza-interna-* /conserto-de-celular 301",
  "/blog/pasta-termica-* /conserto-de-celular 301",
  "/blog/dobradicas-* /conserto-de-celular 301",
  "",
  "# 3. Redirecionamentos 301 de Rotas Locais (Macro-Regiões)",
);

macroRegioes.forEach(macro => {
  macro.oldSlugs.forEach(bairro => {
    // Redirects for `/assistencia-tecnica-:bairro` -> `/assistencia-tecnica-:macro`
    redirectLines.push(`/assistencia-tecnica-${bairro} /assistencia-tecnica-${macro.slug} 301`);
    
    // Redirects for `/conserto/:servico/em/:bairro` -> `/conserto/:servico/na/:macro`
    servicosLocais.forEach(servico => {
      redirectLines.push(`/conserto/${servico.slug}/em/${bairro} /conserto/${servico.slug}/na/${macro.slug} 301`);
    });
  });
});

redirectLines.push(
  "",
  "# 4. SPA Fallback (Catch-all para o React Router)",
  "/* /index.html 200"
);

writeFileSync("public/_redirects", redirectLines.join("\n"));
console.log("✅ Netlify _redirects gerado com sucesso.");

