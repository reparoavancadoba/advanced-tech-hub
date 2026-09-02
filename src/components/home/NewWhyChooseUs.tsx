const reasons = [
  { num: "01", title: "Diagnóstico Transparente", desc: "Avaliamos seu aparelho na hora e mostramos exatamente o que precisa ser feito, sem surpresas." },
  { num: "02", title: "Garantia de 90 Dias", desc: "Trabalhamos com peças de altíssima qualidade para garantir a durabilidade do reparo." },
  { num: "03", title: "Agilidade no Serviço", desc: "A maioria dos reparos é feita no mesmo dia para você não ficar desconectado." }
];
const NewWhyChooseUs = () => (
  <section className="bg-zinc-900 text-white py-24 px-4 border-t border-white/5">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Por que escolher a <span className="text-blue-500">Reparo Avançado</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="flex flex-col gap-4 bg-zinc-950/50 p-8 rounded-2xl border border-white/5 hover:-translate-y-1 transition-transform">
            <span className="text-6xl font-black text-blue-600/20 mb-2">{r.num}</span>
            <h3 className="text-xl font-bold text-blue-400">{r.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default NewWhyChooseUs;
