const fs = require('fs');

let c = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
c = c.replace(/import logo from '..\/assets\/logo-reparo.png';/g, '');
c = c.replace(/<img src=\{logo\}/g, '<img src="/logo-reparo.webp"');
c = c.replace(/width=\{1018\} height=\{392\}/g, 'width={254} height={98}');
fs.writeFileSync('src/components/Navbar.tsx', c);

c = fs.readFileSync('src/components/FooterSection.tsx', 'utf8');
c = c.replace(/import logo from '..\/assets\/logo-reparo.png';/g, '');
c = c.replace(/<img src=\{logo\}/g, '<img src="/logo-reparo.webp"');
c = c.replace(/width=\{1018\} height=\{392\}/g, 'width={254} height={98}');
fs.writeFileSync('src/components/FooterSection.tsx', c);
