import { Star } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  { name: "Daniela Falcão", time: "Há 4 horas", text: "Amei o atendimento na loja física, tudo muito rápido! Obrigada!", rating: 5 },
  { name: "Matheus Filipe", time: "Há 8 horas", text: "Gostei do atendimento e do valor do orçamento do aparelho.", rating: 5 },
  { name: "Evellyn Arruda", time: "Há 5 dias", text: "Ótimo atendimento presencial, muito solícitos e prestativos.", rating: 5 },
  { name: "Nexus Company", time: "Há 2 semanas", text: "Melhor loja física para conserto de celulares em Salvador. Confiamos de olhos fechados.", rating: 5 },
  { name: "Matheus Bastoz", time: "Há 2 semanas", text: "Muito profissionais, me ajudaram muito e cobraram preço justo na avaliação.", rating: 5 },
  { name: "Caio", time: "Há 2 semanas", text: "Estive lá e tive um ótimo serviço e atendimento. Trabalham com delicadeza e transparência.", rating: 5 },
  { name: "Maria", time: "Há 2 semanas", text: "Loja organizada, serviço de qualidade e ótimo custo-benefício. Fiz o conserto do meu celular e ficou excelente.", rating: 5 },
  { name: "Jonathan", time: "Há 2 semanas", text: "Excelente experiência! Fiz a troca de tela do meu aparelho e ficou como novo. Serviço rápido.", rating: 5 },
  { name: "Lucca Reis", time: "Há 6 semanas", text: "Ótimo atendimento, muito receptivos e explicam tudo direitinho na loja.", rating: 5 },
  { name: "Aline Tourinho", time: "Há 7 semanas", text: "Resolveram o problema do meu celular. Atendimento rápido e a avaliação também não demorou!", rating: 5 }
];

const VersatilTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="avaliacoes" className="py-24 bg-zinc-950 text-white border-b border-zinc-900 relative">
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-zinc-800/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-0.5 w-12 bg-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            AVALIAÇÕES
          </h2>
          <p className="text-zinc-400 mt-2">O que dizem os nossos clientes no Google Business Profile</p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 h-full flex flex-col justify-between hover:border-zinc-800 transition-colors duration-300">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-base">
                        {t.name[0].toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{t.name}</h4>
                        <p className="text-zinc-500 text-xs">{t.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-350 ${
                i === current ? "bg-emerald-500 w-6" : "bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersatilTestimonials;
