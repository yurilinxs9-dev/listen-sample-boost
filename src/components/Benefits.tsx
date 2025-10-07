import { Card } from "@/components/ui/card";
import { Download, Infinity, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Download,
    title: "Download Ilimitado",
    description: "Baixe quantos audiobooks quiser e ouça offline, onde e quando quiser."
  },
  {
    icon: Infinity,
    title: "Acesso Vitalício",
    description: "Pague uma vez e tenha acesso para sempre. Sem mensalidades ou renovações."
  },
  {
    icon: FileText,
    title: "Bônus PDFs",
    description: "Receba materiais complementares em PDF para aprofundar seu aprendizado."
  },
  {
    icon: Sparkles,
    title: "Atualizações Futuras",
    description: "Novos livros e recursos adicionados regularmente, sem custo adicional."
  }
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Por que escolher nossa plataforma?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Oferecemos a melhor experiência em audiobooks com benefícios exclusivos que você não encontra em outros lugares.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover-scale text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="hover-glow text-lg px-8 py-6">
            Eu Quero!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
