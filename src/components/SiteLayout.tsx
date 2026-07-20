import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Helmet } from "react-helmet-async";

interface SiteLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const SiteLayout = ({ children, showFooter = true }: SiteLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    const handleWhatsAppClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && (link.href.includes('wa.me') || link.href.includes('whatsapp.com') || link.href.includes('/whatsapp'))) {
        e.preventDefault();
        
        let pageType = 'outros';
        let serviceName = 'nenhum';
        const path = location.pathname;
        
        if (path === '/') {
          pageType = 'home';
        } else if (path.startsWith('/blog')) {
          pageType = 'blog';
        } else if (path.startsWith('/assistencia-tecnica')) {
          pageType = 'servico-local';
        } else if (path.startsWith('/conserto')) {
          pageType = 'servico-local';
          serviceName = path.split('/')[2] || 'nenhum';
        } else {
          pageType = 'servico';
          serviceName = path.split('/')[1] || 'nenhum';
        }
        
        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'whatsapp_click', {
            page_location: window.location.href,
            page_type: pageType,
            service_name: serviceName
          });
        }
        
        // Delay to allow GA4 to fire
        setTimeout(() => {
          if (link.target === '_blank') {
            window.open(link.href, '_blank');
          } else {
            window.location.href = link.href;
          }
        }, 150);
      }
    };

    document.addEventListener('click', handleWhatsAppClick);
    return () => document.removeEventListener('click', handleWhatsAppClick);
  }, [location.pathname]);
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Reparo Avançado",
    "image": "https://site.reparoavancado.com.br/favicon.png",
    "telephone": "+5571991981437",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Abelardo Andrade de Carvalho, 8",
      "addressLocality": "Salvador",
      "addressRegion": "BA",
      "postalCode": "41706-710",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.9798, // Coordenada aproximada de Salvador/Boca do Rio
      "longitude": -38.4556 
    },
    "url": "https://site.reparoavancado.com.br",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main className="pt-16">{children}</main>
      {showFooter && <FooterSection />}
      <WhatsAppFab />
    </div>
  );
};

export default SiteLayout;
