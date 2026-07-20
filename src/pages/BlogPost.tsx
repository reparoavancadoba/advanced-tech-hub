import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, ChevronRight, Clock, Sparkles, AlertTriangle, Info } from "lucide-react";
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
    // Redirecionamento client-side de fallback para rotas legadas em massa de modelos
    const legacyPatterns = [
      { pattern: /^(?:troca-de-tela|troca-tela)-/, target: "/troca-de-tela" },
      { pattern: /^troca-de-bateria-/, target: "/troca-de-bateria" },
      { pattern: /^reparo-de-placa-/, target: "/reparo-em-placa" },
      { pattern: /^(?:conector-de-carga|aparelho-nao-carrega|celular-nao-carrega)-/, target: "/celular-nao-carrega" },
      { pattern: /^(?:aparelho-nao-liga|celular-nao-liga)-/, target: "/celular-nao-liga" },
      { pattern: /^(?:desoxidacao|celular-caiu-na-agua)-/, target: "/celular-caiu-na-agua" }
    ];
    
    const matched = legacyPatterns.find(p => p.pattern.test(slug || ""));
    if (matched) {
      return <Navigate to={matched.target} replace />;
    }

    return (
      <SiteLayout>
        <div className="min-h-[60vh] flex items-center justify-center bg-[#FFFFFF] text-[#111827]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline font-semibold">Voltar ao blog</Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  // Calculate word count and reading time dynamically
  const getWordCount = () => {
    let text = `${post.h1} ${post.description} ${post.solution} ${post.whenToSeek} ${post.costInfo}`;
    if (post.sections) {
      post.sections.forEach(s => {
        text += ` ${s.title} ${s.content}`;
        s.subsections?.forEach(sub => {
          text += ` ${sub.title} ${sub.content}`;
        });
      });
    }
    return text.split(/\s+/).filter(Boolean).length;
  };

  const wordCount = getWordCount();
  const readingTime = Math.ceil(wordCount / 200);

  const waLink = `https://wa.me/5571991981437?text=${encodeURIComponent(`Olá, vi o post sobre ${post.service} ${post.model} e preciso de ajuda`)}`;

  const relatedPosts = post.relatedSlugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 4);

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.h1,
        description: post.metaDescription,
        datePublished: post.datePublished || "2026-06-01",
        dateModified: post.dateModified || "2026-06-05",
        author: {
          "@type": "Person",
          name: post.author || "Paulo Lopes",
          jobTitle: "Técnico Especialista em Hardware",
          worksFor: {
            "@type": "Organization",
            name: "Reparo Avançado"
          }
        },
        publisher: {
          "@type": "Organization",
          "name": "Reparo Avançado",
          url: "https://site.reparoavancado.com.br",
          logo: {
            "@type": "ImageObject",
            url: "https://site.reparoavancado.com.br/favicon.png"
          }
        },
      },
    ],
  };

  // Parser helper to render post content and handle [DICA], [ATENCAO], and [IMPORTANTE] callout tags
  const parseContent = (text: string) => {
    if (!text) return null;
    const regex = /\[(DICA|ATENCAO|IMPORTANTE)\]([\s\S]*?)\[\/\1\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const startIndex = match.index;
      if (startIndex > lastIndex) {
        parts.push({ type: "text", content: text.substring(lastIndex, startIndex) });
      }
      parts.push({ type: match[1], content: match[2].trim() });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.substring(lastIndex) });
    }

    if (parts.length === 0) {
      parts.push({ type: "text", content: text });
    }

    return parts.map((part, index) => {
      if (part.type === "text") {
        return part.content.split(/\n\n+/).map((para, pIdx) => {
          if (!para.trim()) return null;
          // Render bullet list if paragraph starts with "- " or "* "
          if (para.trim().startsWith("- ") || para.trim().startsWith("* ")) {
            const items = para.split(/\n[-*]\s+/).map(i => i.replace(/^[-*]\s+/, "").trim()).filter(Boolean);
            return (
              <ul key={`${index}-${pIdx}`} className="list-disc pl-6 space-y-2 text-muted-foreground text-[16px] md:text-[17px] mb-4">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={`${index}-${pIdx}`} className="text-foreground leading-relaxed mb-4 text-[16px] md:text-[17px] font-normal">{para.trim()}</p>;
        });
      }

      if (part.type === "DICA") {
        return (
          <div key={index} className="bg-[#F0F7FF] border-l-4 border-[#3B82F6] p-5 rounded-r-xl my-6 flex items-start gap-3.5 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1E40AF] block text-sm font-bold uppercase tracking-wider mb-1">Dica da Reparo Avançado</strong>
              <p className="text-[#1E3A8A] text-sm leading-relaxed">{part.content}</p>
            </div>
          </div>
        );
      }

      if (part.type === "ATENCAO") {
        return (
          <div key={index} className="bg-[#FFFBEB] border-l-4 border-[#F59E0B] p-5 rounded-r-xl my-6 flex items-start gap-3.5 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#82500C] block text-sm font-bold uppercase tracking-wider mb-1">Atenção</strong>
              <p className="text-[#78350F] text-sm leading-relaxed">{part.content}</p>
            </div>
          </div>
        );
      }

      if (part.type === "IMPORTANTE") {
        return (
          <div key={index} className="bg-[#FFF1F2] border-l-4 border-[#F43F5E] p-5 rounded-r-xl my-6 flex items-start gap-3.5 shadow-sm">
            <Info className="w-5 h-5 text-[#F43F5E] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#9F1239] block text-sm font-bold uppercase tracking-wider mb-1">Importante</strong>
              <p className="text-[#881337] text-sm leading-relaxed">{part.content}</p>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  const toc = [
    { id: "problema", label: "O Problema" },
    { id: "causas", label: "Causas Comuns" },
    { id: "solucao", label: "Solução Técnica" },
    { id: "quando", label: "Quando Procurar a Reparo Avançado" },
    { id: "custo", label: "Quanto Custa" },
    { id: "atendimento", label: "Atendimento em Salvador" },
  ];

  const canonicalUrl = `https://site.reparoavancado.com.br/blog/${post.slug}`;

  return (
    <SiteLayout>
      <Helmet>
        <title>{post.title} | Avaliação Grátis</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Main Container - Dark Theme */}
      <div className="bg-background text-foreground min-h-screen w-full transition-colors duration-300">
        <div className="container mx-auto px-4 py-12 max-w-[800px]">
          
          {/* Breadcrumbs styled for Dark Theme */}
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <Link to={`/blog?cat=${post.category}`} className="hover:text-foreground transition-colors">
              {categoryLabels[post.category]}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-foreground font-semibold">{post.service}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight leading-tight">
            {post.h1}
          </h1>

          {/* Visual Metadata Block */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-8 border-b border-border pb-4">
            <div className="flex items-center gap-1">
              <span>Por:</span>
              <span className="font-bold text-foreground">{post.author || "Paulo Lopes"}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-1">
              <span>Publicado:</span>
              <span className="font-semibold text-muted-foreground">{post.datePublished || "01/06/2026"}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-1">
              <span>Atualizado:</span>
              <span className="font-semibold text-muted-foreground">{post.dateModified || "05/06/2026"}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block" />
            <div className="flex items-center gap-1 text-primary font-semibold">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>Leitura: {readingTime} min</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 font-medium">
            {post.description}
          </p>

          {/* AI / GEO TL;DR Box (Direto ao Ponto) */}
          {post.tldr && (
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8 flex items-start gap-4 shadow-sm">
              <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <strong className="text-primary block text-sm font-black uppercase tracking-wider mb-2">Direto ao Ponto (Resumo Rápido)</strong>
                <p className="text-foreground/90 font-medium leading-relaxed">{post.tldr}</p>
              </div>
            </div>
          )}

          <div className="mb-10">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3.5 rounded-lg font-bold hover:brightness-110 transition-all shadow-md animate-pulse-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              ORÇAMENTO GRATUITO AGORA
            </a>
          </div>

          {/* Table of Contents styled for Dark Theme */}
          <div className="bg-card border border-border rounded-xl p-6 mb-10 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Índice do Artigo</h2>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm font-semibold text-primary hover:text-primary/80 hover:underline transition-all">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body */}
          <article className="space-y-10 text-gray-800">
            <section id="problema">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                O Problema: {post.service} {post.model}
              </h2>
              <ul className="space-y-2.5">
                {post.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-[16px] md:text-[17px]">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            <section id="causas">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Causas Comuns
              </h2>
              <ul className="space-y-2.5">
                {post.causes.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-[16px] md:text-[17px]">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Editorial sections (H2 + H3 structure) */}
            {post.sections && post.sections.length > 0 && post.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <div className="mb-4">{parseContent(section.content)}</div>
                {section.subsections?.map((sub, i) => (
                  <div key={i} className="ml-4 mb-4 mt-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{sub.title}</h3>
                    <div>{parseContent(sub.content)}</div>
                  </div>
                ))}
              </section>
            ))}

            {/* Mid-article CTA */}
            <div className="bg-[#F0F7FF] border border-[#BFDBFE] rounded-xl p-6 text-center my-8 shadow-sm">
              <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                Fale agora com um profissional qualificado da Reparo Avançado
              </p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-sm">
                <MessageCircle className="w-5 h-5" />
                WhatsApp (71) 99198-1437
              </a>
            </div>

            <section id="solucao">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Solução Técnica da Reparo Avançado
              </h2>
              <div>{parseContent(post.solution)}</div>
            </section>

            <section id="quando">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Quando Procurar a Reparo Avançado
              </h2>
              <div>{parseContent(post.whenToSeek)}</div>
            </section>

            <section id="custo">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Quanto Custa {post.service} {post.model}?
              </h2>
              <div>{parseContent(post.costInfo)}</div>
            </section>

            {/* FAQ Section */}
            {post.faq && post.faq.length > 0 && (
              <section id="faq">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Perguntas Frequentes
                </h2>
                <div className="space-y-4">
                  {post.faq.map((item, i) => (
                    <div key={i} className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-5 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">{item.question}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="atendimento">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Atendimento em Salvador – Boca do Rio
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-[16px] md:text-[17px]">
                A Reparo Avançado está localizada na {BUSINESS_ADDRESS}. Atendemos clientes de toda Salvador, com destaque para os bairros:
              </p>
              <div className="flex flex-wrap gap-2">
                {BAIRROS.map((bairro) => (
                  <span key={bairro} className="px-3 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-bold border border-blue-100">
                    {bairro}
                  </span>
                ))}
              </div>
            </section>
          </article>

          {/* CTA Banner Bottom */}
          <div className="mt-12 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-gray-950 mb-3">
              Orçamento <span className="text-gradient">Gratuito</span> em 5 Minutos pelo WhatsApp
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Fale agora com nosso profissional e resolva o problema do seu {post.model}.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-lg text-lg font-bold hover:brightness-110 transition-all animate-pulse-whatsapp shadow-md"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO MEU ORÇAMENTO AGORA
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Serviços Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rp) => rp && (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-5 hover:border-primary/50 hover:bg-[#F3F4F6] transition-all shadow-sm group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      {rp.service}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary mt-1 transition-colors">{rp.h1}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* STICKY BOTTOM BAR PARA MOBILE (CRO - ALTA CONVERSÃO) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-whatsapp text-white px-4 py-3.5 rounded-xl font-bold shadow-lg animate-pulse-whatsapp"
        >
          <MessageCircle className="w-5 h-5" />
          Falar com Técnico Agora
        </a>
      </div>
    </SiteLayout>
  );
};

export default BlogPost;
