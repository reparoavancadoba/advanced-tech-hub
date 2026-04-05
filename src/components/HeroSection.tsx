import heroImg from "@/assets/hero-tech.jpg";
import logo from "@/assets/logo-reparo.png";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Técnico especialista em microeletrônica" className="w-full h-full object-cover opacity-30" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16 min-h-screen flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src={logo} alt="Reparo Avançado" className="h-16 md:h-20" />
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              O conserto do seu celular em Salvador com quem entende:{" "}
              <span className="text-gradient">9 anos de tradição.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Especialistas em iPhone, Samsung e Reparo de Placa na Boca do Rio. Orçamento gratuito e serviço feito na hora.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-5 rounded-xl text-lg font-bold animate-pulse-whatsapp hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              QUERO MEU ORÇAMENTO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
