import { Helmet } from "react-helmet-async";
import SiteLayout from "@/components/SiteLayout";
import { MessageCircle, BatteryCharging, Cable, Headphones, Smartphone, Shield } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const categories = [
  {
    title: "Carregadores e Fontes",
    icon: BatteryCharging,
    desc: "Carregadores de parede rápidos e fontes compatíveis com diversas marcas.",
  },
  {
    title: "Cabos",
    icon: Cable,
    desc: "Cabos de alta durabilidade para carregamento e transferência de dados.",
  },
  {
    title: "Fones Bluetooth e com Fio",
    icon: Headphones,
    desc: "Fones de ouvido com qualidade de som e isolamento, opções sem fio e tradicionais.",
  },
  {
    title: "Capas de Proteção",
    icon: Smartphone,
    desc: "Diversos modelos de capas para proteger seu aparelho contra quedas e arranhões.",
  },
  {
    title: "Películas",
    icon: Shield,
    desc: "Películas de vidro 3D, cerâmica e gel para máxima proteção da tela.",
  },
];

const Acessorios = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Acessórios para Celulares e Notebooks | Reparo Avançado</title>
        <meta name="description" content="Encontre capas, películas, carregadores, cabos e fones na Reparo Avançado, em Salvador (Boca do Rio)." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/acessorios" />
      </Helmet>

      <section className="py-16 bg-graphite text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Acessórios para Celulares</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Complemente e proteja seu aparelho com nossa seleção de acessórios. Trabalhamos com capas, películas, cabos e carregadores variados.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-light-gray p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    Consultar disponibilidade <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Celulares Disponíveis para Venda</h2>
          <p className="text-gray-300 mb-8">
            Periodicamente possuímos aparelhos seminovos revisados e disponíveis para venda em nossa loja física na Boca do Rio.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Ver modelos em estoque
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Acessorios;
