import { Smartphone, Battery, PlugZap, Camera, Cpu, Droplet } from "lucide-react";
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
  <section id="servicos" className="bg-[#0a0f18] text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 border-t border-[#1e293b]">
    <div className="max-w-5xl mx-auto">
      
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-[#0066FF]"></span>
          <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase">O que resolvemos</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          Serviço rápido,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">direto na loja.</span>
        </h2>
        <p className="text-slate-400 mt-2 max-w-md text-sm">
          Chame no WhatsApp, combine o horário e conte com nossa equipe pra cuidar do seu aparelho em Salvador.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc, i) => (
          <Link 
            key={i} 
            to={svc.link}
            className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-xl flex flex-col items-start gap-3 hover:border-[#0066FF]/40 group transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center group-hover:bg-[#0066FF]/20 transition-colors">
              <svc.icon className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-sm mb-0.5">{svc.name}</h3>
              <p className="text-slate-400 text-xs">{svc.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NewWhatWeDo;

