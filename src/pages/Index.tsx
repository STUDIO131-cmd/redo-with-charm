import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CarouselSection from "@/components/CarouselSection";
import LocationSection from "@/components/LocationSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CarouselSection />
      <LocationSection />
      <TeamSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
