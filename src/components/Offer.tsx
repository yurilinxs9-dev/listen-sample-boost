import { Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <section id="oferta" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=800&fit=crop"
                alt="Audiobooks em smartphones"
                className="w-full rounded-2xl shadow-card"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                OFERTA IMPERDÍVEL
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                200 ÁUDIOS LIVROS
              </h2>
              
              <p className="text-xl">
                + Bônus <span className="text-primary font-bold">3.500 LIVROS</span> em pdf <span className="bg-primary text-white px-2 py-1 rounded font-bold">BEST SELLERS</span>
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Acesso vitalício a todo conteúdo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Download ilimitado em todos dispositivos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">3.500 PDFs bônus inclusos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Atualizações futuras totalmente grátis</span>
                </div>
              </div>

              <div className="bg-secondary/50 border-2 border-primary rounded-2xl p-6 space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground line-through">de R$ 397,00</p>
                  <p className="text-5xl font-bold text-primary">R$ 19,90</p>
                  <p className="text-sm text-muted-foreground">pagamento único</p>
                </div>
                
                <Button className="w-full btn-cta">
                  COMPRAR AGORA
                </Button>
              </div>

              <div className="flex items-center justify-center gap-3 bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
                <Shield className="w-12 h-12 text-yellow-600" />
                <div>
                  <p className="font-bold text-yellow-900">GARANTIA DE 7 DIAS</p>
                  <p className="text-sm text-yellow-800">
                    Compre sem transtornos! Se não ficar satisfeito, devolvemos seu dinheiro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
