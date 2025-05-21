
import { PageLayout } from "@/components/page-layout";
import { HeroSection } from "@/components/hero-section";
import { IntroSection } from "@/components/intro-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
