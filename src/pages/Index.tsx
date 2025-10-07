import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/CategoryCarousel";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import { categories } from "@/data/audiobooks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />
        
        <section id="categorias" className="py-12 space-y-12">
          <div className="container px-4">
            {categories.map((category) => (
              <CategoryCarousel
                key={category.name}
                title={category.name}
                audiobooks={category.books}
              />
            ))}
          </div>
        </section>

        <Testimonials />
        
        <Benefits />
        
        <Offer />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
