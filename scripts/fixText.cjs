const fs = require('fs');

let c = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

c = c.replace(/Especializados na troca de tela iphone \(para tela quebrada iphone\) e na troca de tela samsung, oferecemos a substitui\u00e7\u00e3o completa com pe\u00e7as premium\./, 
  'Fazemos a troca de tela iphone e a troca de tela samsung, seja para um display manchado ou para uma tela quebrada iphone, utilizando peças premium e devolvendo a qualidade original.');

c = c.replace(/A bateria original perde capacidade com o tempo\. Realizamos a troca de bateria iphone com pe\u00e7as de alta qualidade e tamb\u00e9m a troca de bateria samsung, devolvendo autonomia m\u00e1xima\./, 
  'A bateria do aparelho perde capacidade com o tempo, descarregando mais rápido. Nós realizamos a troca de bateria iphone, utilizando células de alta qualidade, bem como a troca de bateria samsung, para devolver a autonomia máxima que você precisa no dia a dia.');

c = c.replace(/Quando outras lojas condenam, n\u00f3s fazemos o reparo de placa celular\. Utilizando equipamentos de ponta para microssoldagem celular, ressuscitamos aparelhos considerados sem conserto, como curtos totais, falhas de carga e defeitos de \u00e1udio\./, 
  'Quando outras assistências condenam o seu aparelho, nós realizamos o reparo de placa celular. Contamos com um laboratório avançado de microssoldagem celular para ressuscitar dispositivos considerados sem conserto, resolvendo problemas complexos como curtos totais, falhas de carga e defeitos de áudio.');

c = c.replace(/Um celular molhado sofre oxida\u00e7\u00e3o interna r\u00e1pida\. O nosso conserto de celular molhado atrav\u00e9s da desoxida\u00e7\u00e3o de celular em banho ultrass\u00f4nico aumenta significativamente as chances de salva\u00e7\u00e3o do dispositivo\./, 
  'Qualquer aparelho que entra em contato com líquido sofre oxidação interna rápida, danificando os componentes. O nosso conserto de celular molhado através do processo de desoxidação química em banho ultrassônico remove os minerais corrosivos e aumenta significativamente as chances de salvar o dispositivo.');

fs.writeFileSync('src/data/servicosConsolidadosData.ts', c);
console.log("Replaced text");
