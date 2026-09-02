import { Link } from "react-router-dom";
import { Search, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";

const HomeSeoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* VANTAGENS / DIFERENCIAIS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Diagnóstico Detalhado</h3>
            <p className="text-sm text-muted-foreground">Avaliação completa de hardware e placa, sem achismos.</p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <DollarSign className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Orçamento Transparente</h3>
            <p className="text-sm text-muted-foreground">Você aprova o valor final antes de qualquer serviço ser feito.</p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Garantia de 90 Dias</h3>
            <p className="text-sm text-muted-foreground">Trabalhamos com peças de altíssima qualidade e oferecemos garantia.</p>
          </div>
        </div>

        {/* LINK PARA O GUIA COMPLETO */}
        <div className="text-center">
          <Link
            to="/guia-assistencia-tecnica-salvador"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg bg-primary/5 px-6 py-3 rounded-full hover:bg-primary/10 transition-colors"
          >
            Leia nosso guia completo de assistência técnica <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeSeoSection;
