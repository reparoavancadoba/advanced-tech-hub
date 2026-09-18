const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  { from: /profissionals/g, to: 'profissionais' },
  { from: /assistência técnicaes/g, to: 'Assistência Técnica' },
  { from: /avaliação Rápido/g, to: 'Diagnóstico Rápido' },
  { from: /avaliações precisos/g, to: 'diagnósticos precisos' },
  { from: /a maioria dos conserto realizados/g, to: 'a maioria dos consertos é realizada' },
  { from: /oficina na /g, to: 'Assistência técnica na ' },
  { from: /oficina de conserto de celular/g, to: 'assistência técnica de celular' }
];

const ctaRegex = /\{\/\* Mid-page CTA Box with Social Proof \*\/\}[\s\S]*?<\/section>/;
const ctaReplacement = `      {/* Mid-page CTA */}
      <section className="py-10 bg-gradient-to-r from-primary/5 via-whatsapp/5 to-primary/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-card border-2 border-whatsapp/30 rounded-2xl p-8 shadow-lg">
            <p className="text-2xl font-bold mb-2">Orçamento Gratuito e Sem Compromisso</p>
            <p className="text-muted-foreground text-sm mb-1">Garantia de 90 dias em todos os serviços · Atendimento rápido na Boca do Rio</p>
            <p className="text-xs text-muted-foreground mb-6">Atendimento imediato pelo WhatsApp</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </div>
      </section>`;

let filesModified = 0;
let replaceCounts = {};

function walkSync(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkSync(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walkSync(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  let modified = false;

  replacements.forEach(({from, to}) => {
    if (from.test(newContent)) {
      const matchCount = (newContent.match(from) || []).length;
      replaceCounts[to] = (replaceCounts[to] || 0) + matchCount;
      newContent = newContent.replace(from, to);
      modified = true;
    }
  });

  if (file.endsWith('ServicoConsolidado.tsx') && ctaRegex.test(newContent)) {
    newContent = newContent.replace(ctaRegex, ctaReplacement);
    replaceCounts['CTA Replacement'] = (replaceCounts['CTA Replacement'] || 0) + 1;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, newContent, 'utf8');
    filesModified++;
  }
});

console.log(`Modified ${filesModified} files.`);
console.log('Replacements made:');
console.table(replaceCounts);
