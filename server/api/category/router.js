const router = require("express").Router();
const logger = require("../../util/logger");

router.route("/").get(function(req, res, next) {
  logger.log("Accessing category route");
  res.send("Category Route");
});

module.exports = router;
