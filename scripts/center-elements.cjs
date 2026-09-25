const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
nav = nav.replace(
  '<Link to="/" className="flex items-center z-20 shrink-0">',
  '<div className="md:hidden w-10"></div>\n        <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center z-20 shrink-0">'
);
fs.writeFileSync('src/components/Navbar.tsx', nav);

let footer = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
footer = footer.replace(
  '<div className="grid grid-cols-1 md:grid-cols-3 gap-10">',
  '<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">'
);
footer = footer.replace(
  '<ul className="space-y-3 text-sm text-muted-foreground">',
  '<ul className="space-y-3 text-sm text-muted-foreground flex flex-col items-center md:items-start">'
);
footer = footer.replace(
  '<div className="flex flex-wrap gap-2">',
  '<div className="flex flex-wrap justify-center md:justify-start gap-2">'
);
// Also center the logo in the footer on mobile
footer = footer.replace(
  '<img src="/logo-reparo.webp" alt="Reparo Avançado" className="h-12 w-auto mb-4" loading="lazy" width={254} height={98} />',
  '<img src="/logo-reparo.webp" alt="Reparo Avançado" className="h-12 w-auto mb-4 mx-auto md:mx-0" loading="lazy" width={254} height={98} />'
);
fs.writeFileSync('src/components/FooterSection.tsx', footer);

console.log('Fixed center alignments');
