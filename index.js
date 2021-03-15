const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3005;
const app = express();
const customHelpers = require("./handebarsHelpers");
//Quickview data
const { signals, parameters } = require("./data-json/pview/plant").quickview;
const dataSignalsPanelBlocks = signals.items;
const dataParametersPanelBlocks = parameters.items;

const bulmaRoutes = require("./routes/bulmaRoutes");
const configRoutes = require("./routes/configRoutes");
const pviewRoutes = require("./routes/pviewRoutes");
const scatecRoutes = require("./routes/scatecRoutes");

app.engine(
  ".hbs",
  exphbs({
    helpers: customHelpers,
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    extname: ".hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

// for script build npm run build / build.js
// const routes = // TODO: get arrau of file paths of the routes
// for (let route of routes) {
//   // In the dev.js file
//   app.use(route.url, route.src);
//   // In the build.js
//   buildRoute(route.url, route.src);
// }

//ROUTES
app.use("/", bulmaRoutes);
app.use("/bulma", bulmaRoutes);
app.use("/config", configRoutes);
app.use("/pview", pviewRoutes);
app.use("/scatec", scatecRoutes);

app.get("/custom", (request, response) => {
  response.render("home", { layout: "custom" });
});

app.get("/pview-html", (request, response) => {
  response.render("home", {
    layout: "pview-html",
    dataSignalsPanelBlocks,
    dataParametersPanelBlocks,
  });
});

app.get("/portal", (request, response) => {
  response.render("home", { layout: "portal" });
});

// JSReports
app.get("/jsreports", (request, response) => {
  response.render("home", { layout: "jsreports" });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${PORT}`);
});
