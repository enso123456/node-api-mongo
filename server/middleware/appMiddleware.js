const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(morgan());
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
};
