const fs = require('fs');

function updateFile(path, modifier) {
    let content = fs.readFileSync(path, 'utf8');
    const newContent = modifier(content);
    if (content !== newContent) {
        fs.writeFileSync(path, newContent);
        console.log(`Updated ${path}`);
    } else {
        console.log(`No changes made to ${path}`);
    }
}
const dateStr = new Date().toISOString().split('T')[0];

// 5A, 5B, 5C
updateFile('src/data/editorialPostsBatch3.ts', (content) => {
    // 5A
    if (content.includes(`slug: "diferenca-tela-original-primeira-linha",`)) {
        content = content.replace(
            /title: "Tela Incell ou OLED\? Diferen.a para a Original e 1. Linha",/,
            `title: "Tela Original, Primeira Linha, OLED ou Incell? Qual Escolher",`
        );
        content = content.replace(
            /h1: "Tela Original vs\. Tela Incell\/OLED: O Guia Definitivo antes do Conserto",/,
            `h1: "Tela Original, Primeira Linha, OLED ou Incell: Qual Escolher?",`
        );
        content = content.replace(
            /metaDescription: "Entenda a diferen.a entre tela Incell, OLED, original e primeira linha antes de trocar o display: cor, brilho, sensibilidade ao toque e o que dura mais.",/,
            `metaDescription: "Tela original, primeira linha, OLED, incell ou nacional? Entenda o que cada nome significa, o que muda na cor e no toque e como n\\u00e3o ser enganado.",`
        );

        const sections5A = `
      sections: [
        {
          id: "primeira-linha",
          title: "O que é tela de primeira linha?",
          content: "\\"Primeira linha\\" é um nome usado no mercado para telas compatíveis, ou seja, que não vieram de fábrica, mas que o fornecedor considera de melhor qualidade dentro da linha dele. Como não existe um padrão oficial, a qualidade de uma tela \\"primeira linha\\" pode variar bastante de um fornecedor para outro. Por isso, mais importante que o nome é saber qual é a tecnologia da tela e qual é a garantia."
        },
        {
          id: "nacional",
          title: "Tela nacional é original?",
          content: "Não necessariamente. \\"Nacional\\" também é um nome comercial, e cada loja usa de um jeito. Antes de fechar o serviço, pergunte diretamente se a tela é original de fábrica, OLED compatível ou incell."
        },
        {
          id: "oled-original",
          title: "Tela OLED é original?",
          content: "OLED é o tipo de tecnologia da tela, e não a origem dela. Existe tela OLED original, que vem de fábrica em muitos aparelhos, e existe tela OLED compatível, feita por outros fabricantes. As duas têm cores vivas e preto profundo, mas a compatível pode ter pequenas diferenças de brilho e de cor."
        },
        {
          id: "incell-vs-oled",
          title: "Tela incell vs OLED: o que muda na prática",
          content: "- **Incell:** costuma ser a opção mais econômica, com cores menos intensas. Em aparelhos que vieram com tela OLED de fábrica, ela pode deixar a imagem um pouco diferente da original.\\n- **OLED compatível:** cores mais próximas da original, com custo intermediário.\\n- **Original:** máxima fidelidade de cor e de toque, com custo maior."
        },
        {
          id: "boa",
          title: "Tela de primeira linha é boa?",
          content: "Pode ser, desde que você saiba qual é o tipo de tela e que o serviço tenha garantia. Na Reparo Avançado, explicamos as opções disponíveis para o seu modelo antes da troca, e todo serviço sai com garantia de 90 dias."
        }
      ],`;
        if (!content.includes('id: "primeira-linha"')) {
            content = content.replace(
                /(slug: "diferenca-tela-original-primeira-linha",[\s\S]*?isEditorial: true,\n)/,
                `$1${sections5A}\n`
            );
        }

        const faq5A = `\n        { question: "Como saber qual tela foi colocada no meu celular?", answer: "Peça que o tipo de tela venha descrito na ordem de serviço. É a forma mais segura de saber exatamente o que foi instalado." },`;
        if (!content.includes('Como saber qual tela foi colocada no meu celular?')) {
            let parts = content.split(`slug: "diferenca-tela-original-primeira-linha",`);
            let p2 = parts[1];
            p2 = p2.replace(/faq:\s*\[/, `faq: [${faq5A}`);
            p2 = p2.replace(/dateModified:\s*"[^"]+"/, `dateModified: "${dateStr}"`);
            content = parts[0] + `slug: "diferenca-tela-original-primeira-linha",` + p2;
        }
    }

    // 5B
    if (content.includes(`slug: "celular-xiaomi-nao-liga-o-que-fazer",`)) {
        const faq5B = `
        { question: "Xiaomi não liga e não aparece o ícone de carregando, o que pode ser?", answer: "Pode ser bateria totalmente descarregada, cabo ou carregador com defeito, conector de carga ou placa. Antes de tudo, deixe carregando por pelo menos 30 minutos com outro cabo e outro carregador." },
        { question: "Xiaomi travado na logo é a mesma coisa que não ligar?", answer: "Não. Se a logo aparece, o aparelho está ligando, e o problema costuma estar no sistema. Nesse caso, veja o nosso artigo sobre Xiaomi que travou depois da atualização. <a href=\\"/blog/xiaomi-atualizacao-miui-travou-nao-liga\\" class=\\"text-primary hover:underline\\">Leia mais</a>." },
        { question: "Como forçar a reinicialização de um Xiaomi?", answer: "Em muitos modelos, basta segurar o botão de ligar por cerca de 10 a 15 segundos, até o aparelho reiniciar." },`;
        if (!content.includes('Xiaomi não liga e não aparece o ícone')) {
            let parts = content.split(`slug: "celular-xiaomi-nao-liga-o-que-fazer",`);
            let p2 = parts[1];
            p2 = p2.replace(/faq:\s*\[/, `faq: [${faq5B}`);
            p2 = p2.replace(/dateModified:\s*"[^"]+"/, `dateModified: "${dateStr}"`);
            content = parts[0] + `slug: "celular-xiaomi-nao-liga-o-que-fazer",` + p2;
        }
    }

    // 5C
    if (content.includes(`slug: "aviso-umidade-detectada",`)) {
        const sections5C = `
      sections: [
        {
          id: "aviso-umidade",
          title: "Aviso de umidade aparecendo na tela do celular: o que significa",
          content: "O aviso de umidade aparece quando o celular detecta líquido ou sujeira úmida no conector de carga. É uma proteção: o aparelho bloqueia o carregamento pelo cabo até o conector secar. Em muitos casos, o aviso some sozinho depois que o conector seca. Evite colocar objetos dentro do conector e não use calor direto para secar."
        }
      ],`;
        const faq5C = `
        { question: "O aviso de umidade aparece mesmo com o celular seco, por quê?", answer: "Pode ser sujeira ou oxidação no conector, ou falha no sensor. Se o aviso continuar por mais de um dia com o aparelho seco, vale levar para análise." },`;
        
        if (!content.includes('Aviso de umidade aparecendo na tela do celular')) {
            let parts = content.split(`slug: "aviso-umidade-detectada",`);
            let p2 = parts[1];
            p2 = p2.replace(/isEditorial:\s*true,/, `isEditorial: true,\n${sections5C}`);
            p2 = p2.replace(/faq:\s*\[/, `faq: [${faq5C}`);
            p2 = p2.replace(/dateModified:\s*"[^"]+"/, `dateModified: "${dateStr}"`);
            content = parts[0] + `slug: "aviso-umidade-detectada",` + p2;
        }
    }

    return content;
});

// 5D em editorialPosts.ts
updateFile('src/data/editorialPosts.ts', (content) => {
    if (content.includes(`slug: "assistencia-tecnica-realme-salvador",`)) {
        content = content.replace(
            /h1: "Assist.ncia T.cnica Realme em Salvador: Conserto de Tela, Bateria e Placa",/,
            `h1: "Assistência técnica Realme em Salvador: Conserto de Tela, Bateria e Placa",`
        );
        content = content.replace(
            /solution: `A Realme cresceu explosivamente/,
            `solution: \`Procurando por uma assistência técnica Realme em Salvador? A Realme cresceu explosivamente`
        );

        const faq5D = `\n        { question: "Onde fica a assistência técnica Realme da Reparo Avançado em Salvador?", answer: "A loja fica na Boca do Rio, na R. Abelardo Andrade de Carvalho, 8. Também fazemos coleta e entrega do aparelho na região." },`;
        if (!content.includes('Onde fica a assistência técnica Realme da Reparo Avançado')) {
            let parts = content.split(`slug: "assistencia-tecnica-realme-salvador",`);
            let p2 = parts[1];
            p2 = p2.replace(/faq:\s*\[/, `faq: [${faq5D}`);
            p2 = p2.replace(/dateModified:\s*"[^"]+"/, `dateModified: "${dateStr}"`);
            content = parts[0] + `slug: "assistencia-tecnica-realme-salvador",` + p2;
        }
    }
    return content;
});

// 5E em editorialPostsBatch8.ts
updateFile('src/data/editorialPostsBatch8.ts', (content) => {
    if (content.includes(`slug: "motorola-travando-reiniciando-sozinho-loop",`)) {
        const faq5E = `
        { question: "O modo de segurança ajuda a descobrir o problema?", answer: "Sim. No modo de segurança, os aplicativos instalados por você ficam desativados. Se o Motorola parar de travar ou reiniciar nesse modo, a causa provável é um aplicativo. Em muitos aparelhos, você entra segurando o botão de ligar e, depois, pressionando por alguns segundos a opção 'Desligar' até aparecer 'Reiniciar no modo de segurança'." },
        { question: "Motorola reiniciando sozinho perde os dados?", answer: "Nem sempre. Depende da causa, que o diagnóstico identifica. Se o aparelho ainda liga, faça backup antes de levar." },`;
        if (!content.includes('O modo de segurança ajuda a descobrir o problema')) {
            let parts = content.split(`slug: "motorola-travando-reiniciando-sozinho-loop",`);
            let p2 = parts[1];
            p2 = p2.replace(/faq:\s*\[/, `faq: [${faq5E}`);
            p2 = p2.replace(/dateModified:\s*"[^"]+"/, `dateModified: "${dateStr}"`);
            content = parts[0] + `slug: "motorola-travando-reiniciando-sozinho-loop",` + p2;
        }
    }
    return content;
});
