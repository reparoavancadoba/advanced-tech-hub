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
    contentHtml = contentHtml.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#0066FF] hover:underline">$1</a>');
    
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
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "${page.h1}",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Reparo Avançado",
                  "telephone": "${businessInfo.whatsapp}"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "${page.areaServed}"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Início",
                    "item": "https://site.reparoavancado.com.br/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Informações",
                    "item": "https://site.reparoavancado.com.br/informacoes"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "${page.title}",
                    "item": "https://site.reparoavancado.com.br/informacoes/${page.slug}"
                  }
                ]
              }${page.faq && page.faq.length > 0 ? `,
              {
                "@type": "FAQPage",
                "mainEntity": [${page.faq.map(f => `{
                  "@type": "Question",
                  "name": "${f.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${f.answer}"
                  }
                }`).join(',')}]
              }` : ''}
            ]
          }`}
        </script>

      </Helmet>

      <div className="bg-[#001D4A] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{page.h1}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8 text-zinc-700 text-lg">
          <div dangerouslySetInnerHTML={{ __html: parseContent(page.content) }} />

          
          {page.faq && page.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#0066FF] mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {page.faq.map((f, i) => (
                  <details key={i} className="group bg-zinc-50 border border-zinc-100 rounded-xl overflow-hidden cursor-pointer">
                    <summary className="font-bold p-5 hover:bg-zinc-100 transition-colors list-none flex justify-between items-center">
                      {f.question}
                    </summary>
                    <div className="p-5 pt-0 text-zinc-700 leading-relaxed border-t border-zinc-100">
                      {f.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
          
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
