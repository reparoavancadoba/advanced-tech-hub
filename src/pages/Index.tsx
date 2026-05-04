import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Reparo Avançado | Assistência Técnica de Celulares em Salvador</title>
        <meta name="description" content="Assistência técnica especializada em iPhone, Samsung e reparo de placa em Salvador. 9 anos de experiência na Boca do Rio. Orçamento gratuito!" />
        <link rel="canonical" href="https://site.reparoavancado.com.br/" />
      </Helmet>
      <HeroSection />
      <BrandsSection />
      <AuthoritySection />
      <ServicesSection />
      <div className="container mx-auto px-4 py-6 text-center">
        <Link
          to="/servicos"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
        >
          Ver todos os serviços detalhados <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <TestimonialsSection />
      <DifferentialsSection />
    </SiteLayout>
  );
};

export default Index;
