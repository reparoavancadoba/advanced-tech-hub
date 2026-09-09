import { allPosts } from './src/data/blogData';
import * as fs from 'fs';

const dates = {};
allPosts.forEach(p => {
  if (p.datePublished) {
    dates[p.datePublished] = (dates[p.datePublished] || 0) + 1;
  }
});

let report = '# Relatorio de Cadencia de Posts\n\n';
Object.keys(dates).sort((a,b) => {
  const [d1, m1, y1] = a.split('/');
  const [d2, m2, y2] = b.split('/');
  const dateA = new Date(y1 + '-' + m1 + '-' + d1);
  const dateB = new Date(y2 + '-' + m2 + '-' + d2);
  return dateB.getTime() - dateA.getTime();
}).forEach(date => {
  report += '- ' + date + ': ' + dates[date] + ' artigo(s)\n';
});

fs.writeFileSync('cadence_report.txt', report);
console.log('Report generated');
