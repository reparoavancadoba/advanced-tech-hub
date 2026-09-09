const fs = require('fs');
const { execSync } = require('child_process');

function updateComponent(filePath, sectionRegex, sectionReplacement, containerRegex, containerReplacement) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(sectionRegex, sectionReplacement);
  content = content.replace(containerRegex, containerReplacement);
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. NewWhyChooseUs.tsx
updateComponent(
  'src/components/home/NewWhyChooseUs.tsx',
  /<section className="bg-zinc-900 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-950 text-white $1 bg-cover bg-center" style={{ backgroundImage: \\'url("/images/bg-circuit.png")\\' }}>\\n      <div className="absolute inset-0 bg-zinc-950/90 z-0 pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewWhyChooseUs.tsx',
  /<div className="max-w-6xl mx-auto">/,
  '<div className="relative z-10 max-w-6xl mx-auto">'
);

// 2. NewSpecialty.tsx
updateComponent(
  'src/components/home/NewSpecialty.tsx',
  /<section className="bg-zinc-950 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-900 text-white $1 overflow-hidden">\\n      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewSpecialty.tsx',
  /<div className="max-w-6xl mx-auto flex /,
  '<div className="relative z-10 max-w-6xl mx-auto flex '
);

// 3. NewAboutUs.tsx
updateComponent(
  'src/components/home/NewAboutUs.tsx',
  /<section className="bg-zinc-900 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-950 text-white $1 overflow-hidden">\\n      <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewAboutUs.tsx',
  /<div className="max-w-6xl mx-auto flex /,
  '<div className="relative z-10 max-w-6xl mx-auto flex '
);

// 4. NewReviews.tsx
updateComponent(
  'src/components/home/NewReviews.tsx',
  /<section className="bg-zinc-950 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-900 text-white $1 overflow-hidden">\\n      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>\\n      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewReviews.tsx',
  /<div className="max-w-6xl mx-auto">/,
  '<div className="relative z-10 max-w-6xl mx-auto">'
);

// 5. NewHowItWorks.tsx
updateComponent(
  'src/components/home/NewHowItWorks.tsx',
  /<section className="bg-zinc-950 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-950 text-white $1 bg-cover bg-center overflow-hidden" style={{ backgroundImage: \\'url("/images/bg-circuit.png")\\' }}>\\n      <div className="absolute inset-0 bg-zinc-950/85 z-0 pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewHowItWorks.tsx',
  /<div className="max-w-6xl mx-auto">/,
  '<div className="relative z-10 max-w-6xl mx-auto">'
);

// 6. NewFinalCta.tsx
updateComponent(
  'src/components/home/NewFinalCta.tsx',
  /<section className="bg-zinc-900 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-900 text-white $1 overflow-hidden">\\n      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewFinalCta.tsx',
  /<div className="max-w-6xl mx-auto">/,
  '<div className="relative z-10 max-w-6xl mx-auto">'
);

// 7. NewCtaBlock.tsx
updateComponent(
  'src/components/home/NewCtaBlock.tsx',
  /<section className="bg-zinc-900 text-white ([^"]+)">/,
  '<section className="relative bg-zinc-900 text-white $1 overflow-hidden">\\n      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent pointer-events-none"></div>'
);
updateComponent(
  'src/components/home/NewCtaBlock.tsx',
  /<div className="max-w-6xl mx-auto flex /,
  '<div className="relative z-10 max-w-6xl mx-auto flex '
);

console.log('Backgrounds applied!');

try {
  execSync('npm run build', { stdio: 'inherit' });
  execSync('git add src/components/home/*.tsx', { stdio: 'inherit' });
  execSync('git commit -m "feat(ui): adiciona texturas de fundo avancadas (circuitos, grids, glows) em todas as dobras"', { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('Deploy success!');
} catch(e) {
  console.error('Error during build or deploy', e.message);
  process.exit(1);
}
