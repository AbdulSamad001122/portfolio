const fs = require('fs');
const path = require('path');

function searchForFile(dir, targetName, contentQuery) {
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
          searchForFile(fullPath, targetName, contentQuery);
        }
      } else {
        if (file.toLowerCase() === targetName.toLowerCase()) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes(contentQuery)) {
              console.log(`Found MATCH in file: ${fullPath}`);
            } else {
              console.log(`Found file (no query match): ${fullPath}`);
            }
          } catch (e) {}
        }
      }
    }
  } catch (err) {}
}

console.log('Searching across E:\\ drive for App.tsx and index.html containing "PortfolioGrid"...');
searchForFile('e:\\', 'App.tsx', 'PortfolioGrid');
searchForFile('e:\\', 'index.html', 'Abdul Samad');
