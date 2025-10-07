import { MessageCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Leonardo V. Castro",
      message: "Olá! Estamos adorando os audiobooks! Conteúdo de qualidade 👏😊",
      time: "10:47"
    },
    {
      name: "Luciane S. Lima",
      message: "Que coleção incrível! Já ouvi 3 livros essa semana 📚🎧",
      time: "14:23"
    },
    {
      name: "Jackeline M. Oliveira",
      message: "Perfeito! Escuto no trânsito todos os dias. Recomendo! 🚗",
      time: "09:15"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            VEJA O QUE NOSSOS LEITORES ESTÃO DIZENDO:
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#DCF8C6] rounded-2xl rounded-tl-none p-4 shadow-card hover-lift"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </div>
              </div>
              <p className="text-sm mb-2">{testimonial.message}</p>
              <p className="text-xs text-muted-foreground text-right">{testimonial.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
