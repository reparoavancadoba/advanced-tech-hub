import { Search, Zap, Eye, ShieldCheck, MapPin } from "lucide-react";

const differentials = [
  {
    icon: Search,
    title: "Avaliação Inicial",
    desc: "Receba informações sobre seu aparelho de forma clara e objetiva."
  },
  {
    icon: Zap,
    title: "Atendimento Ágil",
    desc: "Processo simples e direto."
  },
  {
    icon: Eye,
    title: "Atendimento Transparente",
    desc: "Informações claras em todas as etapas."
  },
  {
    icon: ShieldCheck,
    title: "Garantia de Serviço",
    desc: "Mais tranquilidade para nossos clientes."
  },
  {
    icon: MapPin,
    title: "Empresa Local",
    desc: "Loja física em Salvador."
  }
];

const VersatilDifferentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-zinc-950 text-white border-b border-zinc-900 relative">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-zinc-800/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <div className="h-0.5 w-12 bg-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            NOSSOS DIFERENCIAIS
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            // Handle last item spanning columns on desktop if needed
            const cardSpan = idx === 4 ? "sm:col-span-2 lg:col-span-1" : "";
            
            return (
              <div
                key={item.title}
                className={`group bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 hover:border-zinc-800 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col items-start ${cardSpan}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-850 flex items-center justify-center mb-6 group-hover:border-emerald-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VersatilDifferentials;
