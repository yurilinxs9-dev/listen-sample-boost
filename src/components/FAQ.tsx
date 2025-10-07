import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "COMO VOU RECEBER MEU ACESSO?",
      answer: "Você receberá por e-mail ou WhatsApp um link de pagamento. Imediatamente após seu pagamento ser aprovado, diretamente para seu e-mail cadastrado."
    },
    {
      question: "POSSO COMPRAR DEPOIS?",
      answer: "Sim, você pode retornar a qualquer momento. Porém, o investimento atual é promocional e pode sofrer alterações a qualquer momento."
    },
    {
      question: "É SEGURO BAIXAR NO DISPOSITIVO?",
      answer: "Sim! Seu dispositivo é compatível com qualquer dispositivo. Celular, computador, tablet, etc."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            DÚVIDAS FREQUENTES
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary/50 rounded-lg px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
