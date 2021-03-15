function getPageTitle(screenName, pageMainName, nameToClear) {
  let pageTitle = "";
  if (screenName === nameToClear) {
    pageTitle = pageMainName;
  } else {
    pageTitle = `${pageMainName}-${screenName}`;
  }
  return pageTitle;
}
function checkForAppPages(pages, pageFiles) {
  let existingPages = [];
  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    let pageName = page.page;

    pageFiles.forEach((file) => {
      let fileName = file.replace(".hbs", "").trim();
      if (fileName === pageName.toLowerCase()) {
        existingPages.push(page);
      }
    });
  }
  return existingPages;
}
module.exports = {
  getPageTitle,
  checkForAppPages,
};
