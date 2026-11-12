import { Helmet } from "react-helmet-async";
import SiteLayout from "@/components/SiteLayout";
import { MessageCircle } from "lucide-react";
import { LOJA_META, LOJA_SECTIONS, LOJA_FAQ } from "@/data/lojaData";

const waLink = (text: string) =>
  `https://wa.me/5571991981437?text=${encodeURIComponent(text)}`;

const Loja = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: LOJA_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://site.reparoavancado.com.br/" },
          { "@type": "ListItem", position: 2, name: "Loja", item: "https://site.reparoavancado.com.br/loja" },
        ],
      },
    ],
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>{LOJA_META.title}</title>
        <meta name="description" content={LOJA_META.description} />
        <link rel="canonical" href="https://site.reparoavancado.com.br/loja" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="py-16 bg-graphite text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{LOJA_META.h1}</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{LOJA_META.intro}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl grid gap-6 md:grid-cols-2">
          {LOJA_SECTIONS.map((s) => (
            <div key={s.title} className="bg-light-gray p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-bold mb-2">{s.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{s.text}</p>
              <a
                href={waLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline"
              >
                Consultar pelo WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {LOJA_FAQ.map((f) => (
              <div key={f.q} className="bg-white p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Reparo Avançado · R. Abelardo Andrade de Carvalho, 8, Boca do Rio, Salvador · Seg a Sex 8h–18h · Sáb 8h–17h
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Loja;
