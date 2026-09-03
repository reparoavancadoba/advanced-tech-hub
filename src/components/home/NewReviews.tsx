import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const realReviews = [
  { name: "Daniela Falcão", text: "Amei, obrigada!" },
  { name: "Matheus Filipe", text: "Gostei do serviço" },
  { name: "Evellyn Arruda", text: "Ótimo atendimento, muito solicitos e prestativos." },
  { name: "Nexus Company", text: "Melhor empresa para conserto de celulares, faz todos os serviços aqui da empresa confio de olhos fechados" },
  { name: "Matheus Bastoz", text: "Muito profissionais, me ajudou muito e não cobrou caro preço justo" },
  { name: "Caio", text: "Tive lá foi um bom serviço e atendimento, trabalharam com delicadeza e profissionalismo, gostei muito" },
  { name: "Maria", text: "Loja organizada, serviço de qualidade e ótimo custo-benefício. Fiz um reparo no conector de carga e ficou perfeito." },
  { name: "jonathan", text: "Excelente experiência! Fiz a troca de tela do meu iPhone e ficou como novo. Serviço rápido, peças de qualidade e preço justo." },
  { name: "LUCCA Reis", text: "Ótimo atendimento bem educado todos me trataram bem e bem explicativo ótimos atendentes ótimos produtos" },
  { name: "Aline Tourinho", text: "Me salvaram muito consertando meu celular. Atendimento rápido e o conserto também não demorou!" },
  { name: "Victória", text: "Excelente atendimento, material de qualidade e rapidez no serviço. Te explica tido de forma detalhada, é extremamente atencioso e receptivo!" },
  { name: "eliel guedes", text: "Atendimento excelente. Além de serem super educados e atenciosos o serviço prestado é de ótima qualidade e muito rápido. Super recomendo." },
  { name: "Juliana Matos", text: "Atendimento maravilhoso! Muito cuidadoso no serviço, explica tudo direitinho. Serviço com valor justo e o melhor de tudo: entrega rápida e de qualidade!" },
  { name: "Ana Luiza F. B. Santos", text: "O melhor lugar de Salvador pra consertar celular! Já levei o meu e o do meu marido, ambos ficaram perfeitos. Atendimento excelente." },
  { name: "Marcos Caldas", text: "Excelente serviço! Achei que teria que trocar o celular, mas eles conseguiram recuperar o circuito interno. Fiquei impressionado com a agilidade!" },
];

const NewReviews = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;
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
    <section className="bg-[#0a0f18] text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0066FF]"></span>
            <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase">Depoimentos</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
            Quem já passou aqui{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">conta como foi.</span>
          </h2>
          <p className="text-slate-400 mt-2 max-w-md mx-auto md:mx-0 text-sm">
            Histórias reais de quem resolveu o problema na nossa loja em Salvador.
          </p>
        </div>
        
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / itemsPerView)}%)` }}
          >
            {realReviews.map((rev, i) => {
              const initials = rev.name.substring(0, 2).toUpperCase();
              return (
                <div key={i} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="bg-[#0f172a] border border-[#1e293b] p-5 rounded-xl flex flex-col gap-3 h-[200px] hover:border-[#0066FF]/40 transition-colors">
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic flex-1 text-xs leading-relaxed line-clamp-4">
                      "{rev.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-[#1e293b]/50">
                      <div className="w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                        {initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-100 text-xs">{rev.name}</h4>
                        <p className="text-slate-500 text-[10px]">Avaliação no Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-8 h-8 rounded-full border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0066FF] transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: Math.min(maxIndex + 1, 10) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${current === i ? "bg-[#0066FF] w-5" : "bg-slate-700 w-1.5"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-8 h-8 rounded-full border border-[#1e293b] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0066FF] transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewReviews;

