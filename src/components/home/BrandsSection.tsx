const BrandsSection = () => {
  const brands = ["Apple", "Samsung", "Xiaomi", "Motorola"];

  return (
    <section className="bg-gray-50 text-zinc-900 py-12 px-4 md:px-8 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8 text-zinc-600">Especialistas nas principais marcas</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-xl md:text-3xl font-extrabold text-zinc-400 tracking-wider">
              {brand.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
