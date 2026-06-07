const fs = require('fs');
const path = require('path');

const filesToReplace = [
  'src/data/servicosConsolidadosData.ts',
  'src/data/locaisConsolidadosData.ts',
  'src/data/locaisData.ts',
  'src/data/blogData.ts',
  'src/data/editorialPosts.ts',
  'src/pages/Atendimento.tsx',
  'src/pages/BlogPost.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Servicos.tsx',
  'src/pages/ServicoConsolidado.tsx',
  'src/pages/LocalConsolidado.tsx',
  'src/pages/LocaisDeAtendimento.tsx'
];

const replacements = [
  // 1. Specific multi-word phrases first
  { search: /placa-mãe/gi, replace: 'circuito principal' },
  { search: /Placa-mãe/g, replace: 'Circuito principal' },
  { search: /Placa-Mãe/g, replace: 'Circuito Principal' },
  { search: /conserto avançado/gi, replace: 'conserto' },
  { search: /Conserto avançado/g, replace: 'Conserto' },
  { search: /Conserto Avançado/g, replace: 'Conserto' },
  { search: /suporte remoto/gi, replace: 'atendimento presencial' },
  { search: /Suporte remoto/g, replace: 'Atendimento presencial' },
  { search: /Suporte Remoto/g, replace: 'Atendimento Presencial' },
  { search: /remoção de vírus/gi, replace: 'limpeza de cache do sistema' },
  { search: /Remoção de vírus/g, replace: 'Limpeza de cache do sistema' },
  { search: /Remoção de Vírus/g, replace: 'Limpeza de Cache do Sistema' },

  // 2. Reparo/Reparos (generic, avoiding brand name Reparo Avançado and slugs/URLs with hyphens)
  { search: /(?<![-a-zA-Z0-9])reparos?(?![\s-]*avanc?a?d?o)(?![-a-zA-Z0-9])/gi, replace: 'conserto' },

  // 3. Placa/Placas (avoiding slugs/URLs with hyphens)
  { search: /(?<![-a-zA-Z0-9])placas?(?![-a-zA-Z0-9])/gi, replace: 'circuito interno' },

  // 4. Other single words
  { search: /(?<![-a-zA-Z0-9])hardware(?![-a-zA-Z0-9])/gi, replace: 'componentes físicos' },
  { search: /(?<![-a-zA-Z0-9])software(?![-a-zA-Z0-9])/gi, replace: 'sistema operacional' },
  { search: /(?<![-a-zA-Z0-9])desbloqueio(?![-a-zA-Z0-9])/gi, replace: 'ajuste de sistema' },
  { search: /(?<![-a-zA-Z0-9])recuperação(?![-a-zA-Z0-9])/gi, replace: 'restauração' },
  { search: /(?<![-a-zA-Z0-9])recuperacao(?![-a-zA-Z0-9])/gi, replace: 'restauracao' },
  { search: /(?<![-a-zA-Z0-9])manutenção(?![-a-zA-Z0-9])/gi, replace: 'conserto' },
  { search: /(?<![-a-zA-Z0-9])manutencao(?![-a-zA-Z0-9])/gi, replace: 'conserto' },
  { search: /(?<![-a-zA-Z0-9])microsoldagem(?![-a-zA-Z0-9])/gi, replace: 'conserto físico' },
  
  // Assistência Técnica / Assistência
  { search: /assistência técnica/gi, replace: 'loja física' },
  { search: /Assistência Técnica/g, replace: 'Loja Física' },
  { search: /assistência/gi, replace: 'loja' },
  { search: /Assistência/g, replace: 'Loja' },
  { search: /assistencia tecnica/gi, replace: 'loja fisica' },
  { search: /Assistencia Tecnica/g, replace: 'Loja Fisica' },
  { search: /assistencia/gi, replace: 'loja' },
  { search: /Assistencia/g, replace: 'Loja' },

  // Suporte / Técnicos / Especialistas
  { search: /suporte técnico/gi, replace: 'atendimento local' },
  { search: /Suporte técnico/g, replace: 'Atendimento local' },
  { search: /Suporte Técnico/g, replace: 'Atendimento Local' },
  { search: /suporte/gi, replace: 'atendimento comercial' },
  { search: /Suporte/g, replace: 'Atendimento comercial' },
  { search: /técnicos certificados/gi, replace: 'profissionais qualificados' },
  { search: /Técnicos Certificados/g, replace: 'Profissionais Qualificados' },
  { search: /atendimento técnico/gi, replace: 'atendimento presencial' },
  { search: /Atendimento técnico/g, replace: 'Atendimento presencial' },
  { search: /Atendimento Técnico/g, replace: 'Atendimento Presencial' },
  { search: /equipe técnica/gi, replace: 'equipe de atendimento' },
  { search: /Equipe técnica/g, replace: 'Equipe de atendimento' },
  { search: /Equipe Técnica/g, replace: 'Equipe de Atendimento' },
  { search: /fale com um técnico/gi, replace: 'fale com nossa equipe' },
  { search: /Fale com um Técnico/g, replace: 'Fale com nossa equipe' },
  { search: /técnico especializado/gi, replace: 'atendimento presencial' },
  { search: /Técnico Especialista em Hardware/gi, replace: 'Consultor Comercial' },
  { search: /técnico/gi, replace: 'atendimento comercial' },
  { search: /Técnico/g, replace: 'Atendimento comercial' },
  { search: /técnicos/gi, replace: 'equipe' },
  { search: /Técnicos/g, replace: 'Equipe' },
  { search: /tecnico/gi, replace: 'atendimento comercial' },
  { search: /tecnicos/gi, replace: 'equipe' },

  // Especialista
  { search: /atendimento especializado/gi, replace: 'atendimento presencial em Salvador' },
  { search: /Atendimento especializado/g, replace: 'Atendimento presencial em Salvador' },
  { search: /Atendimento Especializado/g, replace: 'Atendimento presencial em Salvador' },
  { search: /falar com um especialista/gi, replace: 'solicitar orçamento pelo WhatsApp' },
  { search: /Falar com um especialista/g, replace: 'Solicitar orçamento pelo WhatsApp' },
  { search: /Falar com um Especialista/g, replace: 'Solicitar Orçamento pelo WhatsApp' },
  { search: /especialistas/gi, replace: 'equipe' },
  { search: /Especialistas/g, replace: 'Equipe' },
  { search: /especialista/gi, replace: 'equipe' },
  { search: /Especialista/g, replace: 'Equipe' },
  { search: /especializado/gi, replace: 'presencial' },
  { search: /especializada/gi, replace: 'focada' },
  { search: /Especializado/g, replace: 'Presencial' },
  { search: /Especializada/g, replace: 'Focada' },

  // Diagnóstico
  { search: /diagnóstico técnico/gi, replace: 'avaliação inicial' },
  { search: /diagnóstico especializado/gi, replace: 'avaliação inicial' },
  { search: /Diagnóstico especializado/g, replace: 'Avaliação inicial' },
  { search: /Diagnóstico Especializado/g, replace: 'Avaliação inicial' },
  { search: /diagnóstico gratuito/gi, replace: 'avaliação inicial' },
  { search: /Diagnóstico gratuito/g, replace: 'Avaliação inicial' },
  { search: /Diagnóstico Gratuito/g, replace: 'Avaliação Inicial' },
  { search: /diagnóstico completo/gi, replace: 'avaliação completa' },
  { search: /diagnóstico de placa/gi, replace: 'avaliação de circuito' },
  { search: /Diagnóstico de Placa/g, replace: 'Avaliação de Circuito' },
  { search: /diagnóstico/gi, replace: 'avaliação' },
  { search: /Diagnóstico/g, replace: 'Avaliação' },
  { search: /diagnósticos/gi, replace: 'avaliações' },
  { search: /Diagnósticos/g, replace: 'Avaliações' },
  { search: /diagnostico/gi, replace: 'avaliacao' },
  { search: /diagnosticos/gi, replace: 'avaliacoes' },

  // Service Schema update
  { search: /"@type": "Service"/g, replace: '"@type": "LocalBusiness"' },
  { search: /"name": "Assistência Técnica e Conserto de Celulares em Salvador"/g, replace: '"name": "Reparo Avançado - Conserto de Celulares em Salvador"' },
  
  // Clean typo "avaliaçãos"
  { search: /avaliaçãos/gi, replace: 'avaliações' }
];

console.log('Starting replacements...');

filesToReplace.forEach((fileRelPath) => {
  const fullPath = path.resolve(fileRelPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fileRelPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  // Apply general replacements
  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated: ${fileRelPath}`);
  } else {
    console.log(`No changes needed: ${fileRelPath}`);
  }
});

console.log('Replacements completed.');
