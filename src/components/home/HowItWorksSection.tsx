import { Search, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: Search, num: "1", title: "Diagnóstico", desc: "Avaliamos seu aparelho para identificar a origem do problema." },
  { icon: FileText, num: "2", title: "Orçamento", desc: "Você recebe as informações do serviço antes da execução." },
  { icon: Wrench, num: "3", title: "Reparo", desc: "Após sua autorização, realizamos o reparo com técnica e cuidado." },
  { icon: CheckCircle, num: "4", title: "Testes e Entrega", desc: "Testamos todas as funções aplicáveis e devolvemos seu aparelho pronto." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-20 px-4 md:px-8 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Do diagnóstico à solução.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold shadow-lg">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
