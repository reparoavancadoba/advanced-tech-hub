import { MessageCircle } from "lucide-react";
import iphoneOrange from "@/assets/iphone-orange-card.png";
import pocoGreen from "@/assets/poco-x7-card.png";
import appleWatch from "@/assets/apple-watch-card.png";
import iphoneBlue from "@/assets/iphone-blue-card.png";

const WHATSAPP_BASE = "https://wa.me/5571991981437?text=";

const services = [
  {
    image: iphoneOrange,
    label: "iOS",
    text: "Clique no botão para atendimento no WhatsApp para IOS",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para iOS.")}`,
  },
  {
    image: pocoGreen,
    label: "Android",
    text: "Clique no botão para atendimento no WhatsApp para ANDROID",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para Android.")}`,
  },
  {
    image: appleWatch,
    label: "Acessórios",
    text: "Clique no botão para atendimento no WhatsApp para ACESSÓRIOS",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para Acessórios.")}`,
  },
  {
    image: iphoneBlue,
    label: "Vendas",
    text: "Clique no botão para atendimento no WhatsApp para COMPRA DE APARELHO",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá! Gostaria de informações sobre compra de aparelho.")}`,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Escolha a categoria e fale direto com nosso especialista
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.label}
              className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue group flex flex-col overflow-hidden"
            >
              <div className="aspect-square bg-background flex items-center justify-center p-6">
                <img
                  src={service.image}
                  alt={service.label}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-foreground">{service.label}</h3>
                <p className="text-muted-foreground text-sm mb-5 flex-1">{service.text}</p>
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-3 rounded-lg text-sm font-semibold hover:brightness-110 transition-all w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  SOLICITAR ORÇAMENTO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
