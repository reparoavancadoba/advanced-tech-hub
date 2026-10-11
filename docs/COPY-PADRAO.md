# COPY PADRÃO – blocos e fórmulas reutilizáveis

## A1. Dados fixos (nunca inventar nem reescrever)
- Nome: Reparo Avançado. Cidade: Salvador, Bahia. Loja: Boca do Rio.
- Telefone/WhatsApp e endereço: usar as constantes existentes (WHATSAPP_NUMBER e BUSINESS_ADDRESS em src/data/blogData.ts; businessInfo em src/config/business). NÃO digitar de novo. O endereço deve ser idêntico ao do Google Meu Negócio.
- Garantia: 90 dias. Coleta e entrega: "consulte disponibilidade".
- Proibido: preço, prazo, "melhor", "nº 1", "orçamento grátis", "atendimento em domicílio", smartwatch, fone, desbloqueio de conta, película cerâmica/fosca.

## A2. Bloco CTA (MEIO e FIM de todo artigo e página)
Título: "Aparelho com defeito em Salvador, Bahia?"
Texto: "Chame a Reparo Avançado no WhatsApp, informe o modelo e o defeito e receba orientação sobre o reparo. Todos os serviços têm 90 dias de garantia."
Botão: "Chamar no WhatsApp" (link único do site).
Variação curta (meio): "Seu {modelo} está com esse problema? Chame no WhatsApp e informe o modelo."

## A3. Bloco local (antes da FAQ em todo artigo)
H2: "Assistência técnica em Salvador, Bahia"
Texto: "A Reparo Avançado fica na Boca do Rio, em Salvador, Bahia, e atende clientes de bairros como Pituba, Imbuí, Brotas, Costa Azul e Itaigara. Para quem é de outro bairro, consulte a disponibilidade de coleta e entrega. Veja também nossas páginas por bairro em /informacoes."
Regras: no máximo 1–2 bairros extras no corpo do artigo; links do bloco apontam para páginas /informacoes/ existentes.

## A4. Títulos (validar ≤ 65 caracteres)
- Artigo de defeito: "{Defeito} no {Modelo}? Reparo em Salvador, Bahia"
  - "Tela do iPhone Quebrada? Reparo em Salvador, Bahia"
  - "Bateria do Samsung Descarregando Rápido? Salvador, Bahia"
  - "Xiaomi com Tela Verde ou Manchada? Reparo em Salvador"
- H1: igual ao título sem o sufixo; "Salvador, Bahia" nos primeiros 100 palavras do texto.
- Meta (≤ 160): "{Defeito} no {modelo}: causas, quando vale reparar e o que é feito na bancada. Assistência técnica em Salvador, Bahia, com 90 dias de garantia."
- Página /informacoes: "{Serviço} {Bairro}, Salvador | Reparo Avançado" (≤ 65).

## A5. Estrutura do artigo (nesta ordem)
1. Abertura (80–120 palavras): problema, aparelho e "Salvador, Bahia" nos primeiros 100 palavras.
2. H2 "Sinais de que {defeito}" (4–6 sintomas reais).
3. H2 "Principais causas" (3–5, texto próprio).
4. CTA curto.
5. H2 "Vale a pena consertar ou trocar o aparelho?" (critério honesto, sem promessa).
6. H2 "Como é feito o reparo na bancada" (etapas gerais, sem prazo e sem preço).
7. H2 "Erros que pioram o problema" (3–4 itens).
8. Bloco local (A3).
9. H2 "Perguntas frequentes" (4 perguntas, respostas de 2–3 linhas, FAQPage no JSON-LD).
10. CTA final (A2).
11. "Leia também" com 3 links (1 serviço, 1 /informacoes, 1 artigo relacionado).
Mínimo 600 palavras. Texto ÚNICO por artigo.

## A6. FAQ-modelo (adaptar; nunca copiar igual)
- "Por que {defeito} acontece no {modelo}?"
- "Dá para continuar usando o aparelho assim?"
- "O reparo tem garantia?" → "Sim. Todos os serviços da Reparo Avançado têm 90 dias de garantia."
- "Vocês atendem em {bairro}/em Salvador?" → bloco local, sem prometer coleta.

## A7. Fila de temas
Tela e bateria × iPhone, Samsung, Xiaomi; depois: não liga, não carrega, molhou, tela touch, travando; depois notebook e tablet. A cada segunda o Claude escolhe 3 novos + 2 melhorados pelos CSVs do Search Console.
