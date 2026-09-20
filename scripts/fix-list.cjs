const fs = require('fs');

let content = fs.readFileSync('src/data/servicosConsolidadosData.ts', 'utf8');

const listMatch = content.match(/export const servicesHubList = \[[\\s\S]*?\];/);
if (listMatch && !listMatch[0].includes('conserto-de-tablet')) {
    let newList = listMatch[0].replace('];', '  { slug: "conserto-de-tablet", name: "Tablet", desc: "reparos em iPad e Galaxy Tab.", iconName: "Tablet" },\n  { slug: "conserto-de-notebook", name: "Notebook", desc: "upgrades, tela e dobradiças.", iconName: "Laptop" }\n];');
    // let me make sure there's a comma before
    newList = newList.replace('Droplet" }\n  { slug:', 'Droplet" },\n  { slug:');
    content = content.replace(listMatch[0], newList);
    fs.writeFileSync('src/data/servicosConsolidadosData.ts', content);
    console.log("Added to servicesHubList");
} else {
    console.log("Already there or not found");
}
