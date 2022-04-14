const express = require("express");
const app = express();
const engine = require("express-handlebars").engine;
const data = require("./translations.json");
const PORT = 3006;
const dd = [data];
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("images"));

app.get("/fr", (req, res, next) => {
  res.render("home", data.fr);
});

app.get("/en", (req, res, next) => {
  res.render("home", data.en);
});

app.get("/es", (req, res, next) => {
  res.render("home", data.es);
});

app.get("/", (req, res, next) => {
  res.render("home", data.fr);
});

app.get("/:lang?", (req, res, next) => {
  for (let i = 0; i < dd.length; i++) {
    lang = req.params.lang;
    if (lang == "fr") {
      res.render("home", dd[i].fr);
    } else if (lang == "en") {
      res.render("home", dd[i].en);
    } else if (lang == "es") {
      res.render("home", dd[i].es);
    }
  }
});

app.listen(PORT, () => {
  console.log("voici le port " + PORT);
});
