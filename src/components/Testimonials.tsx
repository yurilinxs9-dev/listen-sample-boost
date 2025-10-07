const Testimonials = () => {
  const testimonials = [
    {
      name: "Leonardo",
      message: "Adorei os audiobooks! Conteúdo de qualidade incrível que mudou minha rotina.",
      time: "14:32"
    },
    {
      name: "Luciane",
      message: "Já ouvi 3 livros essa semana. Sensacional para aproveitar o tempo no trânsito!",
      time: "09:15"
    },
    {
      name: "Carlos Silva",
      message: "Melhor investimento que fiz! Os PDFs bônus são excelentes também.",
      time: "16:48"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Veja o que nossos leitores estão dizendo
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Depoimentos reais de quem já transformou sua vida
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-accent/10 p-6 rounded-2xl shadow-lg border border-accent/20 hover:border-accent/40 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                  {testimonial.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <span className="text-xs text-muted-foreground">{testimonial.time}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {testimonial.message}
                  </p>
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
