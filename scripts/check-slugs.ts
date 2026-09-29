import { allPosts } from './src/data/blogData.ts';

const existingSlugs = allPosts.map(p => p.slug);
const existingTitles = allPosts.map(p => p.title);

console.log("SLUGS:");
console.log(existingSlugs.join(', '));

const requestedArticles = [
  { slug: "autorizada-ou-independente-como-escolher-assistencia-tecnica", title: "Assistência Autorizada ou Independente? Como Escolher" },
  { slug: "vale-a-pena-consertar-celular-ou-comprar-novo", title: "Vale a Pena Consertar o Celular ou Comprar Outro?" },
  { slug: "garantia-de-conserto-de-celular-o-que-perguntar", title: "Garantia de Conserto de Celular: O Que Perguntar" },
  { slug: "iphone-nao-liga-tela-preta-maca-travada-11-ao-14", title: "iPhone Não Liga: Tela Preta ou Maçã Travada? (11 ao 14)" },
  { slug: "iphone-11-usado-vale-a-pena-o-que-checar", title: "iPhone 11 Usado Vale a Pena? O Que Checar Antes" }
];

const targetKeywords = {
  "autorizada-ou-independente-como-escolher-assistencia-tecnica": ["autorizada", "independente"],
  "vale-a-pena-consertar-celular-ou-comprar-novo": ["vale a pena", "consertar", "comprar"],
  "garantia-de-conserto-de-celular-o-que-perguntar": ["garantia", "conserto"],
  "iphone-nao-liga-tela-preta-maca-travada-11-ao-14": ["iphone não liga", "maçã", "tela preta"],
  "iphone-11-usado-vale-a-pena-o-que-checar": ["iphone 11 usado"]
};

console.log("\nCHECKING OVERLAPS:");
requestedArticles.forEach(a => {
  const words = targetKeywords[a.slug];
  const overlaps = existingTitles.filter(t => {
    const tl = t.toLowerCase();
    return words.some(w => tl.includes(w.toLowerCase()));
  });
  console.log(`- ${a.slug}: ${overlaps.length} overlaps found: ${overlaps.slice(0, 3).join(' | ')}`);
});

const relatedToCheck = [
  "quanto-custa-trocar-a-tela-do-celular-por-marca",
  "modo-de-manutencao-samsung-o-que-e",
  "diferenca-tela-original-primeira-linha",
  "troca-de-bateria-iphone-salvador-saude-100",
  "bateria-do-celular-estufada-e-perigoso-o-que-fazer",
  "autorizada-ou-independente-como-escolher-assistencia-tecnica",
  "vale-a-pena-consertar-celular-ou-comprar-novo",
  "celular-carrega-mas-nao-liga-causas",
  "celular-liga-mas-a-tela-nao-acende",
  "iphone-11-nao-carrega-conector-ou-bateria",
  "como-economizar-bateria-do-celular"
];

console.log("\nCHECKING RELATED SLUGS:");
relatedToCheck.forEach(slug => {
  if (existingSlugs.includes(slug) || requestedArticles.some(a => a.slug === slug)) {
    console.log(`✅ ${slug} exists`);
  } else {
    console.log(`❌ ${slug} DOES NOT EXIST`);
  }
});
