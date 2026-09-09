import { google } from "googleapis";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

async function run() {
  console.log("Iniciando indexação das 6 URLs enriquecidas...");
  const keyPath = join(process.cwd(), "google-service-account.json");
  if (!existsSync(keyPath)) {
    console.error("ERRO FATAL: Arquivo google-service-account.json não encontrado!");
    return;
  }
  
  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });
  
  const indexing = google.indexing({
    version: "v3",
    auth: auth,
  });

  const urlsToUpdate = [
    "https://site.reparoavancado.com.br/blog/iphone-descarregando-rapido-calor-salvador",
    "https://site.reparoavancado.com.br/blog/conector-carga-iphone-mau-contato-limpeza-troca",
    "https://site.reparoavancado.com.br/blog/motorola-edge-nao-liga-boca-do-rio",
    "https://site.reparoavancado.com.br/blog/celular-caiu-no-mar-armacao-desoxidacao",
    "https://site.reparoavancado.com.br/blog/vale-pena-trocar-vidro-ou-tela-completa",
    "https://site.reparoavancado.com.br/blog/quanto-custa-consertar-celular-salvador-cuidado"
  ];

  for (const url of urlsToUpdate) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: "URL_UPDATED",
        },
      });
      console.log(`[OK] URL enviada para indexação: ${url}`);
    } catch (error) {
      console.error(`[ERRO] Falha ao enviar URL ${url}:`, error.message);
    }
  }
  console.log("Concluído!");
}

run();
