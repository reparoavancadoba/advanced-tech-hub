import { Star, Eye, ShieldCheck, Zap } from "lucide-react";

const badges = [
  { icon: Star, text: "5,0 no Google — mais de 160 avaliações" },
  { icon: Eye, text: "Diagnóstico com transparência" },
  { icon: ShieldCheck, text: "Peças de qualidade e garantia" },
  { icon: Zap, text: "Agilidade no reparo" },
];

const ProofLocationSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-6 px-4 md:px-8 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start">
              <badge.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm text-zinc-300 font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofLocationSection;
