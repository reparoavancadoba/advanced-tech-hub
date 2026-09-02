import { Smartphone, Battery, PlugZap, Camera, Cpu, Droplet, Tablet, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Troca de tela", icon: Smartphone, link: "/troca-de-tela" },
  { name: "Bateria", icon: Battery, link: "/troca-de-bateria" },
  { name: "Conector de carga", icon: PlugZap, link: "/celular-nao-carrega" },
  { name: "Câmera", icon: Camera, link: "/conserto-de-celular" },
  { name: "Reparo de placa", icon: Cpu, link: "/reparo-em-placa" },
  { name: "Desoxidação", icon: Droplet, link: "/celular-caiu-na-agua" },
  { name: "Celulares", icon: Tablet, link: "/conserto-de-celular" },
  { name: "Notebooks", icon: Laptop, link: "/servicos" },
];

const NewWhatWeDo = () => (
  <section id="servicos" className="bg-[#0066FF] text-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-white">O que fazemos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {services.map((svc, i) => (
          <Link 
            key={i} 
            to={svc.link}
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:text-[#0066FF] group transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svc.icon className="w-10 h-10 text-white group-hover:text-[#0066FF] group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-white group-hover:text-[#0066FF] text-sm md:text-base">{svc.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default NewWhatWeDo;
