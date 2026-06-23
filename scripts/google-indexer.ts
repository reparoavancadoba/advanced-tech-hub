import { google } from "googleapis";
import { allPosts } from "../src/data/blogData";
import { existsSync } from "fs";
import { join } from "path";

const DOMAIN = "https://site.reparoavancado.com.br";

async function runIndexer() {
  const keyPath = join(process.cwd(), "google-service-account.json");

  if (!existsSync(keyPath)) {
    console.error("❌ ERRO FATAL: Arquivo 'google-service-account.json' não encontrado na raiz do projeto.");
    console.error("Por favor, siga as instruções no implementation_plan.md para gerar a chave no Google Cloud.");
    process.exit(1);
  }

  console.log("✅ Chave do Google Cloud encontrada. Iniciando autenticação...");

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    const authClient = await auth.getClient();
    const indexing = google.indexing({ version: "v3", auth: authClient });

    // 1. Construir a lista de URLs que queremos forçar a indexação
    const urlsToPush: string[] = [
      `${DOMAIN}/`,
      `${DOMAIN}/servicos`,
      `${DOMAIN}/blog`,
      `${DOMAIN}/locais-de-atendimento`,
      `${DOMAIN}/troca-de-tela`,
      `${DOMAIN}/troca-de-bateria`,
      `${DOMAIN}/reparo-em-placa`,
      `${DOMAIN}/assistencia-tecnica-salvador`,
      `${DOMAIN}/assistencia-tecnica-boca-do-rio`
    ];

    allPosts.forEach((post) => {
      urlsToPush.push(`${DOMAIN}/blog/${post.slug}`);
    });

    console.log(`🚀 Preparando para enviar ${urlsToPush.length} URLs para o Google...`);

    let successCount = 0;
    let errorCount = 0;

    // A API do Google permite 100 requisições simultâneas, vamos processar em lotes
    for (let i = 0; i < urlsToPush.length; i++) {
      const url = urlsToPush[i];
      try {
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: "URL_UPDATED",
          },
        });
        
        console.log(`[OK] URL enviada: ${url} -> Status: ${response.status}`);
        successCount++;
        
        // Pequeno delay para não sobrecarregar o limite de quota da API
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error: any) {
        console.error(`[ERRO] Falha ao enviar a URL: ${url}`);
        if (error.response && error.response.data) {
           console.error("Detalhes do erro do Google:", error.response.data.error.message);
        } else {
           console.error(error.message);
        }
        errorCount++;
      }
    }

    console.log("\n=================================");
    console.log("📊 RESULTADO DA INDEXAÇÃO RÁPIDA:");
    console.log(`✅ Sucesso: ${successCount} páginas enviadas pro Google.`);
    console.log(`❌ Falhas:  ${errorCount} erros.`);
    console.log("Atenção: Você pode enviar até 200 páginas por dia nesta conta de serviço.");
    console.log("=================================\n");

  } catch (error) {
    console.error("❌ Ocorreu um erro catastrófico na autenticação ou processamento:", error);
  }
}

runIndexer();
