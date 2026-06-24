const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../../sandeep-learns6.html'), 'utf8');

// Extract the LESSONS array
const start = html.indexOf('const LESSONS = [');
const end = html.indexOf('];\n\n/* ===================== STATE', start) + 1;
let raw = html.slice(start + 'const LESSONS = '.length, end);

const output = `// Auto-extracted from sandeep-learns6.html\nexport const LESSONS = ${raw};\n`;
fs.writeFileSync(path.join(__dirname, 'src/data/lessons.js'), output, 'utf8');
console.log('lessons.js written successfully');
