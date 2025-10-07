import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o acesso aos audiobooks?",
      answer: "Após a compra, você recebe acesso imediato a toda biblioteca de 200+ audiobooks. Pode ouvir online ou fazer download para ouvir offline."
    },
    {
      question: "O acesso é vitalício mesmo?",
      answer: "Sim! Você paga apenas uma vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional."
    },
    {
      question: "Posso ouvir em qualquer dispositivo?",
      answer: "Sim! Funciona em computadores, tablets e smartphones. Compatível com iOS e Android."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se por qualquer motivo você não gostar, basta solicitar o reembolso em até 7 dias e devolvemos 100% do valor pago."
    },
    {
      question: "Os PDFs bônus estão inclusos?",
      answer: "Sim! Você recebe acesso a mais de 3500 livros em PDF como bônus, além dos 200 audiobooks."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Tire suas dúvidas sobre o acesso
        </p>
        
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-md"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
