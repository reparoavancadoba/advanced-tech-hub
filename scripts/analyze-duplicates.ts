import { allPosts } from '../src/data/blogData';
import * as fs from 'fs';
import * as path from 'path';

// 1. Identify duplicates
const titles: Record<string, string[]> = {};
allPosts.forEach(p => {
  titles[p.title] = titles[p.title] || [];
  titles[p.title].push(p.slug);
});

console.log("=== DUPLICATE TITLES ===");
Object.keys(titles).forEach(t => {
  if (titles[t].length > 1) {
    console.log(`\nTITLE: "${t}"`);
    console.log(`SLUGS: ${titles[t].join(", ")}`);
  }
});

// 2. Identify length violations
console.log("\n=== LENGTH VIOLATIONS ===");
allPosts.forEach(p => {
  let issues = [];
  if (p.title.length > 65) issues.push(`Title (${p.title.length} chars)`);
  if (p.metaDescription && p.metaDescription.length > 160) issues.push(`Meta (${p.metaDescription.length} chars)`);
  
  if (issues.length > 0) {
    console.log(`[${p.slug}] -> ${issues.join(", ")}`);
  }
});
