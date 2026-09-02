import { Phone, MessageCircle } from "lucide-react";
const NewCtaBlock = () => (
  <section className="bg-blue-600 text-white py-10 px-4 shadow-inner">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-1">Precisando de ajuda agora?</h2>
        <p className="text-blue-100">Fale com nossos técnicos e resolva o problema do seu aparelho rápido.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Phone className="w-5 h-5" /> (71) 99198-1437
        </div>
        <a href="https://wa.me/5571991981437" className="bg-white text-blue-600 hover:bg-zinc-100 px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
          <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);
export default NewCtaBlock;
