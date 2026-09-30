import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const NewLpAbout = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Mockup Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
           <div className="relative w-[280px] sm:w-[320px] h-[520px] sm:h-[600px] bg-slate-200 rounded-[3rem] border-[14px] border-[#1e293b] shadow-2xl overflow-hidden flex flex-col items-center group">
             {/* Notch */}
             <div className="absolute top-0 w-24 sm:w-32 h-5 sm:h-6 bg-[#1e293b] rounded-b-2xl z-20"></div>
             {/* Background photo inside phone */}
             <img src="/hero-desktop.webp" className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700" alt="Loja" />
             <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
           </div>
        </div>

        {/* Right Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-8">
            Aqui, não limitamos a vender produtos ou serviços.<br/>
            <span className="text-blue-600">Oferecemos soluções.</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg md:text-xl font-medium mb-10">
            <p>Mais do que vender produtos ou serviços, oferecemos soluções personalizadas.</p>
            <p>Nosso compromisso vai além da qualidade e agilidade dos serviços entregues; dedicamo-nos integralmente a cada cliente, criando conexões genuínas.</p>
            <p>Combinando tecnologia de ponta e atendimento humanizado, transformamos clientes em amigos que se tornam parte do nosso dia a dia!</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#10b981]/30 hover:scale-105 active:scale-95 text-lg w-full sm:w-auto min-h-[56px]"
          >
            Faça Aqui Seu Orçamento <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewLpAbout;
