import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import FeaturedHighlights from "@/components/FeaturedHighlights";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />
        
        <FeaturedBooks />

        <FeaturedHighlights />

        <Testimonials />
        
        <Benefits />
        
        <Offer />

        <FAQ />
      </main>

      <Footer />
      
      <StickyCTA />
    </div>
  );
};

export default Index;
