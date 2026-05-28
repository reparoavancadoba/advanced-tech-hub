import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, MessageCircle, ChevronRight, Navigation, Globe, Shield, Wrench } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { getLocalConsolidadoBySlug, listLocaisConsolidados } from "@/data/locaisConsolidadosData";
import { servicosConsolidados } from "@/data/servicosConsolidadosData";

interface LocalConsolidadoProps {
  slug: string;
}

const LocalConsolidado = ({ slug }: LocalConsolidadoProps) => {
  const local = getLocalConsolidadoBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!local) {
    return <Navigate to="/locais-de-atendimento" replace />;
  }

  const canonicalUrl = `https://site.reparoavancado.com.br${local.path}`;
  const waLink = `https://wa.me/5571991981437?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para atendimento no bairro ${local.name} em Salvador.`)}`;
  const mapsEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5!2d-38.4413!3d-12.9777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d3e5f6b7c9%3A0xabc123!2sR.+Abelardo+Andrade+de+Carvalho%2C+8+-+Boca+do+Rio%2C+Salvador+-+BA%2C+41706-710!5e0!3m2!1spt-BR!2sbr!4v1";
  const mapsDirections = "https://www.google.com/maps/dir//Reparo+Avan%C3%A7ado+-+Conserto+de+Celulares+em+Salvador+-+R.+Abelardo+Andrade+de+Carvalho,+8+-+Boca+do+Rio,+Salvador+-+BA,+41706-710";

  // Build JSON-LD LocalBusiness & Breadcrumbs
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": local.schema.name,
        "image": "https://site.reparoavancado.com.br/favicon.png",
        "telephone": local.schema.telephone,
        "url": canonicalUrl,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": local.schema.streetAddress,
          "addressLocality": local.schema.addressLocality,
          "addressRegion": local.schema.addressRegion,
          "postalCode": local.schema.postalCode,
          "addressCountry": local.schema.addressCountry
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": local.schema.latitude,
          "longitude": local.schema.longitude
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "13:00"
          }
        ],
        "sameAs": local.schema.socials,
        "areaServed": local.schema.areaServed.map((area) => ({
          "@type": "Place",
          "name": `${area}, Salvador - BA`
        }))
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
            "name": "Locais de Atendimento",
            "item": "https://site.reparoavancado.com.br/locais-de-atendimento"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": local.name,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>{local.title}</title>
        <meta name="description" content={local.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={local.title} />
        <meta property="og:description" content={local.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-secondary/10 border-b border-border py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/locais-de-atendimento" className="hover:text-foreground">Locais de Atendimento</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-semibold">{local.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4" /> Atendimento Técnico no bairro {local.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {local.h1}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {local.description} Moradores de {local.name} contam com orçamento rápido, leva e traz ou atendimento presencial no laboratório com padrão de fábrica.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Atendimento para {local.name}
            </a>
          </div>
        </div>
      </section>

      {/* Services List for Local SEO */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Serviços Disponíveis para {local.name}</h2>
          <p className="text-muted-foreground text-center mb-12">Consertos rápidos realizados por técnicos especializados com peças premium e garantia por escrito.</p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(servicosConsolidados).map((serv) => (
              <div key={serv.slug} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{serv.h1.replace(" em Salvador", "")}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{serv.description}</p>
                </div>
                <Link
                  to={`/${serv.slug}`}
                  className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LocalBusiness Info Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Info Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Como Chegar e Contato</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nosso laboratório principal fica localizado próximo a você na Boca do Rio. Oferecemos suporte completo com técnicos e equipamentos qualificados.
              </p>
              
              <ul className="space-y-4 mb-8 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Endereço</strong>
                    {local.schema.streetAddress} - Boca do Rio, Salvador - BA, CEP {local.schema.postalCode}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Telefone / WhatsApp</strong>
                    (71) 99198-1437
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Horário de Funcionamento</strong>
                    Segunda a Sexta: 09h às 18h | Sábados: 09h às 13h
                  </div>
                </li>
              </ul>

              <div className="flex gap-4">
                <a
                  href={mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  Traçar Rota no Waze/Maps
                </a>
              </div>
            </div>

            {/* Map Frame */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                title={`Mapa de Localização - Reparo Avançado atendendo ${local.name}`}
                src={mapsEmbed}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Interlinking Section */}
      <section className="py-16 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-xl font-bold mb-6">Outras Áreas Atendidas em Salvador</h2>
          <p className="text-sm text-muted-foreground mb-8">Conheça outras regiões estratégicas com suporte técnico dedicado da nossa equipe:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {listLocaisConsolidados
              .filter((loc) => loc.slug !== local.slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  to={loc.path}
                  className="text-xs bg-card border border-border text-foreground px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  Assistência {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LocalConsolidado;
