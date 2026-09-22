import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SiteLayout from "@/components/SiteLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <Helmet>
        <title>Página não encontrada | Reparo Avançado</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex flex-col min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Ops! A página que você tentou acessar não existe ou foi movida.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Voltar ao Início
            </Link>
            <Link to="/servicos" className="bg-secondary text-secondary-foreground border border-border px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default NotFound;
