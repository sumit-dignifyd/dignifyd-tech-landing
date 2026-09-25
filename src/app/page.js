import ContactExperts from "@/sections/ContactExperts";
import FAQSection from "@/sections/FAQSection";
import FocusedServices from "@/sections/FocusedServices";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import HowWeWork from "@/sections/HowWeWork";
import ProblemAgitation from "@/sections/ProblemAgitation";
import TechnologyPartnerBanner from "@/sections/TechnologyPartnerBanner";
import Testimonials from "@/sections/Testimonials";
import TrustedSolutions from "@/sections/TrustedSolutions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemAgitation />
      <TrustedSolutions />
      <HowWeWork />
      <Testimonials />
      <FocusedServices />
      <TechnologyPartnerBanner />
      <FAQSection />
      <ContactExperts />
      <Footer />
    </>
  );
}
