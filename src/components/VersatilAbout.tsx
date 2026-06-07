import storeFacade from "@/assets/fachada-loja.png";

const VersatilAbout = () => {
  return (
    <section id="quem-somos" className="py-24 bg-zinc-950 text-white border-b border-zinc-900 relative">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-zinc-800/10 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* About text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="h-0.5 w-12 bg-emerald-500 mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              QUEM SOMOS
            </h2>
            <div className="text-zinc-400 space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                A Reparo Avançado atua em Salvador oferecendo atendimento presencial para clientes que desejam informações, avaliação e orçamento para seus aparelhos.
              </p>
              <p>
                Ao longo dos anos construímos uma relação baseada em confiança, transparência e atendimento próximo.
              </p>
            </div>
          </div>

          {/* About image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group max-w-md w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900">
              <img
                src={storeFacade}
                alt="Fachada institucional da loja Reparo Avançado"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersatilAbout;
