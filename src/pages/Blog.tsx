import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, MessageCircle } from "lucide-react";
import { allPosts, categoryLabels, type Category } from "@/data/blogData";
import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";

const POSTS_PER_PAGE = 24;
const categories: Category[] = ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks", "conserto"];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let posts = allPosts;
    if (activeCategory !== "all") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.service.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [search, activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <SiteLayout>
      <Helmet>
        <title>Blog | conserto Avançado - Guias de conserto de Celulares em Salvador</title>
        <meta name="description" content="Guias completos de conserto para iPhone, Samsung, Xiaomi e mais. Tire dúvidas e solicite orçamento gratuito com a conserto Avançado, em Salvador - BA." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/blog" />
      </Helmet>
      <div className="bg-gradient-to-b from-primary/10 via-background to-background pt-20 pb-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Blog da <span className="text-gradient">Reparo Avançado</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Guias práticos, diagnósticos e soluções reais para os problemas mais comuns do seu smartphone. Tudo escrito por especialistas em microeletrônica.
          </p>

          {/* Search Bar - Centralized and Modern */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-card rounded-2xl border border-border shadow-lg p-2">
              <Search className="w-6 h-6 text-muted-foreground ml-4" />
              <input
                type="text"
                placeholder="Busque por 'tela quebrada', 'bateria', 'iPhone 13'..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full bg-transparent border-none text-foreground px-4 py-3 focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          <button
            onClick={() => { setActiveCategory("all"); setPage(1); }}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Artigos Recentes</h2>
          <p className="text-sm text-muted-foreground font-medium">{filtered.length} encontrados</p>
        </div>

        {/* Posts Grid - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="p-8 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Search className="w-24 h-24" />
                </div>
                
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
                  {categoryLabels[post.category]}
                </span>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.h1}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-8 flex-1 line-clamp-3 leading-relaxed">
                  {post.metaDescription}
                </p>
                
                <div className="flex items-center text-sm font-bold text-primary mt-auto">
                  Ler artigo completo 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            {page > 1 && (
              <button
                onClick={() => setPage(page - 1)}
                className="px-6 py-2.5 rounded-full bg-card border border-border text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Anterior
              </button>
            )}
            <span className="text-sm font-medium text-muted-foreground">
              Página <strong className="text-foreground">{page}</strong> de {totalPages}
            </span>
            {page < totalPages && (
              <button
                onClick={() => setPage(page + 1)}
                className="px-6 py-2.5 rounded-full bg-card border border-border text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Próxima
              </button>
            )}
          </div>
        )}

        {/* CTA Banner Moderno */}
        <div className="mt-20 relative overflow-hidden bg-zinc-900 rounded-3xl border border-zinc-800 p-10 md:p-16 text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/20 to-transparent opacity-50 blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Precisa de ajuda com seu aparelho?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-lg">
              Fale diretamente com nossos especialistas. Orçamento rápido, gratuito e sem compromisso pelo WhatsApp.
            </p>
            <a
              href="https://wa.me/5571991981437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-whatsapp/90 hover:scale-105 transition-all shadow-lg shadow-whatsapp/20"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR PARA MOBILE (CRO - ALTA CONVERSÃO) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href="https://wa.me/5571991981437"
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

export default Blog;
