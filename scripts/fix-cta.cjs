const fs = require('fs');

let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

const ctaMidOriginal = `const waMsg = encodeURIComponent(\`Olá! Vi o artigo "\${post.title}" e preciso de ajuda com \${post.service}.\`);
  contentHtml += \`<aside style="border-left:3px solid #007bff;padding:12px;margin:20px 0;">
    <p>Precisa de <strong>\${servicePageName}</strong>? A Reparo Avançado resolve com garantia de \${businessInfo.warranty}.</p>
    <a href="https://wa.me/\${WA_NUMBER}?text=\${waMsg}">Fale pelo WhatsApp</a>
  </aside>\`;`;

const ctaMidNew = `const isNoCta = post.slug === 'recuperacao-conta-google-micloud-salvador';
  const waMsg = encodeURIComponent(\`Olá! Vi o artigo "\${post.title}" e preciso de ajuda com \${post.service}.\`);
  if (!isNoCta) {
    contentHtml += \`<aside style="border-left:3px solid #007bff;padding:12px;margin:20px 0;">
      <p>Precisa de <strong>\${servicePageName}</strong>? A Reparo Avançado resolve com garantia de \${businessInfo.warranty}.</p>
      <a href="https://wa.me/\${WA_NUMBER}?text=\${waMsg}">Fale pelo WhatsApp</a>
    </aside>\`;
  } else {
    contentHtml += \`<aside style="border-left:3px solid #dc3545;padding:12px;margin:20px 0;background-color:#fff3f3;">
      <p><strong>Aviso:</strong> NÃO realizamos desbloqueio de contas, senhas ou iCloud. Se o defeito for físico, estamos à disposição.</p>
    </aside>\`;
  }`;

prerender = prerender.replace(ctaMidOriginal, ctaMidNew);

const ctaEndOriginal = `contentHtml += \`<aside style="border:2px solid #007bff;padding:16px;margin:24px 0;border-radius:8px;">
    <p><strong>\${servicePageName} na Reparo Avançado</strong></p>
    <p>Garantia de \${businessInfo.warranty}. Loja na Boca do Rio, Salvador.</p>
    <a href="https://wa.me/\${WA_NUMBER}?text=\${waMsg}">Fale pelo WhatsApp</a> · 
    <a href="\${servicePage}">Ver serviço de \${servicePageName}</a>
  </aside>\`;`;

const ctaEndNew = `if (!isNoCta) {
    contentHtml += \`<aside style="border:2px solid #007bff;padding:16px;margin:24px 0;border-radius:8px;">
      <p><strong>\${servicePageName} na Reparo Avançado</strong></p>
      <p>Garantia de \${businessInfo.warranty}. Loja na Boca do Rio, Salvador.</p>
      <a href="https://wa.me/\${WA_NUMBER}?text=\${waMsg}">Fale pelo WhatsApp</a> · 
      <a href="\${servicePage}">Ver serviço de \${servicePageName}</a>
    </aside>\`;
  } else {
    contentHtml += \`<aside style="border:2px solid #dc3545;padding:16px;margin:24px 0;border-radius:8px;background-color:#fff3f3;">
      <p>Reforçamos que não atuamos com bloqueios lógicos ou recuperação de senhas/contas.</p>
      <a href="\${servicePage}">Ver serviço de \${servicePageName} (Apenas Hardware)</a>
    </aside>\`;
  }`;

prerender = prerender.replace(ctaEndOriginal, ctaEndNew);

fs.writeFileSync('scripts/prerender.ts', prerender);
console.log('CTAs updated for noCTA exceptions');
