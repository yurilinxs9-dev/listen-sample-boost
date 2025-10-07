import { Download, Zap, FileText, RefreshCw } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Download,
      title: "DOWNLOAD ILIMITADO",
      description: "Baixe quantos livros quiser! Você pode baixá-los e ouvir quantas vezes quiser!",
      color: "text-green-500 bg-green-500/10"
    },
    {
      icon: Zap,
      title: "ACESSO VITALÍCIO",
      description: "Aproveite seu conteúdo para sempre. Acesso sem data de vencimento e sem taxas extras!",
      color: "text-yellow-500 bg-yellow-500/10"
    },
    {
      icon: FileText,
      title: "+ Bônus 3500 LIVROS EM PDF",
      description: "Complemento perfeito para comparar textos de áudio. Conteúdo em PDF compatível com qualquer dispositivo!",
      color: "text-blue-500 bg-blue-500/10"
    },
    {
      icon: RefreshCw,
      title: "ATUALIZAÇÕES",
      description: "Você terá acesso a todas as atualizações futuras. Sempre terá acesso às edições e versões atualizadas!",
      color: "text-purple-500 bg-purple-500/10"
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
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
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
