import { MessageCircle, Check } from "lucide-react";
import phoneImg from "@/assets/iphone-orange-lg.png";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar uma avaliação e orçamento para meu aparelho.";

const seals = [
  "Loja Física em Salvador",
  "Avaliação Inicial",
  "Atendimento Presencial",
  "Orçamento Rápido",
  "Parcelamento Disponível"
];

const VersatilHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-zinc-950 text-white pt-24 pb-16 overflow-hidden flex flex-col justify-center border-b border-zinc-900">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-zinc-800/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Hero text content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
              LOJA FÍSICA EM SALVADOR
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-emerald-400 mb-6 leading-tight">
              Atendimento presencial para informações, avaliação inicial e orçamento de aparelhos.
            </h2>
            <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Fale com nossa equipe pelo WhatsApp para receber orientações iniciais e solicitar seu orçamento.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero_whatsapp_click"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold px-8 py-4.5 rounded-2xl text-base md:text-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-zinc-950" />
                SOLICITAR ORÇAMENTO
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero_whatsapp_talk"
                className="inline-flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800 font-semibold px-8 py-4.5 rounded-2xl text-base transition-all transform hover:-translate-y-0.5"
              >
                FALAR NO WHATSAPP
              </a>
            </div>

            {/* Seals list */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-zinc-900">
              {seals.map((seal) => (
                <div key={seal} className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{seal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual image block */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 md:w-80 aspect-[9/18] rounded-[48px] border-[6px] border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl shadow-emerald-500/5 hover:border-zinc-700 transition-all duration-500">
              <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-xl flex items-center justify-center z-20">
                <div className="w-20 h-3 bg-black rounded-full" />
              </div>
              <img
                src={phoneImg}
                alt="Smartphone moderno para avaliação"
                className="w-full h-full object-cover p-2 rounded-[42px]"
              />
            </div>
            {/* Ambient behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
          </div>
        </div>

        {/* Bloco de Conformidade */}
        <div className="mt-16 bg-zinc-900/40 border border-zinc-900 rounded-3xl p-6 md:p-8 max-w-6xl mx-auto backdrop-blur-sm">
          <h3 className="text-lg md:text-xl font-extrabold text-red-400 mb-4 tracking-wide uppercase">
            IMPORTANTE
          </h3>
          <div className="space-y-4 text-zinc-350 text-sm md:text-base leading-relaxed">
            <p>
              A Reparo Avançado é uma loja física localizada em Salvador/BA.
            </p>
            <p>
              O WhatsApp é utilizado para atendimento comercial, informações, avaliações iniciais e orçamentos.
            </p>
            <p className="text-zinc-400 font-semibold">
              Não realizamos suporte remoto, recuperação de contas, remoção de vírus, instalação de software, desbloqueios ou serviços online relacionados à tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersatilHero;
