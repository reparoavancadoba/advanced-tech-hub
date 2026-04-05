import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento.";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center animate-pulse-whatsapp hover:brightness-110 transition-all shadow-lg"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-whatsapp-foreground" />
    </a>
  );
};

export default WhatsAppFab;
