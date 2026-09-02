const brands = [
  { name: "Apple" },
  { name: "Samsung" },
  { name: "Xiaomi" },
  { name: "Motorola" },
  { name: "LG" },
  { name: "ASUS" },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            profissionais nas <span className="text-blue-500">Principais Marcas</span>
          </h2>
          <p className="text-zinc-400">
            Peças de altíssima qualidade para todos os modelos.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                <span className="text-xs font-bold text-zinc-400">
                  {brand.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-xs font-medium text-zinc-400">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
