const router = require("express").Router();
const logger = require("../../util/logger");

router.route("/").get(function(req, res) {
  logger.log("Accessing users route");
  res.send("User Route");
});

module.exports = router;
