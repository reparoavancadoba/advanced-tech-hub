const fs = require('fs');
let c = fs.readFileSync('src/components/home/NewAboutUs.tsx', 'utf8');
c = c.split('className="text-sm md:text-base text-zinc-600 leading-relaxed"').join('className="text-center md:text-left text-sm md:text-base text-zinc-600 leading-relaxed"');
fs.writeFileSync('src/components/home/NewAboutUs.tsx', c);
