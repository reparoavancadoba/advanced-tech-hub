const https = require('https');

const req = (url, keyword) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let regex = new RegExp(keyword, 'gi');
        let matches = data.match(regex);
        console.log(`${url} -> ${keyword}: ${matches ? matches.length : 0}`);
        resolve();
      });
    });
  });
};

const reqLink = (url, keyword) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let regex = new RegExp(keyword.replace(/\//g, '\\/'), 'g');
        let matches = data.match(regex);
        console.log(`${url} -> link ${keyword}: ${matches ? matches.length : 0}`);
        resolve();
      });
    });
  });
};

async function run() {
  await new Promise(r => setTimeout(r, 2000));
  await req('https://site.reparoavancado.com.br/troca-de-tela', 'troca de tela iphone');
  await req('https://site.reparoavancado.com.br/troca-de-tela', 'troca de tela samsung');
  await req('https://site.reparoavancado.com.br/troca-de-tela', 'tela quebrada iphone');
  await req('https://site.reparoavancado.com.br/troca-de-bateria', 'troca de bateria iphone');
  await req('https://site.reparoavancado.com.br/troca-de-bateria', 'troca de bateria samsung');
  await req('https://site.reparoavancado.com.br/reparo-em-placa', 'reparo de placa celular');
  await req('https://site.reparoavancado.com.br/reparo-em-placa', 'microssoldagem celular');
  await req('https://site.reparoavancado.com.br/celular-caiu-na-agua', 'conserto de celular molhado');
  await req('https://site.reparoavancado.com.br/celular-caiu-na-agua', 'desoxidação de celular');
  await req('https://site.reparoavancado.com.br/assistencia-tecnica-salvador', 'assistência técnica celular');
  await reqLink('https://site.reparoavancado.com.br/assistencia-tecnica-pituba', 'href="/conserto-de-iphone"');
}

run();
