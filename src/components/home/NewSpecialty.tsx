const features = [
  { num: "01", title: "Reparo no mesmo dia", desc: "Sem enrolação, respeitando prazos e com máxima agilidade para serviços de tela e bateria." },
  { num: "02", title: "Laboratório próprio", desc: "Maquinário de ponta para micro-soldagem e reparo de placas. Nada terceirizado." },
  { num: "03", title: "Peças premium", desc: "Componentes de alta qualidade, cores originais da tela e autonomia real da bateria." }
];

const NewSpecialty = () => (
  <section className="bg-[#0a0f18] text-white py-16 md:py-20 px-4 md:px-6 lg:px-8 border-t border-[#1e293b]">
    <div className="max-w-5xl mx-auto">
      
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-[#0066FF]"></span>
          <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase">Por que a Reparo Avançado</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight max-w-2xl">
          Feito pra quem não{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">pode ficar sem celular.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e293b] rounded-xl overflow-hidden border border-[#1e293b]">
        {features.map((feat, i) => (
          <div key={i} className="bg-[#0f172a] p-6 md:p-8 flex flex-col hover:bg-[#131d36] transition-colors">
            <span className="text-[#0066FF] font-mono text-xs font-bold mb-4">{feat.num}</span>
            <h3 className="text-base font-bold text-slate-100 mb-2">{feat.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default NewSpecialty;

