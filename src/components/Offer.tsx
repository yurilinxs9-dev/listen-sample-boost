import { Shield, CheckCircle2, Headphones, BookOpen, Infinity, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-background via-card to-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Oferta <span className="text-primary">Imperdível</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforme sua vida hoje com acesso completo
            </p>
          </div>

          <div className="bg-gradient-to-br from-card to-muted rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">200+ Audiobooks</h3>
                    <p className="text-muted-foreground">Best-sellers em finanças, mentalidade e carreira</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">3500+ PDFs Bônus</h3>
                    <p className="text-muted-foreground">Biblioteca completa para leitura</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Infinity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">Acesso Vitalício</h3>
                    <p className="text-muted-foreground">Pague uma vez, use para sempre</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-foreground">Atualizações Grátis</h3>
                    <p className="text-muted-foreground">Novos conteúdos adicionados mensalmente</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 rounded-xl p-8 flex flex-col justify-center items-center border border-border">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground line-through text-2xl mb-2">De R$ 497,00</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-2">R$ 19,90</p>
                  <p className="text-accent font-semibold text-lg">Pagamento único</p>
                </div>

                <button className="btn-cta w-full text-xl py-4 rounded-md font-bold uppercase mb-4">
                  COMPRAR AGORA
                </button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent flex-shrink-0" />
              <p className="text-sm text-foreground">
                <strong>Garantia de 7 dias:</strong> Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
