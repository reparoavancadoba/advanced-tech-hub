import { Users, Eye, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  { icon: Users, title: "Especialistas", desc: "Técnicos experientes e em constante atualização para lidar com diferentes modelos e marcas." },
  { icon: Eye, title: "Transparência", desc: "Explicamos o problema e apresentamos o orçamento antes de qualquer intervenção." },
  { icon: ShieldCheck, title: "Garantia", desc: "Serviços elegíveis com garantia para sua tranquilidade e segurança." },
  { icon: Zap, title: "Agilidade", desc: "Processos otimizados e organização para entregar seu aparelho no menor tempo possível." },
];

const SymptomsSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologia exige cuidado. Reparo também.</h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Unimos experiência técnica, equipamentos adequados e atendimento transparente para oferecer o melhor para o seu aparelho.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="border border-zinc-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
