import { MessageCircle, Smartphone, Battery, Cpu, Plug, Mic, Volume2, Camera, ScanFace, Fingerprint, Droplets, Settings, Power, BatteryCharging } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5571991981437?text=";

const serviceIcons: Record<string, React.ElementType> = {
  "troca-de-tela": Smartphone,
  "troca-de-bateria": Battery,
  "reparo-de-placa": Cpu,
  "conector-de-carga": Plug,
  "troca-de-microfone": Mic,
  "alto-falante-audio": Volume2,
  "cameras": Camera,
  "face-id": ScanFace,
  "biometria": Fingerprint,
  "desoxidacao": Droplets,
  "software": Settings,
  "aparelho-nao-liga": Power,
  "aparelho-nao-carrega": BatteryCharging,
};

const servicesList = [
  { slug: "troca-de-tela", name: "Troca de Tela", desc: "Display premium com cores vibrantes e touch responsivo. Qualidade de padrão de fábrica." },
  { slug: "troca-de-bateria", name: "Troca de Bateria", desc: "Saúde 100% de volta com baterias de alta performance e garantia." },
  { slug: "reparo-de-placa", name: "Reparo de Placa", desc: "Microeletrônica avançada. Recuperamos aparelhos condenados por outras assistências." },
  { slug: "conector-de-carga", name: "Conector de Carga", desc: "Carregamento eficiente restaurado com peças premium." },
  { slug: "troca-de-microfone", name: "Microfone", desc: "Qualidade de áudio restaurada para ligações e gravações perfeitas." },
  { slug: "alto-falante-audio", name: "Alto-falante", desc: "Som alto e cristalino de volta ao seu aparelho." },
  { slug: "cameras", name: "Câmeras", desc: "Frontal e traseira com componentes de alta resolução." },
  { slug: "face-id", name: "Face ID", desc: "Reparo especializado do reconhecimento facial (iPhone)." },
  { slug: "biometria", name: "Biometria", desc: "Sensor de digital restaurado com precisão (Android)." },
  { slug: "desoxidacao", name: "Desoxidação", desc: "Tratamento químico avançado para aparelhos com contato com líquido." },
  { slug: "software", name: "Software", desc: "Formatação, desbloqueio e remoção de vírus." },
  { slug: "aparelho-nao-liga", name: "Não Liga", desc: "Diagnóstico completo e reparo de aparelhos totalmente mortos." },
  { slug: "aparelho-nao-carrega", name: "Não Carrega", desc: "Da entrada USB ao circuito de carga – resolvemos tudo." },
];

const DetailedServicesSection = () => {
  return (
    <section id="servicos-detalhados" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Todos os <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Somos especialistas em todos os tipos de reparo. Peças premium, garantia em todos os serviços e atendimento rápido na Boca do Rio, Salvador.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {servicesList.map((service) => {
            const Icon = serviceIcons[service.slug] || Smartphone;
            const waLink = `${WHATSAPP_BASE}${encodeURIComponent(`Olá! Gostaria de um orçamento para ${service.name}.`)}`;
            return (
              <a
                key={service.slug}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-xl border border-border p-5 flex flex-col items-center text-center hover:border-primary/50 hover:glow-blue transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{service.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 flex-1 line-clamp-2">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-whatsapp">
                  <MessageCircle className="w-3 h-3" /> Orçamento
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
