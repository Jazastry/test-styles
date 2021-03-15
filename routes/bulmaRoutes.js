const fs = require("fs");
const express = require("express");
const router = express.Router();

const {
  getPageTitle,
} = require("./routes-generator-helpers");
const { createAndStoreInHtmlBase } = require("../public/js/createHtmlFile");

var pageFiles = fs.readdirSync("./views/bulma/");

const indexData = require("../data-json/bulma/index/index");
const helpersData = require("../data-json/bulma/helpers");
const formData = require("../data-json/bulma/form");
const componentsData = require("../data-json/bulma/components");
const elementsData = require("../data-json/bulma/elements");
const layoutsData = require("../data-json/bulma/layouts");


// let appPagesNames = pageFiles.map((p) => {
//   let name = p.toLowerCase().replace(".hbs", "");
//   if (name !== "index") {
//     return name;
//   }
// });

let appPagesNames =["Helpers", "Elements", "Form", "Components"]
const render = function (response, viewToRender, renderSettings,app, page) {
  response.render(viewToRender, renderSettings, (err, html) => {
    if (err) return console.log("Error while rendering=>", err);
    createAndStoreInHtmlBase(html, app,page);
    response.send(html);
  });
};

router.get(`/`, (request, response) => {
  const { app, page } = indexData;
  let pageTitle = getPageTitle(page, app, "index");

  viewToRender = `${app}/${page}`;
  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    currentApp: app,
  };
  render(response, viewToRender, renderSettings,app, page);
});

router.get(`/helpers`, (request, response) => {
  const { app, page, position, typography,pointer } = helpersData;
  viewToRender = `${app}/${page}`;
  let asideItems = [];
  position.items.forEach((item) => asideItems.push(item.title));
  typography.items.forEach((item) => asideItems.push(item.title));
  pointer.items.forEach((item) => asideItems.push(item.title));
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    currentApp: app,
    listName:page,
    asideItems,
    positionItems: position.items,
    typographyItems: typography.items,
    pointerItems: pointer.items,
  };
  render(response, viewToRender, renderSettings,app, page);
});

router.get(`/form`, (request, response) => {
  const { app, page, form,formExtension } = formData;
  viewToRender = `${app}/${page}`;
  let asideItems = [];
  form.items.forEach((item) => asideItems.push(item.title));
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    currentApp: app,
    listName: page,
    asideItems,
    formItems: form.items,
    formExtensionItems: formExtension.items
  };
  render(response, viewToRender, renderSettings, app,page);
});

router.get(`/components`, (request, response) => {
  const { 
    app, 
    page, 
    node, 
    dropdown, 
    panel, 
    gauge 
  } = componentsData;
  viewToRender = `${app}/${page}`;

  let asideItems = [];
  dropdown.items.forEach((item) => asideItems.push(item.title));
  gauge.items.forEach((item) => asideItems.push(item.title));
  node.items.forEach((item) => asideItems.push(item.title));
  panel.items.forEach((item) => asideItems.push(item.title));

  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    listName:page,
    currentApp: app,
    asideItems,
    dropdownItems: dropdown.items,
    gaugeItems: gauge.items,
    nodeItems: node.items,
    panelItems: panel.items,
  };

  render(response, viewToRender, renderSettings,app, page);
});


router.get(`/elements`, (request, response) => {
  const { app, page, button, icon } = elementsData;
  viewToRender = `${app}/${page}`;
  let asideItems = [];
  button.items.forEach((item) => asideItems.push(item.title));
  icon.items.forEach((item) => asideItems.push(item.title));
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    listName:page,
    currentApp: app,
    asideItems,
    buttonItems: button.items,
    iconItems: icon.items,
  };
  render(response, viewToRender, renderSettings, app, page);
});

router.get(`/layouts`, (request, response) => {
  const { app, page, masonry, grid } = layoutsData;
  viewToRender = `${app}/${page}`;
  let asideItems = [];
  masonry.items.forEach((item) => asideItems.push(item.title));
  grid.items.forEach((item) => asideItems.push(item.title));
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    listName:page,
    currentApp: app,
    asideItems,
    masonryItems: masonry.items,
    gridItems: grid.items,
  };

  render(response, viewToRender, renderSettings, app, page);
});

// router.use(function (req, res, next) {
//   console.log(`Accessing ${app} app`);
//   next();
// });

module.exports = router;
