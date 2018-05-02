const config = require("./server/config/");
const app = require("./server/server");
const logger = require("./server/util/logger");

app.listen(config.port);

logger.log("App is running in PORT: " + config.port);
