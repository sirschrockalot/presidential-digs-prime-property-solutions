import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SituationsGrid from "../components/home/SituationsGrid";
import ServiceAreas from "../components/home/ServiceAreas";
import Testimonials from "../components/home/Testimonials";
import FAQPreview from "../components/home/FAQPreview";
import FinalCTA from "../components/home/FinalCTA";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <WhyChooseUs />
      <SituationsGrid />
      <Testimonials />
      <ServiceAreas />
      <FAQPreview />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
