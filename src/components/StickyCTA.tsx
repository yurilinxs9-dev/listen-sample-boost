import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <button
        onClick={scrollToOffer}
        className="btn-cta px-6 py-4 rounded-full font-bold uppercase shadow-2xl hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 flex items-center gap-2 text-sm md:text-base"
      >
        <span>🚀 Garantir Vaga</span>
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default StickyCTA;
