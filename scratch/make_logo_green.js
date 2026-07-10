const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../public/abdul-samad.svg');
let content = fs.readFileSync(filePath, 'utf8');

// Replace black styling with the theme's green color (#008552)
const originalStyle = 'stroke: black; fill: black;';
const greenStyle = 'stroke: #008552; fill: #008552;';

if (content.includes(originalStyle)) {
  content = content.split(originalStyle).join(greenStyle);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated signature SVG to green!');
} else {
  console.log('Original styling not found or already green.');
}
