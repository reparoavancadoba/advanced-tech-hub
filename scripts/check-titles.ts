import { allPosts } from "../src/data/blogData";
console.log(allPosts.map(p => ({ slug: p.slug, title: p.title })).slice(0, 5));
