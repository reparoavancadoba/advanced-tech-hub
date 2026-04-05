import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AuthoritySection />
      <ServicesSection />
      <TestimonialsSection />
      <DifferentialsSection />
      <FooterSection />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
