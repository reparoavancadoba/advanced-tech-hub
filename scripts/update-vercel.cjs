const fs = require('fs');

let v = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

let newRedirects = [];
v.redirects.forEach(r => {
    // Keep all blog / global redirects
    if (r.source.startsWith('/blog/') || r.source.startsWith('/loja-tecnica-')) {
        newRedirects.push(r);
    }
});

// Helper for direct mapping
const directMappings = [
    { source: "/conserto/:servico/na/boca-do-rio-e-orla", destination: "/assistencia-tecnica-boca-do-rio-e-orla" },
    { source: "/conserto/:servico/na/miolo-e-centro-financeiro", destination: "/assistencia-tecnica-miolo-e-centro-financeiro" },
    { source: "/conserto/:servico/na/centro-e-sul", destination: "/assistencia-tecnica-centro-e-sul" },
    { source: "/conserto/:servico/na/orla-norte-e-aeroporto", destination: "/assistencia-tecnica-orla-norte-e-aeroporto" },
    { source: "/conserto/:servico/na/cajazeiras-e-regiao", destination: "/assistencia-tecnica-cajazeiras-e-regiao" },
    { source: "/conserto/:servico/na/regiao-metropolitana", destination: "/assistencia-tecnica-regiao-metropolitana" },
    
    // Legacy /em/
    { source: "/conserto/:servico/em/:bairro(itaigara|caminho-das-arvores)", destination: "/assistencia-tecnica-caminho-das-arvores" },
    { source: "/conserto/:servico/em/:bairro(costa-azul|jardim-armacao|patamares|stiep)", destination: "/assistencia-tecnica-boca-do-rio-e-orla" },
    { source: "/conserto/:servico/em/:bairro(iguatemi|paralela|cabula|pernambues|sao-rafael|tancredo-neves)", destination: "/assistencia-tecnica-miolo-e-centro-financeiro" },
    { source: "/conserto/:servico/em/:bairro(barra|graca|vitoria|ondina|rio-vermelho|centro|naze|liberdade)", destination: "/assistencia-tecnica-centro-e-sul" },
    { source: "/conserto/:servico/em/:bairro(piata|itapua|stella-maris|sao-cristovao|mussurunga)", destination: "/assistencia-tecnica-orla-norte-e-aeroporto" },
    { source: "/conserto/:servico/em/:bairro(cajazeiras|pau-da-lima)", destination: "/assistencia-tecnica-cajazeiras-e-regiao" },
    { source: "/conserto/:servico/em/:bairro(lauro-de-freitas|vilas-do-atlantico)", destination: "/assistencia-tecnica-regiao-metropolitana" },
    
    // Legacy assistencia-tecnica-:bairro -> macro, EXCEPT for the newly active caminho-das-arvores
    // Wait, let's keep the existing ones
    { source: "/assistencia-tecnica-:bairro(itaigara|caminho-das-arvores)", destination: "/assistencia-tecnica-caminho-das-arvores" },
    { source: "/assistencia-tecnica-:bairro(costa-azul|jardim-armacao|patamares|stiep)", destination: "/assistencia-tecnica-boca-do-rio-e-orla" },
    { source: "/assistencia-tecnica-:bairro(iguatemi|paralela|cabula|pernambues|sao-rafael|tancredo-neves)", destination: "/assistencia-tecnica-miolo-e-centro-financeiro" },
    { source: "/assistencia-tecnica-:bairro(barra|graca|vitoria|ondina|rio-vermelho|centro|naze|liberdade)", destination: "/assistencia-tecnica-centro-e-sul" },
    { source: "/assistencia-tecnica-:bairro(piata|itapua|stella-maris|sao-cristovao|mussurunga)", destination: "/assistencia-tecnica-orla-norte-e-aeroporto" },
    { source: "/assistencia-tecnica-:bairro(cajazeiras|pau-da-lima)", destination: "/assistencia-tecnica-cajazeiras-e-regiao" },
    { source: "/assistencia-tecnica-:bairro(lauro-de-freitas|vilas-do-atlantico)", destination: "/assistencia-tecnica-regiao-metropolitana" },
    
    // Atendimento
    { source: "/atendimento/:bairro(caminho-das-arvores|itaigara)/:servico*", destination: "/assistencia-tecnica-caminho-das-arvores" },
    { source: "/atendimento/:bairro/:servico*", destination: "/assistencia-tecnica-salvador" },
];

directMappings.forEach(m => {
    newRedirects.push({ ...m, permanent: true });
});

v.redirects = newRedirects;
fs.writeFileSync('vercel.json', JSON.stringify(v, null, 2));
