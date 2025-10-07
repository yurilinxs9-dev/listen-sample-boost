import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CreditCard, Zap } from "lucide-react";

const Offer = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card border-2 border-primary/20">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full">
              <span className="text-sm font-semibold text-primary">Oferta Especial</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              Acesso Completo ao Catálogo
            </h2>

            <div className="flex items-baseline justify-center gap-2">
              <span className="text-2xl text-muted-foreground line-through">R$ 497</span>
              <span className="text-5xl md:text-6xl font-bold text-primary">R$ 297</span>
            </div>

            <p className="text-xl text-muted-foreground">
              Pagamento único • Acesso vitalício • Sem mensalidades
            </p>

            <Button size="lg" className="hover-glow text-lg px-12 py-6 w-full md:w-auto">
              Garantir Meu Acesso Agora
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-8 h-8 text-accent" />
                <p className="text-sm font-semibold">Garantia de 7 Dias</p>
                <p className="text-xs text-muted-foreground text-center">
                  100% do seu dinheiro de volta se não gostar
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <CreditCard className="w-8 h-8 text-accent" />
                <p className="text-sm font-semibold">Pagamento Seguro</p>
                <p className="text-xs text-muted-foreground text-center">
                  Seus dados protegidos com criptografia
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Zap className="w-8 h-8 text-accent" />
                <p className="text-sm font-semibold">Acesso Imediato</p>
                <p className="text-xs text-muted-foreground text-center">
                  Comece a ouvir em menos de 2 minutos
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Offer;
