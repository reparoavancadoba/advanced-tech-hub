import { MessageCircle } from "lucide-react";
const NewFinalCta = () => (
  <section className="bg-blue-600 text-white py-24 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Pronto pra resolver?</h2>
      <p className="text-xl md:text-2xl text-blue-100 mb-12">Fale com a gente no WhatsApp e faça seu orçamento sem compromisso agora mesmo.</p>
      <a href="https://wa.me/5571991981437" className="inline-flex items-center gap-3 bg-white text-blue-600 hover:bg-zinc-100 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
        <MessageCircle className="w-7 h-7" /> Falar no WhatsApp
      </a>
    </div>
  </section>
);
export default NewFinalCta;
