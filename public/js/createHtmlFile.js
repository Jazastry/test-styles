const fs = require("fs");
const path = require("path");
const appDir = path.dirname(require.main.filename);

function createHtmlFileName(...inputs) {
  let htmlFileName = [...inputs].map((input) => {
    return (processedInput = input.trim().toLowerCase().replace(" ", "-"));
  });
  return htmlFileName.join("-");
}

function createAndStoreInHtmlBase(html, ...inputs) {
  let fileName = createHtmlFileName(...inputs);
  fs.writeFile(`${appDir}/public/html/${fileName}.html`, html, (err) => {
    if (err) return console.log("Error while creating HTML file=>", err);
  });
}
module.exports = {
  createAndStoreInHtmlBase
};
