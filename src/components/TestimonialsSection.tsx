import { Star } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const testimonials = [
  { name: "Daniela Falcão", time: "Há 4 horas", text: "Amei, obrigada!", rating: 5 },
  { name: "Matheus Filipe", time: "Há 8 horas", text: "Gostei do serviço", rating: 5 },
  { name: "Evellyn Arruda", time: "Há 5 dias", text: "Ótimo atendimento, muito solicitos e prestativos.", rating: 5 },
  { name: "Nexus Company", time: "Há 2 semanas", text: "Melhor empresa para conserto de celulares, faz todos os serviços aqui da empresa confio de olhos fechados", rating: 5 },
  { name: "Matheus Bastoz", time: "Há 2 semanas", text: "Muito profissionais, me ajudou muito e não cobrou caro preço justo", rating: 5 },
  { name: "Caio", time: "Há 2 semanas", text: "Tive lá foi um bom serviço e atendimento, trabalharam com delicadeza e profissionalismo, gostei muito", rating: 5 },
  { name: "Maria", time: "Há 2 semanas", text: "Loja organizada, serviço de qualidade e ótimo custo-benefício. Fiz um reparo no conector de carga e ficou perfeito. Melhor assistência técnica especializada em iPhone em Salvador!", rating: 5 },
  { name: "jonathan", time: "Há 2 semanas", text: "Excelente experiência! Fiz a troca de tela do meu iPhone e ficou como novo. Serviço rápido, peças de qualidade e preço justo. Melhor assistência técnica na região!", rating: 5 },
  { name: "LUCCA Reis", time: "Há 6 semanas", text: "Ótimo atendimento bem educado todos me trataram bem e bem explicativo ótimos atendentes ótimos produtos", rating: 5 },
  { name: "Aline Tourinho", time: "Há 7 semanas", text: "Me salvaram muito consertando meu celular. Atendimento rápido e o conserto também não demorou!", rating: 5 },
  { name: "Victória", time: "Há 8 semanas", text: "Excelente atendimento, material de qualidade e rapidez no serviço. Te explica tido de forma detalhada, é extremamente atencioso e receptivo!", rating: 5 },
  { name: "eliel guedes", time: "Há 13 semanas", text: "Atendimento excelente. Além de serem super educados e atenciosos o serviço prestado é de ótima qualidade e muito, muito rápido. Super recomendo.", rating: 5 },
  { name: "Juliana Matos", time: "Há 14 semanas", text: "Atendimento maravilhoso! Muito cuidadoso no serviço, explica tudo direitinho. Serviço com valor justo e o melhor de tudo: entrega rápida e de qualidade!", rating: 5 },
  { name: "Ana Luiza Ferreira Barbosa Santos", time: "Há 22 semanas", text: "O melhor lugar de Salvador pra consertar celular! Já levei o meu e o do meu marido, ambos ficaram perfeitos. Atendimento excelente e com ótimo custo-benefício.", rating: 5 },
  { name: "Marcos Caldas", time: "Há 22 semanas", text: "Excelente serviço! Achei que teria que trocar o celular, mas eles conseguiram recuperar a placa. Fiquei impressionado com a agilidade e a transparência do atendimento. Voltarei sempre que precisar!", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = testimonials.length - itemsPerView;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary px-5 py-2 rounded-full mb-6">
            <span className="font-semibold text-foreground">Avaliações Reais no Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mais de <span className="text-gradient">143 avaliações reais</span> de clientes
          </h2>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-foreground">Nota média: 5.0</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-gold text-gold" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto overflow-hidden">
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
                <div className="bg-card rounded-xl p-6 border border-border h-full shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      {t.name[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
