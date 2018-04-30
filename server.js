const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(morgan());
app.use(express.static("client"));

// set where to find your view
app.set("views", path.join(__dirname, "client"));
app.set("view engine", "ejs");

var lions = [];
let id = 0;

app.get("/", function(req, res) {
  res.render("index", { lions: lions });
});

// TODO: CRUD lion API
app.get("/lions", function(req, res) {
  res.json(lions);
});

app.get("/lion/:id", function(req, res) {
  const lion = lions.filter(val => {
    return val.id == req.params.id;
  });

  res.json(lion);
});

app.post("/lions", function(req, res) {
  id++;
  const lion = req.body;
  lion.id = id;

  lions = [...lions, lion];

  res.json(lions);
});

app.delete("/lions/:id", function(req, res) {
  lions = lions.filter(val => {
    return val.id != req.params.id;
  });
  res.json(lions);
});

app.listen(3000);
