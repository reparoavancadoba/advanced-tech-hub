import { useParams, Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { getPostBySlug, allPosts, BAIRROS, BUSINESS_ADDRESS, categoryLabels } from "@/data/blogData";
import SiteLayout from "@/components/SiteLayout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline">Voltar ao blog</Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const waLink = `https://wa.me/5571991981437?text=${encodeURIComponent(`Olá, vi o post sobre ${post.service} ${post.model} e preciso de ajuda`)}`;

  const relatedPosts = post.relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.h1,
        description: post.metaDescription,
        author: { "@type": "Organization", name: "Reparo Avançado" },
        publisher: {
          "@type": "Organization",
          name: "Reparo Avançado",
          url: "https://advanced-tech-hub.lovable.app",
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Reparo Avançado - Assistência Técnica de Celulares",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Abelardo Andrade de Carvalho, 8",
          addressLocality: "Salvador",
          addressRegion: "BA",
          postalCode: "41706-710",
          addressCountry: "BR",
        },
        telephone: "+55-71-99198-1437",
        areaServed: BAIRROS.map((b) => ({ "@type": "Place", name: `${b}, Salvador - BA` })),
      },
    ],
  };

  const toc = [
    { id: "problema", label: "O Problema" },
    { id: "causas", label: "Causas Comuns" },
    { id: "solucao", label: "Solução Técnica" },
    { id: "quando", label: "Quando Procurar Assistência" },
    { id: "custo", label: "Quanto Custa" },
    { id: "atendimento", label: "Atendimento em Salvador" },
  ];

  return (
    <SiteLayout>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6 flex-wrap">
          <Link to="/" className="hover:text-foreground">Início</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/blog?cat=${post.category}`} className="hover:text-foreground">
            {categoryLabels[post.category]}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{post.service}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.h1}</h1>
        <p className="text-muted-foreground mb-8 text-lg">{post.description}</p>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all animate-pulse-whatsapp mb-10"
        >
          <MessageCircle className="w-5 h-5" />
          ORÇAMENTO GRATUITO AGORA
        </a>

        {/* Table of Contents */}
        <div className="bg-card rounded-xl border border-border p-6 mb-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Índice</h2>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <article className="space-y-10">
          <section id="problema">
            <h2 className="text-2xl font-bold mb-4">O Problema: {post.service} {post.model}</h2>
            <ul className="space-y-2">
              {post.problems.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <section id="causas">
            <h2 className="text-2xl font-bold mb-4">Causas Comuns</h2>
            <ul className="space-y-2">
              {post.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section id="solucao">
            <h2 className="text-2xl font-bold mb-4">Solução Técnica da Reparo Avançado</h2>
            <p className="text-muted-foreground leading-relaxed">{post.solution}</p>
          </section>

          <section id="quando">
            <h2 className="text-2xl font-bold mb-4">Quando Procurar Assistência Técnica</h2>
            <p className="text-muted-foreground leading-relaxed">{post.whenToSeek}</p>
          </section>

          <section id="custo">
            <h2 className="text-2xl font-bold mb-4">Quanto Custa {post.service} {post.model}?</h2>
            <p className="text-muted-foreground leading-relaxed">{post.costInfo}</p>
          </section>

          <section id="atendimento">
            <h2 className="text-2xl font-bold mb-4">Atendimento em Salvador – Boca do Rio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Reparo Avançado está localizada na {BUSINESS_ADDRESS}. Atendemos clientes de toda Salvador, com destaque para os bairros:
            </p>
            <div className="flex flex-wrap gap-2">
              {BAIRROS.map((bairro) => (
                <span key={bairro} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {bairro}
                </span>
              ))}
            </div>
          </section>
        </article>

        {/* CTA Banner Bottom */}
        <div className="mt-12 bg-card rounded-2xl border border-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Orçamento <span className="text-gradient">Gratuito</span> em 5 Minutos pelo WhatsApp
          </h2>
          <p className="text-muted-foreground mb-6">
            Fale agora com nosso especialista e resolva o problema do seu {post.model}.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-lg text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp"
          >
            <MessageCircle className="w-6 h-6" />
            QUERO MEU ORÇAMENTO AGORA
          </a>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Serviços Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rp) => rp && (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-all"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {rp.service}
                  </span>
                  <h3 className="text-sm font-bold mt-1">{rp.h1}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
};

export default BlogPost;
