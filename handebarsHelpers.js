const fs = require("fs");
var path = require("path");

const Handlebars = require("handlebars");
require("handlebars-helpers")();

var registerCustomHelpers = function (Handlebars) {
  var helpers = {
    toString:function(value){
      return value.toString();
    },
    whichPartial: function (input, context, options) {
      let { currentApp, pageName } = context.data.root;
      // if folder structure of .views/partials is changes the appPagePartialsPath may need fixing
      let appPagePartialsPath = `./views/partials/${currentApp.toLowerCase()}/${pageName.toLowerCase()}/`;
      let walkSync = function (dir, filelist) {
        files = fs.readdirSync(dir);
        filelist = filelist || [];
        files.forEach(function (file) {
          if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
          } else {
            filelist.push(path.resolve(dir, file));
          }
        });
        return filelist;
      };

      let allPartials = walkSync(appPagePartialsPath);
      //specialNameSymbol to be changed if the naming of the main partial file is changed
      let specialNameSymbol = "_";
      let foundPartial = allPartials.find((res) =>
        res.includes(specialNameSymbol + input.toLowerCase())
      );
      if (foundPartial) {
        // if structure of .views/partials is changes the regex may need fixing
        let matchedPath = foundPartial.match(
          /partials\/(?<partialPath>.*?)\.hbs/
        );
        if (matchedPath.groups) {
          return matchedPath.groups.partialPath;
        }
      } else {
        return "_commons/error";
      }
    },

    getJsonContext: function (data, options) {
      return options.fn(JSON.parse(data));
    },
    createsAppPageHref: function (screenName, options) {
      let page = screenName.trim().toLowerCase().replace(" ", "-");
      let currentFolder = options.data.root.currentApp.toLowerCase();

      let href = "";
      if (page === "index") {
        href = `/${currentFolder}`;
      } else {
        href = `/${currentFolder}/${page}`;
      }
      return href;
    },
    createAnchorTagHref: function (input, options) {
      let anchorTagHref = "#" + input.trim().toLowerCase();
      return anchorTagHref;
    },
    createIdAnchorTag: function (input, options) {
      let IdAnchorTag = input.trim().toLowerCase().replace(" ", "-");
      return IdAnchorTag;
    },
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    return helpers;
  }
};

const customHelpers = registerCustomHelpers(null);
module.exports = customHelpers;
