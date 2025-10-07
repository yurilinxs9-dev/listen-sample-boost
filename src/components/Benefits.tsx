import { Download, Infinity, FileText, RefreshCw } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Download,
      title: "DOWNLOAD ILIMITADO",
      description: "Baixe quantos livros quiser! Você pode baixá-los e ouvir quantas vezes quiser!"
    },
    {
      icon: Infinity,
      title: "ACESSO VITALÍCIO",
      description: "Aproveite seu conteúdo para sempre. Acesso sem data de vencimento e sem taxas extras!"
    },
    {
      icon: FileText,
      title: "+ Bônus 3500 LIVROS EM PDF",
      description: "Complemento perfeito para comparar textos de áudio. Conteúdo em PDF compatível com qualquer dispositivo!"
    },
    {
      icon: RefreshCw,
      title: "ATUALIZAÇÕES",
      description: "Você terá acesso a todas as atualizações futuras. Sempre terá acesso às edições e versões atualizadas!"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Benefícios Exclusivos
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Tudo que você precisa para transformar sua vida
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all text-center shadow-lg hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cta text-xl px-12 py-4 rounded-md font-bold uppercase"
          >
            EU QUERO!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
