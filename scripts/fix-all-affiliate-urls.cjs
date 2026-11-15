const fs = require('fs');
const path = require('path');

// 1. Read affiliates
const affContent = fs.readFileSync('src/data/affiliates.ts', 'utf-8');
const affMap = {};
const matches = [...affContent.matchAll(/slug:\s*'([^']+)',\s*affiliateUrl:\s*'([^']+)'/g)];
matches.forEach(m => {
  affMap[m[1]] = m[2];
});

console.log('Loaded affiliate mappings:', Object.keys(affMap).length);

// 2. Fix src/data/brands.ts
let brandsTs = fs.readFileSync('src/data/brands.ts', 'utf-8');
for (const [slug, url] of Object.entries(affMap)) {
  const placeholderRegex = new RegExp(`"affiliateUrl":\\s*"https://jichangcloud\\.world/go/${slug}"`, 'g');
  if (placeholderRegex.test(brandsTs)) {
    brandsTs = brandsTs.replace(placeholderRegex, `"affiliateUrl": "${url}"`);
    console.log(`Updated brands.ts for ${slug} -> ${url}`);
  }
}
fs.writeFileSync('src/data/brands.ts', brandsTs, 'utf-8');

// 3. Fix all markdown files in src/brands/*.md
const brandsDir = 'src/brands';
const files = fs.readdirSync(brandsDir);
files.forEach(f => {
  if (f.endsWith('.md')) {
    const fullPath = path.join(brandsDir, f);
    let md = fs.readFileSync(fullPath, 'utf-8');
    let changed = false;

    for (const [slug, url] of Object.entries(affMap)) {
      const placeholder = `https://jichangcloud.world/go/${slug}`;
      if (md.includes(placeholder)) {
        md = md.replaceAll(placeholder, url);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(fullPath, md, 'utf-8');
      console.log(`Fixed affiliate URLs in markdown: ${f}`);
    }
  }
});

// 4. Also check src/recommend/*.md, src/vpn/*.md, src/clash/*.md, src/resources/*.md, src/index.md
function scanAndFixDir(dir) {
  const dirFiles = fs.readdirSync(dir);
  dirFiles.forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.vitepress') scanAndFixDir(full);
    } else if (f.endsWith('.md')) {
      let content = fs.readFileSync(full, 'utf-8');
      let modified = false;
      for (const [slug, url] of Object.entries(affMap)) {
        const placeholder = `https://jichangcloud.world/go/${slug}`;
        if (content.includes(placeholder)) {
          content = content.replaceAll(placeholder, url);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(full, content, 'utf-8');
        console.log(`Fixed URLs in: ${full}`);
      }
    }
  });
}

scanAndFixDir('src');
console.log('All affiliate URLs fixed across whole project!');
