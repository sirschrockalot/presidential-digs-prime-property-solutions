import { Seo } from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SituationsGrid from "../components/home/SituationsGrid";
import Testimonials from "../components/home/Testimonials";
import ServiceAreas from "../components/home/ServiceAreas";
import FAQPreview from "../components/home/FAQPreview";
import FinalCTA from "../components/home/FinalCTA";

const Index = () => (
  <>
    <Seo
      title="Presidential Digs | Sell Your House Fast for Cash"
      description="Sell your house quickly for a fair cash offer with no repairs, fees, or showings. Presidential Digs gives motivated sellers a dignified, professional way to move on."
      canonicalPath="/"
    />
    <Header />
    <main>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <SituationsGrid />
      <FAQPreview />
      <ServiceAreas />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
