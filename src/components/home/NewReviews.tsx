import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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

const NewReviews = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = realReviews.length - itemsPerView;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-[#0a0f18] text-white py-16 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#0066FF]"></span>
            <span className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2]">
            Quem já passou aqui <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">conta como foi.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto md:mx-0 text-sm md:text-base">
            Histórias reais de quem resolveu o problema do aparelho na nossa loja em Salvador.
          </p>
        </div>
        
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {realReviews.map((rev, i) => {
              const initials = rev.name.substring(0, 2).toUpperCase();
              
              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-3 md:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-[#0f172a] border border-[#1e293b] p-6 md:p-8 rounded-2xl flex flex-col gap-6 h-full shadow-lg hover:border-[#0066FF]/50 transition-colors">
                    
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-300 italic flex-1 text-sm md:text-sm leading-relaxed">
                      "{rev.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#1e293b]">
                      <div className="w-10 h-10 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm">{rev.name}</h4>
                        <p className="text-slate-500 text-xs">Avaliação no Google</p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === i ? "bg-[#0066FF] w-6" : "bg-slate-700"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewReviews;

