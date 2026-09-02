import { Phone, MessageCircle } from "lucide-react";
const NewCtaBlock = () => (
  <section className="bg-zinc-900 text-white border-b border-white/5 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 shadow-inner">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-1">Precisando de ajuda agora?</h2>
        <p className="text-zinc-400">Fale com nossos técnicos e resolva o problema do seu aparelho rápido.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Phone className="w-5 h-5" /> (71) 99198-1437
        </div>
        <a href="https://wa.me/5571991981437" className="bg-[#25D366] text-white hover:bg-[#1DA851] px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
          <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);
export default NewCtaBlock;
