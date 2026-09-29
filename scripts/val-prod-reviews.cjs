const urls = [
  'https://site.reparoavancado.com.br/',
  'https://site.reparoavancado.com.br/troca-de-tela',
  'https://site.reparoavancado.com.br/assistencia-tecnica-salvador',
  'https://site.reparoavancado.com.br/blog/parceria-manutencao-celulares-grupo-artemp'
];

async function check() {
  for (const u of urls) {
    try {
      const res = await fetch(u, { cache: 'no-store' });
      if (!res.ok) continue;
      const html = await res.text();
      const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>/);
      const rootContent = rootMatch ? rootMatch[1] : '';
      const text = rootContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const wordCount = text ? text.split(/\s+/).length : 0;
      const hasAvalia = text.toLowerCase().includes('avalia');
      console.log(`${u}: ${wordCount} words. Contém 'avalia': ${hasAvalia}`);
    } catch(e) {
      console.log(`Erro em ${u}: ${e.message}`);
    }
  }
}
check();
