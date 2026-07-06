import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Servicos from "./pages/Servicos.tsx";
import NotFound from "./pages/NotFound.tsx";
import Atendimento from "./pages/Atendimento.tsx";
import LocaisDeAtendimento from "./pages/LocaisDeAtendimento.tsx";
import ServicoConsolidado from "./pages/ServicoConsolidado.tsx";
import LocalConsolidado from "./pages/LocalConsolidado.tsx";
import ProgrammaticSEO from "./pages/ProgrammaticSEO.tsx";
import Orcamento from "./pages/Orcamento.tsx";
import Contato from "./pages/Contato.tsx";
import Localizacao from "./pages/Localizacao.tsx";
import WhatsAppRedirect from "./pages/WhatsAppRedirect.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/locais-de-atendimento" element={<LocaisDeAtendimento />} />

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

            {/* Novas Rotas de Bairros Estratégicos */}
            <Route path="/assistencia-tecnica-salvador" element={<LocalConsolidado slug="salvador" />} />
            <Route path="/assistencia-tecnica-boca-do-rio" element={<LocalConsolidado slug="boca-do-rio" />} />
            <Route path="/assistencia-tecnica-pituba" element={<LocalConsolidado slug="pituba" />} />
            <Route path="/assistencia-tecnica-imbui" element={<LocalConsolidado slug="imbui" />} />
            <Route path="/assistencia-tecnica-brotas" element={<LocalConsolidado slug="brotas" />} />

            {/* ROTA DE SEO PROGRAMÁTICO: GERADOR DE BAIRROS (O "Mata Leão" na Concorrência) */}
            <Route path="/conserto/:servicoSlug/em/:bairroSlug" element={<ProgrammaticSEO />} />

            {/* Rota legado mantida para transição segura */}
            <Route path="/atendimento/:bairro/:servico" element={<Atendimento />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

