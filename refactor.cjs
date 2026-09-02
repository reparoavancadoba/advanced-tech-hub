const fs = require('fs');
const { execSync } = require('child_process');

function replaceFile(path, oldText, newText) {
  let c = fs.readFileSync(path, 'utf8');
  c = c.split(oldText).join(newText);
  fs.writeFileSync(path, c, 'utf8');
}

// 1. HeroSection.tsx
let hero = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');
hero = hero.replace('w-full md:w-[60%] lg:w-[55%] flex flex-col', 'w-full md:w-[60%] lg:w-[55%] flex flex-col relative -top-8 md:-top-16');
hero = hero.replace(
  'bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-6 py-4 lg:px-8 lg:py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20',
  'bg-[#25D366] hover:bg-[#1DA851] text-white font-bold px-6 py-4 lg:px-8 lg:py-4 rounded-xl transition-all shadow-lg shadow-[#25D366]/20'
);
fs.writeFileSync('src/components/HeroSection.tsx', hero, 'utf8');

// 2. Navbar.tsx
let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
nav = nav.replace(/bg-\[\#0066FF\] text-white hover:bg-blue-600/g, 'bg-[#25D366] text-white hover:bg-[#1DA851] shadow-[#25D366]/20');
fs.writeFileSync('src/components/Navbar.tsx', nav, 'utf8');

// 3. NewWhatWeDo.tsx (Add id="servicos", make bento grid style, translucent background)
let wwd = fs.readFileSync('src/components/home/NewWhatWeDo.tsx', 'utf8');
wwd = wwd.replace('<section className="bg-zinc-950', '<section id="servicos" className="bg-zinc-950');
wwd = wwd.replace(/bg-zinc-900 border border-white\/5/g, 'bg-zinc-900/40 backdrop-blur-md border border-white/10');
// Just adding a better hover effect
wwd = wwd.replace(/hover:border-blue-500\/50 hover:bg-zinc-800\/80/g, 'hover:border-blue-500/50 hover:bg-blue-900/20 group');
// Add group-hover to icon
wwd = wwd.replace(/text-blue-500/g, 'text-blue-500 group-hover:scale-110 transition-transform duration-300');
fs.writeFileSync('src/components/home/NewWhatWeDo.tsx', wwd, 'utf8');

// 4. NewSpecialty.tsx (Light to Dark)
let spec = fs.readFileSync('src/components/home/NewSpecialty.tsx', 'utf8');
spec = spec.replace('bg-zinc-50 text-zinc-900', 'bg-zinc-950 text-white');
spec = spec.replace('border-zinc-200', 'border-white/5');
spec = spec.replace(/text-zinc-600/g, 'text-zinc-400');
spec = spec.replace('border-zinc-300', 'border-white/10');
spec = spec.replace('bg-zinc-200', 'bg-zinc-900');
fs.writeFileSync('src/components/home/NewSpecialty.tsx', spec, 'utf8');

// 5. NewAboutUs.tsx (Light to Dark)
let about = fs.readFileSync('src/components/home/NewAboutUs.tsx', 'utf8');
about = about.replace('bg-white text-zinc-900', 'bg-zinc-900 text-white');
about = about.replace(/text-zinc-600/g, 'text-zinc-400');
about = about.replace('border-zinc-300', 'border-white/10');
about = about.replace('bg-zinc-200', 'bg-zinc-900');
fs.writeFileSync('src/components/home/NewAboutUs.tsx', about, 'utf8');

// 6. NewHowItWorks.tsx (Light to Dark)
let how = fs.readFileSync('src/components/home/NewHowItWorks.tsx', 'utf8');
how = how.replace('bg-zinc-50 text-zinc-900', 'bg-zinc-950 text-white');
how = how.replace('border-zinc-200', 'border-white/5');
how = how.replace('bg-blue-200', 'bg-white/10');
how = how.replace(/text-zinc-900/g, 'text-white');
how = how.replace(/text-zinc-600/g, 'text-zinc-400');
how = how.replace(/border-zinc-50/g, 'border-zinc-950');
fs.writeFileSync('src/components/home/NewHowItWorks.tsx', how, 'utf8');

// 7. NewCtaBlock.tsx (Blue to Dark + Green Button)
let cta = fs.readFileSync('src/components/home/NewCtaBlock.tsx', 'utf8');
cta = cta.replace('bg-blue-600 text-white', 'bg-zinc-900 text-white border-b border-white/5');
cta = cta.replace('text-blue-100', 'text-zinc-400');
cta = cta.replace('bg-white text-blue-600 hover:bg-zinc-100', 'bg-[#25D366] text-white hover:bg-[#1DA851]');
fs.writeFileSync('src/components/home/NewCtaBlock.tsx', cta, 'utf8');

// 8. NewFinalCta.tsx (Blue to Dark + Green Button)
let finalCta = fs.readFileSync('src/components/home/NewFinalCta.tsx', 'utf8');
finalCta = finalCta.replace('bg-blue-600 text-white', 'bg-zinc-900 text-white border-t border-white/5');
finalCta = finalCta.replace('text-blue-100', 'text-zinc-400');
finalCta = finalCta.replace('bg-white text-blue-600 hover:bg-zinc-100', 'bg-[#25D366] text-white hover:bg-[#1DA851]');
fs.writeFileSync('src/components/home/NewFinalCta.tsx', finalCta, 'utf8');

console.log('All files updated successfully!');

try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful! Ready to commit.');
} catch(e) {
  console.error('Build failed', e.message);
  process.exit(1);
}
