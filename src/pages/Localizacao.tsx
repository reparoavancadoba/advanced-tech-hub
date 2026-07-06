import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";
import { MessageCircle, MapPin, Navigation, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de saber como chegar na Reparo Avançado.";
const GOOGLE_MAPS_DIRECTIONS = "https://www.google.com/maps/dir//Reparo+Avan%C3%A7ado+-+Conserto+de+Celulares+em+Salvador+-+R.+Abelardo+Andrade+de+Carvalho,+8+-+Boca+do+Rio,+Salvador+-+BA,+41706-710";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5!2d-38.4413!3d-12.9777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d3e5f6b7c9%3A0xabc123!2sR.+Abelardo+Andrade+de+Carvalho%2C+8+-+Boca+do+Rio%2C+Salvador+-+BA%2C+41706-710!5e0!3m2!1spt-BR!2sbr!4v1";

const Localizacao = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Reparo Avançado",
    "description": "Localização e como chegar na Reparo Avançado em Salvador, Boca do Rio.",
    "url": "https://site.reparoavancado.com.br/localizacao",
    "telephone": "+55-71-99198-1437",
    "image": "https://site.reparoavancado.com.br/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
      "addressLocality": "Salvador",
      "addressRegion": "BA",
      "postalCode": "41706-710",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.9777,
      "longitude": -38.4413
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "153"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
    ]
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>Localização | Reparo Avançado - Boca do Rio, Salvador</title>
        <meta name="description" content="Veja como chegar na Reparo Avançado na Boca do Rio, Salvador - BA. Endereço completo, mapa interativo e rotas pelo Google Maps." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/localizacao" />
        <meta property="og:title" content="Localização | Reparo Avançado - Boca do Rio, Salvador" />
        <meta property="og:description" content="Veja como chegar na Reparo Avançado na Boca do Rio, Salvador - BA. Endereço, mapa e rotas." />
        <meta property="og:url" content="https://site.reparoavancado.com.br/localizacao" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Nossa <span className="text-gradient">Localização</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Estamos na Boca do Rio, Salvador - BA. Fácil acesso pela Avenida Paralela, Pituba, Imbuí e Costa Azul.
            </p>
          </div>
        </div>
      </section>

      {/* Endereço + Mapa */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Endereço Completo</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Reparo Avançado</p>
                    <p className="text-muted-foreground text-sm">R. Abelardo Andrade de Carvalho, 8</p>
                    <p className="text-muted-foreground text-sm">Boca do Rio, Salvador – BA</p>
                    <p className="text-muted-foreground text-sm">CEP: 41706-710</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                    <p className="text-muted-foreground text-sm">Seg a Sex: 9h às 18h</p>
                    <p className="text-muted-foreground text-sm">Sábado: 9h às 13h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="localizacao-maps-cta"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  Como Chegar
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="localizacao-whatsapp-cta"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                title="Localização Reparo Avançado - Boca do Rio Salvador"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bairros atendidos */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Atendemos toda Salvador</h2>
          <p className="text-muted-foreground mb-8 text-sm">Clientes dos seguintes bairros nos visitam semanalmente:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Boca do Rio", "Pituba", "Imbuí", "Costa Azul", "Stiep", "Patamares",
              "Jardim Armação", "Piatã", "Itapuã", "Stella Maris", "Barra", "Graça",
              "Rio Vermelho", "Ondina", "Brotas", "Cabula", "Paralela", "Iguatemi",
              "Caminho das Árvores", "Itaigara", "Tancredo Neves", "Centro", "Lauro de Freitas"
            ].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground text-xs font-medium hover:border-primary hover:text-primary transition-all">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Localizacao;
