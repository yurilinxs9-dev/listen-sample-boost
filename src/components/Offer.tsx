import { Shield, CheckCircle2, Headphones, BookOpen, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl"></div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl border-4 border-primary/40 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-10">
              <div className="inline-block bg-primary/20 text-primary px-6 py-2 rounded-full font-bold mb-4 animate-pulse">
                🔥 OFERTA POR TEMPO LIMITADO
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                Oferta Imperdível
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Transforme sua vida com acesso completo por um preço imbatível
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { 
                  icon: Headphones, 
                  title: "200+ Audiobooks", 
                  description: "Best-sellers em desenvolvimento pessoal e financeiro",
                  details: "Inclui: Pai Rico Pai Pobre, O Poder do Hábito, Mindset e muito mais"
                },
                { 
                  icon: BookOpen, 
                  title: "3500+ PDFs Bônus", 
                  description: "Biblioteca digital completa de finanças, negócios e autodesenvolvimento",
                  details: "Acesso a livros clássicos e contemporâneos em formato PDF"
                },
                { 
                  icon: Zap, 
                  title: "Acesso Vitalício", 
                  description: "Pague uma vez e use para sempre",
                  details: "Sem mensalidades, sem taxas recorrentes"
                },
                { 
                  icon: Sparkles, 
                  title: "Atualizações Grátis", 
                  description: "Novos audiobooks e PDFs adicionados mensalmente",
                  details: "Sua biblioteca cresce sem custo adicional"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col gap-3 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border-2 border-primary/30 hover:border-primary/50 transition-all shadow-lg group hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground/80 pl-[72px]">{benefit.details}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center bg-gradient-to-r from-primary/30 to-accent/30 p-10 rounded-2xl border-4 border-primary/50 mb-10 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse"></div>
              <div className="relative z-10">
                <p className="text-muted-foreground line-through text-3xl mb-3 opacity-70">De R$ 497,00</p>
                <p className="text-7xl md:text-8xl font-black text-primary mb-3 drop-shadow-2xl">R$ 19,90</p>
                <div className="inline-block bg-accent text-white px-6 py-3 rounded-full font-bold text-xl shadow-xl">
                  💰 Economia de mais de 95%!
                </div>
              </div>
            </div>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-cta w-full py-8 rounded-2xl font-black text-2xl uppercase shadow-2xl hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                🚀 GARANTIR MINHA VAGA AGORA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <div className="text-center mt-8 space-y-4">
              <div className="flex items-center justify-center gap-3 bg-accent/20 border-2 border-accent/40 rounded-xl p-4">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <p className="font-bold text-foreground">Garantia de 7 dias</p>
                  <p className="text-sm text-muted-foreground">100% do seu dinheiro de volta</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                🔒 Pagamento seguro e criptografado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
