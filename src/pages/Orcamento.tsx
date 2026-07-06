import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Zap, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento gratuito.";

const Orcamento = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Reparo Avançado",
    "description": "Solicite seu orçamento gratuito para conserto de celular em Salvador. Atendimento imediato pelo WhatsApp.",
    "url": "https://site.reparoavancado.com.br/orcamento",
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
        <title>Orçamento Gratuito | Conserto de Celular Salvador | Reparo Avançado</title>
        <meta name="description" content="Solicite agora seu orçamento gratuito para conserto de celular em Salvador. Resposta imediata pelo WhatsApp. iPhone, Samsung, Xiaomi e mais." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/orcamento" />
        <meta property="og:title" content="Orçamento Gratuito | Conserto de Celular Salvador | Reparo Avançado" />
        <meta property="og:description" content="Solicite agora seu orçamento gratuito para conserto de celular em Salvador. Resposta imediata pelo WhatsApp." />
        <meta property="og:url" content="https://site.reparoavancado.com.br/orcamento" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-whatsapp/10 text-whatsapp text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Clock className="w-4 h-4" /> Resposta em até 5 minutos
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Orçamento <span className="text-gradient">Gratuito</span> para Conserto de Celular
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Fale agora com um profissional qualificado e receba o valor exato do conserto do seu aparelho. Sem compromisso, sem pegadinhas.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="orcamento-hero-cta"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-10 py-5 rounded-xl text-lg font-bold animate-pulse-whatsapp hover:brightness-110 transition-all shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              SOLICITAR ORÇAMENTO NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Resposta Imediata", desc: "Nossa equipe responde em até 5 minutos pelo WhatsApp. Sem espera, sem burocracia." },
              { icon: ShieldCheck, title: "Sem Compromisso", desc: "Você recebe o valor exato do conserto e decide com calma. Não obrigamos ninguém." },
              { icon: Clock, title: "Conserto na Hora", desc: "A maioria dos serviços é finalizada no mesmo dia. Você deixa de manhã e busca à tarde." },
            ].map((b) => (
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

      {/* Como Funciona */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Como funciona?</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Envie uma mensagem", desc: "Clique no botão do WhatsApp e descreva o problema do seu aparelho (pode mandar foto ou vídeo)." },
              { step: "2", title: "Receba o orçamento", desc: "Em minutos, nosso técnico analisa e envia o valor exato do serviço com prazo de entrega." },
              { step: "3", title: "Aprove e traga o aparelho", desc: "Se concordar, traga seu celular na nossa oficina na Boca do Rio. Sem surpresas no final." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-whatsapp/5 to-primary/5">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-card border-2 border-whatsapp/30 rounded-2xl p-8 shadow-lg">
            <p className="text-2xl font-bold mb-2">✅ Mais de 5.000 aparelhos reparados</p>
            <p className="text-muted-foreground text-sm mb-1">⭐ Avaliação 5.0/5 · 153 avaliações no Google</p>
            <p className="text-xs text-muted-foreground mb-6">9 anos de experiência em Salvador - BA</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="orcamento-bottom-cta"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO MEU ORÇAMENTO GRÁTIS
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Orcamento;
