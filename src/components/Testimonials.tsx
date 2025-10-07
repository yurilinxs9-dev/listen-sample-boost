import { Star } from "lucide-react";
import { testimonials } from "@/data/audiobooks";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Veja o que nossos alunos estão dizendo
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Milhares de pessoas já transformaram suas vidas com nossa biblioteca de audiobooks
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all relative shadow-lg"
            >
              {/* WhatsApp style bubble tail */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-card border-l-2 border-b-2 border-primary/20 transform rotate-45"></div>
              
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-lg">
                  {testimonial.user[0]}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground mb-1">{testimonial.user}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
