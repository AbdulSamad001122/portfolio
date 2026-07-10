const fs = require('fs');
const path = require('path');

const logDir = 'C:\\Users\\Abdul Samad\\.gemini\\antigravity\\brain\\090c8b91-291b-4c36-9853-15dfe1a645fc\\.system_generated\\logs';

try {
  const files = fs.readdirSync(logDir);
  console.log('Log files:');
  files.forEach(f => console.log(`  ${f}`));
} catch (err) {
  console.error(err);
}
