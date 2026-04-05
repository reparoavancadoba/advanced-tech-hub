import { Shield, Award, Users, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Award, label: "9 Anos de Mercado" },
  { icon: Shield, label: "Peças Premium" },
  { icon: Users, label: "Técnicos Certificados" },
  { icon: BadgeCheck, label: "Garantia em todos os serviços" },
];

const AuthoritySection = () => {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center glow-blue">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
