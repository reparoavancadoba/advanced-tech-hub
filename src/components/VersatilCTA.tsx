import { MessageCircle } from "lucide-react";
import professionalImg from "@/assets/profissional-atendimento.png";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento para meu aparelho.";

const VersatilCTA = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white border-b border-zinc-900 relative">
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="bg-zinc-900/40 border border-zinc-900 rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-16 relative">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* CTA Copy */}
            <div className="md:col-span-7 text-left flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
                MAIS DE 2.000 CLIENTES JÁ PASSARAM POR AQUI
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed">
                Fale com nossa equipe pelo WhatsApp e solicite seu orçamento.
              </p>
              <div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="final_cta"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold px-8 py-4.5 rounded-2xl text-base md:text-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/10"
                >
                  <MessageCircle className="w-5 h-5 fill-zinc-950" />
                  CHAMAR NO WHATSAPP
                </a>
              </div>
            </div>

            {/* CTA Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl relative group">
                <img
                  src={professionalImg}
                  alt="Profissional de atendimento Reparo Avançado"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VersatilCTA;
