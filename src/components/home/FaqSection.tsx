import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "O orçamento tem algum custo?", answer: "Não, nosso orçamento é totalmente gratuito e sem compromisso." },
  { question: "Vocês dão garantia no serviço?", answer: "Sim, todos os nossos serviços possuem garantia legal de 90 dias contra defeitos nas peças substituídas ou no reparo efetuado." },
  { question: "Quanto tempo demora o conserto?", answer: "Depende do problema. Trocas de tela e bateria costumam ser feitas no mesmo dia. Reparos em placa podem levar de 2 a 5 dias úteis." },
  { question: "Usam peças originais?", answer: "Trabalhamos tanto com peças originais (retiradas ou fornecidas pela fabricante quando aplicável) quanto com peças compatíveis de primeira linha. O cliente escolhe a melhor opção para seu orçamento." },
];

const FaqSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-zinc-700">
              <AccordionTrigger className="text-left font-medium hover:text-zinc-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
