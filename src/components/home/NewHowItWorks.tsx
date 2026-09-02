const steps = [
  { num: "1", title: "Fale Conosco", desc: "Mande uma mensagem relatando o problema." },
  { num: "2", title: "Avaliação", desc: "Nossos técnicos avaliam e passam o orçamento." },
  { num: "3", title: "Reparo Rápido", desc: "Aprovou? Consertamos e devolvemos seu aparelho." },
];
const NewHowItWorks = () => (
  <section className="bg-white text-zinc-900 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 border-y border-zinc-100 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-zinc-900">Como funciona</h2>
      <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-8 md:gap-0">
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-blue-100 z-0"></div>
        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[280px] mx-auto">
            <div className="w-24 h-24 bg-[#0066FF] rounded-full flex items-center justify-center text-white text-3xl font-black mb-6 shadow-xl border-8 border-white">
              {step.num}
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-zinc-900">{step.title}</h3>
            <p className="text-sm text-zinc-600 text-center">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default NewHowItWorks;
