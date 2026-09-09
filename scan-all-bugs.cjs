// Comprehensive scan and fix script for all data files
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const results = {
  filesScanned: 0,
  consertoAvancado: [],
  avaliacaoAvancado: [],
  diagnosticoAvancado: [],
  duplicatedWords: [],
  noveAnos: [],
  nazeSlug: [],
  allIssues: 0
};

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      results.filesScanned++;
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      const relPath = path.relative(__dirname, fullPath);

      lines.forEach((line, idx) => {
        const lineNum = idx + 1;
        
        // Check for "conserto Avançado" (wrong brand name)
        if (/conserto\s+Avan[cç]ad[oa]/i.test(line) && !/conserto.*(de|do|na|em).*Reparo Avan/i.test(line)) {
          results.consertoAvancado.push({ file: relPath, line: lineNum, text: line.trim().substring(0, 120) });
        }
        
        // Check for "avaliação Avançado" (wrong brand name)
        if (/avalia[çc][ãa]o\s+Avan[cç]ad[oa]/i.test(line)) {
          results.avaliacaoAvancado.push({ file: relPath, line: lineNum, text: line.trim().substring(0, 120) });
        }
        
        // Check for "Diagnóstico Avançado" as brand name (not as a service description)
        if (/diagn[oó]stico\s+Avan[cç]ad[oa]/i.test(line) && !/diagn[oó]stico\s+avan[cç]ad[oa]\s+(de|em|para|com|do|da|na|no)/i.test(line)) {
          results.diagnosticoAvancado.push({ file: relPath, line: lineNum, text: line.trim().substring(0, 120) });
        }
        
        // Check for duplicated words like "de Celular de Celular", "conserto de celular de celular"
        if (/(\b\w+\s+\w+)\s+\1/i.test(line)) {
          results.duplicatedWords.push({ file: relPath, line: lineNum, text: line.trim().substring(0, 120) });
        }
        
        // Check for "9 anos"
        if (/9\s+anos/i.test(line) && !/\b19\s+anos/i.test(line) && !/\b29\s+anos/i.test(line)) {
          results.noveAnos.push({ file: relPath, line: lineNum, text: line.trim().substring(0, 120) });
        }
        
        // Check for "naze" slug (truncated Nazaré)
        if (/naze[^r]/i.test(line) || /naze["\s,'`]/.test(line) || /naze$/.test(line.trim())) {
          results.nazeSlug.push({ file: relPath, line: lineNum, text: line.trim().substring(0, 120) });
        }
      });
    }
  }
}

// Also scan public/ for redirects and config
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  const publicFiles = fs.readdirSync(publicDir);
  publicFiles.forEach(f => {
    const fp = path.join(publicDir, f);
    if (fs.statSync(fp).isFile()) {
      results.filesScanned++;
      const content = fs.readFileSync(fp, 'utf8');
      const relPath = path.relative(__dirname, fp);
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (/9\s+anos/i.test(line) && !/\b19\s+anos/i.test(line)) {
          results.noveAnos.push({ file: relPath, line: idx+1, text: line.trim().substring(0, 120) });
        }
        if (/naze[^r]/i.test(line) || /naze["\s,'`]/.test(line)) {
          results.nazeSlug.push({ file: relPath, line: idx+1, text: line.trim().substring(0, 120) });
        }
      });
    }
  });
}

results.allIssues = results.consertoAvancado.length + results.avaliacaoAvancado.length + results.diagnosticoAvancado.length + results.duplicatedWords.length + results.noveAnos.length + results.nazeSlug.length;

console.log('========================================');
console.log('SCAN REPORT - All Source Files');
console.log('========================================');
console.log('Total files scanned:', results.filesScanned);
console.log('Total issues found:', results.allIssues);
console.log('');

console.log('--- "conserto Avançado" (wrong brand) ---');
console.log('Count:', results.consertoAvancado.length);
results.consertoAvancado.forEach(r => console.log(`  ${r.file}:${r.line} -> ${r.text}`));

console.log('');
console.log('--- "avaliação Avançado" (wrong brand) ---');
console.log('Count:', results.avaliacaoAvancado.length);
results.avaliacaoAvancado.forEach(r => console.log(`  ${r.file}:${r.line} -> ${r.text}`));

console.log('');
console.log('--- "Diagnóstico Avançado" (wrong brand) ---');
console.log('Count:', results.diagnosticoAvancado.length);
results.diagnosticoAvancado.forEach(r => console.log(`  ${r.file}:${r.line} -> ${r.text}`));

console.log('');
console.log('--- Duplicated word patterns ---');
console.log('Count:', results.duplicatedWords.length);
results.duplicatedWords.forEach(r => console.log(`  ${r.file}:${r.line} -> ${r.text}`));

console.log('');
console.log('--- "9 anos" (should be 7 anos) ---');
console.log('Count:', results.noveAnos.length);
results.noveAnos.forEach(r => console.log(`  ${r.file}:${r.line} -> ${r.text}`));

console.log('');
console.log('--- "naze" slug (truncated Nazaré) ---');
console.log('Count:', results.nazeSlug.length);
results.nazeSlug.forEach(r => console.log(`  ${r.file}:${r.line} -> ${r.text}`));
