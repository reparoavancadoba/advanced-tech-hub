const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');

// Check 1: phrase exists in raw HTML
const hasPhrase = html.includes('conserto de celular perto de mim');
console.log('1. Phrase in raw HTML:', hasPhrase ? 'YES ✅' : 'NO ❌');

// Check 2: is it inside a hidden div (position:absolute with 1px)?
// The Tailwind sr-only class in CSS is fine - we need to check if the PHRASE is inside such element
const phraseIdx = html.indexOf('conserto de celular perto de mim');
if (phraseIdx !== -1) {
  // Look backwards 500 chars for any surrounding hidden div
  const before = html.substring(Math.max(0, phraseIdx - 500), phraseIdx);
  const hasHiddenParent = before.includes('clip:rect(0,0,0,0)') || before.includes('width:1px;height:1px');
  console.log('2. Phrase inside hidden div (clip/1px):', hasHiddenParent ? 'YES ❌ (BAD)' : 'NO ✅ (GOOD)');
  
  // Show context around the phrase
  const context = html.substring(Math.max(0, phraseIdx - 200), phraseIdx + 200);
  console.log('3. Context around phrase:');
  console.log(context);
}

// Check 4: visible block exists
const hasVisibleBlock = html.includes('seo-static-home');
console.log('4. Visible #seo-static-home block exists:', hasVisibleBlock ? 'YES ✅' : 'NO ❌');

// Check 5: no position:absolute with clip in the visible block
if (hasVisibleBlock) {
  const blockIdx = html.indexOf('seo-static-home');
  const blockContent = html.substring(blockIdx, blockIdx + 500);
  console.log('5. Visible block content:');
  console.log(blockContent);
}
