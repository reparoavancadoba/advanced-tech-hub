const fs = require('fs');
let index = fs.readFileSync('src/pages/Index.tsx', 'utf8');
index = index.replace('import NewWhyChooseUs from "@/components/home/NewWhyChooseUs";', '');
index = index.replace('<FadeIn><NewWhyChooseUs /></FadeIn>', '');
fs.writeFileSync('src/pages/Index.tsx', index);
console.log('Removed duplicate section');
