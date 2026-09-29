import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteLayout from "../components/SiteLayout";
import { informacoesPages } from "../data/informacoesData";
import { businessInfo } from "../config/business";
import { ArrowRight, MessageCircle } from "lucide-react";

const InformacaoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = informacoesPages.find((p) => p.slug === slug);

  if (!page) {
    return <Navigate to="/informacoes" replace />;
  }

  const parseContent = (text: string) => {
    let contentHtml = text;
    contentHtml = contentHtml.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-[#0066FF]">$1</h2>');
    contentHtml = contentHtml.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    
    contentHtml = contentHtml.replace(/(?:^- .*\n?)+/gim, (match) => {
        const items = match.trim().split('\n').map(line => `<li class="mb-2 flex items-start gap-2"><span class="mt-1 w-2 h-2 rounded-full bg-[#0066FF] flex-shrink-0"></span><span>${line.replace(/^- /, '')}</span></li>`).join('');
        return `<ul class="my-4">${items}</ul>`;
    });
    
    contentHtml = contentHtml.replace(/^(?!<(?:h2|ul|li)>|$).+/gim, '<p class="mb-4 leading-relaxed">$&</p>');
    return contentHtml;
  };

  const waUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(page.whatsapp)}`;

  return (
    <SiteLayout>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.meta} />
      </Helmet>

      <div className="bg-[#001D4A] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{page.h1}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8 text-zinc-700 text-lg">
          <div dangerouslySetInnerHTML={{ __html: parseContent(page.content) }} />

          <div className="mt-12 p-8 bg-zinc-50 rounded-2xl border border-zinc-100 flex flex-col items-center text-center gap-6">
            <h3 className="text-2xl font-bold text-zinc-900">Precisa de ajuda agora?</h3>
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1DA851] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between mt-12 pt-8 border-t border-zinc-200">
            <Link to={page.serviceSlug} className="text-[#0066FF] hover:underline flex items-center gap-2 font-medium">
              Ver página de serviço <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to={page.localSlug} className="text-[#0066FF] hover:underline flex items-center gap-2 font-medium">
              Ver unidade local <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default InformacaoPage;
