import { google } from "googleapis";
import { existsSync } from "fs";
import { join } from "path";

async function run() {
  console.log("Iniciando script de indexação focado nas correções...");
  
  const keyPath = join(process.cwd(), "google-service-account.json");
  if (!existsSync(keyPath)) {
    console.error("ERRO FATAL: Arquivo google-service-account.json nao encontrado!");
    process.exit(1);
  }

  const urls = [
    "https://site.reparoavancado.com.br/assistencia-tecnica-boca-do-rio",
    "https://site.reparoavancado.com.br/assistencia-tecnica-imbui",
    "https://site.reparoavancado.com.br/assistencia-tecnica-brotas"
  ];

  console.log(`Encontradas ${urls.length} URLs para indexação forçada.`);

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
