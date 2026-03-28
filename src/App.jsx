import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import ServicesSection from "./components/ServicesSection";
import AboutArtist from "./components/AboutArtist";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";
import FloatingCallButton from "./components/FloatingCallButton";

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-beige font-sans selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutArtist />
        <ServicesSection />
        <PortfolioGrid />
        <Testimonials />
      </main>

      <ContactFooter />
      <FloatingCallButton />
    </div>
  );
}

export default App;
