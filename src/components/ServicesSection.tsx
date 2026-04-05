import { Cpu, Smartphone, Battery, Droplets } from "lucide-react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571999999999?text=Olá! Gostaria de solicitar um orçamento.";

const services = [
  {
    icon: Cpu,
    title: "Reparo de Placa",
    description: "Recuperamos aparelhos condenados.",
  },
  {
    icon: Smartphone,
    title: "Troca de Tela",
    description: "Telas premium com cores e touch originais.",
  },
  {
    icon: Battery,
    title: "Baterias",
    description: "Saúde 100% de volta para seu iPhone ou Android.",
  },
  {
    icon: Droplets,
    title: "Caiu na Água?",
    description: "Desoxidação química avançada.",
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
          Soluções completas para o seu dispositivo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                SOLICITAR ORÇAMENTO
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
