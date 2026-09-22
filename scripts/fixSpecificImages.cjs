const fs = require('fs');

// Gallery
let c = fs.readFileSync('src/components/home/GallerySection.tsx', 'utf8');
c = c.replace(/loading="lazy" \/>/g, 'loading="lazy" width={600} height={400} />');
fs.writeFileSync('src/components/home/GallerySection.tsx', c);

// NewAboutUs
c = fs.readFileSync('src/components/home/NewAboutUs.tsx', 'utf8');
c = c.replace(/loading="lazy" className="relative z-10 w-full rounded-2xl shadow-2xl"/g, 'loading="lazy" className="relative z-10 w-full rounded-2xl shadow-2xl" width={800} height={600}'); // assuming 800x600 for the placehold.co/800x600?text=Loja+Reparo+Avancado
fs.writeFileSync('src/components/home/NewAboutUs.tsx', c);

// Footer
c = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
c = c.replace(/<img src=\{logo\} alt="Reparo Avançado" className="h-12 mb-4" loading="lazy" \/>/g, '<img src={logo} alt="Reparo Avançado" className="h-12 mb-4" loading="lazy" width={1018} height={392} />');
fs.writeFileSync('src/components/FooterSection.tsx', c);

// Navbar
c = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
c = c.replace(/<img src=\{logo\} alt="Reparo Avançado" className="h-10 md:h-12" \/>/g, '<img src={logo} alt="Reparo Avançado" className="h-10 md:h-12" width={1018} height={392} />');
fs.writeFileSync('src/components/Navbar.tsx', c);

// ServicesSection
c = fs.readFileSync('src/components/ServicesSection.tsx', 'utf8');
c = c.replace(/<img src="\/HERO \(2\).png" alt="Reparo de placa" className="w-full h-full object-cover" loading="lazy"\/>/g, '<img src="/HERO (2).png" alt="Reparo de placa" className="w-full h-full object-cover" loading="lazy" width={1672} height={941} />');
// Wait, is it `/HERO (2).png` in ServicesSection? Let me just catch it generically.
c = c.replace(/<img src="\/HERO \(2\).png"([^>]+)\/>/g, (match, attrs) => {
    if (!attrs.includes('width=')) {
        return `<img src="/HERO (2).png"${attrs} width={1672} height={941} />`;
    }
    return match;
});
fs.writeFileSync('src/components/ServicesSection.tsx', c);
console.log('Fixed real sizes');
