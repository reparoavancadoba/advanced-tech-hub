import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571991981437?text=Olá! Gostaria de solicitar um orçamento.";

const HomeSeoSection = () => {
  return (
    <section className="py-16 bg-card/10 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Assistência Técnica de Celulares em Salvador: <span className="text-gradient">Confiabilidade e Precisão</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
          <p>
            Se você está com um smartphone quebrado, sabe o quanto isso afeta sua rotina pessoal e profissional. Na{" "}
            <strong>Reparo Avançado</strong>, entendemos a urgência de ter o seu dispositivo funcionando perfeitamente de novo. 
            Com mais de 9 anos de atuação no mercado soteropolitano, consolidamo-nos como a principal referência para o{" "}
            <strong>conserto de celular em Salvador</strong>, combinando agilidade, uso de componentes de padrão premium e 
            atendimento técnico altamente especializado. Localizada no dinâmico bairro da <strong>Boca do Rio</strong>, 
            nossa oficina é estruturada para oferecer diagnósticos rápidos e soluções definitivas para as mais diversas marcas do mercado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 pt-4">
            <div className="bg-card/40 border border-border p-6 rounded-xl hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Troca de Tela com Sensibilidade Touch e Brilho Preservados
              </h3>
              <p className="text-sm">
                A tela quebrada é o acidente mais comum, mas nem por isso o reparo deve ser feito de qualquer jeito. Realizamos a{" "}
                <strong>troca de tela</strong> utilizando displays de alta qualidade, garantindo que a reprodução de cores, o 
                brilho original e a sensibilidade do toque fiquem exatamente como novos. Seja para displays OLED, AMOLED ou LCD, 
                nossos profissionais efetuam a substituição com vedação contra poeira e precisão milimétrica. Não corra o risco de 
                instalar telas genéricas que falham em poucas semanas; conte com a nossa garantia de 3 meses e tenha a certeza de uma 
                experiência visual impecável.
              </p>
            </div>

            <div className="bg-card/40 border border-border p-6 rounded-xl hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Troca de Bateria para Devolver a Autonomia ao seu Aparelho
              </h3>
              <p className="text-sm">
                Seu celular descarrega rápido, desliga sozinho ou só funciona conectado à tomada? Esses são sinais claros de desgaste 
                químico da bateria. A <strong>troca de bateria</strong> na Reparo Avançado é realizada utilizando componentes que 
                seguem rigorosamente os padrões de capacidade nominal e segurança dos fabricantes. Ao substituir a bateria conosco, 
                você evita riscos de estufamento e superaquecimento do aparelho, além de restaurar a saúde energética total do smartphone. 
                Executamos a troca de maneira rápida, minimizando o tempo que você passa desconectado no seu dia a dia.
              </p>
            </div>
          </div>

          <div className="bg-card/40 border border-border p-6 rounded-xl hover:border-primary/30 transition-all duration-300 my-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Reparo de Placa de Celular: Especialidade em Microeletrônica Avançada
            </h3>
            <p>
              Quando outras assistências dizem que o seu aparelho "não tem conserto" ou que a única solução é trocar a placa-mãe inteira 
              (o que costuma inviabilizar o reparo pelo custo elevado), nós fazemos a diferença. A Reparo Avançado é pioneira e referência 
              em <strong>reparo de placa</strong> em Salvador. Nossa bancada conta com microscópios de alta precisão e ferramentas avançadas 
              de micro-soldagem. Reparamos curto-circuito, falhas no CI de carga (U2/Tristar), falhas de backlight, aparelhos que caíram na água 
              (desoxidação química avançada) e problemas de sinal de rede. Consertar a placa original do seu aparelho é a escolha mais econômica e inteligente.
            </p>
          </div>

          <div className="my-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Conserto de iPhone, Samsung e Xiaomi com Peças de Padrão Premium
            </h3>
            <p className="mb-4">
              Trabalhamos de forma focada e customizada para os ecossistemas das principais marcas globais do mercado de telefonia, garantindo 
              que cada dispositivo receba o tratamento técnico adequado:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Conserto de iPhone:</strong> Desde a troca de bateria até reparos profundos na placa lógica de modelos clássicos e recentes. 
                Garantimos que funções cruciais como o True Tone e o Face ID sejam mantidos intactos após as manutenções de tela.
              </li>
              <li>
                <strong>Conserto de Samsung:</strong> Especialistas na linha Galaxy S, Note, linha Z e linha A. Trabalhamos com telas e conectores 
                de carga originais para assegurar a máxima compatibilidade, durabilidade e desempenho dos componentes de fábrica.
              </li>
              <li>
                <strong>Conserto de Xiaomi:</strong> Diagnósticos precisos para as linhas Redmi, Poco e Mi. Resolvemos bugs crônicos de inicialização 
                (como aparelhos em loop infinito), troca de conectores de carga e substituição de câmeras traseiras ou frontais danificadas.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Atendimento Local em Salvador: Destaque na Boca do Rio e Região
            </h3>
            <p>
              Nossa sede física está estrategicamente posicionada no bairro da <strong>Boca do Rio</strong>, permitindo um acesso rápido para moradores 
              da região e de bairros vizinhos como Pituba, Imbuí, Brotas, Patamares e Stiep. Entendemos a rotina corrida de Salvador, por isso oferecemos 
              um atendimento ágil e focado na comodidade do cliente. A maioria dos nossos serviços de troca de tela e bateria é realizada em menos de 
              1 hora, enquanto você aguarda em nosso espaço confortável. Unimos a proximidade do atendimento local com a sofisticação técnica de um 
              laboratório de ponta especializado em Salvador.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 pt-6">
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
