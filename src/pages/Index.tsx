import HeroSection from "@/components/HeroSection";
import NewLpAbout from "@/components/home/NewLpAbout";
import NewLpDelivery from "@/components/home/NewLpDelivery";
import NewLpReasons from "@/components/home/NewLpReasons";
import NewReviews from "@/components/home/NewReviews";
import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";
import { FadeIn } from "@/components/FadeIn";

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
        <title>Assistência Técnica de Celular em Salvador | Reparo Avançado</title>
        <meta name="description" content="Assistência técnica focada em iPhone, Samsung e reparo avançado de placa em Salvador. Experiência desde 2018 na Boca do Rio." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      
      <HeroSection />
      
      <FadeIn><NewLpAbout /></FadeIn>
      <FadeIn><NewLpDelivery /></FadeIn>
      <FadeIn><NewLpReasons /></FadeIn>
      <FadeIn><NewReviews /></FadeIn>
    </SiteLayout>
  );
};

export default Index;
