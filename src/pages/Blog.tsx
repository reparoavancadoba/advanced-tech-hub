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
      <div className="bg-white min-h-screen text-slate-900">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
            Blog <span className="text-gradient">Reparo Avançado</span>
          </h1>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Guias completos de conserto para todos os modelos. Encontre a solução para o seu problema e solicite um orçamento gratuito.
          </p>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar modelo, serviço..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory("all"); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
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
                    : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-6">{filtered.length} artigos encontrados</p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-2">
                {categoryLabels[post.category]} • {post.service}
              </span>
              <h2 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.h1}
              </h2>
              <p className="text-xs text-slate-600 mb-4 flex-1 line-clamp-2">
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
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                Anterior
              </button>
            )}
            <span className="px-4 py-2 text-sm text-slate-500">
              Página {page} de {totalPages}
            </span>
            {page < totalPages && (
              <button
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                Próxima
              </button>
            )}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold mb-3 text-slate-900">
            Orçamento <span className="text-gradient">Gratuito</span> em 5 Minutos
          </h2>
          <p className="text-slate-600 mb-6">
            Não encontrou seu modelo? Fale diretamente com nosso técnico pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5571991981437?text=Olá! Vi o blog e preciso de ajuda com meu aparelho."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all animate-pulse-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR COM TÉCNICO
          </a>
        </div>
        </div>
      </div>

      {/* STICKY BOTTOM BAR PARA MOBILE (CRO - ALTA CONVERSÃO) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a
          href="https://wa.me/5571991981437?text=Olá! Vi o blog e preciso de ajuda com meu aparelho."
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
