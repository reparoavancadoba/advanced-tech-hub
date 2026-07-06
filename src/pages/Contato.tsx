import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Phone, MapPin, Clock, Mail, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de falar com a Reparo Avançado.";

const Contato = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Reparo Avançado",
    "description": "Entre em contato com a Reparo Avançado. Assistência técnica especializada em celulares em Salvador.",
    "url": "https://site.reparoavancado.com.br/contato",
    "telephone": "+55-71-99198-1437",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
      "addressLocality": "Salvador",
      "addressRegion": "BA",
      "postalCode": "41706-710",
      "addressCountry": "BR"
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
        <title>Contato | Reparo Avançado - Assistência Técnica Salvador</title>
        <meta name="description" content="Entre em contato com a Reparo Avançado em Salvador. WhatsApp, telefone e endereço. Atendimento de segunda a sábado na Boca do Rio." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/contato" />
        <meta property="og:title" content="Contato | Reparo Avançado - Assistência Técnica Salvador" />
        <meta property="og:description" content="Entre em contato com a Reparo Avançado em Salvador. WhatsApp, telefone e endereço." />
        <meta property="og:url" content="https://site.reparoavancado.com.br/contato" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Fale com a <span className="text-gradient">Reparo Avançado</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Estamos prontos para atender você. Escolha o canal mais conveniente e entre em contato agora mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* Cards de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="contato-whatsapp-card"
              className="bg-card border border-border rounded-2xl p-8 hover:border-whatsapp/50 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-whatsapp/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-whatsapp/20 transition-all">
                <MessageCircle className="w-8 h-8 text-whatsapp" />
              </div>
              <h2 className="font-bold text-xl mb-2">WhatsApp</h2>
              <p className="text-muted-foreground text-sm mb-3">Atendimento mais rápido</p>
              <span className="text-whatsapp font-bold">(71) 99198-1437</span>
            </a>

            {/* Telefone */}
            <a
              href="tel:+5571991981437"
              id="contato-telefone-card"
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-all">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-bold text-xl mb-2">Telefone</h2>
              <p className="text-muted-foreground text-sm mb-3">Ligue diretamente</p>
              <span className="text-primary font-bold">(71) 99198-1437</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/reparoavancadoba"
              target="_blank"
              rel="noopener noreferrer"
              id="contato-instagram-card"
              className="bg-card border border-border rounded-2xl p-8 hover:border-pink-500/50 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-pink-500/20 transition-all">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
              <h2 className="font-bold text-xl mb-2">Instagram</h2>
              <p className="text-muted-foreground text-sm mb-3">Acompanhe nosso trabalho</p>
              <span className="text-pink-500 font-bold">@reparoavancadoba</span>
            </a>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Endereço</h2>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p>R. Abelardo Andrade de Carvalho, 8 – Boca do Rio, Salvador – BA, 41706-710</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Horário de Funcionamento</h2>
              <div className="space-y-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span><strong className="text-foreground">Seg a Sex:</strong> 9h às 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span><strong className="text-foreground">Sábado:</strong> 9h às 13h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground shrink-0" />
                  <span>Domingo: Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Precisa de ajuda agora?</h2>
          <p className="text-muted-foreground mb-8">O jeito mais rápido de resolver é pelo WhatsApp. Resposta em até 5 minutos.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="contato-bottom-cta"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            FALAR COM TÉCNICO AGORA
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contato;
