import { Smartphone, Battery, PlugZap, Camera, Cpu, Droplet, Tablet, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Troca de tela", icon: Smartphone, link: "/troca-de-tela", desc: "Telas originais e primeira linha" },
  { name: "Bateria", icon: Battery, link: "/troca-de-bateria", desc: "100% de saúde e autonomia" },
  { name: "Conector de carga", icon: PlugZap, link: "/celular-nao-carrega", desc: "Limpeza ou substituição" },
  { name: "Câmera", icon: Camera, link: "/conserto-de-celular", desc: "Foco, vidro ou lente" },
  { name: "Reparo de placa", icon: Cpu, link: "/reparo-em-placa", desc: "Microsoldagem avançada" },
  { name: "Desoxidação", icon: Droplet, link: "/celular-caiu-na-agua", desc: "Recuperação de banho" },
];

const NewWhatWeDo = () => (
  <section id="servicos" className="bg-zinc-50 text-slate-900 py-16 md:py-24 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#0066FF]"></span>
          <span className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase">O que resolvemos</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
          Serviço rápido, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">direto na loja.</span>
        </h2>
        <p className="text-slate-500 mt-4 max-w-md text-sm md:text-base">
          Chame no WhatsApp, combine o horário e conte com nossa equipe pra cuidar do seu aparelho em Salvador.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <Link 
            key={i} 
            to={svc.link}
            className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col items-start gap-4 hover:border-[#0066FF]/30 group transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-[#0066FF]/10 transition-colors">
              <svc.icon className="w-6 h-6 text-[#0066FF]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{svc.name}</h3>
              <p className="text-slate-500 text-sm">{svc.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NewWhatWeDo;

