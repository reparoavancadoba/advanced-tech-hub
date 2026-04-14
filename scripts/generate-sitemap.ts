// Sitemap generator - runs at build time
import { allPosts } from "../src/data/blogData";

const DOMAIN = "https://site.reparoavancado.com.br";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/servicos", priority: "0.9", changefreq: "monthly" },
  { loc: "/blog", priority: "0.9", changefreq: "daily" },
];

const urls = staticPages.map(
  (p) => `  <url>
    <loc>${DOMAIN}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
);

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

import { writeFileSync } from "fs";
writeFileSync("public/sitemap.xml", sitemap);
console.log(`✅ Sitemap gerado com ${urls.length} URLs`);
