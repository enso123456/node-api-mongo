const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();

const lionsRouter = require("./lion");
const tigerRouter = require("./tiger");

app.use(morgan());
app.use(express.static("client"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "client"));
app.set("view engine", "ejs");

app.get("/", function(req, res, next) {
  res.render("index");
});
app.use("/lions", lionsRouter);
app.use("/tigers", tigerRouter);

app.use(function(err, req, res, next) {
  console.log(err);
});

module.exports = app;
