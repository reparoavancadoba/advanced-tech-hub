import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppFab from "@/components/WhatsAppFab";

interface SiteLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const SiteLayout = ({ children, showFooter = true }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">{children}</main>
      {showFooter && <FooterSection />}
      <WhatsAppFab />
    </div>
  );
};

export default SiteLayout;
