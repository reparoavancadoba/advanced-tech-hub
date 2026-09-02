import { Link } from "react-router-dom";

const articles = [
  { title: "Como saber se a bateria do iPhone viciou?", desc: "Dicas para identificar quando é a hora certa de trocar a bateria do seu Apple.", link: "#" },
  { title: "Celular caiu na água, o que fazer?", desc: "Passos cruciais para tentar salvar seu aparelho após contato com líquidos.", link: "#" },
  { title: "Vale a pena consertar a placa?", desc: "Entenda quando o reparo avançado de placa é a melhor opção para seu bolso.", link: "#" },
];

const BlogHighlightsSection = () => {
  return (
    <section className="bg-white text-zinc-900 py-16 px-4 md:px-8 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Blog e Dicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div key={idx} className="border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-zinc-600 mb-6 flex-grow">{article.desc}</p>
              <Link to={article.link} className="text-primary font-medium hover:underline">
                Ler artigo completo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlightsSection;
