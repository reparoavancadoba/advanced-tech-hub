const fs = require('fs');

const content = fs.readFileSync('src/data/editorialPostsBatch3.ts', 'utf8');

// Modifying diferenca-tela-original-primeira-linha
let newContent = content.replace(
  /id: "original-vs-primeira-linha",\s*title: "Entenda a Diferen[cç]a",\s*content: "/,
  `id: "faq-telas",
        title: "Perguntas Frequentes (FAQ) sobre Telas",
        content: "<ul><li><strong>Qual a diferença entre tela Incell e Original?</strong> A tela Incell (Primeira Linha) é feita de LCD mais grosso e não entrega o mesmo brilho, contraste e resistência de uma tela Original (OLED/AMOLED).</li><li><strong>Vale a pena colocar tela Primeira Linha?</strong> Apenas para aparelhos antigos ou como quebra-galho. Para uso diário, a tela Incell consome mais bateria e é muito mais frágil a quedas.</li><li><strong>Tela paralela estraga o celular?</strong> Não estraga a placa, mas pode causar toques fantasmas, falha no sensor de proximidade e descarregamento rápido.</li></ul>\\n\\nPrecisa trocar sua tela com garantia? Fale com a [Reparo Avançado no WhatsApp](https://wa.me/5571991981437) ou veja nosso serviço de <a href='/conserto-de-celular'>Conserto de Celular</a>.\\n\\n"
      },
      {
        id: "original-vs-primeira-linha",
        title: "Entenda a Diferença",
        content: "`
);

// Modifying celular-xiaomi-nao-liga-o-que-fazer
newContent = newContent.replace(
  /id: "primeiro-passo",\s*title: "O Que Fazer Primeiro",\s*content: "/,
  `id: "faq-xiaomi-apagado",
        title: "FAQ: Xiaomi Apagou e Não Liga",
        content: "<ul><li><strong>Por que meu Xiaomi apagou do nada?</strong> Geralmente, isso ocorre após uma atualização de sistema (MIUI/HyperOS) ou por uma falha crônica de solda no processador (comum no Poco M3, X3, etc.).</li><li><strong>Tem como recuperar o Xiaomi que não liga?</strong> Sim! Se for defeito de solda (CPU/PMIC), um especialista em microeletrônica faz o reballing (ressolda) e o celular volta à vida sem perder seus dados.</li><li><strong>Devo forçar o carregamento no Xiaomi apagado?</strong> Não! Se a placa estiver em curto-circuito, deixar na tomada pode fritar de vez os componentes. Desconecte e leve a uma assistência.</li></ul>\\n\\nSeu Xiaomi apagou? A Reparo Avançado resolve! Acesse nossa página de <a href='/reparo-em-placa'>Reparo em Placa</a> ou [chame no WhatsApp](https://wa.me/5571991981437) para um diagnóstico gratuito.\\n\\n"
      },
      {
        id: "primeiro-passo",
        title: "O Que Fazer Primeiro",
        content: "`
);

fs.writeFileSync('src/data/editorialPostsBatch3.ts', newContent, 'utf8');
console.log('Modified Batch3 successfully.');
