const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
nav = nav.replace('className="h-10 md:h-12"', 'className="h-10 md:h-12 w-auto"');
fs.writeFileSync('src/components/Navbar.tsx', nav);

let footer = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
footer = footer.replace('className="h-12 mb-4"', 'className="h-12 w-auto mb-4"');
fs.writeFileSync('src/components/FooterSection.tsx', footer);

console.log('Fixed logo classes');
