const fs = require('fs');

function check() {
    console.log("=== RELATÓRIO DE VALIDAÇÃO (LOCAL/DIST) ===");
    
    // 1. Zero "Todos" em celular-xiaomi-nao-liga-o-que-fazer
    let xiaomi = fs.readFileSync('dist/blog/celular-xiaomi-nao-liga-o-que-fazer/index.html', 'utf8');
    let naoLiga = fs.readFileSync('dist/blog/celular-nao-liga/index.html', 'utf8');
    let countTodos = (xiaomi.match(/Todos/g) || []).length + (naoLiga.match(/Todos/g) || []).length;
    console.log(`1. Ocorrências visíveis de 'Todos' como marca/modelo nas 2 URLs: ${countTodos}`);
    
    // 2. Schema BlogPosting com LocalBusiness em 5 artigos
    let artigos = [
        'dist/blog/celular-xiaomi-nao-liga-o-que-fazer/index.html',
        'dist/blog/celular-nao-liga/index.html',
        'dist/blog/diferenca-tela-original-primeira-linha/index.html',
        'dist/blog/aviso-umidade-detectada/index.html',
        'dist/blog/assistencia-tecnica-realme-salvador/index.html'
    ];
    let publisherOk = 0;
    artigos.forEach(a => {
        let h = fs.readFileSync(a, 'utf8');
        if (h.includes('"publisher":{"@type":"LocalBusiness"')) {
            if (h.includes('R. Abelardo Andrade de Carvalho') && !h.includes('AggregateRating')) {
                publisherOk++;
            }
        }
    });
    console.log(`2. Schema BlogPosting LocalBusiness (Salvador) s/ AggregateRating: ${publisherOk}/5`);
    
    // 3. Frase com links em 5 artigos
    let linksOk = 0;
    artigos.forEach(a => {
        let h = fs.readFileSync(a, 'utf8');
        if (h.includes('assistência técnica de celular em Salvador') && h.includes('Boca do Rio')) linksOk++;
    });
    console.log(`3. Links locais nos artigos inseridos: ${linksOk}/5`);
    
    // 4. Link Nossa loja na Boca do Rio na home
    let home = fs.readFileSync('dist/index.html', 'utf8');
    console.log(`4. Link "Nossa loja na Boca do Rio" na Home: ${home.includes('Nossa loja na Boca do Rio')}`);
    
    // 5. Boca do Rio tem as seções
    let bdr = fs.readFileSync('dist/assistencia-tecnica-boca-do-rio/index.html', 'utf8');
    console.log(`5. Página Boca do Rio com H2 novo e iframe: ${bdr.includes('Nossa loja na Boca do Rio') && bdr.includes('<iframe')}`);
    
    // 6. 5 artigos com dateModified e texto
    console.log(`6. (5A) diferenca-tela-original: title novo? ${fs.readFileSync('dist/blog/diferenca-tela-original-primeira-linha/index.html', 'utf8').includes('Tela Original, Primeira Linha, OLED ou Incell')}`);
    
    // 7. Sitemap com 169
    let sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
    let urls = (sitemap.match(/<url>/g) || []).length;
    console.log(`7. Sitemap total de URLs: ${urls}`);
    
    // 8. Trava de regressão: Home > 269, troca-de-tela > 456
    let homeWords = home.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
    let troca = fs.readFileSync('dist/troca-de-tela/index.html', 'utf8').replace(/<[^>]*>?/gm, '').split(/\s+/).length;
    console.log(`8. Palavras Home (HTML): ${homeWords} | Palavras /troca-de-tela (HTML): ${troca}`);
}
check();
