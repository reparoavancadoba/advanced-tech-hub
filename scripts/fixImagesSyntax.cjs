const fs = require('fs');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = getFiles('src');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  // Fix the previously broken syntax first
  content = content.replace(/ loading="lazy" \/ width=\{400\} height=\{300\}/g, ' loading="lazy" width={400} height={300} /');
  content = content.replace(/ \/ loading="lazy" width=\{400\} height=\{300\}/g, ' loading="lazy" width={400} height={300} /');

  fs.writeFileSync(f, content);
});
