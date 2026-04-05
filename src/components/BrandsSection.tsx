const brands = [
  { name: "Apple" },
  { name: "Samsung" },
  { name: "Xiaomi" },
  { name: "Motorola" },
  { name: "LG" },
  { name: "ASUS" },
];

// TODO: As imagens oficiais das logos serão enviadas pelo usuário.
// Substitua os placeholders abaixo pelas logos reais quando disponíveis.

const BrandsSection = () => {
  return (
    <section className="py-16 bg-card/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Especialistas nas <span className="text-gradient">Principais Marcas</span>
          </h2>
          <p className="text-muted-foreground">
            Peças de altíssima qualidade para todos os modelos.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              {/* Placeholder for brand logo - replace with actual logos */}
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-bold text-muted-foreground">
                  {brand.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
