const steps = [
  { num: "1", title: "Fale Conosco", desc: "Mande uma mensagem relatando o problema." },
  { num: "2", title: "Avaliação", desc: "Nossos técnicos avaliam e passam o orçamento." },
  { num: "3", title: "Reparo Rápido", desc: "Aprovou? Consertamos e devolvemos seu aparelho." },
];
const NewHowItWorks = () => (
  <section className="bg-zinc-50 text-zinc-900 py-24 px-4 border-b border-zinc-200 overflow-hidden">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">Como funciona</h2>
      <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-blue-200 z-0"></div>
        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[280px] mx-auto">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black mb-6 shadow-xl border-8 border-zinc-50">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-900">{step.title}</h3>
            <p className="text-zinc-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default NewHowItWorks;
