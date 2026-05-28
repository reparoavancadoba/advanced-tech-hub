import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, MapPin, Smartphone, Battery, Cpu, BatteryCharging, Power, Droplet, Wrench, ChevronRight, HelpCircle, FileText } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { servicesHubList } from "@/data/servicosConsolidadosData";
import { listLocaisConsolidados } from "@/data/locaisConsolidadosData";
import { editorialPosts } from "@/data/editorialPosts";

const serviceIcons: Record<string, React.ElementType> = {
  "troca-de-tela": Smartphone,
  "troca-de-bateria": Battery,
  "reparo-em-placa": Cpu,
  "conserto-de-celular": Wrench,
  "celular-nao-carrega": BatteryCharging,
  "celular-nao-liga": Power,
  "celular-caiu-na-agua": Droplet
};

const Servicos = () => {
  const latestArticles = editorialPosts.slice(0, 3);
  const waLink = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento técnico para meu celular.";

  const hubFaqs = [
    {
      q: "Como funciona a garantia dos serviços na Reparo Avançado?",
      a: "Todos os nossos serviços de substituição de peças (telas, baterias, conectores) possuem garantia por escrito de 6 meses (180 dias). Nossos reparos de placa possuem garantia contratual de 90 dias."
    },
    {
      q: "O diagnóstico do meu aparelho é cobrado?",
      a: "Não! O diagnóstico inicial em nosso laboratório é 100% gratuito. Você traz o celular, nossos técnicos avaliam a placa e componentes, passam o orçamento e você só faz se concordar. Caso contrário, pode retirar sem nenhum custo."
    },
    {
      q: "Vocês atendem em domicílio ou têm serviço de coleta?",
      a: "Temos serviços de coleta programados para bairros como Pituba, Imbuí e Brotas, além de atendimento presencial expresso em nossa loja física na Boca do Rio. Fale conosco no WhatsApp para consultar a disponibilidade."
    }
  ];

  return (
    <SiteLayout>
      <Helmet>
        <title>Serviços e Especialidades | Reparo Avançado Salvador</title>
        <meta name="description" content="Central de Serviços da Reparo Avançado. Conheça nossas especialidades: troca de tela, bateria, reparo de placa e desoxidação com garantia e suporte local." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/servicos" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assistência Técnica e Conserto de Celulares em Salvador",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Reparo Avançado",
              "image": "https://site.reparoavancado.com.br/favicon.png",
              "telephone": "+5571991981437",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
                "addressLocality": "Salvador",
                "addressRegion": "BA",
                "postalCode": "41706-710",
                "addressCountry": "BR"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Nossos <span className="text-gradient">Serviços e Especialidades</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Soluções completas com técnicos especialistas e laboratório moderno. Clique na especialidade desejada para ver informações detalhadas sobre modelos e marcas.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com um Técnico
          </a>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Especialidades Técnicas Otimizadas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesHubList.map((service) => {
              const Icon = serviceIcons[service.slug] || Wrench;
              return (
                <div key={service.slug} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:glow-blue transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <Link
                    to={`/${service.slug}`}
                    className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:text-foreground transition-colors"
                  >
                    Ver detalhes do serviço <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas of Operation (Neighborhood Interlinking) */}
      <section className="py-16 bg-secondary/15 border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Bairros de Atendimento Estratégico</h2>
          <p className="text-muted-foreground mb-8">Atendemos de forma ágil com cobertura local nestes bairros em Salvador:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {listLocaisConsolidados.map((local) => (
              <Link
                key={local.slug}
                to={local.path}
                className="inline-flex items-center gap-2 bg-card border border-border hover:border-primary hover:text-primary text-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                <MapPin className="w-4 h-4 text-primary" />
                {local.name}
              </Link>
            ))}
          </div>
          <Link to="/locais-de-atendimento" className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1">
            Ver mapa de cobertura completa <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related Editorial Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Dicas do nosso Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-wider mb-3">
                    <FileText className="w-3.5 h-3.5" />
                    Artigo Editorial
                  </span>
                  <h3 className="font-bold text-sm text-foreground mb-2 line-clamp-2">{article.h1}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-4">{article.metaDescription}</p>
                </div>
                <span className="text-primary text-xs font-semibold inline-flex items-center gap-0.5">
                  Ler artigo completo <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="text-primary hover:underline text-sm font-semibold">
              Ver Todas as Publicações do Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Central FAQs Section */}
      <section className="py-16 bg-secondary/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            {hubFaqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground text-base mb-1.5">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Servicos;
