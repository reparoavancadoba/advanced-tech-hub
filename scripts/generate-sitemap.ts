import { writeFileSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { allPosts } from "../src/data/blogData";
import { macroRegioes, servicosLocais } from "../src/data/locaisData";
import { listLocaisConsolidados } from "../src/data/locaisConsolidadosData";
import { allConsolidatedServices } from "../src/data/servicosConsolidadosData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DOMAIN = "https://site.reparoavancado.com.br";

function getFileDate(relativePath: string) {
    try {
        const fullPath = path.join(__dirname, '..', relativePath);
        return statSync(fullPath).mtime.toISOString().split("T")[0];
    } catch(e) {
        return new Date().toISOString().split("T")[0];
    }
}

const urls: string[] = [];

// 1. Static Core Pages
const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly", file: "src/pages/Index.tsx" },
  { loc: "/servicos", priority: "0.9", changefreq: "monthly", file: "src/pages/Servicos.tsx" },
  { loc: "/blog", priority: "0.9", changefreq: "daily", file: "src/pages/Blog.tsx" },
  { loc: "/locais-de-atendimento", priority: "0.8", changefreq: "weekly", file: "src/pages/LocaisDeAtendimento.tsx" },
  { loc: "/orcamento", priority: "0.9", changefreq: "monthly", file: "src/pages/Orcamento.tsx" },
  { loc: "/contato", priority: "0.8", changefreq: "monthly", file: "src/pages/Contato.tsx" },
  { loc: "/localizacao", priority: "0.8", changefreq: "monthly", file: "src/pages/Localizacao.tsx" },
];

staticPages.forEach((p) => {
  urls.push(`  <url>
    <loc>${DOMAIN}${p.loc}</loc>
    <lastmod>${getFileDate(p.file)}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);
});

// 2. Consolidated Service Pages
const servicosDate = getFileDate("src/data/servicosConsolidadosData.ts");
allConsolidatedServices.forEach((service) => {
  urls.push(`  <url>
    <loc>${DOMAIN}/${service.slug}</loc>
    <lastmod>${servicosDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
});

// 3. Strategic Local Pages (and macro regions) -> everything in listLocaisConsolidados
const locaisDate = getFileDate("src/data/locaisConsolidadosData.ts");
listLocaisConsolidados.forEach((local) => {
  urls.push(`  <url>
    <loc>${DOMAIN}${local.path}</loc>
    <lastmod>${locaisDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
});

// 5. Active Blog Articles
allPosts.forEach((post) => {
  const priority = post.isEditorial ? "0.8" : "0.6";
  const postDate = (post.dateModified || post.datePublished || new Date().toISOString()).split('T')[0];
  urls.push(`  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`✅ Sitemap gerado com sucesso contendo ${urls.length} URLs fortes com lastmod real.`);
