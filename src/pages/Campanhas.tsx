import HeroSection from "@/components/campanhas/HeroSection";
import ClientsCarousel from "@/components/campanhas/ClientsCarousel";
import CampaignsSection from "@/components/campanhas/CampaignsSection";
import CampaignCTA from "@/components/campanhas/CampaignCTA";
import BastidoresSection from "@/components/campanhas/BastidoresSection";
import DifferentialsSection from "@/components/campanhas/DifferentialsSection";
import CtaSection from "@/components/campanhas/CtaSection";
import ContactForm from "@/components/campanhas/ContactForm";
import FooterSection from "@/components/campanhas/FooterSection";
import pageBg from "@/assets/campanhas/page-bg.jpg";

const Campanhas = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${pageBg})` }}
    >
      <HeroSection />
      <CampaignsSection />
      <CampaignCTA />
      <BastidoresSection />
      <ClientsCarousel />
      <DifferentialsSection />
      <CtaSection />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default Campanhas;
