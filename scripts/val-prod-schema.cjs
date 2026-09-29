const urls = [
  'https://site.reparoavancado.com.br/',
  'https://site.reparoavancado.com.br/assistencia-tecnica-salvador',
  'https://site.reparoavancado.com.br/servicos',
  'https://site.reparoavancado.com.br/blog/parceria-manutencao-celulares-grupo-artemp'
];

async function check() {
  for (const u of urls) {
    try {
      const res = await fetch(u, { cache: 'no-store' });
      if (!res.ok) {
        console.log(`Error ${res.status} fetching ${u}`);
        continue;
      }
      const html = await res.text();
      const hasRating = html.includes('aggregateRating') && html.includes('165');
      console.log(`${u}: Schema Rating ${hasRating ? 'PRESENTE' : 'AUSENTE'}`);
    } catch(e) {
      console.log(`Erro em ${u}: ${e.message}`);
    }
  }
}
check();
