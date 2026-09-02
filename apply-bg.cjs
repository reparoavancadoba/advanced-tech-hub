const fs = require('fs');
const { execSync } = require('child_process');

const sourceImg = 'C:/Users/Paulo Lopes/.gemini/antigravity/brain/060fa536-930c-4eaf-a2a9-03962d77c4ba/.user_uploaded/media_1788384495138.png';
const destImg = 'public/images/bg-circuit.png';

fs.copyFileSync(sourceImg, destImg);
console.log('Background image copied.');

let content = fs.readFileSync('src/components/home/NewWhatWeDo.tsx', 'utf8');

content = content.replace(
  /<section className="([^"]+bg-zinc-950[^"]+)"/,
  (match, p1) => {
     let newClasses = p1.replace('bg-zinc-950', 'bg-zinc-950 bg-cover bg-center relative');
     return '<section className="' + newClasses + '" style={{ backgroundImage: \\'url("/images/bg-circuit.png")\\' }}';
  }
);

fs.writeFileSync('src/components/home/NewWhatWeDo.tsx', content, 'utf8');
console.log('Component updated.');

try {
  execSync('npm run build', { stdio: 'inherit' });
  execSync('git add public/images/bg-circuit.png src/components/home/NewWhatWeDo.tsx', { stdio: 'inherit' });
  execSync('git commit -m "feat(ui): adiciona background com textura de circuito na secao o que fazemos"', { stdio: 'inherit' });
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('Deploy finalizado!');
} catch(e) {
  console.error(e.message);
  process.exit(1);
}
