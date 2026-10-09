import { Link } from "react-router-dom";

const BairrosAtendidos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          Atendemos por Bairro
        </h2>
        <p className="text-zinc-600 mb-8">
          Atendemos clientes de vários bairros de Salvador. Veja informações por serviço e região:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/informacoes" className="text-[#0066FF] hover:underline">
            Todas as informações por bairro
          </a>
          <a href="/informacoes/celular-nao-liga-boca-do-rio" className="text-[#0066FF] hover:underline">
            Celular não liga na Boca do Rio
          </a>
          <a href="/informacoes/celular-nao-liga-pituba" className="text-[#0066FF] hover:underline">
            Celular não liga na Pituba
          </a>
          <a href="/informacoes/celular-caiu-na-agua-boca-do-rio" className="text-[#0066FF] hover:underline">
            Celular que caiu na água na Boca do Rio
          </a>
          <a href="/informacoes/celular-caiu-na-agua-imbui" className="text-[#0066FF] hover:underline">
            Celular molhado no Imbuí
          </a>
          <a href="/informacoes/conserto-de-notebook-boca-do-rio" className="text-[#0066FF] hover:underline">
            Conserto de notebook na Boca do Rio
          </a>
          <a href="/informacoes/conserto-de-notebook-pituba" className="text-[#0066FF] hover:underline">
            Conserto de notebook na Pituba
          </a>
          <a href="/informacoes/conserto-de-xiaomi-boca-do-rio" className="text-[#0066FF] hover:underline">
            Conserto de Xiaomi na Boca do Rio
          </a>
          <a href="/informacoes/conserto-de-xiaomi-brotas" className="text-[#0066FF] hover:underline">
            Conserto de Xiaomi em Brotas
          </a>
          <a href="/informacoes/reparo-de-placa-celular-boca-do-rio" className="text-[#0066FF] hover:underline">
            Reparo de placa de celular na Boca do Rio
          </a>
          <a href="/informacoes/conserto-de-tablet-boca-do-rio" className="text-[#0066FF] hover:underline">
            Conserto de tablet na Boca do Rio
          </a>
          <a href="/informacoes/troca-de-tela-celular-pituba" className="text-[#0066FF] hover:underline">
            Troca de tela de celular na Pituba
          </a>
          <a href="/informacoes/troca-de-bateria-iphone-11-salvador" className="text-[#0066FF] hover:underline">
            Troca de bateria do iPhone 11 em Salvador
          </a>
        </div>
      </div>
    </section>
  );
};

export default BairrosAtendidos;

