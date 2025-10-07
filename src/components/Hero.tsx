import { Button } from "@/components/ui/button";
import heroDevices from "@/assets/hero-devices.png";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Devices Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroDevices}
                alt="Audiobooks em tablet e smartphone"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              A Chave para o<br />
              <span className="text-gradient">Seu Próximo Nível</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground">
              <span className="text-primary font-bold">200 ÁUDIOS</span> Best-Sellers
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              que <strong>Transformam Sua Mentalidade e Potencializam Suas Finanças</strong> – Tudo em um Único Lugar, com Conteúdos Selecionados para Acelerar Seu Crescimento Pessoal e Profissional.
            </p>

            <div className="pt-4">
              <Button 
                onClick={scrollToOffer}
                className="btn-cta text-xl px-12 py-6 h-auto"
              >
                QUERO IR PARA O PRÓXIMO NÍVEL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
