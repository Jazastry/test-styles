const fs = require('fs');
const files = [
  'index',
  'custom',
  'pview-html',
  'portal',
  'jsreports'
];

files.forEach(file => fs.rename(`views/layouts/${file}.html`, `views/layouts/${file}.hbs`, (err) => {
  if (err) throw err;
  console.log(`${file} rename complete!`);
  })
);
