const fs = require('fs');
const path = require('path');

function searchInDir(dir, query) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        searchInDir(fullPath, query);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.html')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(query)) {
          console.log(`Found "${query}" in: ${fullPath}`);
        }
      }
    }
  }
}

console.log('Searching in E:\\potfolio...');
searchInDir('e:\\potfolio', 'TheShip.ai');
searchInDir('e:\\potfolio', 'Abdul Samad');
