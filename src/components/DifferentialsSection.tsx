import { Microscope, Eye, MapPin, Zap } from "lucide-react";

const items = [
  { icon: Microscope, title: "Laboratório Próprio", desc: "Equipamentos profissionais de última geração para diagnóstico e reparo." },
  { icon: Eye, title: "Transparência Total", desc: "Você acompanha todo o processo de reparo do seu aparelho." },
  { icon: MapPin, title: "Atendimento na Boca do Rio", desc: "Localização estratégica e fácil acesso para toda Salvador." },
  { icon: Zap, title: "Rapidez (Serviços em 40min)", desc: "A maioria dos reparos é finalizada enquanto você espera." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Por que a <span className="text-gradient">Reparo Avançado</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          O que nos torna a melhor escolha em Salvador
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
