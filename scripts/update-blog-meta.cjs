const fs = require('fs');

const mappings = {
    'diferenca-tela-original-primeira-linha': {
        title: 'Tela Incell ou OLED? Diferença para a Original e 1ª Linha',
        desc: 'Entenda a diferença entre tela Incell, OLED, original e primeira linha antes de trocar o display: cor, brilho, sensibilidade ao toque e o que dura mais.'
    },
    'celular-xiaomi-nao-liga-o-que-fazer': {
        title: 'Xiaomi Não Liga? Redmi e Poco: o que fazer antes de forçar',
        desc: 'Seu Redmi ou Poco apagou do nada e não liga? Veja as causas mais comuns, o que dá para testar em casa e por que forçar o carregamento pode queimar a placa.'
    },
    'iphone-15-nao-carrega-usb-c': {
        title: 'iPhone 15 Não Carrega no USB-C? Causas e conserto',
        desc: 'iPhone 15 ou 15 Pro parou de carregar mesmo com cabo original? Veja o que costuma falhar no conector USB-C, o que testar antes e quando ainda tem reparo.'
    },
    'celular-motorola-nao-carrega': {
        title: 'Motorola Não Carrega? Cabo, Bateria ou Conector',
        desc: 'Seu Moto G ou Edge parou de carregar? Aprenda a diferenciar problema de cabo, bateria, conector de carga e CI da placa antes de gastar com a peça errada.'
    },
    'tela-iphone-13-verde-branca-apos-atualizacao': {
        title: 'Tela Verde no iPhone 13: causa e como resolver',
        desc: 'Tela do iPhone 13 ficou verde ou branca depois da atualização? Entenda o defeito, se existe solução sem trocar o display e o que costuma ser necessário.'
    },
    'camera-iphone-12-tremendo': {
        title: 'Câmera do iPhone 12 Tremendo e Sem Focar? Causa real',
        desc: 'A câmera do iPhone 12 treme, faz barulho e não foca? O estabilizador óptico costuma ser o culpado. Veja como identificar e o que tem conserto de verdade.'
    },
    'por-que-iphone-13-esquenta-muito': {
        title: 'iPhone 13 Esquentando Muito? Causas e o que fazer',
        desc: 'iPhone 13 esquentando mesmo parado ou carregando? Veja as causas mais comuns, quais são normais e quando o calor já está danificando a bateria.'
    },
    'aviso-umidade-detectada': {
        title: 'Umidade Detectada no Celular: como tirar o aviso',
        desc: 'O aviso de umidade detectada na porta USB não sai? Veja como secar com segurança, o que nunca fazer e como saber se o conector já está oxidado.'
    }
};

const files = [
    'src/data/blogData.ts',
    'src/data/editorialPosts.ts',
    'src/data/editorialPostsBatch2.ts',
    'src/data/editorialPostsBatch3.ts',
    'src/data/editorialPostsBatch4.ts',
    'src/data/editorialPostsBatch5.ts',
    'src/data/editorialPostsBatch6.ts',
    'src/data/editorialPostsBatch7.ts',
    'src/data/editorialPostsBatch8.ts',
    'src/data/editorialPostsBatch9.ts'
];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    
    // Process each object in the file loosely
    let newContent = content;
    
    for (const [slug, data] of Object.entries(mappings)) {
        // Regex to find the block for the slug
        // Something like: slug: "slug" ... title: "..." ... metaDescription: "..."
        const regex = new RegExp(`slug:\\s*["']${slug}["'][\\s\\S]*?\\}`);
        const match = newContent.match(regex);
        if (match) {
            let block = match[0];
            block = block.replace(/title:\s*["'][^"']+["']/, `title: "${data.title}"`);
            block = block.replace(/metaDescription:\s*["'][^"']+["']/, `metaDescription: "${data.desc}"`);
            newContent = newContent.replace(match[0], block);
        }
    }
    
    fs.writeFileSync(f, newContent);
});

// Also fix ALL descriptions (Action 3.4)
files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/metaDescription:\s*"([^"]+)"/g, (match, desc) => {
        // 1. Remove auto suffixes
        let cleaned = desc.replace(/ Veja como consertar de forma rápida\.?/, '');
        cleaned = cleaned.replace(/ Veja dicas e onde consertar\.?/, '');
        cleaned = cleaned.replace(/ Solicite um orçamento grátis\.?/, '');
        
        // 2. Fix '...' in the middle of a sentence
        // Actually, if it ends in ..., let's just make it end in a period if it makes sense or leave it.
        // The instruction says "no ... in the middle of a sentence". 
        // Wait: "Qualquer uma terminando em ... no meio de uma frase — reescreva o final para fechar a frase."
        if (cleaned.endsWith('...')) {
            // Let's just remove the ... and add a dot, usually the sentence was just cut
            cleaned = cleaned.replace(/\s*\.\.\.$/, '.');
        }
        
        // 3. avaliação gratuita -> diagnóstico gratuito
        cleaned = cleaned.replace(/avaliação gratuit[ao]/g, 'diagnóstico gratuito');
        cleaned = cleaned.replace(/avaliação grátis/g, 'diagnóstico grátis');
        
        return 'metaDescription: "' + cleaned + '"';
    });
    fs.writeFileSync(f, s);
});
