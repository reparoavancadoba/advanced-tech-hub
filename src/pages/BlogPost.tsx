import { useParams, Link, Navigate } from "react-router-dom";
import { MessageCircle, ChevronRight, Sparkles, AlertTriangle, Info, ArrowRight, Clock } from "lucide-react";
import { getPostBySlug, allPosts, categoryLabels } from "@/data/blogData";
import { getBrandDisplayName } from "@/data/businessInfo";
import SiteLayout from "@/components/SiteLayout";
import AuthorBlock from "@/components/blog/AuthorBlock";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
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
        <div className="min-h-[60vh] flex items-center justify-center bg-zinc-950 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog" className="text-[#0066FF] hover:underline font-semibold">Voltar ao blog</Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

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

  const topic = post.title || `${post.service} ${post.model}`;
  const customMessage = `Olá! Vi o artigo sobre ${topic} no blog de vocês e gostaria de um orçamento.`;
  const waLink = `https://wa.me/5571991981437?text=${encodeURIComponent(customMessage)}`;

  const relatedPosts = (post.relatedSlugs || [])
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 3);

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
          if (para.trim().startsWith("- ") || para.trim().startsWith("* ")) {
            const items = para.split(/\n[-*]\s+/).map(i => i.replace(/^[-*]\s+/, "").trim()).filter(Boolean);
            return (
              <ul key={`${index}-${pIdx}`} className="list-disc pl-6 space-y-2 text-zinc-800 text-lg mb-4">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={`${index}-${pIdx}`} className="text-zinc-800 leading-relaxed mb-4 text-lg font-normal">{para.trim()}</p>;
        });
      }

      if (part.type === "DICA") {
        return (
          <div key={index} className="bg-blue-900/10 border-l-4 border-[#0066FF] p-5 rounded-r-xl my-6 flex items-start gap-3.5 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0066FF] block text-sm font-bold uppercase tracking-wider mb-1">Dica da Reparo Avançado</strong>
              <p className="text-zinc-800 text-sm leading-relaxed">{part.content}</p>
            </div>
          </div>
        );
      }

      if (part.type === "ATENCAO") {
        return (
          <div key={index} className="bg-amber-900/10 border-l-4 border-amber-500 p-5 rounded-r-xl my-6 flex items-start gap-3.5 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-600 block text-sm font-bold uppercase tracking-wider mb-1">Atenção</strong>
              <p className="text-zinc-800 text-sm leading-relaxed">{part.content}</p>
            </div>
          </div>
        );
      }

      if (part.type === "IMPORTANTE") {
        return (
          <div key={index} className="bg-rose-900/10 border-l-4 border-rose-500 p-5 rounded-r-xl my-6 flex items-start gap-3.5 shadow-sm">
            <Info className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-rose-600 block text-sm font-bold uppercase tracking-wider mb-1">Importante</strong>
              <p className="text-zinc-800 text-sm leading-relaxed">{part.content}</p>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  const canonicalUrl = `https://site.reparoavancado.com.br/blog/${post.slug}`;

  const serviceLinkMap: Record<string, string> = {
    "Troca de Tela": "/troca-de-tela",
    "Bateria": "/troca-de-bateria",
    "Placa": "/reparo-em-placa",
    "Água/Desoxidação": "/celular-caiu-na-agua",
    "Não Liga": "/celular-nao-liga",
    "Não Carrega": "/celular-nao-carrega"
  };
  const matchedServiceUrl = serviceLinkMap[post.category] || "/servicos";

  return (
    <SiteLayout>
      <Helmet>
        <title>{post.title} | Avaliação Grátis</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="bg-zinc-950 text-white min-h-screen w-full transition-colors duration-300 font-sans">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12 max-w-[1200px]">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-xs text-zinc-400 mb-6 flex-wrap font-medium">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <Link to={`/blog?cat=${post.category}`} className="hover:text-white transition-colors">
              {categoryLabels[post.category]}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-white font-semibold">{post.service}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Main Column (70%) */}
            <div className="w-full lg:w-[70%]">
              
              {/* White Card Wrapper for Article */}
              <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl mb-12 border border-zinc-200">
                
                {/* Header inside White Card */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                      {post.brand}
                    </span>
                    <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                      {post.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-black text-zinc-900 mb-8 tracking-tight leading-[1.2]">
                    {post.h1}
                  </h1>
                  
                  <p className="text-zinc-600 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                    {post.description || post.metaDescription}
                  </p>
                  
                  <AuthorBlock 
                    authorName={post.author} 
                    datePublished={post.datePublished} 
                    dateModified={post.dateModified} 
                    readingTime={readingTime} 
                  />
                </div>

                {/* Article Body */}
                <article className="space-y-20 text-zinc-800 mt-16">
                  <section id="sintomas">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-8 pb-4 border-b border-zinc-100">
                      Sintomas: O Problema com {post.service} {post.model}
                    </h2>
                    <ul className="space-y-5">
                      {post.problems.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-800 text-lg">
                          <span className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section id="causas">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-8 pb-4 border-b border-zinc-100">
                      Causas Possíveis
                    </h2>
                    <ul className="space-y-5">
                      {post.causes.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-800 text-lg">
                          <span className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Mid-article Conversion CTA */}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center my-12 shadow-xl transform -mx-4 md:mx-0">
                    <p className="font-bold text-white mb-4 text-lg md:text-xl px-4">
                      Reconhece esse problema no seu aparelho? Fale com a gente agora.
                    </p>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1DA851] transition-all shadow-md w-[90%] sm:w-auto">
                      <MessageCircle className="w-5 h-5" />
                      Falar com Técnico (WhatsApp)
                    </a>
                  </div>

                  {/* Mobile Stacked Related Articles (Visível apenas em telas menores) */}
                  {relatedPosts.length > 0 && (
                    <div className="block lg:hidden my-12 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-sm">
                      <h2 className="text-xl font-bold text-zinc-900 mb-6 text-center">Você também pode gostar:</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {relatedPosts.map((rp) => rp && (
                          <Link key={rp.slug} to={`/blog/${rp.slug}`} className="bg-white border border-zinc-200 p-4 rounded-xl flex flex-col gap-2 hover:border-[#0066FF] transition-all">
                            <span className="text-xs font-bold text-[#0066FF] uppercase">{rp.category}</span>
                            <h3 className="text-sm font-bold text-zinc-900 leading-snug">{rp.h1}</h3>
                            <span className="text-xs text-zinc-400 mt-auto pt-2">{rp.datePublished || "2026"}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <section id="solucao">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-8 pb-4 border-b border-zinc-100">
                      O Que Fazer (Solução Técnica)
                    </h2>
                    <div>{parseContent(post.solution)}</div>
                  </section>

                  <section id="quando">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-8 pb-4 border-b border-zinc-100">
                      Quando Procurar Assistência Profissional
                    </h2>
                    <div>{parseContent(post.whenToSeek)}</div>
                  </section>

                  {post.sections && post.sections.length > 0 && post.sections.map((section) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-8 pb-4 border-b border-zinc-100">
                        {section.title}
                      </h2>
                      <div className="mb-4">{parseContent(section.content)}</div>
                      {section.subsections?.map((sub, i) => (
                        <div key={i} className="ml-4 mb-4 mt-6">
                          <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">{sub.title}</h3>
                          <div>{parseContent(sub.content)}</div>
                        </div>
                      ))}
                    </section>
                  ))}

                  <section id="custo">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-8 pb-4 border-b border-zinc-100">
                      Quanto Custa {post.service} {post.model}?
                    </h2>
                    <div>{parseContent(post.costInfo)}</div>
                  </section>
                  
                  {/* Service Page Link */}
                  <div className="mt-8 mb-4">
                    <Link to={matchedServiceUrl} className="inline-flex items-center gap-2 text-[#0066FF] font-bold hover:underline text-lg">
                      Saiba mais sobre {getBrandDisplayName(post.category) || "nossos serviços"} <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </article>
              </div>

              {/* FAQ Accordion Section (Abaixo do White Card, mas dentro da coluna 70%) */}
              {post.faq && post.faq.length > 0 && (
                <section id="faq" className="pt-6 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-zinc-800">
                    Perguntas Frequentes
                  </h2>
                  <div className="space-y-4">
                    {post.faq.map((item, i) => (
                      <details key={i} className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-5 text-white hover:bg-zinc-800/50 transition-colors">
                          <span>{item.question}</span>
                          <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                          </span>
                        </summary>
                        <p className="text-zinc-400 p-5 pt-0 mt-2 leading-relaxed">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Column (30%) - Visível apenas no Desktop */}
            <aside className="hidden lg:block w-[30%] sticky top-24">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 pb-2 border-b border-zinc-800">
                  Você também pode gostar:
                </h2>
                <div className="flex flex-col gap-5">
                  {relatedPosts.map((rp) => rp && (
                    <Link 
                      key={rp.slug} 
                      to={`/blog/${rp.slug}`} 
                      className="group flex gap-4 items-start"
                    >
                      {/* Thumbnail Placeholder */}
                      <div className="w-16 h-16 shrink-0 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-[#0066FF] transition-colors overflow-hidden">
                        <span className="text-zinc-500 font-bold text-xs uppercase">{rp.brand}</span>
                      </div>
                      
                      {/* Text */}
                      <div className="flex flex-col">
                        <h3 className="text-sm font-bold text-zinc-200 group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                          {rp.h1}
                        </h3>
                        <span className="text-xs text-zinc-500 mt-2 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {rp.datePublished || "2026"}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
            
          </div>

          {/* Final CTA Banner */}
          <div className="mt-16 bg-[#0066FF] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto pra resolver?
            </h2>
            <p className="text-blue-100 mb-8 text-base md:text-lg max-w-2xl mx-auto">
              Fale agora com nosso profissional e resolva o problema do seu {post.model}. Orçamento sem compromisso.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1DA851] transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 p-4 z-50 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.5)]">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3.5 rounded-xl font-bold shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Falar com Técnico Agora
        </a>
      </div>
    </SiteLayout>
  );
};

export default BlogPost;
