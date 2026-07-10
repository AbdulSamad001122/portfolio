const fs = require('fs');
const path = require('path');

function listTree(dir, depth = 0) {
  if (depth > 2) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const fullPath = path.join(dir, file);
    try {
      const stat = fs.statSync(fullPath);
      const indent = '  '.repeat(depth);
      if (stat.isDirectory()) {
        console.log(`${indent}[DIR]  ${file}`);
        listTree(fullPath, depth + 1);
      } else {
        console.log(`${indent}[FILE] ${file} (${stat.size} bytes)`);
      }
    } catch(e) {}
  }
}

console.log('Tree of E:\\potfolio:');
listTree('e:\\potfolio');
