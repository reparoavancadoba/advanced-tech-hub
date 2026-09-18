const fs = require('fs');

const mappings = {
    'diferenca-tela-original-primeira-linha': 'Tela Incell ou OLED? Diferença para a Original e 1ª Linha',
    'celular-xiaomi-nao-liga-o-que-fazer': 'Xiaomi Não Liga? Redmi e Poco: o que fazer antes de forçar',
    'iphone-15-nao-carrega-usb-c': 'iPhone 15 Não Carrega no USB-C? Causas e conserto',
    'celular-motorola-nao-carrega': 'Motorola Não Carrega? Cabo, Bateria ou Conector',
    'tela-iphone-13-verde-branca-apos-atualizacao': 'Tela Verde no iPhone 13: causa e como resolver',
    'camera-iphone-12-tremendo': 'Câmera do iPhone 12 Tremendo e Sem Focar? Causa real',
    'por-que-iphone-13-esquenta-muito': 'iPhone 13 Esquentando Muito? Causas e o que fazer',
    'aviso-umidade-detectada': 'Umidade Detectada no Celular: como tirar o aviso'
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
    let s = fs.readFileSync(f, 'utf8');
    
    for (const [slug, newTitle] of Object.entries(mappings)) {
        const regex = new RegExp(`slug:\\s*["']${slug}["'][\\s\\S]*?title:\\s*["'].*?["'].*?,`);
        s = s.replace(regex, `slug: "${slug}",\n      title: "${newTitle}",`);
    }
    
    fs.writeFileSync(f, s);
});
