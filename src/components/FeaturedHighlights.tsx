import paiRicoPaiPobre from "@/assets/pai-rico-pai-pobre-oficial.png";
import doMilAoMilhao from "@/assets/do-mil-ao-milhao.png";
import seteHabitos from "@/assets/7-habitos.png";
import quemPensaEnriquece from "@/assets/quem-pensa-enriquece.png";

const FeaturedHighlights = () => {
  const highlights = [
    {
      image: paiRicoPaiPobre,
      description: "Domine a psicologia do dinheiro e aprenda a gerir suas finanças com inteligência para alcançar a estabilidade e o sucesso financeiro.",
      title: "Pai Rico, Pai Pobre"
    },
    {
      image: doMilAoMilhao,
      description: "Explore diversas modalidades de investimentos, da renda fixa à variável, além de insights valiosos sobre empreendedorismo para tomar decisões financeiras mais acertadas.",
      title: "Do Mil ao Milhão"
    },
    {
      image: seteHabitos,
      description: "Aprenda com Stephen Covey sobre proatividade e responsabilidade pessoal para alcançar novos patamares na sua carreira.",
      title: "Os 7 Hábitos das Pessoas Altamente Eficazes"
    },
    {
      image: quemPensaEnriquece,
      description: "Descubra como moldar uma mentalidade de sucesso com livros que inspiram e motivam, como 'Quem Pensa Enriquece'.",
      title: "Quem Pensa Enriquece"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Recomendações
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full aspect-[2/3] mb-4 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHighlights;
