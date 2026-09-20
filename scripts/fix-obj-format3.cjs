const fs = require('fs');

let content = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

const objStr = `  "conserto-de-tablet": {
    slug: "conserto-de-tablet",
    title: "Conserto de Tablet em Salvador | Especializados em iPad e Samsung Galaxy Tab",
    metaDescription: "Assistência técnica especializada em conserto de tablet em Salvador. Trocamos tela, bateria e reparamos placa de iPads e Galaxy Tabs com peças de alta qualidade.",
    h1: "Conserto de Tablet em Salvador",
    description: "A Reparo Avançado oferece serviço técnico especializado para tablets das principais marcas. Sabemos o quanto o seu tablet é importante para trabalho, estudo ou entretenimento. Realizamos reparos complexos em placas, troca de telas que sofreram impacto e substituição de baterias viciadas.",
    supportedBrands: ["Apple (iPad, iPad Pro, iPad Air, iPad mini)", "Samsung (Galaxy Tab S, Tab A)", "Motorola", "Lenovo", "Xiaomi (Pad)"],
    problems: [
      "Tela trincada ou touch sem resposta",
      "Bateria descarregando rápido ou estufada",
      "Tablet não liga nem dá sinal de vida",
      "Conector de carga frouxo ou danificado",
      "Botões afundados ou quebrados",
      "Tablet molhou (banho químico/desoxidação)"
    ],
    solution: "Trabalhamos com equipamentos de precisão para garantir a integridade do seu dispositivo durante o reparo. Nossas telas mantêm o brilho e a resposta ao toque que você espera, e nossas baterias devolvem a autonomia original do seu tablet. Orçamento transparente e conserto ágil.",
    faqs: [
      {
        question: "Vale a pena consertar a tela do meu tablet antigo?",
        answer: "Na grande maioria das vezes, sim. A troca de tela tem um custo muito inferior à compra de um tablet novo do mesmo padrão."
      },
      {
        question: "Vocês consertam iPad que não carrega mais?",
        answer: "Sim. Muitas vezes o problema é apenas no conector Lightning ou USB-C, mas também fazemos o reparo direto no circuito de carga na placa lógica do iPad."
      }
    ]
  },
  "conserto-de-notebook": {
    slug: "conserto-de-notebook",
    title: "Conserto de Notebook em Salvador | Upgrade, Limpeza e Reparo de Placa",
    metaDescription: "Assistência técnica para notebooks em Salvador. Fazemos upgrade de SSD/RAM, conserto de carcaça, troca de tela, bateria e manutenção preventiva.",
    h1: "Conserto de Notebook em Salvador",
    description: "Serviço completo de manutenção de notebooks. De upgrades para deixar a máquina mais rápida até reparos avançados na placa-mãe. Se o seu notebook está esquentando muito, lento, ou se a carcaça/dobradiça quebrou, nós temos a solução adequada com garantia e segurança.",
    supportedBrands: ["Dell", "Lenovo", "Acer", "Asus", "HP", "Samsung", "Apple (MacBook)", "Vaio"],
    problems: [
      "Notebook muito lento ou travando",
      "Notebook não liga ou liga sem imagem (tela preta)",
      "Notebook esquentando e desligando sozinho",
      "Carcaça quebrada ou dobradiça estourada",
      "Teclado falhando (teclas não respondem)",
      "Bateria não segura carga",
      "Tela trincada, com listras ou manchas"
    ],
    solution: "A Reparo Avançado utiliza componentes de primeira linha para realizar upgrades (HD para SSD, aumento de RAM) que dão sobrevida de anos ao equipamento. Realizamos também manutenção preventiva (limpeza interna e troca de pasta térmica) para evitar a queima do processador ou do chip de vídeo.",
    faqs: [
      {
        question: "Meu notebook está muito lento. SSD resolve?",
        answer: "Na imensa maioria das vezes, sim! A troca de um HD antigo por um SSD NVMe ou SATA aumenta a velocidade de inicialização e abertura de programas em até 10 vezes."
      },
      {
        question: "Vocês reparam dobradiça de notebook?",
        answer: "Sim. Fazemos a reconstrução ou troca das buchas e dobradiças danificadas, recuperando a estética e a funcionalidade de fechar e abrir a tela sem forçar os plásticos."
      }
    ]
  }`;

if (!content.includes('conserto-de-tablet')) {
    content = content.replace(/\}\s*;\s*export const allConsolidatedServices/, '},\n' + objStr + '\n};\nexport const allConsolidatedServices');
}

const listMatch = content.match(/export const servicesHubList = \[[\\s\S]*?\];/);
if (listMatch && !listMatch[0].includes('conserto-de-tablet')) {
    let newList = listMatch[0].replace('];', '},\n  { slug: "conserto-de-tablet", name: "Tablet", desc: "reparos em iPad e Galaxy Tab.", iconName: "Tablet" },\n  { slug: "conserto-de-notebook", name: "Notebook", desc: "upgrades, tela e dobradiças.", iconName: "Laptop" }\n];');
    content = content.replace(listMatch[0], newList);
}

fs.writeFileSync('src/data/servicosConsolidadosData.ts', content);
console.log('Fixed format 3');
