import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/home/TickerSection";
import NewCtaBlock from "@/components/home/NewCtaBlock";
import NewWhatWeDo from "@/components/home/NewWhatWeDo";
import NewWhyChooseUs from "@/components/home/NewWhyChooseUs";
import NewSpecialty from "@/components/home/NewSpecialty";
import NewAboutUs from "@/components/home/NewAboutUs";
import NewReviews from "@/components/home/NewReviews";
import NewHowItWorks from "@/components/home/NewHowItWorks";
import NewFinalCta from "@/components/home/NewFinalCta";
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
        <title>Conserto de Celular em Salvador | Reparo Avançado</title>
        <meta name="description" content="Assistência técnica focada em iPhone, Samsung e reparo avançado de placa em Salvador. Mais de 7 anos de experiência na Boca do Rio. Orçamento gratuito na hora!" />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      
      <HeroSection />
      
      <FadeIn><TickerSection /></FadeIn>
      <FadeIn><NewCtaBlock /></FadeIn>
      <FadeIn><NewWhatWeDo /></FadeIn>
      <FadeIn><NewWhyChooseUs /></FadeIn>
      <FadeIn><NewSpecialty /></FadeIn>
      <FadeIn><NewAboutUs /></FadeIn>
      <FadeIn><NewReviews /></FadeIn>
      <FadeIn><NewHowItWorks /></FadeIn>
      <FadeIn><NewFinalCta /></FadeIn>
    </SiteLayout>
  );
};

export default Index;
