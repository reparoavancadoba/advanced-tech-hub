import HeroSection from "@/components/HeroSection";
import ProofLocationSection from "@/components/home/ProofLocationSection";
import HomeSeoSection from "@/components/HomeSeoSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import GallerySection from "@/components/home/GallerySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SiteLayout from "@/components/SiteLayout";
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
        <meta name="description" content="Assistência técnica focada em iPhone, Samsung e reparo avançado de placa em Salvador. Mais de 7 anos de experiência na Boca do Rio. Orçamento gratuito na hora!" />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      
      <HeroSection />
      <ProofLocationSection />
      <HomeSeoSection />
      <ServicesSection />
      <BrandsSection />
      <GallerySection />
      <HowItWorksSection />
      <TestimonialsSection />
    </SiteLayout>
  );
};

export default Index;
