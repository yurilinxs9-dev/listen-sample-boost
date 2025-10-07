import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/audiobooks";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que nossos ouvintes dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover-scale">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-sm mb-4">{testimonial.message}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.user[0]}
                  </span>
                </div>
                <span className="font-semibold text-sm">{testimonial.user}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
