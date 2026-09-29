async function check() {
  const res = await fetch('https://site.reparoavancado.com.br/blog/autorizada-ou-independente-como-escolher-assistencia-tecnica', {cache: 'no-store'});
  const html = await res.text();
  const m = html.match(/href="https:\/\/wa\.me\/[^"]+text=([^"]+)"/g);
  if (m) {
    m.forEach(x => console.log(decodeURIComponent(x)));
  }
}
check();
