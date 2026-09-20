const fs = require('fs');

// 1. Fix servicosConsolidadosData.ts
let servicos = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');
servicos = servicos.replace(/, Apple Watches e relógios multimarcas/g, '');
fs.writeFileSync('src/data/servicosConsolidadosData.ts', servicos);

// 2. Remove smartwatch posts from Batch 4 and Batch 6
// In Batch 4: "Troca de Vidro de Apple Watch: Vale a Pena?" (slug: troca-de-vidro-apple-watch-salvador)
let b4 = fs.readFileSync('src/data/editorialPostsBatch4.ts', 'utf8');
b4 = b4.replace(/\{\s*slug:\s*["']troca-de-vidro-apple-watch-salvador["'][\s\S]*?costInfo:[^\}]+\},/g, '');
fs.writeFileSync('src/data/editorialPostsBatch4.ts', b4);

// In Batch 6: "Bateria Inchada no Apple Watch" (slug: bateria-apple-watch-inchada-tela-descolando)
let b6 = fs.readFileSync('src/data/editorialPostsBatch6.ts', 'utf8');
b6 = b6.replace(/\{\s*slug:\s*["']bateria-apple-watch-inchada-tela-descolando["'][\s\S]*?costInfo:[^\}]+\},/g, '');
fs.writeFileSync('src/data/editorialPostsBatch6.ts', b6);

// 3. Fix recuperacao-conta-google-micloud-salvador
let b1 = fs.readFileSync('src/data/editorialPosts.ts', 'utf8');

// The replacement content for the Google/MiCloud article
const originalMiCloudSlug = 'slug: "recuperacao-conta-google-micloud-salvador",';
const newMiCloudContent = `{
    slug: "recuperacao-conta-google-micloud-salvador",
    title: "Recuperação de Conta Google e MiCloud: Como Fazer",
    h1: "Recuperação de Conta Google e Mi Cloud: Saiba Como Proceder",
    metaDescription: "Celular travado na conta Google (FRP) ou Mi Cloud? Entenda por que a recuperação deve ser feita pelo usuário junto à fabricante.",
    category: "software",
    brand: "Multimarcas",
    model: "Todos",
    service: "Orientação sobre Contas",
    description: "Se o seu aparelho travou na conta Google (FRP), Mi Cloud ou iCloud após uma restauração, saiba que a Reparo Avançado NÃO realiza serviços de desbloqueio ou remoção de contas. Esse é um procedimento de segurança da fabricante que deve ser feito pelo titular da conta.",
    keywords: ["restauração conta google", "frp lock celular", "mi cloud travado", "celular travado conta", "como recuperar conta google salvador"],
    problems: [
      "Celular travado na verificação de conta Google (FRP)",
      "Xiaomi preso no Mi Cloud após restauração",
      "Esquecimento da senha da conta Mi Cloud"
    ],
    causes: [
      "Restauração de fábrica sem remover a conta Google antes",
      "Esquecimento de senha após formatação",
      "Compra de aparelho de terceiros sem reset completo prévio"
    ],
    solution: "Atenção: A Reparo Avançado NÃO realiza desbloqueio de conta Google (FRP), Mi Cloud ou iCloud. Por questões de segurança, a remoção ou recuperação dessas contas deve ser feita diretamente com o suporte da Google, Xiaomi ou Apple, mediante comprovação de titularidade e nota fiscal. Orientamos que você acesse as páginas oficiais de recuperação de senha de cada fabricante. Se o seu aparelho possuir algum defeito de hardware (tela, bateria, placa) que a loja conserta, entre em contato conosco.",
    faq: [
      { question: "Vocês fazem desbloqueio de conta Google (FRP)?", answer: "Não. Não realizamos nenhum serviço de desbloqueio de conta, FRP ou iCloud. Este serviço deve ser tratado diretamente com o fabricante." },
      { question: "O que faço se esqueci minha senha da Mi Cloud?", answer: "Acesse o site oficial da Xiaomi e utilize a opção 'Esqueci minha senha' com seu e-mail ou telefone cadastrado." }
    ],
    whenToSeek: "Se você tem um problema físico (como troca de tela ou bateria), traga seu aparelho para a Reparo Avançado. Para senhas e contas, contate a fabricante.",
    costInfo: "Não prestamos este serviço.",
    relatedSlugs: ["celular-travando-lento-resetar-salvador"]
  },`;

// Find the whole object to replace. 
b1 = b1.replace(/\{\s*slug:\s*["']recuperacao-conta-google-micloud-salvador["'][\s\S]*?costInfo:[^\}]+\},/g, newMiCloudContent);

// Fix "senha de desbloqueio" in other texts - just ensure it doesn't sound like we provide unlocking services
// In Batch 5 and Batch 8, there are mentions of IMEI/Blacklist that clearly say "NÃO trabalhamos com desbloqueio", which is good! So we leave those alone.
// In editorialPosts.ts: "Pede sua senha de desbloqueio sem justificativa técnica" is also correct context.

fs.writeFileSync('src/data/editorialPosts.ts', b1);

console.log('Misleading services fixed.');
