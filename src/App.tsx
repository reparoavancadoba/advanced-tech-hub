import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";

// LAZY LOADED ROUTES
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Servicos = lazy(() => import("./pages/Servicos"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Atendimento = lazy(() => import("./pages/Atendimento"));
const LocaisDeAtendimento = lazy(() => import("./pages/LocaisDeAtendimento"));
const ServicoConsolidado = lazy(() => import("./pages/ServicoConsolidado"));
const LocalConsolidado = lazy(() => import("./pages/LocalConsolidado"));
const ProgrammaticSEO = lazy(() => import("./pages/ProgrammaticSEO"));
const Orcamento = lazy(() => import("./pages/Orcamento"));
const Contato = lazy(() => import("./pages/Contato"));
const Localizacao = lazy(() => import("./pages/Localizacao"));
const GuiaAssistencia = lazy(() => import("./pages/GuiaAssistencia"));
const WhatsAppRedirect = lazy(() => import("./pages/WhatsAppRedirect"));

const queryClient = new QueryClient();

// Loader for suspense
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0f18] text-white">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-[#3b82f6] border-t-transparent rounded-full animate-spin"></div>
      <span className="mt-4 text-sm text-slate-400">Carregando...</span>
    </div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/locais-de-atendimento" element={<LocaisDeAtendimento />} />

              <Route path="/guia-assistencia-tecnica-salvador" element={<GuiaAssistencia />} />
              {/* Páginas Institucionais (Google Ads Sitelinks) */}
              <Route path="/orcamento" element={<Orcamento />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/localizacao" element={<Localizacao />} />
              <Route path="/whatsapp" element={<WhatsAppRedirect />} />
              
              {/* Novas Rotas de Serviços Consolidados */}
              <Route path="/troca-de-tela" element={<ServicoConsolidado slug="troca-de-tela" />} />
              <Route path="/troca-de-bateria" element={<ServicoConsolidado slug="troca-de-bateria" />} />
              <Route path="/reparo-em-placa" element={<ServicoConsolidado slug="reparo-em-placa" />} />
              <Route path="/conserto-de-celular" element={<ServicoConsolidado slug="conserto-de-celular" />} />
              <Route path="/celular-nao-carrega" element={<ServicoConsolidado slug="celular-nao-carrega" />} />
              <Route path="/celular-nao-liga" element={<ServicoConsolidado slug="celular-nao-liga" />} />
              <Route path="/celular-caiu-na-agua" element={<ServicoConsolidado slug="celular-caiu-na-agua" />} />
              <Route path="/conserto-de-tablet" element={<ServicoConsolidado slug="conserto-de-tablet" />} />
              <Route path="/conserto-de-notebook" element={<ServicoConsolidado slug="conserto-de-notebook" />} />
              <Route path="/conserto-de-iphone" element={<ServicoConsolidado slug="conserto-de-iphone" />} />

              {/* Novas Rotas de Bairros Estratégicos */}
              <Route path="/assistencia-tecnica-salvador" element={<LocalConsolidado slug="salvador" />} />
              <Route path="/assistencia-tecnica-boca-do-rio" element={<LocalConsolidado slug="boca-do-rio" />} />
              <Route path="/assistencia-tecnica-pituba" element={<LocalConsolidado slug="pituba" />} />
              <Route path="/assistencia-tecnica-imbui" element={<LocalConsolidado slug="imbui" />} />
              <Route path="/assistencia-tecnica-brotas" element={<LocalConsolidado slug="brotas" />} />
              <Route path="/assistencia-tecnica-caminho-das-arvores" element={<LocalConsolidado slug="caminho-das-arvores" />} />
              
              {/* Rotas de Macro Regiões */}
              <Route path="/assistencia-tecnica-boca-do-rio-e-orla" element={<LocalConsolidado slug="boca-do-rio-e-orla" />} />
              <Route path="/assistencia-tecnica-miolo-e-centro-financeiro" element={<LocalConsolidado slug="miolo-e-centro-financeiro" />} />
              <Route path="/assistencia-tecnica-centro-e-sul" element={<LocalConsolidado slug="centro-e-sul" />} />
              <Route path="/assistencia-tecnica-orla-norte-e-aeroporto" element={<LocalConsolidado slug="orla-norte-e-aeroporto" />} />
              <Route path="/assistencia-tecnica-cajazeiras-e-regiao" element={<LocalConsolidado slug="cajazeiras-e-regiao" />} />
              <Route path="/assistencia-tecnica-regiao-metropolitana" element={<LocalConsolidado slug="regiao-metropolitana" />} />

              {/* ROTA DE SEO PROGRAMÁTICO: GERADOR DE BAIRROS */}
              <Route path="/conserto/:servicoSlug/em/:bairroSlug" element={<ProgrammaticSEO />} />
              <Route path="/conserto/:servicoSlug/na/:bairroSlug" element={<ProgrammaticSEO />} />

              {/* Rota legado */}
              <Route path="/atendimento/:bairro/:servico" element={<Atendimento />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
