const reasons = [
  { num: "01", title: "Diagnóstico Transparente", desc: "Avaliamos seu aparelho na hora e mostramos exatamente o que precisa ser feito, sem surpresas." },
  { num: "02", title: "Garantia de 90 Dias", desc: "Trabalhamos com peças de altíssima qualidade para garantir a durabilidade do reparo." },
  { num: "03", title: "Agilidade no Serviço", desc: "A maioria dos reparos é feita no mesmo dia para você não ficar desconectado." }
];
const NewWhyChooseUs = () => (
  <section className="bg-white text-zinc-900 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 border-t border-zinc-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center">Por que escolher a <span className="text-[#0066FF]">Reparo Avançado</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="flex flex-col gap-4 bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md">
            <span className="text-6xl font-black text-[#0066FF]/10 mb-2">{r.num}</span>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-[#0066FF]">{r.title}</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default NewWhyChooseUs;
