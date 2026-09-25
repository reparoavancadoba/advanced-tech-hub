const fs = require('fs');
const path = require('path');

const files = [
  'src/components/home/NewWhatWeDo.tsx',
  'src/components/home/NewWhyChooseUs.tsx',
  'src/components/home/NewSpecialty.tsx',
  'src/components/home/NewAboutUs.tsx',
  'src/components/home/NewReviews.tsx',
  'src/components/home/NewHowItWorks.tsx',
  'src/components/home/NewFinalCta.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Change "flex items-center gap-3 mb-4" to "flex justify-center md:justify-start items-center gap-3 mb-4"
  content = content.replace(/className="flex items-center gap-3 mb-4"/g, 'className="flex justify-center md:justify-start items-center gap-3 mb-4"');
  content = content.replace(/className="flex items-center gap-3 mb-6"/g, 'className="flex justify-center md:justify-start items-center gap-3 mb-6"');
  
  // Center main headings
  content = content.replace(/className="text-2xl md:text-3xl font-extrabold/g, 'className="text-center md:text-left text-2xl md:text-3xl font-extrabold');
  content = content.replace(/className="text-3xl md:text-4xl font-extrabold/g, 'className="text-center md:text-left text-3xl md:text-4xl font-extrabold');
  content = content.replace(/className="text-3xl md:text-4xl font-bold/g, 'className="text-center md:text-left text-3xl md:text-4xl font-bold');
  
  // Center paragraphs under headings
  content = content.replace(/className="text-slate-400 mt-2 max-w-md text-sm"/g, 'className="text-center md:text-left text-slate-400 mt-2 max-w-md text-sm mx-auto md:mx-0"');
  content = content.replace(/className="text-slate-400 text-sm leading-relaxed mb-6"/g, 'className="text-center md:text-left text-slate-400 text-sm leading-relaxed mb-6"');
  content = content.replace(/className="text-zinc-600 mb-8 max-w-md"/g, 'className="text-center md:text-left text-zinc-600 mb-8 max-w-md mx-auto md:mx-0"');

  // NewWhatWeDo: grid of items. Text inside should maybe be centered?
  // Let's leave item text as is unless it's explicitly bad. But wait, if they say "tudo no centro", maybe they mean the items too!
  content = content.replace(/<div className="flex gap-4">/g, '<div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">');
  content = content.replace(/className="flex flex-col gap-4 bg-zinc-50 p-8 rounded-2xl/g, 'className="flex flex-col items-center md:items-start text-center md:text-left gap-4 bg-zinc-50 p-8 rounded-2xl');
  content = content.replace(/className="bg-\[\#0f172a\] p-6 md:p-8 flex flex-col/g, 'className="bg-[#0f172a] p-6 md:p-8 flex flex-col items-center md:items-start text-center md:text-left');
  
  // Reduce mobile paddings
  content = content.replace(/py-16 md:py-20/g, 'py-10 md:py-20');
  content = content.replace(/py-12 md:py-16/g, 'py-10 md:py-16');
  content = content.replace(/py-20 md:py-24/g, 'py-10 md:py-24');

  fs.writeFileSync(f, content);
});

console.log('Centered home sections on mobile.');
