import fs from 'fs';

const heroContent = `import { MessageCircle, Star, MessageSquare, BadgeCheck, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const HeroSection = () => {
  return (
    <section className="relative w-full text-white pt-24 lg:pt-28 pb-8 overflow-hidden bg-[#0a0f18] min-h-screen flex flex-col justify-center">
      
      {/* Full Background Image - Fixed alignment to keep top sign visible */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/HERO (2).png" 
          alt="Fundo Reparo Avançado" 
          className="w-full h-full object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] via-[#0a0f18]/80 to-transparent md:hidden" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col">
        
        {/* Content Box */}
        <div className="w-full md:w-[60%] lg:w-[55%] flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight mb-4 lg:mb-6 leading-[1.35]">
            Assistência técnica de celulares e notebooks <span className="text-[#3b82f6] drop-shadow-md">com diagnóstico técnico e peças de qualidade.</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-6 lg:mb-8 max-w-xl leading-relaxed">
            Mais de 7 anos cuidando do que é importante pra você. Boca do Rio, <span className="text-[#3b82f6] font-semibold">Salvador - BA.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-6 py-4 lg:px-8 lg:py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-base lg:text-lg w-full sm:w-auto shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white font-semibold px-6 py-4 lg:px-8 lg:py-4 rounded-xl transition-all text-base lg:text-lg w-full sm:w-auto shrink-0"
            >
              Ver serviços
            </a>
          </div>

          {/* Trust Badges Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 w-full">
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <Star className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">+7 anos</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1">de experiência</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <MessageSquare className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">+164 avaliações</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1 leading-tight">5 estrelas no Google</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <BadgeCheck className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">Peças de</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1">qualidade</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-3 lg:p-4 border border-white/10 rounded-2xl bg-[#111827]/80 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7 text-[#3b82f6] mb-2" strokeWidth={1.5} />
              <span className="font-bold text-sm text-white leading-tight">Garantia no</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400 mt-1">serviço</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;`;

const navContent = `import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo-reparo-avancado.png';

const WHATSAPP_LINK = 'https://wa.me/5571991981437';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
  { label: 'Localização', href: '/localizacao' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f18]/60 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-7xl relative">
        <Link to="/" className="flex items-center z-20 shrink-0">
          <img src={logo} alt="Reparo Avançado" className="h-10 md:h-12" />
        </Link>
        <div className="hidden md:flex items-center justify-center absolute inset-0 pointer-events-none">
          <div className="flex items-center gap-8 pointer-events-auto">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => handleClick(item.href)} className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center z-20 shrink-0">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0066FF] text-white hover:bg-blue-600 px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white z-20" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0a0f18]/95 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => handleClick(item.href)} className="text-base font-medium text-slate-300 hover:text-white py-2">
                {item.label}
              </Link>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#0066FF] text-white hover:bg-blue-600 px-4 py-3 rounded-lg text-base font-semibold mt-2">
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;`;

fs.writeFileSync('src/components/HeroSection.tsx', heroContent, 'utf8');
fs.writeFileSync('src/components/Navbar.tsx', navContent, 'utf8');

// Fix index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
// Fix corrupted characters if any remain
indexHtml = indexHtml.replace(/9 anos de experi\w+ncia/g, 'Mais de 7 anos de experiência');
indexHtml = indexHtml.replace(/experi\w+ncia/g, 'experiência');
indexHtml = indexHtml.replace(/Or\w+mento/g, 'Orçamento');
indexHtml = indexHtml.replace(/R\w+pido/g, 'Rápido');
indexHtml = indexHtml.replace(/Avan\w+do/g, 'Avançado');
indexHtml = indexHtml.replace(/9 anos/g, 'Mais de 7 anos');

fs.writeFileSync('index.html', indexHtml, 'utf8');

// Fix prerender.ts metadata as well to reflect "Mais de 7 anos"
let prerenderContent = fs.readFileSync('scripts/prerender.ts', 'utf8');
prerenderContent = prerenderContent.replace(/9 anos de/g, 'Mais de 7 anos de');
fs.writeFileSync('scripts/prerender.ts', prerenderContent, 'utf8');
