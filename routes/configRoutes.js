const fs = require("fs");
const express = require("express");
const router = express.Router();
const {
  getPageTitle,
} = require("./routes-generator-helpers");
const { createAndStoreInHtmlBase } = require("./../public/js/createHtmlFile");

const pageFiles = fs.readdirSync("./views/config/");

const componentsData = require("../data-json/config/components");
const editData = require("../data-json/config/edit");
const browseData = require("./../data-json/config/browse");
const browseAllData = require("../data-json/config/browse-all");

let appPagesNames = pageFiles.map((p) => {
  let name = p.toLowerCase().replace(".hbs", "");
  if (name !== "index") {
    return name;
  }
});

const render = function (response, viewToRender, renderSettings, app, page) {
  response.render(viewToRender, renderSettings, (err, html) => {
    if (err) return console.log("Error while rendering=>", err);
    createAndStoreInHtmlBase(html, app, page);
    response.send(html);
  });
};

let renderSettings = {};
let viewToRender = {};

router.get(`/`, (request, response) => {
  const { app, page, node } = componentsData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    currentApp: app,
    nodeItems: node.items,
  };
  render(response, viewToRender, renderSettings, app, page);
});

router.get(`/edit`, (request, response) => {
  const { page, app, node, panel } = editData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "config",
    page,
    app,
    pageTitle,
    nodeItems: node.items,
    panelItems: panel.items,
  };
  render(response, viewToRender, renderSettings, app, page);
});

router.get(`/browse`, (request, response) => {
  const { page, app, node, panel } = browseData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "config",
    page,
    app,
    pageTitle,
    nodeItems: node.items,
    panelItems: panel.items,
  };
  render(response, viewToRender, renderSettings, app, page);
});

router.get(`/browse-all`, (request, response) => {
  const { page, app, node, panel } = browseAllData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "config",
    page,
    app,
    pageTitle,
    nodeItems: node.items,
    panelItems: panel.items,
  };
  render(response, viewToRender, renderSettings, app, page);
});
module.exports = router;
