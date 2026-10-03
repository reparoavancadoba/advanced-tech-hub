const fs = require('fs');

// STEP 3: FooterSection.tsx
let footer = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
if (!footer.includes('Nossa loja na Boca do Rio')) {
    footer = footer.replace(
        /R\. Abelardo Andrade de Carvalho, 8 - Boca do Rio, Salvador - BA, 41706-710/,
        `<span>R. Abelardo Andrade de Carvalho, 8 - Boca do Rio, Salvador - BA, 41706-710<br/><Link to="/assistencia-tecnica-boca-do-rio" className="text-primary hover:underline font-bold mt-1 inline-block">Nossa loja na Boca do Rio</Link></span>`
    );
    if (!footer.includes('import { Link }')) {
        footer = footer.replace(/import \{.*?\} from "lucide-react";/, "$&\nimport { Link } from 'react-router-dom';");
    }
    fs.writeFileSync('src/components/FooterSection.tsx', footer);
    console.log('Patched FooterSection.tsx');
}

// STEP 4: LocalConsolidado.tsx
let local = fs.readFileSync('src/pages/LocalConsolidado.tsx', 'utf8');
if (!local.includes('Nossa loja na Boca do Rio')) {
    const sectionHtml = `
      {/* Boca do Rio Specific Section */}
      {local.slug === "boca-do-rio" && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Nossa loja na Boca do Rio</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              A Reparo Avançado fica na própria Boca do Rio, na R. Abelardo Andrade de Carvalho, 8, CEP 41706-710, em Salvador. Você pode trazer o aparelho direto na loja ou pedir a coleta e entrega na região.
            </p>
            <ul className="mb-6 space-y-2 text-muted-foreground">
              <li><strong>Endereço:</strong> R. Abelardo Andrade de Carvalho, 8 – Boca do Rio, Salvador – BA, 41706-710</li>
              <li><strong>Horário:</strong> segunda a sexta, das 8h às 18h; sábado, das 8h às 17h</li>
              <li><strong>Telefone e WhatsApp:</strong> (71) 99198-1437</li>
              <li><strong>Avaliação no Google:</strong> nota 5,0</li>
            </ul>
            <div className="mb-8">
              <a href="https://www.google.com/maps/search/?api=1&query=Reparo+Avan%C3%A7ado+R.+Abelardo+Andrade+de+Carvalho+8+Boca+do+Rio+Salvador" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-lg font-bold hover:brightness-110">Abrir no Google Maps</a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Mapa da Reparo Avançado na Boca do Rio"
                src="https://www.google.com/maps?q=R.+Abelardo+Andrade+de+Carvalho,+8,+Boca+do+Rio,+Salvador+-+BA,+41706-710&output=embed"
                width="100%"
                className="h-[300px] md:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}
      {/* LocalBusiness Info Section */}`;
      
    local = local.replace('{/* LocalBusiness Info Section */}', sectionHtml);
    fs.writeFileSync('src/pages/LocalConsolidado.tsx', local);
    console.log('Patched LocalConsolidado.tsx');
}
