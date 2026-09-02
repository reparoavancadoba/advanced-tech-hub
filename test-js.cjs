
const url = 'https://site.reparoavancado.com.br/assistencia-tecnica-boca-do-rio-e-orla?t=' + Date.now();
fetch(url).then(r => r.text()).then(html => {
  const bundleMatch = html.match(/src=\"(\/assets\/index-[^\"]+\.js)\"/);
  if (bundleMatch) {
     const bundleUrl = 'https://site.reparoavancado.com.br' + bundleMatch[1];
     fetch(bundleUrl).then(r => r.text()).then(js => {
         if (js.includes('bg-primary text-primary-foreground') && js.includes('wa.me/5571991981437')) {
             console.log('? JS Bundle in production contains the NEW bg-primary CTA!');
         } else {
             console.log('? Deploy not live yet, or JS bundle does not have the fix.');
         }
     });
  } else {
     console.log('No JS bundle found.');
  }
}).catch(console.error);

