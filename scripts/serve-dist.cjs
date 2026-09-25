const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const distDir = path.join(__dirname, '..', 'dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath)) {
    // try adding .html
    if (fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  if (fs.existsSync(filePath)) {
    res.writeHead(200);
    res.end(fs.readFileSync(filePath));
  } else {
    // fallback to root index.html for SPA if not found, but since it's prerendered...
    const rootIndex = path.join(distDir, 'index.html');
    if (fs.existsSync(rootIndex)) {
      res.writeHead(200);
      res.end(fs.readFileSync(rootIndex));
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
