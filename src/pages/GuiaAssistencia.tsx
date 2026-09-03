import { useState } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle2, HelpCircle, Search, DollarSign, ShieldCheck, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437";

const AccordionItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-center justify-between"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-900 flex items-center gap-3 text-base md:text-lg">
          <HelpCircle className="w-5 h-5 text-[#0066FF] shrink-0" />
          {question}
        </span>
        <span className="text-[#0066FF] text-3xl leading-none font-light shrink-0 ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 text-slate-600 leading-relaxed text-sm md:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const GuiaAssistencia = () => {
  return (
    <>
      {/* SEÇÃO 1: INTRODUÇÃO E PRINCIPAIS SERVIÇOS (ESCURO) */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Guia de Assistência Técnica em Salvador:<br />
              <span className="text-gradient">Qualidade e Especialização</span>
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
          </div>

          {/* Intro - Quebra de densidade de texto */}
          <div className="mb-16">
            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Ficar com o celular quebrado ou apresentando falhas é sempre um grande transtorno. Seja para trabalho, 
              comunicação com a família ou lazer, os smartphones hoje são ferramentas indispensáveis. Quando surge um problema, 
              a escolha de uma <strong>assistência técnica em Salvador</strong> de confiança é crucial para garantir que o seu aparelho 
              volte a funcionar com total segurança e desempenho original.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card/30 border border-border p-6 rounded-2xl flex flex-col items-center text-center hover:bg-card/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Diagnóstico Detalhado</h3>
                <p className="text-sm text-muted-foreground">Avaliação técnica precisa antes de qualquer intervenção no seu aparelho.</p>
              </div>
              
              <div className="bg-card/30 border border-border p-6 rounded-2xl flex flex-col items-center text-center hover:bg-card/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Orçamento Transparente</h3>
                <p className="text-sm text-muted-foreground">Valores justos e sem surpresas na hora de realizar o pagamento.</p>
              </div>

              <div className="bg-card/30 border border-border p-6 rounded-2xl flex flex-col items-center text-center hover:bg-card/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Garantia de 90 Dias</h3>
                <p className="text-sm text-muted-foreground">Segurança total e suporte garantido em todos os serviços executados.</p>
              </div>
            </div>
          </div>

          <hr className="border-border/50 mb-12" />

          {/* Principais Serviços */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Principais Serviços Realizados por Especialistas
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Troca de Tela de Celular
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A tela é a interface principal do seu dispositivo e, por ser de vidro, o componente mais vulnerável a acidentes cotidianos. 
                Se a tela do seu aparelho trincou, quebrou, apresenta manchas escuras ou o touch screen parou de responder, nós podemos ajudar. 
                Realizamos a <Link to="/troca-de-tela" className="text-primary hover:underline font-semibold">Troca de Tela</Link> utilizando 
                peças premium que preservam o brilho original, a nitidez das cores e a resposta tátil exata do fabricante. Nossos técnicos fazem a 
                substituição com ferramentas adequadas para não danificar o chassi do celular e aplicam a vedação necessária.
              </p>
            </div>

            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Troca de Bateria com Alta Durabilidade
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Você percebeu que a bateria do seu celular descarrega rápido, o aparelho desliga sozinho mesmo com carga ou a carcaça parece 
                estar estufando? Estes são sintomas clássicos de desgaste. A 
                <Link to="/troca-de-bateria" className="text-primary hover:underline font-semibold"> Troca de Bateria</Link> é recomendada quando a 
                saúde da célula cai abaixo de 80%. Em nossa oficina, substituímos por componentes homologados que respeitam a 
                capacidade original, prevenindo riscos de superaquecimento.
              </p>
            </div>

            <div className="bg-card border border-border p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                Reparo de Placa: Microeletrônica Avançada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Muitas assistências tradicionais costumam condenar celulares que não ligam ou que tiveram contato com líquidos. 
                Na Reparo Avançado, somos especialistas em 
                <Link to="/reparo-em-placa" className="text-primary hover:underline font-semibold"> Reparo de Placa</Link>. Nosso laboratório é 
                equipado com ferramentas de micro-soldagem. Conseguimos recuperar circuitos (CIs) e solucionar falhas de rede ou carregamento. 
                Consertar a placa original é a alternativa mais econômica.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: ESPECIALIDADE NAS MARCAS (CLARO) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Especialidade nas Principais Marcas
            </h2>
            <div className="h-1 w-24 bg-[#0066FF] mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trabalhamos de forma focada e customizada para os ecossistemas das principais marcas globais, 
              garantindo o tratamento técnico adequado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Conserto de iPhone</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Os aparelhos da Apple exigem técnicas extremamente detalhadas. Nosso serviço de <strong>conserto de iPhone</strong> abrange 
                desde telas e baterias até reparo lógico. Garantimos que funções cruciais como True Tone e Face ID continuem funcionando.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Conserto de Samsung</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                As linhas Galaxy possuem telas AMOLED avançadas. Ao realizar o <strong>conserto de Samsung</strong>, aplicamos displays que 
                devolvem todo o contraste natural. Também trocamos conectores Tipo-C, microfones e alto-falantes com peças de alta performance.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Conserto de Xiaomi</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                O <strong>conserto de Xiaomi</strong> na nossa loja resolve problemas como aparelhos que entram em loop infinito (travados na logo), 
                falhas no sensor de presença, câmeras trêmulas e problemas de conector nas populares linhas Redmi e Poco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: ONDE ESTAMOS (ESCURO) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold text-foreground mb-6">
            Onde Estamos: Atendimento Presencial
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Nossa sede física está localizada na <strong>Boca do Rio</strong>, um ponto estratégico de fácil acesso para quem mora ou trabalha em Salvador. 
            Se você reside em bairros como Pituba, Imbuí, Stiep ou Costa Azul, nosso endereço oferece rotas simples e estacionamento conveniente.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Você pode consultar todos os <Link to="/locais-de-atendimento" className="text-primary hover:underline font-semibold">Locais de Atendimento</Link> em 
            nosso site. Visite também o nosso <Link to="/blog" className="text-primary hover:underline font-semibold">Blog</Link> para dicas técnicas. 
            Oferecemos serviço rápido: trocas de tela e bateria geralmente são feitas em <strong>menos de 1 hora!</strong>
          </p>
        </div>
      </section>

      {/* SEÇÃO 4: FAQ E CTA (CLARO) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <div className="h-1 w-20 bg-[#0066FF] mx-auto rounded-full mb-6" />
          </div>

          <div className="mb-12">
            <AccordionItem 
              question="O diagnóstico técnico é realmente gratuito?"
              answer={
                <>
                  Sim! Na Reparo Avançado, acreditamos que você deve saber exatamente o que seu aparelho tem antes de decidir gastar. 
                  Realizamos a avaliação completa de hardware e circuito interno e fornecemos o orçamento sem qualquer custo ou compromisso.
                </>
              }
            />
            <AccordionItem 
              question="Qual é o prazo da garantia oferecido nos reparos?"
              answer={
                <>
                  Oferecemos uma <strong>garantia de 90 dias</strong> (3 meses) em todos os serviços realizados e peças substituídas em nosso laboratório. 
                  Esta garantia cobre qualquer defeito de funcionamento ou vício de fabricação do componente instalado.
                </>
              }
            />
            <AccordionItem 
              question="Vocês realizam consertos em aparelhos molhados?"
              answer={
                <>
                  Sim! Realizamos processos de desoxidação química avançada. Caso seu aparelho caia na água, a recomendação de ouro é 
                  desligá-lo imediatamente, não tentar carregá-lo na tomada sob hipótese alguma, e trazê-lo o quanto antes para evitarmos a corrosão.
                </>
              }
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-10 border-t border-slate-200">
            <p className="text-slate-600 text-lg mb-6 font-medium">
              Fale com nossa equipe e receba uma avaliação para seu aparelho agora mesmo.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento pelo WhatsApp
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default GuiaAssistencia;
