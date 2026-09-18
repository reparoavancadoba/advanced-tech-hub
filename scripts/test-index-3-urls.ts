import { google } from "googleapis";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

/**
 * Teste controlado: envia só 3 URLs pra Google Indexing API, usando a MESMA
 * lógica de autenticação e chamada (googleapis + urlNotifications.publish)
 * que scripts/run-indexer.ts usa em produção. Serve pra confirmar que a cota
 * voltou a funcionar sem gastar as 200 URLs do dia inteiro num disparo só.
 * Arquivo isolado, não mexe em run-indexer.ts nem no workflow.
 */
async function run() {
  console.log("Teste controlado: enviando 3 URLs pra indexação...");

  const keyPath = join(process.cwd(), "google-service-account.json");
  if (!existsSync(keyPath)) {
    console.error("ERRO FATAL: Arquivo google-service-account.json não encontrado!");
    process.exit(1);
  }

  const urlsToTest = [
    "https://site.reparoavancado.com.br/",
    "https://site.reparoavancado.com.br/troca-de-tela",
    "https://site.reparoavancado.com.br/blog/celular-nao-liga",
  ];

  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: "v3", auth: authClient });

  let successCount = 0;
  let errorCount = 0;

  for (const url of urlsToTest) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: { url, type: "URL_UPDATED" },
      });
      console.log(`[OK] ${url} -> Status: ${response.status}`);
      successCount++;
    } catch (error: any) {
      console.error(`[ERRO] ${url} -> ${error.message}`);
      errorCount++;
    }
  }

  console.log("\n=================================");
  console.log("RESUMO DO TESTE:");
  console.log(`Sucesso: ${successCount}`);
  console.log(`Erros: ${errorCount}`);
  console.log("=================================\n");
}

run();
