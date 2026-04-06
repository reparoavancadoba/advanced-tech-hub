import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BrandsSection />
      <AuthoritySection />
      <ServicesSection />
      <DetailedServicesSection />
      {/* Blog CTA */}
      <div className="container mx-auto px-4 py-6 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
        >
          Ver todos os serviços por modelo no Blog <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <TestimonialsSection />
      <DifferentialsSection />
      <FooterSection />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
