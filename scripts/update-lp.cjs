const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const componentsHomeDir = path.join(srcDir, 'components/home');

// 1. HeroSection.tsx
const heroContent = `import { MessageCircle } from "lucide-react";
import { HeroParticles } from "@/components/HeroParticles";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const HeroSection = () => {
  return (
    <section className="relative w-full text-white overflow-hidden bg-[#0a0f18] min-h-screen flex flex-col justify-center">
      {/* Background (keep intact) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-desktop.webp"
          srcSet="/hero-mobile.webp 800w, /hero-desktop.webp 1672w"
          sizes="(max-width: 800px) 100vw, 1672px"
          alt="Fachada Reparo Avançado"
          width={1672}
          height={941}
          fetchPriority="high"
          className="w-full h-full object-cover object-center md:object-right-top opacity-80"
        />
        <div className="absolute inset-0 bg-[#0a0f18]/80 md:bg-gradient-to-r md:from-[#0a0f18]/95 md:via-[#0a0f18]/70 md:to-[#0a0f18]/40" />
      </div>

      <div className="absolute inset-0 z-0 grid-pattern-animated opacity-40" aria-hidden />
      <div className="hero-glow absolute right-[-6rem] top-[-6rem] z-0" aria-hidden />
      <HeroParticles className="absolute inset-0 z-0 opacity-70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 md:pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="flex flex-col items-center lg:items-start gap-1.5 font-extrabold text-[40px] sm:text-5xl lg:text-[64px] tracking-tight leading-[1.1] mb-6">
            <span className="bg-[#1d4ed8] text-white px-3 py-1 lg:px-4 lg:py-2">Serviço feito com</span>
            <span className="bg-[#1d4ed8] text-white px-3 py-1 lg:px-4 lg:py-2">eficiência e rapidez!</span>
          </h1>
          <div className="mt-4 flex flex-col items-center lg:items-start gap-1.5 text-base sm:text-lg lg:text-xl font-medium tracking-tight mb-10">
            <span className="bg-[#3b82f6] text-white px-3 py-1 lg:px-4 lg:py-1.5 shadow-sm">Não deixe para amanhã o que pode ser feito ainda hoje!</span>
            <span className="bg-[#3b82f6] text-white px-3 py-1 lg:px-4 lg:py-1.5 shadow-sm max-w-full overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap">Consulte nossa programação de entregas para o mesmo dia.</span>
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

        {/* Right Side: Floating Cellphone */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px] sm:h-[500px]">
           <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[540px] bg-white rounded-[3rem] border-[12px] border-[#1e293b] shadow-2xl flex flex-col items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-700 hover:scale-105 group">
             {/* Notch */}
             <div className="absolute top-0 w-24 sm:w-32 h-5 sm:h-6 bg-[#1e293b] rounded-b-2xl"></div>
             
             {/* Logo Button inside */}
             <div className="bg-[#1d4ed8] rounded-[2rem] w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center p-5 shadow-xl shadow-[#1d4ed8]/40 group-hover:scale-110 transition-transform duration-500">
                <img src="/logo-reparo.webp" alt="Reparo Avançado" className="w-full h-auto brightness-0 invert" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
`;

// 2. NewLpAbout.tsx
const aboutContent = `import { MessageCircle } from "lucide-react";

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
`;

// 3. NewLpDelivery.tsx
const deliveryContent = `import { MessageCircle, PackageOpen } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const NewLpDelivery = () => {
  return (
    <section className="relative w-full bg-[#1d4ed8] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Resolva ainda hoje!
          </h2>
          <p className="text-lg md:text-xl font-medium mb-4 max-w-md text-blue-50 leading-relaxed">
            Oferecemos mais comodidade aos nossos clientes retirando e levando seu aparelho para você através de um motoboy capacitado.
          </p>
          <p className="text-sm italic text-blue-200 mb-10 font-light">
            *Consulte condições de taxa e deslocamento.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#10b981]/30 hover:scale-105 active:scale-95 text-lg w-full sm:w-auto min-h-[56px]"
          >
            Faça Aqui Seu Orçamento <MessageCircle className="w-6 h-6" />
          </a>
        </div>

        {/* Right Side: Mockup / Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="bg-slate-100 rounded-[3rem] w-full max-w-[400px] aspect-[4/5] overflow-hidden flex items-center justify-center relative shadow-2xl shadow-black/20 border-8 border-white/10 group">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-transparent"></div>
             <PackageOpen className="w-40 h-40 text-slate-400 drop-shadow-lg relative z-10 group-hover:-translate-y-4 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLpDelivery;
`;

// 4. NewLpReasons.tsx
const reasonsContent = `import { ShieldCheck, Gem, Clock, MessageCircle } from "lucide-react";

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
`;

// 5. Index.tsx
const indexContent = `import HeroSection from "@/components/HeroSection";
import NewLpAbout from "@/components/home/NewLpAbout";
import NewLpDelivery from "@/components/home/NewLpDelivery";
import NewLpReasons from "@/components/home/NewLpReasons";
import NewReviews from "@/components/home/NewReviews";
import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";
import { FadeIn } from "@/components/FadeIn";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reparo Avançado",
    "url": "https://site.reparoavancado.com.br",
    "logo": "https://site.reparoavancado.com.br/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-71-99198-1437",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>Assistência Técnica de Celular em Salvador | Reparo Avançado</title>
        <meta name="description" content="Assistência técnica focada em iPhone, Samsung e reparo avançado de placa em Salvador. Experiência desde 2018 na Boca do Rio." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      
      <HeroSection />
      
      <FadeIn><NewLpAbout /></FadeIn>
      <FadeIn><NewLpDelivery /></FadeIn>
      <FadeIn><NewLpReasons /></FadeIn>
      <FadeIn><NewReviews /></FadeIn>
    </SiteLayout>
  );
};

export default Index;
`;

fs.writeFileSync(path.join(srcDir, 'components/HeroSection.tsx'), heroContent);
fs.writeFileSync(path.join(componentsHomeDir, 'NewLpAbout.tsx'), aboutContent);
fs.writeFileSync(path.join(componentsHomeDir, 'NewLpDelivery.tsx'), deliveryContent);
fs.writeFileSync(path.join(componentsHomeDir, 'NewLpReasons.tsx'), reasonsContent);
fs.writeFileSync(path.join(srcDir, 'pages/Index.tsx'), indexContent);

console.log('Files updated successfully!');
