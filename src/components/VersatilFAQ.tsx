import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "Como solicitar um orçamento?",
    answer: "Entre em contato pelo WhatsApp e informe seu aparelho para receber orientações iniciais."
  },
  {
    question: "Vocês possuem loja física?",
    answer: "Sim. Atendemos presencialmente em nossa loja física localizada em Salvador/BA."
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "Você pode consultar nosso horário de atendimento atualizado diretamente com nossa equipe pelo WhatsApp."
  },
  {
    question: "Aceitam cartão?",
    answer: "Sim, aceitamos cartões de débito e crédito, com opções de parcelamento."
  },
  {
    question: "Como falar com a equipe?",
    answer: "Você pode falar com nossa equipe comercial pelo WhatsApp clicando em qualquer botão de contato nesta página."
  },
  {
    question: "É necessário agendar horário?",
    answer: "Não necessariamente. Você pode visitar nossa loja física em Salvador para avaliação e atendimento presencial por ordem de chegada."
  }
];

const VersatilFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950 text-white border-b border-zinc-900 relative">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-zinc-800/10 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-0.5 w-12 bg-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-zinc-900 rounded-2xl bg-zinc-900/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isOpen ? "max-h-40 border-t border-zinc-900/50" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 text-zinc-400 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VersatilFAQ;
