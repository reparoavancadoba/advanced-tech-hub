const fs = require('fs');

let c = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');

c = c.replace(/<img[\s\S]*?src="\/HERO \(2\)\.png"[\s\S]*?\/>/, `<img
          src="/hero-desktop.webp"
          srcSet="/hero-mobile.webp 800w, /hero-desktop.webp 1672w"
          sizes="(max-width: 800px) 100vw, 1672px"
          alt="Fachada Reparo Avançado"
          width={1672}
          height={941}
          fetchPriority="high"
          className="w-full h-full object-cover object-center md:object-right-top"
        />`);

// Also fix contrast and heading order in HeroSection (if any)
// Example: <p className="... text-slate-400 mt-1"> to <p className="... text-slate-300 mt-1">
c = c.replace(/text-slate-400/g, 'text-slate-300'); // Better contrast

fs.writeFileSync('src/components/HeroSection.tsx', c);
console.log('Hero image updated');

// Now let's fix the preload in prerender.ts
let prerender = fs.readFileSync('scripts/prerender.ts', 'utf8');

// The preload needs to be added to index.html before </head>. 
// Wait, prerender.ts replaces <!--seo-head--> or similar?
// Usually prerender replaces `<div id="root"></div>`.
