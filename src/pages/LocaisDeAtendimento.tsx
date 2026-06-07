import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, ChevronRight, Check } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { listLocaisConsolidados } from "@/data/locaisConsolidadosData";
import { servicesHubList } from "@/data/servicosConsolidadosData";

const LocaisDeAtendimento = () => {
  const title = "Locais de Atendimento em Salvador | conserto Avançado";
  const description =
    "atendimento presencial focado nos principais bairros de Salvador: Boca do Rio, Imbuí, Pituba, Brotas e Salvador Centro. Agilidade e garantia perto de você.";
  const canonical = "https://site.reparoavancado.com.br/locais-de-atendimento";

  return (
    <SiteLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Header */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Locais de Atendimento em <span className="text-gradient">Salvador</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Consolidação de atendimento local. Selecione a sua região para obter direções, horários de atendimento e conserto de celulares em Salvador próximo a você.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {listLocaisConsolidados.map((local) => (
              <div key={local.slug} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:glow-blue transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-bold text-foreground">{local.h1.replace("oficina de conserto de celular de Celular na ", "").replace("oficina de conserto de celular de Celular em ", "")}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {local.description}
                  </p>
                  
                  {/* Internal Linking: Link to consolidated service pages under local context */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">Serviços Disponíveis</span>
                    <ul className="grid grid-cols-2 gap-2">
                      {servicesHubList.slice(0, 4).map((serv) => (
                        <li key={serv.slug} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-whatsapp shrink-0" />
                          <Link to={`/${serv.slug}`} className="hover:text-primary hover:underline transition-colors">
                            {serv.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={local.path}
                  className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground py-3 rounded-xl text-sm font-semibold transition-all"
                >
                  Ver Horários e Contato Local
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LocaisDeAtendimento;
