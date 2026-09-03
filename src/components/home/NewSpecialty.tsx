const NewSpecialty = () => (
  <section className="bg-[#0066FF] text-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Especialidade em Reparo Avançado</h2>
        <p className="text-sm md:text-base text-blue-100 leading-relaxed">
          Temos laboratório próprio equipado com maquinário de ponta para realizar desde a troca de um conector até reparos complexos em placas.
        </p>
        <p className="text-sm md:text-base text-blue-100 leading-relaxed">
          Tratamos seu <strong className="text-white">Apple, Samsung, Xiaomi, Motorola, LG e ASUS</strong> com o cuidado técnico que ele merece, respeitando os padrões de fábrica e garantindo a preservação dos seus dados.
        </p>
      </div>
      <div className="flex-1 w-full">
        <div className="aspect-video bg-[#0052cc] rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center">
          <img src="/images/laboratorio.png" alt="Laboratório de Reparo Avançado" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  </section>
);
export default NewSpecialty;
