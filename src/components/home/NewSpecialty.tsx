const features = [
  { num: "01", title: "Reparo no mesmo dia", desc: "Seu aparelho de volta rápido — sem enrolação, respeitando prazos e com máxima agilidade para serviços de tela e bateria." },
  { num: "02", title: "Laboratório próprio", desc: "Não terceirizamos serviços. Nossa loja em Salvador conta com maquinário de ponta para micro-soldagem e reparo de placas." },
  { num: "03", title: "Peças premium", desc: "Trabalhamos apenas com componentes de alta qualidade, garantindo as cores originais da sua tela e a autonomia real da sua bateria." }
];

const NewSpecialty = () => (
  <section className="bg-[#0a0f18] text-white py-32 md:py-48 px-4 md:px-6 lg:px-8 border-t border-[#1e293b]">
    <div className="max-w-6xl mx-auto">
      
      <div className="mb-24 md:mb-40">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-[2px] bg-[#0066FF]"></span>
          <span className="text-[#0066FF] font-bold text-sm tracking-[0.2em] uppercase">Por que a Reparo Avançado</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-3xl">
          Feito pra quem não <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#60a5fa]">pode ficar sem celular.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e293b] rounded-3xl overflow-hidden border border-[#1e293b] shadow-2xl">
        {features.map((feat, i) => (
          <div key={i} className="bg-[#0f172a] p-10 md:p-14 flex flex-col hover:bg-[#131d36] transition-colors">
            <span className="text-[#0066FF] font-mono text-base font-bold mb-8">{feat.num}</span>
            <h3 className="text-2xl font-bold text-slate-100 mb-5">{feat.title}</h3>
            <p className="text-slate-400 text-base md:text-lg leading-loose">{feat.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default NewSpecialty;

