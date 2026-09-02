import { Star } from "lucide-react";

const ReviewsSection = () => {
  return (
    <section className="bg-zinc-50 text-zinc-900 py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem já confia, recomenda.</h2>
        <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
          Nosso compromisso é com a transparência e a qualidade técnica. Confira o que nossos clientes reais dizem no Google.
        </p>
        <div className="inline-flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
          <div className="flex gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-2xl font-bold mb-1">5,0</span>
          <span className="text-zinc-500 text-sm mb-6">Mais de 160 avaliações no Google</span>
          <a
            href="https://google.com/search?q=Reparo+Avan%C3%A7ado+Boca+do+Rio+Salvador"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-colors"
          >
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
