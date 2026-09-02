import { Phone, MessageCircle } from "lucide-react";
const NewCtaBlock = () => (
  <section className="bg-white text-zinc-900 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 border-b border-zinc-100 shadow-sm">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-1 text-zinc-900">Precisando de ajuda agora?</h2>
        <p className="text-zinc-600">Fale com nossos técnicos e resolva o problema do seu aparelho rápido.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex items-center gap-2 font-bold text-xl text-zinc-900">
          <Phone className="w-5 h-5 text-[#0066FF]" /> (71) 99198-1437
        </div>
        <a href="https://wa.me/5571991981437" className="bg-[#25D366] text-white hover:bg-[#1DA851] px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
          <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);
export default NewCtaBlock;
