const fs = require('fs');
let content = fs.readFileSync('src/pages/BlogPost.tsx', 'utf8');

const linkHtml = `
          {/* Internal Links to Local Pages */}
          <div className="mt-8 mb-4 text-zinc-300 text-lg">
            <p>Conheça a nossa <Link to="/assistencia-tecnica-salvador" className="text-[#0066FF] hover:underline font-bold">assistência técnica de celular em Salvador</Link>, com loja na <Link to="/assistencia-tecnica-boca-do-rio" className="text-[#0066FF] hover:underline font-bold">Boca do Rio</Link>.</p>
          </div>
`;

content = content.replace('{/* Final CTA Banner */}', linkHtml + '\n          {/* Final CTA Banner */}');
fs.writeFileSync('src/pages/BlogPost.tsx', content);
console.log('Added local links to BlogPost.tsx');
