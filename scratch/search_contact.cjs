const fs = require('fs');
const path = require('path');

const componentsDir = 'e:\\potfolio\\src\\components';
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (fs.statSync(filePath).isFile() && file.endsWith('.tsx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('id="contact"') || content.includes("id='contact'") || content.includes('contact')) {
      console.log(`Found "contact" in: ${file}`);
      // Find line number
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('id="contact"') || line.includes("id='contact'")) {
          console.log(`  Line ${idx + 1}: ${line.trim()}`);
        }
      });
    }
  }
});
