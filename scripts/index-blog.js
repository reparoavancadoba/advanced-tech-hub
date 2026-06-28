import { google } from "googleapis";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

async function run() {
  console.log("=== INDEXAÇÃO DE BLOG POSTS ===\n");
  
  const keyPath = join(process.cwd(), "google-service-account.json");
  if (!existsSync(keyPath)) {
    console.error("ERRO FATAL: Arquivo google-service-account.json nao encontrado!");
    process.exit(1);
  }

  // Lendo URLs do sitemap.xml
  const sitemapPath = join(process.cwd(), "public", "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    console.error("ERRO: sitemap.xml nao encontrado na pasta public!");
    process.exit(1);
  }

  const sitemapContent = readFileSync(sitemapPath, "utf-8");
  let allUrls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemapContent)) !== null) {
    allUrls.push(match[1]);
  }

  // Filtrar apenas URLs de blog + páginas de serviço + locais (não programático)
  const blogUrls = allUrls.filter(u => u.includes("/blog/"));
  const serviceUrls = allUrls.filter(u => 
    !u.includes("/blog/") && 
    !u.includes("/conserto/") && 
    !u.includes("/atendimento/")
  );
  
  // Priorizar blog posts + páginas estratégicas
  const urls = [...blogUrls, ...serviceUrls].slice(0, 200);

  console.log(`Total no sitemap: ${allUrls.length}`);
  console.log(`URLs de blog: ${blogUrls.length}`);
  console.log(`URLs de serviço/locais: ${serviceUrls.length}`);
  console.log(`Enviando para indexação: ${urls.length}\n`);

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: "v3", auth: authClient });

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: "URL_UPDATED",
        },
      });
      console.log(`[${i+1}/${urls.length}] OK: ${url}`);
      successCount++;
      // Delay de 200ms entre requests
      await new Promise(r => setTimeout(r, 200));
    } catch (error) {
      console.error(`[${i+1}/${urls.length}] ERRO: ${url} -> ${error.message}`);
      errorCount++;
    }
  }

  console.log("\n=================================");
  console.log("RESUMO DA INDEXAÇÃO DE BLOG:");
  console.log(`Sucesso: ${successCount}`);
  console.log(`Erros: ${errorCount}`);
  console.log(`Total: ${urls.length}`);
  console.log("=================================\n");
}

run();
