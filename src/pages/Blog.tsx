import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, MessageCircle } from "lucide-react";
import { allPosts, categoryLabels, type Category } from "@/data/blogData";
import WhatsAppFab from "@/components/WhatsAppFab";

const POSTS_PER_PAGE = 24;
const categories: Category[] = ["iphone", "samsung", "xiaomi", "realme", "motorola", "notebooks"];

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gradient">
            Reparo Avançado
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Blog <span className="text-gradient">Reparo Avançado</span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Guias completos de reparo para todos os modelos. Encontre a solução para o seu problema e solicite um orçamento gratuito.
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar modelo, serviço..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory("all"); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} artigos encontrados</p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-xl border border-border p-5 hover:border-primary/50 hover:glow-blue transition-all duration-300 flex flex-col"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-2">
                {categoryLabels[post.category]} · {post.service}
              </span>
              <h2 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.h1}
              </h2>
              <p className="text-xs text-muted-foreground mb-4 flex-1 line-clamp-2">
                {post.metaDescription}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Ler mais <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {page > 1 && (
              <button
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground"
              >
                Anterior
              </button>
            )}
            <span className="px-4 py-2 text-sm text-muted-foreground">
              Página {page} de {totalPages}
            </span>
            {page < totalPages && (
              <button
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground"
              >
                Próxima
              </button>
            )}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-card rounded-2xl border border-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Orçamento <span className="text-gradient">Gratuito</span> em 5 Minutos
          </h2>
          <p className="text-muted-foreground mb-6">
            Não encontrou seu modelo? Fale diretamente com nosso especialista pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5571991981437?text=Olá! Vi o blog e preciso de ajuda com meu aparelho."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all animate-pulse-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </main>

      <WhatsAppFab />
    </div>
  );
};

export default Blog;
