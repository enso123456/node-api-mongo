const _ = require("lodash");

var config = {
  dev: "development",
  test: "testing",
  prod: "production",
  port: process.env.PORT || 3000
};

//check if env is defined
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

var envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
  envConfig = require("./" + config.env);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);
