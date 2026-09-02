import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-16 px-4 md:px-8 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Venha nos fazer uma visita</h2>
          
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p className="text-zinc-600">Rua Principal, 123 - Boca do Rio<br/>Salvador - BA, 41700-000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Horário de Funcionamento</h3>
              <p className="text-zinc-600">Segunda a Sexta: 09:00 - 18:00<br/>Sábado: 09:00 - 13:00</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Contato</h3>
              <p className="text-zinc-600">(71) 99198-1437</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full h-80 bg-zinc-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
           {/* Placeholder for map iframe */}
           <span className="text-zinc-500 font-medium">Mapa do Google Maps (Iframe)</span>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
