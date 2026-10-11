# MAPA DO PROJETO (gerado em 11/10/2026 a partir do código local)

## Build e deploy
- `npm run build` = `vite build && npx tsx scripts/generate-sitemap.ts && npx tsx scripts/prerender.ts`.
- Deploy: push na branch `main` do GitHub (reparoavancadoba/advanced-tech-hub) dispara a Vercel. O CI da Vercel roda eslint; imports não usados quebram o build.

## Onde fica cada coisa
- Artigos do blog: `src/data/editorialPostsBatchNN.ts` (último: Batch14). Formato: objeto BlogPost (slug, title, h1, metaDescription, category, brand, model, service, serviceSlug, description, seções, faq...). Cada batch precisa ser importado e incluído no array `allPosts` em `src/data/blogData.ts` (linhas ~309–324). Lote novo = novo arquivo `editorialPostsBatch15.ts` + import + inclusão em `allPosts`.
- Rota do artigo: `/blog/:slug` (src/pages/BlogPost.tsx).
- Páginas por serviço+bairro: `src/data/informacoesData.ts` (array `informacoesPages`, tipo InformacaoPage: slug, title, meta, h1, serviceSlug, localSlug, areaServed, whatsapp, content, faq). Rota `/informacoes/:slug` (src/pages/InformacaoPage.tsx); índice em `/informacoes` (InformacoesIndex.tsx).
- Sitemap: `scripts/generate-sitemap.ts` lê allPosts (blogData), locaisData, locaisConsolidadosData, servicosConsolidadosData e informacoesData. Gera sitemap.xml automaticamente; não editar o XML à mão.
- Prerender (HTML estático para o Google): `scripts/prerender.ts` (bloco data-seo-prerender dentro de `<div id="root">`, incluindo "Atendemos por Bairro" e título da home). Não alterar sem necessidade.
- WhatsApp e endereço: `WHATSAPP_NUMBER` e `BUSINESS_ADDRESS` em `src/data/blogData.ts`; `businessInfo` em `src/config/business`; horários em `src/data/businessInfo.ts`.
- Páginas de serviço (rotas em src/App.tsx): /troca-de-tela, /troca-de-bateria, /reparo-em-placa, /conserto-de-celular, /celular-nao-carrega, /celular-nao-liga, /celular-caiu-na-agua, /conserto-de-tablet, /conserto-de-notebook, /conserto-de-iphone.
- Páginas de bairro: /assistencia-tecnica-salvador, -boca-do-rio, -pituba, -imbui, -brotas, -caminho-das-arvores (+ regiões consolidadas).
- Dados de serviços/locais: servicosConsolidadosData.ts, locaisConsolidadosData.ts, locaisData.ts.

## Padrão do Lote 2 (seguir nos próximos)
- Páginas: itens novos ao final de `informacoesPages`. Artigos: novo editorialPostsBatchNN.ts + import em blogData.ts + "Leia também" em artigos antigos.
- Depois: build, deploy, `node scripts/val-lote.cjs ...` em produção.

## Avisos
- A pasta raiz tem muitos scripts de manutenção antigos (.cjs/.ts/.mjs) e arquivos soltos (home-after.json, pituba.html, build-fail-log.txt). Não usar nem apagar sem pedido.
- `google-service-account.json` está no .gitignore. Nunca versionar nem abrir.
- Existe uma cópia de `val-lote.cjs` na RAIZ com limites reduzidos (220 palavras / 2 links para /informacoes). A versão oficial é `scripts/val-lote.cjs` (280 palavras / 5 links). Usar só a oficial.
- Dúvida registrada (AMBÍGUO): a página `/informacoes` diz "também fazemos coleta e entrega"; a regra atual é escrever "consulte disponibilidade". Paulo decide se ajusta.
