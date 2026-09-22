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
  let newContent = content.replace(/<img([^>]+)>/g, (match, p1) => {
    if (p1.includes('fetchPriority') || p1.includes('hero')) return match;
    let attrs = p1;
    if (!attrs.includes('loading=')) {
      attrs += ' loading="lazy"';
    }
    if (!attrs.includes('width=')) {
      attrs += ' width={400} height={300}';
    }
    return `<img${attrs}>`;
  });
  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Fixed images in ' + f);
  }
});
