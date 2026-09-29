import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteLayout from "../components/SiteLayout";
import { informacoesPages, informacoesIndex } from "../data/informacoesData";

const InformacoesIndex = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>{informacoesIndex.title}</title>
        <meta name="description" content={informacoesIndex.meta} />
      </Helmet>

      <div className="bg-[#001D4A] py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{informacoesIndex.h1}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-zinc-700 text-lg">{informacoesIndex.text}</p>
          <ul className="space-y-4">
            {informacoesPages.map((p) => (
              <li key={p.slug}>
                <Link to={`/informacoes/${p.slug}`} className="text-[#0066FF] hover:underline text-xl font-medium">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
};

export default InformacoesIndex;
