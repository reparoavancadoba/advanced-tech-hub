import { MessageCircle } from "lucide-react";
const NewFinalCta = () => (
  <section className="bg-[#0a0f18] text-white py-16 md:py-24 px-4 md:px-6 lg:px-8 text-center border-t border-[#1e293b]">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6">
        Pronto pra <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">resolver?</span>
      </h2>
      <p className="text-base md:text-lg mb-10 text-slate-400 max-w-xl mx-auto">
        Fale com a gente no WhatsApp, explique o defeito e receba uma estimativa sem compromisso agora mesmo.
      </p>
      <a href="https://wa.me/5571991981437" className="inline-flex items-center gap-3 bg-[#25D366] text-white hover:bg-[#1DA851] px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-[#25D366]/20 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-1">
        <MessageCircle className="w-7 h-7" /> Falar no WhatsApp
      </a>
    </div>
  </section>
);
export default NewFinalCta;

