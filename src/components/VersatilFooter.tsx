import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";
import storeFacade from "@/assets/fachada-loja.png";

const INSTAGRAM_LINK = "https://instagram.com/reparoavancado";
const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento.";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5!2d-38.4413!3d-12.9777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d3e5f6b7c9%3A0xabc123!2sR.+Abelardo+Andrade+de+Carvalho%2C+8+-+Boca+do+Rio%2C+Salvador+-+BA%2C+41706-710!5e0!3m2!1spt-BR!2sbr!4v1";

const VersatilFooter = () => {
  return (
    <footer id="contato" className="bg-zinc-950 text-white border-t border-zinc-900 pt-20 pb-10 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          
          {/* Facade photo */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-zinc-500 mb-6">
              Nossa Unidade
            </h4>
            <div className="rounded-2xl overflow-hidden border border-zinc-900 aspect-[4/3] bg-zinc-900 shadow-md">
              <img
                src={storeFacade}
                alt="Fachada real da loja Reparo Avançado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-zinc-500 mb-6">
              Informações de Contato
            </h4>
            <ul className="space-y-6 text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Endereço</strong>
                  R. Abelardo Andrade de Carvalho, 8 - Boca do Rio, Salvador / BA, CEP 41706-710
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Telefone / WhatsApp</strong>
                  (71) 99198-1437
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1">Horário de Atendimento</strong>
                  Segunda a Sexta: 09h às 18h<br />
                  Sábados: 09h às 13h
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Interactive map */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-zinc-500 mb-6">
              Como Chegar
            </h4>
            <div className="rounded-2xl overflow-hidden border border-zinc-900 h-64 bg-zinc-900 shadow-md">
              <iframe
                title="Mapa de Localização - Reparo Avançado"
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} Reparo Avançado. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-zinc-500 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-zinc-500 cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VersatilFooter;
