const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf8');

const regexHome = /(generatePage\('\/',.*?)(baseLocalBusinessSchema)(\);)/s;
code = code.replace(regexHome, "$1homeLocalBusinessSchema$3");

fs.writeFileSync('scripts/prerender.ts', code);
console.log('Fixed home schema injection');
