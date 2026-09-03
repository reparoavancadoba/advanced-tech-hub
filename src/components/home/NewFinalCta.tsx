import { MessageCircle } from "lucide-react";
const NewFinalCta = () => (
  <section className="bg-[#0a0f18] text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 text-center border-t border-[#1e293b]">
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4">
        Pronto pra{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">resolver?</span>
      </h2>
      <p className="text-sm md:text-base mb-8 text-slate-400 max-w-xl mx-auto">
        Fale com a gente no WhatsApp, explique o defeito e receba uma estimativa sem compromisso.
      </p>
      <a href="https://wa.me/5571991981437" className="inline-flex items-center gap-3 bg-[#25D366] text-white hover:bg-[#1DA851] px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
        <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
      </a>
    </div>
  </section>
);
export default NewFinalCta;

