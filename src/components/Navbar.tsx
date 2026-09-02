import { useState } from 'react';
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
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] shadow-[#25D366]/20 px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all">
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
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] shadow-[#25D366]/20 px-4 py-3 rounded-lg text-base font-semibold mt-2">
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;