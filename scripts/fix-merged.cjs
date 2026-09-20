const fs = require('fs');
let content = fs.readFileSync('scripts/prerender.ts', 'utf8');
content = content.replace(/^const mergedSlugs = .*\n/gm, ''); // remove from top
content = content.replace(/import \{ businessInfo \} from '\.\.\/src\/config\/business';/, "import { businessInfo } from '../src/config/business';\nconst mergedSlugs = ['celular-nao-carrega-causas','celular-nao-carrega-causas-solucoes','celular-nao-carrega-salvador','motorola-nao-carrega-avaliacao-salvador','higienizacao-conector-cabo-carregar-salvador','celular-nao-carrega','celular-caiu-na-agua-o-que-fazer','celular-caiu-na-agua-desoxidacao-salvador','celular-molhou-chuva-praia-salvador-socorro','celular-caiu-no-mar-vale-a-pena-consertar','celular-caiu-na-agua','troca-de-bateria-celular-salvador','celular-descarregando-rapido','celular-esquentando-descarregando-rapido-bateria','troca-vidro-ou-tela-completa-celular-diferenca','troca-vidro-vs-tela-completa-economia-salvador'];");
fs.writeFileSync('scripts/prerender.ts', content);
console.log('Fixed mergedSlugs');
