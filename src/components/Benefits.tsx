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
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Pack Audio Livros Incríveis é a melhor escolha para quem deseja transformar sua mentalidade e alcançar a independência financeira.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover-lift bg-gradient-to-b from-secondary/50 to-white border border-border"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-sm uppercase">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-bold mb-6">
            COMPRE AGORA O MELHOR PACK PARA O SEU DESENVOLVIMENTO PESSOAL
          </p>
          <button 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cta"
          >
            EU QUERO!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
