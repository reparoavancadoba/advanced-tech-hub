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
  <section id="servicos" className="bg-[#0a0f18] text-white py-32 md:py-48 px-4 md:px-6 lg:px-8 border-t border-[#1e293b]">
    <div className="max-w-6xl mx-auto">
      
      <div className="mb-24 md:mb-40">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-[2px] bg-[#0066FF]"></span>
          <span className="text-[#0066FF] font-bold text-sm tracking-[0.2em] uppercase">O que resolvemos</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
          Serviço rápido, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">direto na loja.</span>
        </h2>
        <p className="text-slate-400 mt-6 max-w-lg text-base md:text-lg leading-relaxed">
          Chame no WhatsApp, combine o horário e conte com nossa equipe pra cuidar do seu aparelho em Salvador.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {services.map((svc, i) => (
          <Link 
            key={i} 
            to={svc.link}
            className="bg-[#0f172a] border border-[#1e293b] p-10 md:p-12 rounded-3xl flex flex-col items-start gap-6 hover:border-[#0066FF]/50 group transition-all cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center group-hover:bg-[#0066FF]/20 transition-colors">
              <svc.icon className="w-8 h-8 text-[#0066FF]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-xl mb-2">{svc.name}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{svc.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NewWhatWeDo;

