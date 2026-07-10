const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      console.log(`[DIR]  ${fullPath}`);
      listFiles(fullPath);
    } else {
      console.log(`[FILE] ${fullPath} (${stat.size} bytes)`);
    }
  }
}

try {
  listFiles('e:\\potfolio\\src');
} catch (err) {
  console.error(err);
}
