const features = [
  { num: "01", title: "Reparo no mesmo dia", desc: "Seu aparelho de volta rápido — sem enrolação, respeitando prazos e com máxima agilidade para serviços de tela e bateria." },
  { num: "02", title: "Laboratório próprio", desc: "Não terceirizamos serviços. Nossa loja em Salvador conta com maquinário de ponta para micro-soldagem e reparo de placas." },
  { num: "03", title: "Peças premium", desc: "Trabalhamos apenas com componentes de alta qualidade, garantindo as cores originais da sua tela e a autonomia real da sua bateria." }
];

const NewSpecialty = () => (
  <section className="bg-[#0a0f18] text-white py-16 md:py-24 px-4 md:px-6 lg:px-8 border-t border-[#1e293b]">
    <div className="max-w-6xl mx-auto">
      
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#0066FF]"></span>
          <span className="text-[#0066FF] font-semibold text-sm tracking-widest uppercase">Por que a Reparo Avançado</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] max-w-2xl">
          Feito pra quem não <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">pode ficar sem celular.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e293b] rounded-2xl overflow-hidden border border-[#1e293b]">
        {features.map((feat, i) => (
          <div key={i} className="bg-[#0f172a] p-8 md:p-10 flex flex-col hover:bg-[#131d36] transition-colors">
            <span className="text-[#0066FF] font-mono text-sm font-bold mb-6">{feat.num}</span>
            <h3 className="text-xl font-bold text-slate-100 mb-4">{feat.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default NewSpecialty;

