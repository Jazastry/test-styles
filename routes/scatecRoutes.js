const fs = require("fs");
const express = require("express");
const router = express.Router();
const {
  getPageTitle,
} = require("./routes-generator-helpers");
const { createAndStoreInHtmlBase } = require("./../public/js/createHtmlFile");

const pageFiles = fs.readdirSync("./views/scatec/");
const indexData = require("../data-json/scatec/index");


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
  const { app, page } = indexData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "portal-native",
    page,
    app,
    pageTitle,
    appPagesNames,
    currentApp: app,
    listName:['branding'],
    asideItems:['colors']
  };
  render(response, viewToRender, renderSettings, app, page);
});

router.get(`/colors`, (request, response) => {
  const { page, app, } = indexData;
  viewToRender = `${app}/${page}`;
  let pageTitle = getPageTitle(page, app, "index");

  renderSettings = {
    layout: "scatec",
    page,
    app,
    pageTitle,
  };
  render(response, viewToRender, renderSettings, app, page);
});
module.exports = router;
