import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Zap, Wrench, MapPin, CheckCircle2, Clock, Star } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { bairros, servicosLocais, buildWhatsappLink } from "@/data/locaisData";

const Atendimento = () => {
  const { bairro: bairroSlug, servico: servicoSlug } = useParams();
  const bairro = bairros.find((b) => b.slug === bairroSlug);
  const servico = servicosLocais.find((s) => s.slug === servicoSlug);

  if (!bairro || !servico) return <Navigate to="/locais-de-atendimento" replace />;

  const title = `${servico.name} no ${bairro.name} - Salvador (BA) | Reparo Avançado`;
  const description = `Especialistas em ${servico.name} no bairro ${bairro.name}, Salvador (BA). Se você mora no ${bairro.name} e precisa de ${servico.name}, fale com a Reparo Avançado: atendimento rápido, peças de alta performance e garantia real. Solicite orçamento de ${servico.name} no ${bairro.name} via WhatsApp.`;
  const canonical = `https://site.reparoavancado.com.br/atendimento/${bairro.slug}/${servico.slug}`;
  const waLink = buildWhatsappLink(servico.name, bairro.name);

  const benefits = [
    { icon: Zap, title: "Atendimento Rápido", desc: "Diagnóstico imediato e reparos no mesmo dia, sempre que possível." },
    { icon: ShieldCheck, title: "Garantia Real", desc: "Todos os serviços com garantia formal e suporte pós-atendimento." },
    { icon: Wrench, title: "Peças de Alta Performance", desc: "Componentes premium com padrão de fábrica e qualidade certificada." },
  ];

  return (
    <SiteLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Reparo Avançado - ${servico.name} no ${bairro.name}`,
            description,
            url: canonical,
            telephone: "+5571991981437",
            address: {
              "@type": "PostalAddress",
              addressLocality: bairro.name,
              addressRegion: "BA",
              addressCountry: "BR",
            },
            areaServed: { "@type": "Place", name: `${bairro.name}, Salvador - BA` },
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <MapPin className="w-4 h-4" /> Atendimento em {bairro.name} - Salvador (BA)
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {servico.name} no <span className="text-gradient">{bairro.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {servico.description} Atendimento rápido para moradores do {bairro.name} e região, com peças de alta performance e garantia formal.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar orçamento no WhatsApp
            </a>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> 5.0 ★
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 9 anos de tradição
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-whatsapp" /> +143 avaliações reais
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-secondary/30">
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

      {/* COPY */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Está procurando {servico.shortName.toLowerCase()} no {bairro.name}?
          </h2>
          <p className="text-muted-foreground mb-4">
            A Reparo Avançado é referência em {servico.shortName.toLowerCase()} no {bairro.name} e em toda Salvador. Com 9 anos de tradição e mais de 143 avaliações reais 5.0 ★, oferecemos um padrão técnico que entrega o aparelho funcionando como novo, sem improvisos.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3">Solução completa, do diagnóstico à entrega</h3>
          <p className="text-muted-foreground mb-4">
            Recebemos seu aparelho, executamos o diagnóstico técnico, apresentamos o orçamento sem surpresas e devolvemos com garantia formal. Para moradores do {bairro.name}, o atendimento é direto e ágil — fale conosco no WhatsApp e tire suas dúvidas em minutos.
          </p>
          <div className="text-center mt-10">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com um especialista agora
            </a>
          </div>
        </div>
      </section>

      {/* FAB CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 hidden md:inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-3 rounded-full font-bold shadow-xl hover:brightness-110 transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        Orçamento: {servico.shortName}
      </a>

      {/* Internal links */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-4">Veja outros serviços disponíveis no {bairro.name}:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {servicosLocais
              .filter((s) => s.slug !== servico.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/atendimento/${bairro.slug}/${s.slug}`}
                  className="text-xs bg-secondary text-foreground px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {s.shortName} no {bairro.name}
                </Link>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/locais-de-atendimento" className="text-primary hover:underline text-sm font-semibold">
              Ver todos os locais de atendimento →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Atendimento;
