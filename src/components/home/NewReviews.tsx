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
  // Show 2 items on desktop to give them more breathing room
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1;
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
    <section className="bg-[#0a0f18] text-white py-32 md:py-48 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-24 md:mb-40 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="w-12 h-[2px] bg-[#0066FF]"></span>
            <span className="text-[#0066FF] font-bold text-sm tracking-[0.2em] uppercase">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Quem já passou aqui <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">conta como foi.</span>
          </h2>
          <p className="text-slate-400 mt-6 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
            Histórias reais de quem resolveu o problema do aparelho na nossa loja em Salvador.
          </p>
        </div>
        
        <div className="relative -mx-4 md:-mx-8">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {realReviews.map((rev, i) => {
              const initials = rev.name.substring(0, 2).toUpperCase();
              
              return (
                <div
                  key={i}
                  className="flex-shrink-0 px-4 md:px-8"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-[#0f172a] border border-[#1e293b] p-10 md:p-12 rounded-3xl flex flex-col gap-8 h-full shadow-2xl hover:border-[#0066FF]/40 transition-all">
                    
                    <div className="flex gap-1.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-300 italic flex-1 text-base md:text-lg leading-loose">
                      "{rev.text}"
                    </p>
                    
                    <div className="flex items-center gap-5 mt-auto pt-6 border-t border-[#1e293b]/50">
                      <div className="w-14 h-14 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg shadow-[#0066FF]/20">
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-base">{rev.name}</h4>
                        <p className="text-slate-500 text-sm mt-1">Avaliação no Google</p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-16">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === i ? "bg-[#0066FF] w-8" : "bg-slate-700 w-2.5 hover:bg-slate-500"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewReviews;

