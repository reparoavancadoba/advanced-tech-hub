import { Helmet } from "react-helmet-async";
import SiteLayout from "@/components/SiteLayout";
import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const Sobre = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Sobre Nós | Reparo Avançado em Salvador</title>
        <meta name="description" content="Conheça a Reparo Avançado, atuando desde 2018 na Boca do Rio, Salvador. Transparência, honestidade e qualidade no reparo do seu aparelho." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/sobre" />
      </Helmet>

      <section className="py-16 bg-graphite text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Reparo Avançado</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Desde 2018 cuidando da vida digital de milhares de clientes em Salvador.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-700 mx-auto">
            <h2 className="text-2xl font-bold text-graphite mb-4">Nossa História</h2>
            <p className="mb-6">
              A Reparo Avançado nasceu com a missão de trazer transparência e profissionalismo para o mercado de assistência técnica em Salvador. Localizada na Boca do Rio, construímos nossa reputação focando no que mais importa: o cliente.
            </p>
            <h2 className="text-2xl font-bold text-graphite mb-4 mt-8">Nossos Valores</h2>
            <ul className="space-y-3 mb-8 list-none pl-0">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Transparência em todos os orçamentos.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Diagnósticos precisos sem falsas promessas.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Garantia técnica por escrito.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Respeito pelo tempo e aparelho do cliente.</li>
            </ul>
            
            <div className="bg-light-gray p-8 rounded-xl text-center mt-12 border border-gray-200">
              <h3 className="text-xl font-bold text-graphite mb-4">Precisa de ajuda com seu aparelho?</h3>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Fale conosco agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Sobre;
