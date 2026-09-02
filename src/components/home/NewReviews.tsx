import { Star } from "lucide-react";
const reviewsList = [
  { name: "João Silva", initials: "JS", color: "bg-emerald-600", model: "iPhone 13", text: "Serviço muito rápido e transparente. Trocaram a tela do meu iPhone na hora!" },
  { name: "Maria Oliveira", initials: "MO", color: "bg-purple-600", model: "Samsung S22", text: "Meu celular não ligava mais, fizeram o reparo na placa e recuperei tudo." },
  { name: "Carlos Santos", initials: "CS", color: "bg-amber-600", model: "Xiaomi Poco X3", text: "Preço justo e atendimento excelente. Recomendo de olhos fechados." },
];
const NewReviews = () => (
  <section className="bg-zinc-950 text-white py-24 px-4 border-y border-white/5">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que nossos clientes dizem</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviewsList.map((rev, i) => (
          <div key={i} className="bg-zinc-900 border border-white/5 p-8 rounded-2xl flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${rev.color} text-xl`}>
                {rev.initials}
              </div>
              <div>
                <h4 className="font-bold text-lg">{rev.name}</h4>
                <p className="text-xs text-zinc-400">{rev.model}</p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-blue-500 text-blue-500" />)}
            </div>
            <p className="text-zinc-300 text-base leading-relaxed italic">"{rev.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default NewReviews;
