import { MessageCircle, Star, MessageSquare, BadgeCheck, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const HeroSection = () => {
  return (
    <section className="relative w-full text-white pt-24 lg:pt-28 pb-8 overflow-hidden bg-[#0a0f18] min-h-screen flex flex-col justify-center">
      
      {/* Full Background Image - Fixed alignment to keep top sign visible */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/HERO (2).png" 
          alt="Fundo Reparo Avançado" 
          className="w-full h-full object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] via-[#0a0f18]/80 to-transparent md:hidden" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col">
        
        {/* Content Box */}
        <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight mb-4 lg:mb-6 leading-[1.35]">
            Assistência técnica de celulares e notebooks <span className="text-[#3b82f6] drop-shadow-md">com diagnóstico técnico e peças de qualidade.</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-6 lg:mb-8 max-w-xl leading-relaxed">
            Mais de 7 anos cuidando do que é importante pra você. Boca do Rio, <span className="text-[#3b82f6] font-semibold">Salvador - BA.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-6 py-4 lg:px-8 lg:py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-base lg:text-lg w-full sm:w-auto shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold px-6 py-4 lg:px-8 lg:py-4 rounded-xl transition-all text-base lg:text-lg w-full sm:w-auto shrink-0"
            >
              Ver serviços
            </a>
          </div>

          {/* Trust Badges Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 w-full">
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <Star className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">+7 anos</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1">de experiência</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <MessageSquare className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">+164 avaliações</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1 leading-tight">5 estrelas no Google</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <BadgeCheck className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">Peças de</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1">qualidade</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">Garantia no</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1">serviço</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
