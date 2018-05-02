const router = require("express").Router();
const logger = require("../../util/logger");

router.route("/").get(function(req, res) {
  logger.log("Accessing posts route");
  res.send("Posts Route");
});

module.exports = router;
