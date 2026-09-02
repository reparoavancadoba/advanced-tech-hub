const GallerySection = () => {
  // Using placeholders for gallery images
  const images = [
    "https://placehold.co/600x400/27272a/ffffff?text=Laboratorio+1",
    "https://placehold.co/600x400/27272a/ffffff?text=Reparo+em+Placa",
    "https://placehold.co/600x400/27272a/ffffff?text=Troca+de+Tela",
    "https://placehold.co/600x400/27272a/ffffff?text=Atendimento",
  ];

  return (
    <section className="bg-zinc-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nossa Estrutura</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden aspect-video bg-zinc-800">
              <img src={img} alt={`Galeria ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
