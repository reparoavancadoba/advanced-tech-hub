import { MessageCircle, PackageOpen } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const NewLpDelivery = () => {
  return (
    <section className="relative w-full bg-[#1d4ed8] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Resolva ainda hoje!
          </h2>
          <p className="text-lg md:text-xl font-medium mb-4 max-w-md text-blue-50 leading-relaxed">
            Oferecemos mais comodidade aos nossos clientes retirando e levando seu aparelho para você através de um motoboy capacitado.
          </p>
          <p className="text-sm italic text-blue-200 mb-10 font-light">
            *Consulte condições de taxa e deslocamento.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#10b981]/30 hover:scale-105 active:scale-95 text-lg w-full sm:w-auto min-h-[56px]"
          >
            Faça Aqui Seu Orçamento <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Right Side: Mockup / Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="bg-slate-100 rounded-[3rem] w-full max-w-[400px] aspect-[4/5] overflow-hidden flex items-center justify-center relative shadow-2xl shadow-black/20 border-8 border-white/10 group">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-transparent"></div>
             <PackageOpen className="w-40 h-40 text-slate-400 drop-shadow-lg relative z-10 group-hover:-translate-y-4 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLpDelivery;
