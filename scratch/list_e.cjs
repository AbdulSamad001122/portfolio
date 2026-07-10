const fs = require('fs');
const path = require('path');

try {
  const dirs = fs.readdirSync('e:\\');
  console.log('Folders in E:\\:');
  dirs.forEach(d => {
    try {
      const stat = fs.statSync(path.join('e:\\', d));
      if (stat.isDirectory()) {
        console.log(`  [DIR]  ${d}`);
      } else {
        console.log(`  [FILE] ${d}`);
      }
    } catch(e) {}
  });
} catch (err) {
  console.error(err);
}
