const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.db.url);

app.use("/categories", require("./category/router"));
app.use("/posts", require("./post/router"));
app.use("/users", require("./user/router"));

module.exports = app;
