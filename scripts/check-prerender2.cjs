const fs = require('fs');
let c = fs.readFileSync('scripts/prerender.ts', 'utf8');
const lines = c.split('\n');
console.log('--- ALL GENERATE CALLS ---');
lines.forEach(l => {
  if (l.includes('generatePage(')) {
    console.log(l.substring(0, 150));
  }
});
console.log('--- TITLE LOGIC ---');
lines.forEach((l, i) => {
  if (l.includes('title') && l.includes('=')) {
    console.log(i + ': ' + l.trim());
  }
});
