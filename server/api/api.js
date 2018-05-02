const express = require("express");
const app = express();

app.use("/categories", require("./category/router"));
app.use("/posts", require("./post/router"));
app.use("/users", require("./user/router"));

module.exports = app;
