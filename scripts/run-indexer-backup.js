import { google } from "googleapis";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

async function run() {
  console.log("Iniciando script de indexação...");
  
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
  let urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(sitemapContent)) !== null) {
    urls.push(match[1]);
  }

  // Filtrar apenas as URLs novas do SEO Programático (as que contém /conserto/) para não gastar a cota repetida
  const newUrls = urls.filter(u => u.includes("/conserto/"));
  
  // Limitar a 140 para respeitar a cota diária de 200 (já usamos 60 hoje)
  if (newUrls.length > 140) {
    console.log(`Limitando envio para 140 URLs (Cota diária do Google). Faltarão ${newUrls.length - 140} para amanhã.`);
    urls = newUrls.slice(0, 140);
  } else {
    urls = newUrls;
  }

  console.log(`Encontradas ${urls.length} URLs no sitemap.`);

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
      console.log(`[OK] ${url} -> Status: ${response.status}`);
      successCount++;
      await new Promise(r => setTimeout(r, 200));
    } catch (error) {
      console.error(`[ERRO] ${url} -> ${error.message}`);
      errorCount++;
    }
  }

  console.log("\n=================================");
  console.log("RESUMO DA INDEXAÇÃO:");
  console.log(`Sucesso: ${successCount}`);
  console.log(`Erros: ${errorCount}`);
  console.log("=================================\n");
}

run();
