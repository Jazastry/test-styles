const fs = require("fs");
const express = require("express");
const router = express.Router();
const {
  getPageTitle,
} = require("./routes-generator-helpers");
const { createAndStoreInHtmlBase } = require("../public/js/createHtmlFile");

const pageFiles = fs.readdirSync("./views/pview/");

const indexData = require("../data-json/pview/index/index");

const plantData = require("../data-json/pview/plant");

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
  const { app, page,card } = indexData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");
  renderSettings = {
    layout: "portal-composed",
    page,
    app,
    pageTitle,
    appPagesNames,
    currentApp: app,
    cardItems:card.items
  };
  render(response, viewToRender, renderSettings, app, page);
});

router.get(`/plant`, (request, response) => {
  const { page, app,quickview } = plantData;
  const { signals, parameters } = quickview;

  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "pview",
    page,
    app,
    pageTitle,
    dataSignalsPanelBlocks:signals.items,
    dataParametersPanelBlocks:parameters.items
  };
  render(response, viewToRender, renderSettings, app, page);
});

module.exports = router;
