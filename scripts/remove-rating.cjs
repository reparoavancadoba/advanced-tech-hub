const fs = require('fs');
const path = require('path');

function removeAggregateRating(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/"aggregateRating":\s*\{\s*"@type":\s*"AggregateRating",\s*"ratingValue":\s*".*?",\s*"reviewCount":\s*".*?"\s*\},?/g, '');
  // also fix trailing commas in schema object just in case
  content = content.replace(/,\s*\}/g, '}');
  fs.writeFileSync(filePath, content, 'utf8');
}

removeAggregateRating(path.join(__dirname, '../src/pages/ServicoConsolidado.tsx'));
removeAggregateRating(path.join(__dirname, '../src/pages/LocalConsolidado.tsx'));
