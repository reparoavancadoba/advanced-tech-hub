import { MessageCircle } from "lucide-react";
import { HeroParticles } from "@/components/HeroParticles";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const HeroSection = () => {
  return (
    <section className="relative w-full text-white overflow-hidden bg-[#0a0f18] min-h-screen flex flex-col justify-center">
      {/* Background (keep intact) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-desktop.webp"
          srcSet="/hero-mobile.webp 800w, /hero-desktop.webp 1672w"
          sizes="(max-width: 800px) 100vw, 1672px"
          alt="Fachada Reparo Avançado"
          width={1672}
          height={941}
          fetchPriority="high"
          className="w-full h-full object-cover object-center md:object-right-top opacity-80"
        />
        <div className="absolute inset-0 bg-[#0a0f18]/80 md:bg-gradient-to-r md:from-[#0a0f18]/95 md:via-[#0a0f18]/70 md:to-[#0a0f18]/40" />
      </div>

      <div className="absolute inset-0 z-0 grid-pattern-animated opacity-40" aria-hidden />
      <div className="hero-glow absolute right-[-6rem] top-[-6rem] z-0" aria-hidden />
      <HeroParticles className="absolute inset-0 z-0 opacity-70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 md:pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="flex flex-col items-center lg:items-start gap-1.5 font-extrabold text-[40px] sm:text-5xl lg:text-[64px] tracking-tight leading-[1.1] mb-6">
            <span className="bg-[#1d4ed8] text-white px-3 py-1 lg:px-4 lg:py-2">Serviço feito com</span>
            <span className="bg-[#1d4ed8] text-white px-3 py-1 lg:px-4 lg:py-2">eficiência e rapidez!</span>
          </h1>
          <div className="mt-4 flex flex-col items-center lg:items-start gap-1.5 text-base sm:text-lg lg:text-xl font-medium tracking-tight mb-10">
            <span className="bg-[#3b82f6] text-white px-3 py-1 lg:px-4 lg:py-1.5 shadow-sm">Não deixe para amanhã o que pode ser feito ainda hoje!</span>
            <span className="bg-[#3b82f6] text-white px-3 py-1 lg:px-4 lg:py-1.5 shadow-sm max-w-full overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap">Consulte nossa programação de entregas para o mesmo dia.</span>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#10b981]/30 hover:scale-105 active:scale-95 text-lg w-full sm:w-auto min-h-[56px]"
          >
            Faça Aqui Seu Orçamento <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Right Side: Floating Cellphone */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px] sm:h-[500px]">
           <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[540px] bg-white rounded-[3rem] border-[12px] border-[#1e293b] shadow-2xl flex flex-col items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-700 hover:scale-105 group">
             {/* Notch */}
             <div className="absolute top-0 w-24 sm:w-32 h-5 sm:h-6 bg-[#1e293b] rounded-b-2xl"></div>
             
             {/* Logo Button inside */}
             <div className="bg-[#1d4ed8] rounded-[2rem] w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center p-5 shadow-xl shadow-[#1d4ed8]/40 group-hover:scale-110 transition-transform duration-500">
                <img src="/logo-reparo.webp" alt="Reparo Avançado" className="w-full h-auto brightness-0 invert" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
