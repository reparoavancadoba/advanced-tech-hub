# ESTRATÉGIA SEO/GEO – REPARO AVANÇADO (regras fixas do projeto)

Site: https://site.reparoavancado.com.br (repo reparoavancadoba/advanced-tech-hub, deploy na Vercel).
Negócio: assistência técnica de celular, tablet e notebook, Boca do Rio, Salvador, Bahia.
Objetivo: atrair clientes de fundo de funil (aparelho já quebrado) e gerar WhatsApp/ligação. Visitantes vêm de outros estados: todo conteúdo deve deixar claro "Salvador, Bahia".

## 1. Regras fixas (valem para todo lote)
- Só ADICIONAR. Não editar títulos, textos ou páginas existentes, salvo o que o lote da semana mandar explicitamente.
- Nunca texto escondido (1px, clip, opacity:0, display:none, fora da tela, margem negativa). O bloco data-seo-prerender fica visível dentro do `<div id="root">`.
- Nunca apagar página/artigo. Redirecionamento 301 só com lista aprovada pelo Paulo.
- Sem preço, prazo, "melhor", "nº 1", "garantia de resultado" ou promessa não confirmada. Garantia: 90 dias em todos os serviços (pode citar).
- Fatos: consertamos celular, tablet e notebook. NÃO consertamos smartwatch nem fone; NÃO fazemos desbloqueio de conta Google/Mi Cloud; NÃO atendemos na casa do cliente. Coleta e entrega: "consulte disponibilidade". Películas: 3D, privacidade e blindagem (não citar fosca nem cerâmica). Troca de vidro sem trocar a tela é feita com parceiro: não prometer.
- Texto ÚNICO por página/artigo. Trocar só bairro ou marca = doorway page = proibido.
- Mudar poucos títulos por semana e registrar em CHANGELOG-SEO.md (data + o que mudou).

## 2. Molde de página /informacoes/{servico}-{bairro}
- Title ≤ 65, com serviço + bairro + Salvador. Meta ≤ 160. Um H1.
- Mínimo 280 palavras (validador exige 280; NÃO baixar sem aprovação do Paulo).
- Parágrafo único sobre o bairro, sobre o defeito (sintomas, causas, o que é feito) e FAQ própria (mín. 2, FAQPage no JSON-LD).
- JSON-LD Service + BreadcrumbList + FAQPage válidos. Mín. 5 links internos. CTA WhatsApp no meio e no fim. Entrar no sitemap.

## 3. Molde de artigo de blog (fundo de funil)
- Tema: defeito real. Prioridade: tela e bateria de iPhone, Samsung e Xiaomi (e modelos que o Search Console indicar), depois notebook e tablet.
- Title ≤ 65 com defeito/modelo + Salvador, Bahia. Meta ≤ 160. H1 com o defeito.
- Mínimo 450 palavras (ideal 600+). Estrutura em docs/COPY-PADRAO.md.
- BlogPosting + FAQPage + BreadcrumbList. Mín. 5 links internos (1 serviço + 1 /informacoes). Sem markdown cru. Entrar no sitemap.
- "Leia também" em 2–4 artigos antigos relacionados.

## 4. Validação (obrigatória)
- Usar scripts/val-lote.cjs sem alterar limites. Rodar CONTRA PRODUÇÃO, nunca só no dist/.
- Uso: `node scripts/val-lote.cjs slug-do-artigo /informacoes/pagina`
- Só dizer "resolvido" com deploy no ar E "TODOS PASSAM" em produção; colar a saída completa.
- Se falhar, relatar a falha como ela é.

## 5. Rotina semanal
- Segunda: Paulo envia CSVs do Search Console (Consultas e Páginas, 28 dias). Claude entrega o lote: 3 artigos novos + 2 melhorados.
- Segunda/terça: implementar, deploy, validar em produção.
- Terça a sexta: Paulo solicita indexação manual (3 por dia).
- Sexta: atualizar CHANGELOG-SEO.md.

## 6. Melhorar artigo antigo (decisão por dados)
- Impressões altas e CTR baixo: reescrever só title e meta.
- Posição 11–30: ampliar texto + bloco local + CTA.
- Com tráfego e alinhado à estratégia: manter e adicionar bloco local + CTA.
- 0 impressões e < 6 semanas: não mexer.
- 0 impressões há > 12 semanas e tema fraco: unir/301 SOMENTE com lista aprovada.

## 7. Piloto /informacoes/ e escala
- Sem novas páginas serviço×bairro em massa antes de 29/10.
- Escalar se: ≥ 8 das 12 indexadas, aparecendo em impressões e ≥ 1 lead real. Depois: 10–15 páginas por semana, nunca centenas.
- Bairros prioritários: Boca do Rio, Pituba, Imbuí, Brotas, Costa Azul, Itaigara, Caminho das Árvores.

## 8. Calendário de indexação (3/dia, feito pelo Paulo)
- 13/10: /informacoes/celular-nao-liga-boca-do-rio, /informacoes/conserto-de-xiaomi-boca-do-rio, blog tela-celular-clicando-sozinha-toque-fantasma-causas
- 14/10: blog notebook-nao-carrega-bateria-carregador-conectado, /informacoes/celular-caiu-na-agua-boca-do-rio, /informacoes/conserto-de-notebook-boca-do-rio
- 15/10: blog notebook-tela-azul-reiniciando-sozinho-o-que-fazer, blog manutencao-de-celular-quando-fazer-e-o-que-conferir, /informacoes/reparo-de-placa-celular-boca-do-rio
- 16/10: /informacoes/celular-nao-liga-pituba, /informacoes/celular-caiu-na-agua-imbui, /informacoes/conserto-de-tablet-boca-do-rio
- 17/10: /informacoes/conserto-de-notebook-pituba, /informacoes/conserto-de-xiaomi-brotas, blog celular-tela-touch-nao-responde-partes
- Sobra de cota: blog celular-travando-lento-resetar-salvador, notebook-esquentando-desligando-sozinho, notebook-lento-quando-trocar-ssd-resolve. Home: 1 pedido.
- O agente NÃO indexa. Garante sitemap, links internos e páginas indexáveis (200, sem noindex, canonical correto).

## 9. Checkpoints
- 27/10: revisão de 2 semanas no Search Console. 29/10: decisão de escalar /informacoes/.
- Fim de cada tarefa: relatório curto (o que entrou, URLs, saída do validador em produção, pendências).
