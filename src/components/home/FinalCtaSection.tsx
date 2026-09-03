import { MessageSquare, Phone, MapPin } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="bg-zinc-900 text-white py-20 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para consertar seu aparelho?</h2>
        <p className="text-lg text-zinc-300 mb-10">
          Fale com a gente agora mesmo. Orçamento rápido, transparente e sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5571991981437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 bg-[#0066FF] text-white hover:bg-blue-500 gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+5571991981437"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 bg-zinc-800 text-white hover:bg-zinc-700 gap-2"
          >
            <Phone className="w-5 h-5" />
            Ligar
          </a>
          <a
            href="https://maps.google.com/?q=R.+Abelardo+Andrade+de+Carvalho,+8+-+Boca+do+Rio,+Salvador+-+BA,+41706-710"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 bg-white text-zinc-900 hover:bg-zinc-200 gap-2"
          >
            <MapPin className="w-5 h-5" />
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
