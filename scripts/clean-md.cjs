const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.vitepress') walk(full);
    } else if (f.endsWith('.md')) {
      let content = fs.readFileSync(full, 'utf-8');
      if (content.includes('<script type="application/ld+json">')) {
        content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
        fs.writeFileSync(full, content, 'utf-8');
        console.log('Cleaned JSON-LD from:', f);
      }
    }
  }
}

walk('c:/Users/Pro User/Desktop/jichangcloud.world/src');
console.log('Finished removing inline JSON-LD tags.');
