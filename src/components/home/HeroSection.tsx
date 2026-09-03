import { useEffect, useRef, useState } from "react";
import { MessageSquare, Settings2 } from "lucide-react";

const TOTAL_FRAMES = 300; // As extracted by ffmpeg

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Pre-load images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    
    // Set initial array so the canvas effect can run
    setImages(loadedImages);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;
      
      img.onload = () => {
        loadedImages[i - 1] = img;
        setImages([...loadedImages]);
      };
      
      loadedImages[i - 1] = img;
    }
    
    // Final state update
    setImages([...loadedImages]);
  }, []);

  // Handle scroll to calculate progress (0 to 1)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollableDistance = height - viewportHeight;
      let progress = -top / scrollableDistance;
      
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Draw current frame on canvas based on scroll progress
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    // Distribute 300 frames over the scroll progress
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(scrollProgress * TOTAL_FRAMES)
    );
    const img = images[frameIndex];

    if (img && img.complete) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const { width, height } = canvasRef.current;
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        
        let drawWidth = width;
        let drawHeight = height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          drawWidth = height * imgRatio;
          offsetX = (width - drawWidth) / 2;
        } else {
          drawHeight = width / imgRatio;
          offsetY = (height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }
  }, [scrollProgress, images]);

  // Determine which text state to show based on scroll progress
  const getStateOpacity = (index: number) => {
    const thresholds = [
      { start: 0, end: 0.33 },
      { start: 0.33, end: 0.66 },
      { start: 0.66, end: 1 }
    ];
    
    const { start, end } = thresholds[index];
    if (scrollProgress >= start - 0.05 && scrollProgress <= end + 0.05) {
      return "opacity-100 translate-y-0 pointer-events-auto";
    }
    return "opacity-0 translate-y-4 pointer-events-none";
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-slate-950 text-white"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        <div className="absolute inset-0 bg-slate-950"></div>
        
        {/* Glow and circuit effect (using CSS radial gradient as requested) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-slate-950/90 to-slate-950 z-0"></div>

        {/* Canvas for the animation */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 z-20"></div>

        {/* Dynamic Text Content */}
        <div className="relative z-30 w-full max-w-5xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center justify-center text-center h-full">
          
          <div className="relative w-full flex-grow flex items-center justify-center mt-12 md:mt-0">
            {/* State 1 */}
            <div className={`absolute transition-all duration-700 ease-in-out w-full ${getStateOpacity(0)}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl text-white">
                Tela quebrada, celular não liga<br className="hidden md:block"/> ou parou de funcionar?
              </h1>
            </div>
            
            {/* State 2 */}
            <div className={`absolute transition-all duration-700 ease-in-out w-full ${getStateOpacity(1)}`}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-2xl text-white">
                A gente encontra o problema com<br className="hidden md:block"/> <span className="text-blue-400">diagnóstico técnico real</span> — sem achismo.
              </h2>
            </div>
            
            {/* State 3 */}
            <div className={`absolute transition-all duration-700 ease-in-out w-full ${getStateOpacity(2)}`}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-2xl text-white">
                E devolve seu aparelho como novo.<br className="hidden md:block"/> <span className="text-blue-400">Peças de qualidade, garantia de verdade.</span>
              </h2>
            </div>
          </div>

          {/* Fixed CTAs at the bottom of the viewport */}
          <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://wa.me/5571991981437?text=Olá! Vim pelo site e gostaria de solicitar um diagnóstico para o meu aparelho."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:scale-105 w-full sm:w-auto text-lg"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp agora
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-full border border-white/20 transition-all w-full sm:w-auto text-lg"
            >
              <Settings2 className="w-5 h-5" />
              Ver serviços
            </a>
          </div>

          {/* Contact Info Footer (Desktop) */}
          <div className="absolute bottom-6 left-0 w-full px-6 hidden md:flex justify-between items-end text-sm text-slate-300">
            <div className="text-left drop-shadow-md">
              <p className="font-bold text-white mb-1">Reparo Avançado</p>
              <p>Rua Abelardo Andrade de Carvalho, 8</p>
              <p>Boca do Rio, Salvador - BA, 41706-710</p>
            </div>
            <div className="text-right drop-shadow-md">
              <p className="font-bold text-white mb-1">WhatsApp: (71) 99198-1437</p>
              <p>Segunda a sexta 8h-18h</p>
              <p>Sábado 8h-17h</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Parity Block: Visually hidden but accessible to Googlebot */}
      <div className="sr-only">
        <h1>Tela quebrada, celular não liga ou parou de funcionar?</h1>
        <p>A gente encontra o problema com diagnóstico técnico real — sem achismo.</p>
        <p>E devolve seu aparelho como novo. Peças de qualidade, garantia de verdade.</p>
        <a href="https://wa.me/5571991981437?text=Olá! Vim pelo site e gostaria de solicitar um diagnóstico para o meu aparelho.">Falar no WhatsApp agora</a>
        <a href="#servicos">Ver serviços</a>
        <h2>Reparo Avançado</h2>
        <p>Rua Abelardo Andrade de Carvalho, 8 - Boca do Rio, Salvador - BA, 41706-710</p>
        <p>WhatsApp: (71) 99198-1437. Horário: Segunda a sexta 8h-18h, Sábado 8h-17h.</p>
      </div>
    </section>
  );
};

export default HeroSection;
