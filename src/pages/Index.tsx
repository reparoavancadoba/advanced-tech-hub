import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import HomeSeoSection from "@/components/HomeSeoSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Reparo Avançado",
    "url": "https://site.reparoavancado.com.br",
    "logo": "https://site.reparoavancado.com.br/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-71-99198-1437",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <SiteLayout>
      <Helmet>
        <title>Conserto de Celular em Salvador | Reparo Avançado</title>
        <meta name="description" content="Assistência técnica focada em iPhone, Samsung e reparo avançado de placa em Salvador. 9 anos de experiência na Boca do Rio. Orçamento gratuito na hora!" />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      
      <div className="container mx-auto px-4 py-4 mb-8 text-center">
        <Link
          to="/servicos"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg"
        >
          Ver todos os serviços detalhados <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <TestimonialsSection />
      
      <HomeSeoSection />
    </SiteLayout>
  );
};

export default Index;
