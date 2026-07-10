const fs = require('fs');
const path = require('path');

function searchInDir(dir, query) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_index' && file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        searchInDir(fullPath, query);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.css')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.toLowerCase().includes(query.toLowerCase())) {
          console.log(`Found in file: ${fullPath}`);
          const lines = content.split('\n');
          lines.forEach((line, idx) => {
            if (line.toLowerCase().includes(query.toLowerCase())) {
              console.log(`  Line ${idx + 1}: ${line.trim()}`);
            }
          });
        }
      }
    }
  }
}

searchInDir(path.join(__dirname, '..'), 'Twitter');
