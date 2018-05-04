const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function(app) {
  app.use(morgan());
  app.use(cors());
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
};
