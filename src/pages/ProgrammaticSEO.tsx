import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Zap, Wrench, MapPin, CheckCircle2, Clock, Star, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { bairros, servicosLocais, buildWhatsappLink } from "@/data/locaisData";

const ProgrammaticSEO = () => {
  const { servicoSlug, bairroSlug } = useParams();
  
  const bairro = bairros.find((b) => b.slug === bairroSlug);
  const servico = servicosLocais.find((s) => s.slug === servicoSlug);

  if (!bairro || !servico) {
    return <Navigate to="/locais-de-atendimento" replace />;
  }

  const title = `${servico.name} em ${bairro.name} | Reparo Avançado Salvador`;
  const description = `Precisando de ${servico.shortName.toLowerCase()} no bairro ${bairro.name}? Atendimento rápido, peças de alta performance e garantia real. Especialistas em ${servico.name} perto de você em ${bairro.name}.`;
  const canonical = `https://site.reparoavancado.com.br/conserto/${servico.slug}/em/${bairro.slug}`;
  const waLink = buildWhatsappLink(servico.name, bairro.name);

  // Variações de texto dinâmicas com base no bairro para evitar "Duplicate Content"
  const getDynamicIntro = () => {
    const len = bairro.name.length;
    if (len % 3 === 0) {
      return `A Reparo Avançado é a escolha número um para moradores de ${bairro.name} que buscam excelência e rapidez. Nossa equipe técnica está estrategicamente posicionada para atender a região de ${bairro.name} no menor tempo possível.`;
    } else if (len % 2 === 0) {
      return `Se o seu aparelho quebrou e você está em ${bairro.name}, não precisa se preocupar. Oferecemos o serviço de ${servico.shortName.toLowerCase()} com peças de alta qualidade, garantindo que seu dispositivo volte a funcionar como novo.`;
    } else {
      return `Moradores de ${bairro.name} contam com a experiência de 9 anos da Reparo Avançado. Quando o assunto é ${servico.shortName.toLowerCase()}, nossa agilidade e laboratório de ponta fazem toda a diferença para quem vive ou trabalha na região.`;
    }
  };

  const getDynamicUrgency = () => {
    return bairro.name.includes("a") || bairro.name.includes("A")
      ? `Não perca tempo rodando por assistências amadoras em ${bairro.name}. Resolva hoje mesmo.`
      : `Seu celular é sua ferramenta de trabalho e lazer. Traga para nossa equipe e saia com ele consertado.`;
  };

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

      {/* HERO OTIMIZADO PARA CONVERSÃO */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-primary/20 shadow-sm">
              <MapPin className="w-4 h-4 animate-bounce" /> Cobertura Rápida: {bairro.name} - Salvador
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Especialistas em {servico.name} <br className="hidden md:block"/> perto de você em <span className="text-gradient border-b-4 border-primary">{bairro.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
              {servico.description}
            </p>
            
            {/* Call to Action Duplo de Alta Conversão */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-whatsapp/30 animate-pulse-whatsapp"
              >
                <MessageCircle className="w-6 h-6" />
                Fazer Orçamento Agora
              </a>
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Resposta em até 5 min
              </div>
            </div>

            {/* Prova Social Rápida */}
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

      {/* CONTEÚDO SEO LOCAL COM TEXTO DINÂMICO */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Precisando de {servico.shortName.toLowerCase()} no bairro {bairro.name}?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {getDynamicIntro()}
                </p>
                <p>
                  Sabemos que ficar com o aparelho defeituoso gera muita dor de cabeça. Por isso, oferecemos um serviço ágil para solucionar problemas de <strong>{servico.shortName.toLowerCase()}</strong>. Utilizamos peças de reposição com qualidade original para assegurar a durabilidade do reparo.
                </p>
                <p className="font-semibold text-foreground">
                  {getDynamicUrgency()}
                </p>
              </div>
            </div>
            <div className="bg-card border border-border p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" /> Como funciona?
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-foreground">Fale Conosco</h4>
                    <p className="text-sm text-muted-foreground">Clique no botão do WhatsApp e descreva o problema. Nossa equipe em {bairro.name} responderá rápido.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-foreground">Orçamento Transparente</h4>
                    <p className="text-sm text-muted-foreground">Passamos uma estimativa justa e sem surpresas. Diagnóstico técnico detalhado.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-foreground">Aparelho Novo de Novo</h4>
                    <p className="text-sm text-muted-foreground">Reparo executado com maestria. Você sai com seu aparelho funcionando 100% e com garantia.</p>
                  </div>
                </li>
              </ul>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 text-whatsapp font-bold hover:underline">
                Iniciar atendimento agora <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL DE ALTA CONVERSÃO */}
      <section className="py-16 bg-primary/5 border-t border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para resolver seu problema em {bairro.name}?</h2>
          <p className="text-lg text-muted-foreground mb-8">Nossa equipe está online agora no WhatsApp pronta para receber seu aparelho e realizar o serviço de {servico.shortName.toLowerCase()}.</p>
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

      {/* STICKY BOTTOM BAR PARA MOBILE (CRO - ALTA CONVERSÃO) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-3.5 rounded-xl font-bold shadow-lg animate-pulse-whatsapp"
        >
          <MessageCircle className="w-5 h-5" />
          Técnico em {bairro.name}
        </a>
      </div>
    </SiteLayout>
  );
};

export default ProgrammaticSEO;
