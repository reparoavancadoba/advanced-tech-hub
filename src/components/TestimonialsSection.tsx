import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Oliveira",
    time: "3 meses atrás",
    text: "Troquei a tela do meu iPhone 13 e ficou perfeito! Serviço rápido e atendimento excelente. Super recomendo!",
    rating: 5,
  },
  {
    name: "Mariana Santos",
    time: "5 meses atrás",
    text: "Meu Samsung caiu na água e deram como perdido em outra loja. Levei na Reparo Avançado e recuperaram tudo! Incrível.",
    rating: 5,
  },
  {
    name: "Rafael Costa",
    time: "2 meses atrás",
    text: "Reparo de placa do meu iPhone X. Profissionais muito competentes, transparência total no serviço. Voltarei sempre!",
    rating: 5,
  },
  {
    name: "Camila Ferreira",
    time: "1 mês atrás",
    text: "Atendimento nota 10! Trocaram a bateria do meu celular em menos de 40 minutos. Preço justo e garantia.",
    rating: 5,
  },
  {
    name: "Diego Almeida",
    time: "4 meses atrás",
    text: "Melhor assistência técnica da Boca do Rio! Já indiquei para vários amigos. Confiança total no trabalho deles.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header with Google rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary px-5 py-2 rounded-full mb-6">
            <span className="font-semibold text-foreground">Feedbacks Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veja os <span className="text-gradient">Depoimentos</span> dos nossos clientes
          </h2>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-foreground">EXCELENTE</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm mt-1">Com base em 31 avaliações</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.time}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm">{t.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
          >
            Nos Avalie no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
