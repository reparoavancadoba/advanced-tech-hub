import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Zap, Wrench, ChevronRight, CheckCircle2, Star, Clock } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { getConsolidatedServiceBySlug } from "@/data/servicosConsolidadosData";
import { listLocaisConsolidados } from "@/data/locaisConsolidadosData";

interface ServicoConsolidadoProps {
  slug: string;
}

const ServicoConsolidado = ({ slug }: ServicoConsolidadoProps) => {
  const service = getConsolidatedServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const canonicalUrl = `https://site.reparoavancado.com.br/${service.slug}`;
  const waLink = `https://wa.me/5571991981437?text=${encodeURIComponent(`Olá! Preciso de um orçamento para o serviço de ${service.h1} em Salvador.`)}`;

  const benefits = [
    { icon: Zap, title: "Atendimento Rápido", desc: "A maioria dos reparos realizados no mesmo dia, no máximo em 1 hora." },
    { icon: ShieldCheck, title: "Garantia por Escrito", desc: "Fornecemos garantia de 6 meses em todas as peças premium instaladas." },
    { icon: Wrench, title: "Laboratório de Ponta", desc: "Equipamentos profissionais de soldagem BGA, microscópios e ferramentas específicas." },
  ];

  // Build JSON-LD Schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.h1,
        "description": service.metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Reparo Avançado",
          "telephone": "+5571991981437",
          "priceRange": "$$",
          "image": "https://site.reparoavancado.com.br/favicon.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
            "addressLocality": "Salvador",
            "addressRegion": "BA",
            "postalCode": "41706-710",
            "addressCountry": "BR"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://site.reparoavancado.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Serviços",
            "item": "https://site.reparoavancado.com.br/servicos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.h1,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-secondary/10 border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/servicos" className="hover:text-foreground">Serviços</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-semibold">{service.h1}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Atendimento de Elite em Salvador
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {service.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {service.description} Oferecemos diagnósticos precisos e reparos com agilidade e alto padrão técnico.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento no WhatsApp
            </a>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" /> Diagnóstico Rápido
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-whatsapp" /> 6 Meses de Garantia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Sintomas e Problemas Comuns</h2>
              <ul className="space-y-4">
                {service.problems.map((prob, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Solução Técnica Avançada</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.solution}
              </p>
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-3">Marcas e Modelos Suportados</h3>
              <div className="flex flex-wrap gap-2">
                {service.supportedBrands.map((brand) => (
                  <span key={brand} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs font-medium border border-border">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Visible on page) */}
      <section className="py-20 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground text-center mb-12">Tire suas dúvidas sobre {service.h1.toLowerCase()} na Reparo Avançado.</p>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-base mb-2 text-foreground flex items-start gap-2">
                  <span className="text-primary font-extrabold">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-6 border-l border-primary/20">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Links & Interlinking */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl font-bold mb-6">Locais de Atendimento em Salvador</h2>
          <p className="text-sm text-muted-foreground mb-8">Oferecemos atendimento técnico especializado para diversos bairros em Salvador de forma prática:</p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {listLocaisConsolidados.map((loc) => (
              <Link
                key={loc.slug}
                to={loc.path}
                className="text-xs bg-card border border-border text-foreground px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-all"
              >
                Assistência na {loc.name}
              </Link>
            ))}
          </div>
          <Link to="/servicos" className="text-primary hover:underline text-sm font-semibold">
            Ver Todos os Serviços Disponíveis →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ServicoConsolidado;
