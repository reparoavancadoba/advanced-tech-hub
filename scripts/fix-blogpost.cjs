const fs = require('fs');
let content = fs.readFileSync('src/pages/BlogPost.tsx', 'utf8');

const lines = content.split('\n');
const start = lines.findIndex(l => l.includes('const serviceLinkMap: Record<string, string> = {'));
const end = lines.findIndex(l => l.includes('const matchedServiceUrl ='));

if (start !== -1 && end !== -1) {
  lines.splice(start, end - start + 1, '  const matchedServiceUrl = post.serviceSlug ? `/${post.serviceSlug}` : "/servicos";');
  fs.writeFileSync('src/pages/BlogPost.tsx', lines.join('\n'));
  console.log('Fixed matchedServiceUrl in BlogPost.tsx');
} else {
  console.log('Could not find the target lines');
}
