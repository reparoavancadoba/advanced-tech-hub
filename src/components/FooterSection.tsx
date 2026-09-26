import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import logo from "@/assets/logo-reparo.png";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/5571991981437";
const GOOGLE_MAPS_DIRECTIONS = "https://www.google.com/maps/dir//Reparo+Avan%C3%A7ado+-+Conserto+de+Celulares+em+Salvador+-+R.+Abelardo+Andrade+de+Carvalho,+8+-+Boca+do+Rio,+Salvador+-+BA,+41706-710";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.5!2d-38.4413!3d-12.9777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604d3e5f6b7c9%3A0xabc123!2sR.+Abelardo+Andrade+de+Carvalho%2C+8+-+Boca+do+Rio%2C+Salvador+-+BA%2C+41706-710!5e0!3m2!1spt-BR!2sbr!4v1";

const bairrosLink = [
  { name: "Salvador (Centro)", path: "/assistencia-tecnica-salvador" },
  { name: "Boca do Rio", path: "/assistencia-tecnica-boca-do-rio" },
  { name: "Pituba", path: "/assistencia-tecnica-pituba" },
  { name: "Imbuí", path: "/assistencia-tecnica-imbui" },
  { name: "Brotas", path: "/assistencia-tecnica-brotas" }
];

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-card/50 border-t border-border">
      <div className="container mx-auto pt-16 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Info */}
          <div>
            <img src="/logo-reparo.webp" alt="Reparo Avançado" className="h-12 w-auto mb-4 mx-auto md:mx-0" loading="lazy" width={254} height={98} />
            <p className="text-muted-foreground text-sm mb-4">
              assistência técnica de celular focada em smartphones e tablets. assistência técnica de celular focada em smartphones e tablets. Experiência desde 2018 em Salvador.
            </p>
            <a
              href="https://www.google.com/maps/search/Reparo+Avan%C3%A7ado+-+Conserto+de+Celulares+em+Salvador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-yellow-500 font-semibold mb-6 text-sm hover:underline"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5,0 · 165 avaliações no Google
            </a>
            <br />
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
            <ul className="space-y-3 text-sm text-muted-foreground flex flex-col items-center md:items-start">
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
                Seg a Sex: 8h - 18h | Sáb: 8h - 17h
              </li>
            </ul>
          </div>

          {/* Bairros */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Atendemos toda Salvador</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {bairrosLink.map((b) => (
                <Link
                  key={b.path}
                  to={b.path}
                  className="bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground text-xs px-3 py-1.5 rounded-full transition-all"
                >
                  {b.name}
                </Link>
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
