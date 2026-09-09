import { allPosts } from './src/data/blogData';

const duplicateGroups = {};
allPosts.forEach(p => {
  const t = p.title.trim();
  if (!duplicateGroups[t]) duplicateGroups[t] = [];
  duplicateGroups[t].push(p.slug);
});

console.log("=== DUPLICADOS ===");
for (const title in duplicateGroups) {
  if (duplicateGroups[title].length > 1) {
    console.log(`\nTítulo: "${title}" (${duplicateGroups[title].length} vezes)`);
    duplicateGroups[title].forEach(s => console.log(` - ${s}`));
  }
}

console.log("\n=== PROBLEMA 1: conserto Avançado ===");
allPosts.forEach(p => {
  if (p.metaDescription.includes("conserto Avançado") || p.title.includes("conserto Avançado")) {
    console.log(`[SLUG: ${p.slug}] Tem "conserto Avançado"`);
  }
});

console.log("\n=== PROBLEMA 3: Assitências / Seu tela / Minúscula ===");
allPosts.forEach(p => {
  if (p.title.includes("Assitência") || p.metaDescription.includes("Assitência")) {
    console.log(`[TYPO Assitência] ${p.slug}`);
  }
  if (p.title.includes("Seu tela") || p.title.includes("seu tela")) {
    console.log(`[TYPO Seu tela] ${p.slug}`);
  }
  const firstLetter = p.title.trim().charAt(0);
  if (firstLetter === firstLetter.toLowerCase() && firstLetter.match(/[a-z]/i)) {
    console.log(`[MINÚSCULA] ${p.slug}: ${p.title}`);
  }
});
