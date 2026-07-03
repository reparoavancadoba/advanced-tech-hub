import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Zap, Wrench, MapPin, CheckCircle2, Clock, Star, ArrowRight, HelpCircle } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { bairros, servicosLocais, buildWhatsappLink } from "@/data/locaisData";

const ProgrammaticSEO = () => {
  const { servicoSlug, bairroSlug } = useParams();
  
  const bairro = bairros.find((b) => b.slug === bairroSlug);
  const servico = servicosLocais.find((s) => s.slug === servicoSlug);

  if (!bairro || !servico) {
    return <Navigate to="/locais-de-atendimento" replace />;
  }

  // Seed generation based on strings to keep output consistent for the same URL
  const seed = (bairro.name.length * servico.name.length) + bairro.name.charCodeAt(0) + servico.name.charCodeAt(0);
  const variant = seed % 3;
  const layoutVariant = seed % 2;

  const title = variant === 0 
    ? `${servico.name} em ${bairro.name} | Reparo Avançado Salvador`
    : variant === 1 
    ? `Especializada em ${servico.name} na região de ${bairro.name} | Reparo Avançado`
    : `Assistência Técnica: ${servico.name} - ${bairro.name} (Salvador)`;

  const description = variant === 0
    ? `Precisando de ${servico.shortName.toLowerCase()} no bairro ${bairro.name}? Atendimento rápido, peças de alta performance e garantia real.`
    : variant === 1
    ? `Procurando ${servico.name.toLowerCase()} em ${bairro.name}? A Reparo Avançado é referência em Salvador. Orçamento gratuito e serviço no mesmo dia.`
    : `O melhor serviço de ${servico.shortName.toLowerCase()} para moradores de ${bairro.name}. Profissionais qualificados e laboratório próprio.`;

  const canonical = `https://site.reparoavancado.com.br/conserto/${servico.slug}/em/${bairro.slug}`;
  const waLink = buildWhatsappLink(servico.name, bairro.name);

  const introTexts = [
    `A Reparo Avançado é a escolha número um para moradores de ${bairro.name} que buscam excelência e rapidez. Nossa equipe técnica está estrategicamente posicionada para atender a região de ${bairro.name} no menor tempo possível, resolvendo problemas de ${servico.shortName.toLowerCase()} com precisão.`,
    `Se o seu aparelho quebrou e você está em ${bairro.name}, não precisa se preocupar com deslocamentos longos ou assistências amadoras. Oferecemos o serviço focado de ${servico.shortName.toLowerCase()} com peças de alta qualidade, garantindo que seu dispositivo volte a funcionar como novo.`,
    `Moradores e trabalhadores de ${bairro.name} contam com a experiência de quase uma década da Reparo Avançado. Quando o assunto é ${servico.shortName.toLowerCase()}, nossa agilidade, transparência no orçamento e laboratório de ponta fazem toda a diferença para a região.`
  ];

  const urgencyTexts = [
    `Não perca tempo rodando por assistências não qualificadas em ${bairro.name}. Resolva hoje mesmo com quem entende do assunto.`,
    `Seu celular é sua principal ferramenta de trabalho e comunicação. Traga para nossa equipe e saia com ele consertado rapidamente.`,
    `Sabemos que a rotina em ${bairro.name} é corrida. Por isso, otimizamos nosso processo para entregar seu aparelho no menor tempo viável.`
  ];

  // Dynamic FAQs based on service and variant
  const allFaqs = [
    { q: `Quanto tempo demora o serviço de ${servico.shortName.toLowerCase()}?`, a: `Na maioria dos casos para clientes de ${bairro.name}, realizamos o reparo no mesmo dia, geralmente em menos de 2 horas após a aprovação do orçamento.` },
    { q: `Vocês oferecem garantia para moradores de ${bairro.name}?`, a: `Sim! Todos os nossos serviços, incluindo ${servico.shortName.toLowerCase()}, possuem garantia mínima de 90 dias com certificado por escrito.` },
    { q: `As peças usadas no ${servico.shortName.toLowerCase()} são originais?`, a: `Utilizamos peças de altíssima performance, equivalentes ao padrão original de fábrica (Premium/Original Nacional), garantindo durabilidade máxima.` },
    { q: `Vale a pena consertar ou é melhor comprar outro?`, a: `Na Reparo Avançado, somos honestos. Se o custo do ${servico.shortName.toLowerCase()} ultrapassar 50% do valor do aparelho, nós mesmos te avisaremos durante o orçamento gratuito.` },
    { q: `Como faço para chegar saindo de ${bairro.name}?`, a: `Nossa loja fica na Boca do Rio, com acesso facilitado para quem vem de ${bairro.name}. O trajeto costuma ser rápido, e você pode chamar no WhatsApp para enviarmos a localização exata no mapa.` }
  ];

  // Pick 3 FAQs based on seed
  const faqs = [
    allFaqs[seed % allFaqs.length],
    allFaqs[(seed + 1) % allFaqs.length],
    allFaqs[(seed + 2) % allFaqs.length]
  ];

  const contentSection = (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">
          {variant === 0 ? `Precisando de ${servico.shortName.toLowerCase()} no bairro ${bairro.name}?` : `A Solução Definitiva em ${servico.name} para ${bairro.name}`}
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>{introTexts[variant]}</p>
          <p>
            Sabemos que ficar com o aparelho defeituoso gera muita dor de cabeça. Por isso, oferecemos um serviço ágil para solucionar problemas relacionados a <strong>{servico.shortName.toLowerCase()}</strong>. Utilizamos peças de reposição com qualidade garantida para assegurar a máxima durabilidade do reparo.
          </p>
          <p className="font-semibold text-foreground border-l-4 border-primary pl-4 py-2 mt-6 bg-secondary/30 rounded-r-lg">
            {urgencyTexts[variant]}
          </p>
        </div>
      </div>
      <div className={`bg-card border border-border p-8 rounded-3xl shadow-xl relative overflow-hidden group ${layoutVariant === 1 ? 'order-first md:order-last' : ''}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <Wrench className="w-6 h-6 text-primary" /> Como funciona o atendimento?
        </h3>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
            <div>
              <h4 className="font-bold text-foreground">Contato Imediato</h4>
              <p className="text-sm text-muted-foreground">Clique no WhatsApp. Nossa equipe responderá super rápido para agilizar seu atendimento vindo de {bairro.name}.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
            <div>
              <h4 className="font-bold text-foreground">Orçamento Transparente</h4>
              <p className="text-sm text-muted-foreground">Diagnóstico técnico rigoroso. Você saberá exatamente o que será feito e o valor, sem surpresas.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
            <div>
              <h4 className="font-bold text-foreground">Reparo e Entrega</h4>
              <p className="text-sm text-muted-foreground">Conserto executado no laboratório. Você sai com seu aparelho funcionando e com certificado de garantia.</p>
            </div>
          </li>
        </ul>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 text-whatsapp font-bold hover:underline">
          Falar com o técnico agora <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  const faqSection = (
    <section className="py-16 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-primary" /> Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground">Respostas rápidas para clientes de {bairro.name} sobre {servico.shortName.toLowerCase()}.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-bold text-lg mb-2">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

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
            "@type": "Service",
            "name": `${servico.name} em ${bairro.name}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Reparo Avançado Salvador",
              "telephone": "+5571991981437",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Salvador",
                "addressRegion": "BA",
                "addressCountry": "BR"
              }
            },
            "areaServed": {
              "@type": "Neighborhood",
              "name": bairro.name
            },
            "description": description
          })}
        </script>
      </Helmet>

      {/* HERO OTIMIZADO */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-primary/20 shadow-sm">
              <MapPin className="w-4 h-4 animate-bounce" /> Cobertura Rápida: {bairro.name} - Salvador
            </div>
            
            {variant === 0 ? (
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Especialistas em {servico.name} <br className="hidden md:block"/> perto de você em <span className="text-gradient border-b-4 border-primary">{bairro.name}</span>
              </h1>
            ) : variant === 1 ? (
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Assistência Especializada: <br className="hidden md:block"/> {servico.name} na região de <span className="text-gradient border-b-4 border-primary">{bairro.name}</span>
              </h1>
            ) : (
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Precisa de {servico.shortName}? <br className="hidden md:block"/> Atendimento Rápido para <span className="text-gradient border-b-4 border-primary">{bairro.name}</span>
              </h1>
            )}

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
              {servico.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-whatsapp/30 animate-pulse-whatsapp"
              >
                <MessageCircle className="w-6 h-6" />
                Fazer Orçamento Grátis
              </a>
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Resposta em até 5 min
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-10 text-sm font-semibold text-foreground/80 bg-secondary/50 py-3 px-6 rounded-2xl w-fit mx-auto border border-border/50">
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> 5.0 no Google
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-whatsapp" /> +153 Avaliações
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-primary" /> Garantia 90 dias
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RENDERIZAR CONTEÚDO E FAQ DE FORMA DINÂMICA (Alternando ordem) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {contentSection}
        </div>
      </section>

      {faqSection}

      {/* CTA FINAL */}
      <section className="py-16 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para resolver o problema do seu aparelho?</h2>
          <p className="text-lg text-muted-foreground mb-8">Moradores de {bairro.name} têm atendimento priorizado. Nossa equipe está online agora no WhatsApp pronta para receber seu contato.</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-xl font-bold hover:brightness-110 transition-all shadow-xl"
          >
            <MessageCircle className="w-7 h-7" />
            Falar com um Técnico
          </a>
        </div>
      </section>

      {/* BOTTOM BAR MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-3.5 rounded-xl font-bold shadow-lg animate-pulse-whatsapp"
        >
          <MessageCircle className="w-5 h-5" />
          Orçamento para {bairro.name}
        </a>
      </div>
    </SiteLayout>
  );
};

export default ProgrammaticSEO;

