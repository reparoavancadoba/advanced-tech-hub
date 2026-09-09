const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/pages/BlogPost.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Change parseContent output classes from text-zinc-300 to text-zinc-800
content = content.replace(/text-zinc-300 text-\[16px\] md:text-\[17px\] mb-4/g, 'text-zinc-800 text-[16px] md:text-[17px] mb-4');
content = content.replace(/text-zinc-300 leading-relaxed mb-4 text-\[16px\] md:text-\[17px\] font-normal/g, 'text-zinc-800 leading-relaxed mb-4 text-[16px] md:text-[17px] font-normal');

// 2. Wrap the article body
// The TLDR is right before <article className="space-y-10 text-zinc-300">
// We want to include TLDR inside the white wrapper or right above it?
// Request: "fundo do CORPO DO ARTIGO (a área de texto corrido: resumo "Direto ao Ponto", Sintomas, Causas Possíveis, O Que Fazer, Quando Procurar) para fundo CLARO/BRANCO"
// So the wrapper starts right before TLDR.

const startMarker = `{/* Short Answer (Direto ao Ponto) */}`;
const endMarker = `{/* FAQ Accordion Section */}`;

// Let's modify the TLDR box itself. It currently has bg-zinc-900 border border-zinc-800 and text-zinc-300.
// Let's change it to a subtle blue or zinc-50 inside the white wrapper.

// We will inject the wrapper start:
// <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl mt-12 mb-12 border border-zinc-200">
// And end it before FAQ.

const newBodyBlock = `
          {/* Corpo do Artigo Claro / White Paper Wrapper */}
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-2xl mt-10 mb-12 border border-zinc-200">
            {/* Short Answer (Direto ao Ponto) */}
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl mb-10 shadow-sm">
              <p className="text-zinc-800 font-medium leading-relaxed text-base md:text-lg">
                {post.tldr || post.description}
              </p>
            </div>

            {/* Article Body */}
            <article className="space-y-10 text-zinc-800">
              <section id="sintomas">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-4 pb-2 border-b border-zinc-100">
                  Sintomas: O Problema com {post.service} {post.model}
                </h2>
                <ul className="space-y-2.5">
                  {post.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-800 text-[16px] md:text-[17px]">
                      <span className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="causas">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-4 pb-2 border-b border-zinc-100">
                  Causas Possíveis
                </h2>
                <ul className="space-y-2.5">
                  {post.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-800 text-[16px] md:text-[17px]">
                      <span className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Mid-article Conversion CTA */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center my-12 shadow-xl transform -mx-4 md:mx-0">
                <p className="font-bold text-white mb-4 text-lg md:text-xl px-4">
                  Reconhece esse problema no seu aparelho? Fale com a gente agora.
                </p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1DA851] transition-all shadow-md w-[90%] sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Técnico (WhatsApp)
                </a>
              </div>

              <section id="solucao">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-4 pb-2 border-b border-zinc-100">
                  O Que Fazer (Solução Técnica)
                </h2>
                <div>{parseContent(post.solution)}</div>
              </section>

              <section id="quando">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-4 pb-2 border-b border-zinc-100">
                  Quando Procurar Assistência Profissional
                </h2>
                <div>{parseContent(post.whenToSeek)}</div>
              </section>

              {post.sections && post.sections.length > 0 && post.sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-4 pb-2 border-b border-zinc-100">
                    {section.title}
                  </h2>
                  <div className="mb-4">{parseContent(section.content)}</div>
                  {section.subsections?.map((sub, i) => (
                    <div key={i} className="ml-4 mb-4 mt-6">
                      <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-3">{sub.title}</h3>
                      <div>{parseContent(sub.content)}</div>
                    </div>
                  ))}
                </section>
              ))}

              <section id="custo">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-4 pb-2 border-b border-zinc-100">
                  Quanto Custa {post.service} {post.model}?
                </h2>
                <div>{parseContent(post.costInfo)}</div>
              </section>
              
              {/* Service Page Link */}
              <div className="mt-8 mb-4">
                <Link to={matchedServiceUrl} className="inline-flex items-center gap-2 text-[#0066FF] font-bold hover:underline text-lg">
                  Saiba mais sobre {post.category || "nossos serviços"} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </article>
          </div>

          {/* FAQ Accordion Section */}
`;

// we need to slice the old content
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const head = content.slice(0, startIdx);
    const tail = content.slice(endIdx);
    content = head + newBodyBlock + tail;
    fs.writeFileSync(file, content);
    console.log("Successfully updated BlogPost.tsx");
} else {
    console.log("Markers not found");
}
