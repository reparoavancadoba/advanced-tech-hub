// val-lote.cjs — validador único de lote de artigos (rodar em produção, Node 18+)
// Uso:  node scripts/val-lote.cjs slug-1 /informacoes/pagina-2 ...  (slug = artigo do blog; caminho com / = página)
// Confere no servidor (fetch puro), nunca no dist/. Imprime números absolutos e PASSA/FALHA por item.

const BASE = 'https://site.reparoavancado.com.br';
const T = Date.now();

const strip = (h) => h
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z#0-9]+;/gi, ' ');
const words = (h) => strip(h).split(/\s+/).filter(Boolean).length;
const get = async (p) => {
  const r = await fetch(BASE + p + (p.includes('?') ? '&' : '?') + 'v=' + T, { cache: 'no-store' });
  return { status: r.status, html: await r.text() };
};
const ldTypes = (html) => {
  const out = [];
  let faq = 0, invalido = false;
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const o = JSON.parse(m[1]);
      const arr = Array.isArray(o) ? o : (o['@graph'] || [o]);
      for (const x of arr) {
        out.push(x['@type']);
        if (x['@type'] === 'FAQPage') faq += (x.mainEntity || []).length;
      }
    } catch (e) { invalido = true; }
  }
  return { tipos: [...new Set(out)], faq, invalido };
};
const cssEscondendo = (html) => {
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  return [...css.matchAll(/[^{}]*data-seo-prerender[^{}]*\{[^}]*\}/g)]
    .map((m) => m[0])
    .filter((r) => /position:\s*absolute|clip|opacity:\s*0|display:\s*none|visibility:\s*hidden|margin:\s*-|height:\s*1px|width:\s*1px/.test(r)).length;
};

async function validar(slugs) {
  const rel = { artigos: [], geral: {} };
  const sm = await (await fetch(BASE + '/sitemap.xml?v=' + T, { cache: 'no-store' })).text();
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(BASE, ''));
  rel.geral.sitemapTotal = locs.length;
  rel.geral.sitemapBlog = locs.filter((l) => l.startsWith('/blog/') && !l.startsWith('/blog/pagina')).length;

  for (const slug of slugs) {
    const p = slug.startsWith('/') ? slug : '/blog/' + slug;
    const info = p.startsWith('/informacoes/');
    const { status, html } = await get(p);
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    const meta = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
    const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '';
    const ld = ldTypes(html);
    const texto = strip(html);
    const linksInternos = [...html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)].map((m) => m[1]);
    const a = {
      slug,
      tipo: info ? 'info' : 'blog',
      status,
      noSitemap: locs.includes(p),
      tituloChars: title.length,
      metaChars: meta.length,
      h1: h1.replace(/<[^>]+>/g, '').trim().length > 0,
      palavras: words(html),
      schema: ld.tipos.join('+'),
      perguntasFAQ: ld.faq,
      jsonLdInvalido: ld.invalido,
      linksInternosA: new Set(linksInternos).size,
      markdownCru: /\]\(\/|\*\*[A-Za-zÀ-ú]/.test(texto),
    };
    a.passa = a.status === 200 && a.noSitemap && a.tituloChars > 0 && a.tituloChars <= 65 &&
      a.metaChars > 0 && a.metaChars <= 160 && a.h1 && a.palavras >= (info ? 280 : 450) &&
      (info ? /Service/.test(a.schema) : /BlogPosting/.test(a.schema)) && /FAQPage/.test(a.schema) && a.perguntasFAQ >= (info ? 2 : 3) &&
      !a.jsonLdInvalido && a.linksInternosA >= 5 && !a.markdownCru;
    rel.artigos.push(a);
  }

  const home = await get('/');
  const troca = await get('/troca-de-tela');
  rel.geral.palavrasHome = words(home.html);
  rel.geral.palavrasTrocaDeTela = words(troca.html);
  rel.geral.cssEscondendoBlocoSEO = cssEscondendo(home.html) + cssEscondendo(troca.html);
  rel.geral.blocoDentroDoRoot = /<div id="root">\s*<div data-seo-prerender/.test(home.html);
  rel.geral.regressao = rel.geral.palavrasHome >= 210 && rel.geral.palavrasTrocaDeTela >= 310 &&
    rel.geral.cssEscondendoBlocoSEO === 0 && rel.geral.blocoDentroDoRoot ? 'PASSA' : 'FALHA';
  return rel;
}

module.exports = { validar };

if (typeof require !== 'undefined' && require.main === module) {
  const slugs = process.argv.slice(2);
  if (!slugs.length) { console.log('Uso: node scripts/val-lote.cjs slug-1 slug-2 ...'); process.exit(1); }
  validar(slugs).then((r) => {
    console.log(JSON.stringify(r, null, 2));
    const falhas = r.artigos.filter((a) => !a.passa).map((a) => a.slug);
    console.log('\nRESULTADO: ' + (falhas.length || r.geral.regressao === 'FALHA'
      ? 'FALHA em: ' + (falhas.join(', ') || '(regressão geral)')
      : 'TODOS PASSAM'));
  });
}
