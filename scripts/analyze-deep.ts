import { allPosts } from "../src/data/blogData";
import * as fs from "fs";
import * as path from "path";

// 1. WhatsApp Number Check
console.log("=== 1. VERIFICAÇÃO DE WHATSAPP ===");
const correctWa = "5571991981437";
let wrongWaCount = 0;
allPosts.forEach(post => {
  const postString = JSON.stringify(post);
  const waMatches = postString.match(/5571\d{8,9}/g);
  if (waMatches) {
    const wrong = waMatches.filter(n => n !== correctWa);
    if (wrong.length > 0) {
      console.log(`[WA Incorreto] ${post.slug}: Encontrado ${[...new Set(wrong)].join(", ")}`);
      wrongWaCount++;
    }
  }
});
console.log(`-> Total de artigos com WhatsApp errado nos dados: ${wrongWaCount}\n`);

// 2. Mojibake Check
console.log("=== 2. VERIFICAÇÃO DE MOJIBAKE ===");
const mojibakePatterns = /[Ã][¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß]/;
let mojibakeCount = 0;
allPosts.forEach(post => {
  const postString = JSON.stringify(post);
  if (mojibakePatterns.test(postString)) {
    console.log(`[Mojibake] ${post.slug} contém caracteres corrompidos.`);
    // Extract a snippet
    const matchIndex = postString.search(mojibakePatterns);
    console.log(`   Snippet: "${postString.substring(Math.max(0, matchIndex - 20), matchIndex + 20)}"`);
    mojibakeCount++;
  }
});
console.log(`-> Total de artigos com Mojibake: ${mojibakeCount}\n`);

// 3. Duplicated "Resumo:"
console.log("=== 3. VERIFICAÇÃO DE 'Resumo:' DUPLICADO ===");
const testPost = allPosts.find(p => p.slug === "samsung-reiniciando-sozinho-logo");
if (testPost) {
  console.log(`Dados do TLDR: "${testPost.tldr}"`);
  console.log(`Dados do Description: "${testPost.description}"`);
  console.log(`Eles são concatenados ou exibidos? No BlogPost.tsx temos: {post.tldr || post.description}`);
}
console.log("\n");

// 4. Brand Name Corruption Check
console.log("=== 4. VERIFICAÇÃO DA CORRUPÇÃO '___ Avançado' ===");
let corruptions = new Set<string>();
let corruptionCount = 0;

allPosts.forEach(post => {
  const postString = JSON.stringify(post);
  // Match any word followed by "Avançado", ignoring "Reparo"
  const regex = /([a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+)\s+Avançado/g;
  let match;
  while ((match = regex.exec(postString)) !== null) {
    const wordBefore = match[1];
    if (wordBefore.toLowerCase() !== "reparo") {
      corruptions.add(`${wordBefore} Avançado`);
      console.log(`[Corrupção] ${post.slug}: "${wordBefore} Avançado"`);
      corruptionCount++;
    }
  }
});

console.log(`\n-> Total de ocorrências de marca corrompida: ${corruptionCount}`);
console.log("-> Variações encontradas:");
corruptions.forEach(c => console.log(`   - ${c}`));

