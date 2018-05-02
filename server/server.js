const express = require("express");
const app = express();
const api = require("./api/api");

require("./middleware/appMiddleware")(app);

app.use("/api", api);

//global error handler
app.use(require("./middleware/error")());

module.exports = app;
