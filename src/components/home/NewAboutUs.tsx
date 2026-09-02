const NewAboutUs = () => (
  <section className="bg-white text-zinc-900 py-24 px-4">
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 w-full">
        <div className="aspect-video md:aspect-square bg-zinc-200 rounded-2xl overflow-hidden shadow-lg border border-zinc-300 flex items-center justify-center">
          <img src="/images/fachada-loja.jpg" alt="Fachada da loja Reparo Avançado" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Quem somos</h2>
        <p className="text-zinc-600 text-lg leading-relaxed">
          Há mais de 7 anos cuidando do que é importante pra você na Boca do Rio e região.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Nossa missão é oferecer um serviço de assistência técnica pautado na honestidade, transparência e alta capacidade técnica. Sabemos o quanto seu celular ou notebook faz falta no dia a dia, por isso focamos em resolver rápido sem perder a qualidade.
        </p>
      </div>
    </div>
  </section>
);
export default NewAboutUs;
