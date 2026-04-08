import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import LeadPopup from "@/components/ui/LeadPopup";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CTABanner />
      <Footer />
      <LeadPopup />
      <WhatsAppFloat />
    </>
  );
}
