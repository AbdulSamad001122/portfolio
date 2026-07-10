const fs = require('fs');
const path = require('path');

function searchAllFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '$RECYCLE.BIN') {
          searchAllFiles(fullPath);
        }
      } else {
        if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.json')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('TheShip.ai') || content.includes('abdulsamadcodes')) {
              console.log(`MATCH found in file: ${fullPath}`);
            }
          } catch (e) {}
        }
      }
    }
  } catch (err) {}
}

console.log('Searching all source files on E:\\ drive for portfolio content...');
searchAllFiles('e:\\');
console.log('Search finished.');
