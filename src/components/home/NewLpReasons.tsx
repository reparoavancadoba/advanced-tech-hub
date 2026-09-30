import { ShieldCheck, Gem, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const NewLpReasons = () => {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-12 lg:mb-16 tracking-tight">
          Razões para <span className="text-blue-600">nos escolher!</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mb-12">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#1d4ed8] rounded-[1.25rem] p-4 mb-6 shadow-lg shadow-blue-500/30">
              <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-slate-700 font-medium text-lg">
              Garantia de verdade, durante e após o processo!
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#1d4ed8] rounded-[1.25rem] p-4 mb-6 shadow-lg shadow-blue-500/30">
              <Gem className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-slate-700 font-medium text-lg">
              Preço justo para você em todos os processos
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-[#1d4ed8] rounded-[1.25rem] p-4 mb-6 shadow-lg shadow-blue-500/30">
              <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-slate-700 font-medium text-lg">
              Serviços feitos com eficiência e precisão
            </p>
          </div>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-[#10b981]/30 hover:scale-105 active:scale-95 text-lg w-full sm:w-auto min-h-[56px]"
        >
          Faça Aqui Seu Orçamento <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default NewLpReasons;
