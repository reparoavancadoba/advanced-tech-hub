import { MessageCircle, Star, MessageSquare, BadgeCheck, ShieldCheck, MapPin } from "lucide-react";
import { HeroParticles } from "@/components/HeroParticles";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const HeroSection = () => {
  return (
    <section className="relative w-full text-white overflow-hidden bg-[#0a0f18] min-h-screen flex flex-col justify-center">
      {/* Fundo: foto da loja + overlay escuro, igual à LP */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-desktop.webp"
          srcSet="/hero-mobile.webp 800w, /hero-desktop.webp 1672w"
          sizes="(max-width: 800px) 100vw, 1672px"
          alt="Fachada Reparo Avançado"
          width={1672}
          height={941}
          fetchPriority="high"
          className="w-full h-full object-cover object-center md:object-right-top"
        />
        <div className="absolute inset-0 bg-[#0a0f18]/70 md:bg-gradient-to-r md:from-[#0a0f18]/95 md:via-[#0a0f18]/70 md:to-[#0a0f18]/40" />
      </div>

      {/* Camadas decorativas: grid animado + glow pulsante + partículas, igual à LP */}
      <div className="absolute inset-0 z-0 grid-pattern-animated opacity-40" aria-hidden />
      <div className="hero-glow absolute right-[-6rem] top-[-6rem] z-0" aria-hidden />
      <HeroParticles className="absolute inset-0 z-0 opacity-70" />

      {/* Conteúdo central, igual ao layout da LP */}
      <div className="relative z-10 mx-auto max-w-3xl w-full px-6 sm:px-8 pt-28 md:pt-24 pb-12 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
          <MapPin className="h-3.5 w-3.5 text-[#3b82f6]" />
          Boca do Rio · Salvador - BA
        </span>

        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.2] max-w-2xl">
          Assistência técnica de celular em Salvador{" "}
          <span className="text-[#3b82f6] drop-shadow-md">com diagnóstico técnico e peças premium.</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
          Desde 2018 cuidando do que é importante pra você. Boca do Rio, <span className="text-[#3b82f6] font-semibold">Salvador - BA.</span>
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 text-lg w-full sm:w-auto min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg w-full sm:w-auto min-h-[48px]"
          >
            Ver serviços
          </a>
        </div>

        {/* Mini cards de confiança */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm transition-all hover:bg-white/5">
            <Star className="w-6 h-6 text-[#3b82f6] mb-2" strokeWidth={1.5} />
            <span className="font-bold text-xs sm:text-sm text-white leading-tight">Desde 2018</span>
            <span className="text-[10px] sm:text-[11px] text-slate-300 mt-1">de experiência</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm transition-all hover:bg-white/5">
            <MessageSquare className="w-6 h-6 text-[#3b82f6] mb-2" strokeWidth={1.5} />
            <span className="font-bold text-xs sm:text-sm text-white leading-tight">+164 avaliações</span>
            <span className="text-[10px] sm:text-[11px] text-slate-300 mt-1 leading-tight">5 estrelas no Google</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm transition-all hover:bg-white/5">
            <BadgeCheck className="w-6 h-6 text-[#3b82f6] mb-2" strokeWidth={1.5} />
            <span className="font-bold text-xs sm:text-sm text-white leading-tight">Peças de</span>
            <span className="text-[10px] sm:text-[11px] text-slate-300 mt-1">qualidade</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm transition-all hover:bg-white/5">
            <ShieldCheck className="w-6 h-6 text-[#3b82f6] mb-2" strokeWidth={1.5} />
            <span className="font-bold text-xs sm:text-sm text-white leading-tight">Garantia no</span>
            <span className="text-[10px] sm:text-[11px] text-slate-300 mt-1">serviço</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
