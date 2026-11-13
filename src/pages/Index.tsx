import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/home/TickerSection";
import NewCtaBlock from "@/components/home/NewCtaBlock";
import NewWhatWeDo from "@/components/home/NewWhatWeDo";

import NewSpecialty from "@/components/home/NewSpecialty";
import NewAboutUs from "@/components/home/NewAboutUs";
import NewReviews from "@/components/home/NewReviews";
import NewHowItWorks from "@/components/home/NewHowItWorks";
import NewFinalCta from "@/components/home/NewFinalCta";
import BairrosAtendidos from "@/components/BairrosAtendidos";
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
        <title>Reparo Avançado: Celular, Tablet e Notebook na Boca do Rio</title>
        <meta name="description" content="Assistência técnica de celular, tablet e notebook na Boca do Rio, Salvador. Avaliação gratuita, coleta e entrega e 90 dias de garantia. Chame no WhatsApp." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      
      <HeroSection />
      
      <FadeIn><TickerSection /></FadeIn>
      <FadeIn><NewCtaBlock /></FadeIn>
      <FadeIn><NewWhatWeDo /></FadeIn>
      
      <FadeIn><NewSpecialty /></FadeIn>
      <FadeIn><NewAboutUs /></FadeIn>
      <FadeIn><NewReviews /></FadeIn>
      <FadeIn><NewHowItWorks /></FadeIn>
      <FadeIn><BairrosAtendidos /></FadeIn>
      <FadeIn><NewFinalCta /></FadeIn>
    </SiteLayout>
  );
};

export default Index;
