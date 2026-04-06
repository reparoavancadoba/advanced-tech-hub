import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import logo from "@/assets/logo-reparo.png";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento.";
const GOOGLE_MAPS_DIRECTIONS = "https://www.google.com/maps/dir//Reparo+Avan%C3%A7ado+-+Conserto+de+Celulares+em+Salvador+-+R.+Abelardo+Andrade+de+Carvalho,+8+-+Boca+do+Rio,+Salvador+-+BA,+41706-710";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5!2d-38.4413!3d-12.9777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d3e5f6b7c9%3A0xabc123!2sR.+Abelardo+Andrade+de+Carvalho%2C+8+-+Boca+do+Rio%2C+Salvador+-+BA%2C+41706-710!5e0!3m2!1spt-BR!2sbr!4v1";

const bairros = ["Imbuí", "Stiep", "Pituba", "Costa Azul", "Boca do Rio", "Piatã", "Itapuã", "Patamares"];

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Info */}
          <div>
            <img src={logo} alt="Reparo Avançado" className="h-12 mb-4" loading="lazy" />
            <p className="text-muted-foreground text-sm mb-4">
              Assistência técnica especializada em smartphones e tablets. 9 anos de experiência em Salvador.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                R. Abelardo Andrade de Carvalho, 8 - Boca do Rio, Salvador - BA, 41706-710
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                (71) 99198-1437
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                Seg a Sex: 9h - 18h | Sáb: 9h - 13h
              </li>
            </ul>
          </div>

          {/* Bairros */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Atendemos toda Salvador</h4>
            <div className="flex flex-wrap gap-2">
              {bairros.map((b) => (
                <span key={b} className="bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="rounded-xl overflow-hidden border border-border relative">
            <iframe
              title="Localização Reparo Avançado"
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
            >
              <Navigation className="w-4 h-4" />
              Como Chegar
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Reparo Avançado. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
