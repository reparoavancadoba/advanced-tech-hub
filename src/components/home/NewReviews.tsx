import { Star } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const realReviews = [
  { name: "Daniela Falcão", time: "Há 4 horas", text: "Amei, obrigada!" },
  { name: "Matheus Filipe", time: "Há 8 horas", text: "Gostei do serviço" },
  { name: "Evellyn Arruda", time: "Há 5 dias", text: "Ótimo atendimento, muito solicitos e prestativos." },
  { name: "Nexus Company", time: "Há 2 semanas", text: "Melhor empresa para conserto de celulares, faz todos os serviços aqui da empresa confio de olhos fechados" },
  { name: "Matheus Bastoz", time: "Há 2 semanas", text: "Muito profissionais, me ajudou muito e não cobrou caro preço justo" },
  { name: "Caio", time: "Há 2 semanas", text: "Tive lá foi um bom serviço e atendimento, trabalharam com delicadeza e profissionalismo, gostei muito" },
  { name: "Maria", time: "Há 2 semanas", text: "Loja organizada, serviço de qualidade e ótimo custo-benefício. Fiz um reparo no conector de carga e ficou perfeito. Melhor oficina de conserto de celular focada em iPhone em Salvador!" },
  { name: "jonathan", time: "Há 2 semanas", text: "Excelente experiência! Fiz a troca de tela do meu iPhone e ficou como novo. Serviço rápido, peças de qualidade e preço justo. Melhor oficina de conserto de celular na região!" },
  { name: "LUCCA Reis", time: "Há 6 semanas", text: "Ótimo atendimento bem educado todos me trataram bem e bem explicativo ótimos atendentes ótimos produtos" },
  { name: "Aline Tourinho", time: "Há 7 semanas", text: "Me salvaram muito consertando meu celular. Atendimento rápido e o conserto também não demorou!" },
  { name: "Victória", time: "Há 8 semanas", text: "Excelente atendimento, material de qualidade e rapidez no serviço. Te explica tido de forma detalhada, é extremamente atencioso e receptivo!" },
  { name: "eliel guedes", time: "Há 13 semanas", text: "Atendimento excelente. Além de serem super educados e atenciosos o serviço prestado é de ótima qualidade e muito, muito rápido. Super recomendo." },
  { name: "Juliana Matos", time: "Há 14 semanas", text: "Atendimento maravilhoso! Muito cuidadoso no serviço, explica tudo direitinho. Serviço com valor justo e o melhor de tudo: entrega rápida e de qualidade!" },
  { name: "Ana Luiza Ferreira Barbosa Santos", time: "Há 22 semanas", text: "O melhor lugar de Salvador pra consertar celular! Já levei o meu e o do meu marido, ambos ficaram perfeitos. Atendimento excelente e com ótimo custo-benefício." },
  { name: "Marcos Caldas", time: "Há 22 semanas", text: "Excelente serviço! Achei que teria que trocar o celular, mas eles conseguiram recuperar o circuito interno. Fiquei impressionado com a agilidade e a transparência do atendimento. Voltarei sempre que precisar!" },
];

const colors = ["bg-blue-600", "bg-emerald-600", "bg-purple-600", "bg-amber-600", "bg-rose-600", "bg-cyan-600"];

const NewReviews = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = realReviews.length - itemsPerView;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-zinc-950 text-white py-24 px-4 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que nossos clientes dizem</h2>
        
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {realReviews.map((rev, i) => {
              const initials = rev.name.substring(0, 2).toUpperCase();
              const colorClass = colors[i % colors.length];
              
              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-zinc-900 border border-white/5 p-8 rounded-2xl flex flex-col gap-6 h-full shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${colorClass} text-xl`}>
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{rev.name}</h4>
                        <p className="text-xs text-zinc-400">{rev.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-blue-500 text-blue-500" />)}
                    </div>
                    <p className="text-zinc-300 text-base leading-relaxed italic">"{rev.text}"</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-blue-500 scale-125" : "bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReviews;