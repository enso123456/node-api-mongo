const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();

//Routes
const lionsRouter = require("./router/lion");

//application level middleware
app.use(morgan());
app.use(express.static("client"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// set where to find your view
app.set("views", path.join(__dirname, "client"));
app.set("view engine", "ejs");

app.get("/", function(req, res, next) {
  res.render("index");
});

app.use("/lions", lionsRouter);

//Error Middleware
app.use(function(err, req, res, next) {
  console.log(err);
});

app.listen(3000);
