import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { bairros, servicosLocais } from "@/data/locaisData";

const LocaisDeAtendimento = () => {
  const title = "Locais de Atendimento em Salvador | Reparo Avançado";
  const description =
    "Atendimento técnico de celulares em todos os bairros de Salvador: Boca do Rio, Imbuí, Pituba, Costa Azul, Stiep, Caminho das Árvores, Itaigara, Rio Vermelho, Patamares, Piatã, Itapuã, Cabula e Brotas.";
  const canonical = "https://site.reparoavancado.com.br/locais-de-atendimento";

  return (
    <SiteLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Locais de Atendimento em <span className="text-gradient">Salvador</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Atendemos todos os principais bairros de Salvador com serviços técnicos de alta qualidade. Encontre seu bairro e o serviço desejado.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bairros.map((bairro) => (
              <div key={bairro.slug} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">{bairro.name}</h2>
                </div>
                <ul className="space-y-2">
                  {servicosLocais.map((servico) => (
                    <li key={servico.slug}>
                      <Link
                        to={`/atendimento/${bairro.slug}/${servico.slug}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5"
                      >
                        → {servico.shortName} no {bairro.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LocaisDeAtendimento;
