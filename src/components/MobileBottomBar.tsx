import { MessageCircle, Phone, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";
const PHONE_LINK = "tel:+5571991981437";
const MAPS_LINK = "https://maps.google.com/?q=Reparo+Avançado+Boca+do+Rio";

const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center p-2 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <a href={WHATSAPP_LINK} className="flex flex-col items-center justify-center p-2 text-[#0066FF]">
        <MessageCircle className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
      <a href={PHONE_LINK} className="flex flex-col items-center justify-center p-2 text-primary">
        <Phone className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-semibold">Ligar</span>
      </a>
      <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-2 text-gray-600">
        <MapPin className="w-6 h-6 mb-1" />
        <span className="text-[10px] font-semibold">Rotas</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
