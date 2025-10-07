import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Interactive Video */}
          <div className="relative">
            <div className="relative z-10">
              <video 
                src={heroVideo}
                controls
                className="w-full rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                poster="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&h=1000&fit=crop"
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-center">
                  <div className="text-xs font-semibold">BEST</div>
                  <div className="text-lg font-bold">200+</div>
                  <div className="text-xs">ÁUDIOS</div>
                </div>
              </div>
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
