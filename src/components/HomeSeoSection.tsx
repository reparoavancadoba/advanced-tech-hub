import { Link } from "react-router-dom";
import { MessageCircle, CheckCircle2, HelpCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento (Vim pelo Site Orgânico).";

const HomeSeoSection = () => {
  return (
    <section className="py-16 bg-card/10 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* H2 Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Guia de Assistência Técnica em Salvador: <span className="text-gradient">Qualidade e Especialização no Conserto de Celular</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Ficar com o celular quebrado ou apresentando falhas é sempre um grande transtorno. Seja para trabalho, 
            comunicação com a família ou lazer, os smartphones hoje são ferramentas indispensáveis. Quando surge um problema, 
            a escolha de uma <strong>assistência técnica em Salvador</strong> de confiança é crucial para garantir que o seu aparelho 
            volte a funcionar com total segurança e desempenho original.
          </p>

          <p>
            Na <strong>Reparo Avançado</strong>, localizada estrategicamente no bairro da <strong>Boca do Rio</strong>, 
            oferecemos soluções profissionais para os mais variados defeitos em smartphones. Nossa equipe realiza um 
            <strong> diagnóstico técnico</strong> detalhado antes de cada intervenção, garantindo total transparência no 
            orçamento e precisão no conserto. Além disso, todos os nossos serviços contam com uma <strong>garantia de 90 dias</strong> 
            (3 meses), proporcionando a tranquilidade e a segurança que você merece ao confiar seu dispositivo em nossas mãos.
          </p>

          <hr className="border-border my-8" />

          {/* H2 Section */}
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Principais Serviços Realizados por Especialistas em Salvador
          </h2>

          <div className="space-y-6">
            {/* H3 Section */}
            <div className="bg-card/30 border border-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                Troca de Tela de Celular
              </h3>
              <p className="text-sm">
                A tela é a interface principal do seu dispositivo e, por ser de vidro, o componente mais vulnerável a acidentes cotidianos. 
                Se a tela do seu aparelho trincou, quebrou, apresenta manchas escuras ou o touch screen parou de responder, nós podemos ajudar. 
                Realizamos a <Link to="/troca-de-tela" className="text-primary hover:underline font-semibold">Troca de Tela</Link> utilizando 
                peças premium que preservam o brilho original, a nitidez das cores e a resposta tátil exata do fabricante. Nossos técnicos fazem a 
                substituição com ferramentas adequadas para não danificar o chassi do celular e aplicam a vedação necessária contra poeira e pequenos resíduos.
              </p>
            </div>

            {/* H3 Section */}
            <div className="bg-card/30 border border-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                Troca de Bateria com Alta Durabilidade
              </h3>
              <p className="text-sm">
                Você percebeu que a bateria do seu celular descarrega rápido, o aparelho desliga sozinho mesmo com carga ou a carcaça parece 
                estar estufando? Estes são sintomas clássicos de desgaste químico e fadiga da célula de energia. A 
                <Link to="/troca-de-bateria" className="text-primary hover:underline font-semibold"> Troca de Bateria</Link> é recomendada quando a 
                saúde da célula de energia cai abaixo de 80%. Em nossa oficina, substituímos baterias por componentes homologados que respeitam a 
                capacidade nominal original de fábrica. Esse procedimento não apenas devolve a autonomia ao seu smartphone, mas também previne 
                riscos de superaquecimento ou curtos-circuitos causados por baterias instáveis ou danificadas.
              </p>
            </div>

            {/* H3 Section */}
            <div className="bg-card/30 border border-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                Reparo de Placa: Microeletrônica Avançada
              </h3>
              <p className="text-sm">
                Muitas assistências técnicas tradicionais costumam condenar celulares que não ligam ou que tiveram contato direto com líquidos, 
                alegando que a placa-mãe queimou e não há solução viável. Na Reparo Avançado, somos pioneiros e especialistas em 
                <Link to="/reparo-em-placa" className="text-primary hover:underline font-semibold"> Reparo de Placa</Link>. Nosso laboratório é 
                equipado com ferramentas profissionais de micro-soldagem, osciloscópios e microscópios de alta definição. Conseguimos recuperar 
                circuitos integrados (CIs), resolver curtos-circuitos na linha principal, solucionar falhas de carregamento e problemas de sinal 
                de rede. Consertar a placa original é sempre a alternativa mais econômica e ecologicamente correta em vez de comprar um aparelho novo.
              </p>
            </div>
          </div>

          <hr className="border-border my-8" />

          {/* H2 Section */}
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Especialidade nas Principais Marcas do Mercado
          </h2>
          <p>
            Trabalhamos de forma focada e customizada para os ecossistemas das principais marcas globais do mercado de telefonia, 
            garantindo que cada dispositivo receba o tratamento técnico adequado:
          </p>

          <ul className="space-y-4 my-6">
            <li className="bg-card/20 border border-border p-5 rounded-xl">
              <strong className="text-foreground block mb-1">Conserto de iPhone: Cuidados Especiais da Apple</strong>
              Os aparelhos da Apple exigem técnicas extremamente detalhadas devido ao seu ecossistema fechado de hardware. Nosso serviço de 
              <strong> conserto de iPhone</strong> abrange desde a substituição de telas e baterias até o reparo avançado do circuito lógico. 
              Em nosso laboratório, garantimos que funções cruciais como o True Tone da tela e o Face ID do sensor TrueDepth continuem funcionando perfeitamente. 
              Trabalhamos seguindo os padrões necessários para assegurar a integridade do seu aparelho iOS.
            </li>
            <li className="bg-card/20 border border-border p-5 rounded-xl">
              <strong className="text-foreground block mb-1">Conserto de Samsung: Linha Galaxy de Alta Performance</strong>
              Os aparelhos Samsung Galaxy (linhas S, Note, Z e A) são conhecidos por suas telas AMOLED avançadas e câmeras de alta resolução. Ao realizar 
              o <strong>conserto de Samsung</strong>, aplicamos displays que devolvem toda a vivacidade e o contraste natural que a marca oferece. 
              Também trocamos conectores de carga Tipo-C desgastados, microfones, alto-falantes e botões físicos, utilizando sempre componentes de alta performance.
            </li>
            <li className="bg-card/20 border border-border p-5 rounded-xl">
              <strong className="text-foreground block mb-1">Conserto de Xiaomi: Linha Redmi e Poco</strong>
              A Xiaomi conquistou o público com excelente custo-benefício, mas modelos populares como as linhas Redmi e Poco podem apresentar falhas 
              crônicas de software ou solda fria após quedas. O <strong>conserto de Xiaomi</strong> na nossa loja resolve problemas como aparelhos 
              que entram em loop infinito (ficam travados reiniciando na tela da logo), falhas no sensor de presença, câmeras trêmulas e problemas de conector.
            </li>
          </ul>

          <hr className="border-border my-8" />

          {/* H2 Section */}
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Onde Estamos: Atendimento Presencial em Salvador e Boca do Rio
          </h2>
          <p>
            Nossa sede física está localizada na <strong>Boca do Rio</strong>, um ponto estratégico de fácil acesso para quem mora ou trabalha em Salvador. 
            Se você reside em bairros vizinhos como Pituba, Imbuí, Stiep, Brotas, Costa Azul ou Patamares, nosso endereço oferece rotas simples e 
            estacionamento conveniente.
          </p>
          <p>
            Além do atendimento local na Boca do Rio, você pode consultar todos os nossos 
            <Link to="/locais-de-atendimento" className="text-primary hover:underline font-semibold"> Locais de Atendimento</Link> em nosso site 
            para conferir o suporte técnico mais próximo de você. Visite também o nosso <Link to="/blog" className="text-primary hover:underline font-semibold">Blog</Link> 
            para ver dicas técnicas e novidades sobre cuidados preventivos para seu dispositivo. Oferecemos um serviço rápido e descomplicado: serviços simples como 
            troca de tela e bateria costumam ser realizados no mesmo dia, geralmente em menos de 1 hora!
          </p>

          <hr className="border-border my-8" />

          {/* H2 Section (FAQ) */}
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">
            FAQ — Perguntas Frequentes sobre Assistência Técnica de Celular
          </h2>

          <div className="space-y-4">
            <div className="bg-card/40 border border-border p-5 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                O diagnóstico técnico é realmente gratuito?
              </h3>
              <p className="text-sm">
                Sim! Na Reparo Avançado, acreditamos que você deve saber exatamente o que seu aparelho tem antes de decidir gastar. Realizamos a avaliação 
                completa de hardware e circuito interno e fornecemos o orçamento sem qualquer custo ou compromisso para você.
              </p>
            </div>

            <div className="bg-card/40 border border-border p-5 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                Qual é o prazo da garantia oferecido nos reparos?
              </h3>
              <p className="text-sm">
                Oferecemos uma <strong>garantia de 90 dias</strong> (3 meses/90 dias) em todos os serviços realizados e peças substituídas em nosso laboratório. 
                Esta garantia cobre qualquer defeito de funcionamento ou vício de fabricação do componente instalado.
              </p>
            </div>

            <div className="bg-card/40 border border-border p-5 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                Vocês realizam consertos em aparelhos molhados?
              </h3>
              <p className="text-sm">
                Sim! Realizamos processos de desoxidação química avançada. Caso seu aparelho caia na água, a recomendação de ouro é desligá-lo imediatamente, 
                não tentar carregá-lo na tomada sob hipótese alguma, e trazê-lo o quanto antes para realizarmos o diagnóstico preventivo e evitar a corrosão.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Fale com nossa equipe e receba uma avaliação para seu aparelho.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-5 rounded-xl text-lg font-bold animate-pulse-whatsapp hover:brightness-110 transition-all shadow-lg shadow-whatsapp/20"
          >
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomeSeoSection;
