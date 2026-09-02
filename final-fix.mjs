import fs from 'fs';

// 1. Fix Index.tsx
let indexTsx = fs.readFileSync('src/pages/Index.tsx', 'utf8');
indexTsx = indexTsx.replace(/9 anos de experi.ncia/g, 'Mais de 7 anos de experiência');
indexTsx = indexTsx.replace(/Assist.ncia/g, 'Assistência');
indexTsx = indexTsx.replace(/Or.amento/g, 'Orçamento');
indexTsx = indexTsx.replace(/Avan.ado/g, 'Avançado');
fs.writeFileSync('src/pages/Index.tsx', indexTsx, 'utf8');

// 2. Fix prerender.ts
let prerenderTs = fs.readFileSync('scripts/prerender.ts', 'utf8');
// Fix all mojibake in prerender.ts
prerenderTs = prerenderTs.replace(/AssistÃªncia/g, 'Assistência');
prerenderTs = prerenderTs.replace(/tÃ©cnica/g, 'técnica');
prerenderTs = prerenderTs.replace(/diagnÃ³stico/g, 'diagnóstico');
prerenderTs = prerenderTs.replace(/peÃ§as/g, 'peças');
prerenderTs = prerenderTs.replace(/Ã©/g, 'é');
prerenderTs = prerenderTs.replace(/vocÃª/g, 'você');
prerenderTs = prerenderTs.replace(/experiÃªncia/g, 'experiência');
prerenderTs = prerenderTs.replace(/avaliaÃ§Ãµes/g, 'avaliações');
prerenderTs = prerenderTs.replace(/serviÃ§o/g, 'serviço');
prerenderTs = prerenderTs.replace(/AvanÃ§ado/g, 'Avançado');
prerenderTs = prerenderTs.replace(/estÃ¡/g, 'está');
prerenderTs = prerenderTs.replace(/RegiÃµes/g, 'Regiões');
prerenderTs = prerenderTs.replace(/grÃ¡tis/g, 'grátis');
prerenderTs = prerenderTs.replace(/AvaliaÃ§Ã£o/g, 'Avaliação');
prerenderTs = prerenderTs.replace(/rÃ¡pidos/g, 'rápidos');
prerenderTs = prerenderTs.replace(/nÃ£o/g, 'não');
prerenderTs = prerenderTs.replace(/PÃ¡ginas/g, 'Páginas');
prerenderTs = prerenderTs.replace(/ServiÃ§os/g, 'Serviços');
prerenderTs = prerenderTs.replace(/Boca do Rio, Salvador â€“ BA/g, 'Boca do Rio, Salvador - BA');
prerenderTs = prerenderTs.replace(/Salvador â€“ Boca do Rio/g, 'Salvador - Boca do Rio');
fs.writeFileSync('scripts/prerender.ts', prerenderTs, 'utf8');

// 3. Fix locaisConsolidadosData.ts
let locais = fs.readFileSync('src/data/locaisConsolidadosData.ts', 'utf8');
locais = locais.replace(/9 anos/g, 'mais de 7 anos');
locais = locais.replace(/oficina de conserto de celular de Celular em Salvador/g, 'oficina de conserto de celular em Salvador');
fs.writeFileSync('src/data/locaisConsolidadosData.ts', locais, 'utf8');

// 4. Fix Atendimento.tsx
let atendimento = fs.readFileSync('src/pages/Atendimento.tsx', 'utf8');
atendimento = atendimento.replace(/9 anos/g, 'mais de 7 anos');
fs.writeFileSync('src/pages/Atendimento.tsx', atendimento, 'utf8');

// 5. Fix FooterSection.tsx
let footer = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
footer = footer.replace(/9 anos/g, 'Mais de 7 anos');
fs.writeFileSync('src/components/FooterSection.tsx', footer, 'utf8');

// 6. Fix LocalConsolidado.tsx
let localCons = fs.readFileSync('src/pages/LocalConsolidado.tsx', 'utf8');
localCons = localCons.replace(/9 anos/g, 'mais de 7 anos');
fs.writeFileSync('src/pages/LocalConsolidado.tsx', localCons, 'utf8');

// 7. Fix Orcamento.tsx
let orcamento = fs.readFileSync('src/pages/Orcamento.tsx', 'utf8');
orcamento = orcamento.replace(/9 anos/g, 'mais de 7 anos');
fs.writeFileSync('src/pages/Orcamento.tsx', orcamento, 'utf8');

console.log('All files fixed!');
