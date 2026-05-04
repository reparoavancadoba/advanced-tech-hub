import SiteLayout from "@/components/SiteLayout";
import DetailedServicesSection from "@/components/DetailedServicesSection";
import { Helmet } from "react-helmet-async";

const Servicos = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Serviços | Reparo Avançado - Assistência Técnica em Salvador</title>
        <meta name="description" content="Conheça todos os serviços da Reparo Avançado: troca de tela, bateria, reparo de placa, Face ID, biometria e mais. Atendimento em Boca do Rio, Salvador - BA." />
        <link rel="canonical" href="https://site.reparoavancado.com.br/servicos" />
      </Helmet>
      <DetailedServicesSection />
    </SiteLayout>
  );
};

export default Servicos;
