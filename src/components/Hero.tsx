import { Button } from "@/components/ui/button";
import heroDevices from "@/assets/hero-devices.png";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-background via-background to-card py-20 md:py-32">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Video Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <video 
                src={heroVideo}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
                poster={heroDevices}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A Chave para o<br />
              <span className="text-primary">Seu Próximo Nível</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-foreground font-bold">
              <span className="text-primary">200 ÁUDIOS</span> Best-Sellers
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              que <strong className="text-foreground">Transformam Sua Mentalidade e Potencializam Suas Finanças</strong> – Tudo em um Único Lugar, com Conteúdos Selecionados para Acelerar Seu Crescimento Pessoal e Profissional.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToOffer}
                className="btn-cta text-lg px-10 py-4 rounded-md font-bold uppercase tracking-wide"
              >
                Quero Ir Para o Próximo Nível
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
