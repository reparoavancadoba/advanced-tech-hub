import { Link } from "react-router-dom";
import { Smartphone, Battery, PlugZap, Camera, Droplets } from "lucide-react";

const solutions = [
  { icon: Smartphone, title: "Tela quebrada", desc: "Rachaduras, linhas na tela, sem imagem ou touch com falhas.", link: "/troca-de-tela" },
  { icon: Battery, title: "Bateria", desc: "Descarrega rápido, desliga sozinho ou não carrega 100%.", link: "/troca-de-bateria" },
  { icon: PlugZap, title: "Conector de carga", desc: "Mau contato, não carrega ou precisa de movimento para funcionar.", link: "/celular-nao-carrega" },
  { icon: Camera, title: "Câmeras", desc: "Foco com falhas, imagem tremida, preta ou lentes trincadas.", link: "/conserto-de-celular" },
  { icon: Droplets, title: "Líquido", desc: "Aparelho molhado ou com sinais de oxidação interna.", link: "/celular-caiu-na-agua" },
];

const MainServicesSection = () => {
  return (
    <section id="servicos" className="bg-zinc-50 text-zinc-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Encontre a solução ideal para o seu aparelho.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-zinc-200 hover:shadow-lg hover:border-blue-200 transition-all group flex flex-col">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed flex-grow">{solution.desc}</p>
              <Link
                to={solution.link}
                className="text-[#0066FF] font-semibold text-sm mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Saiba mais →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServicesSection;
