const router = require("express").Router();
const logger = require("../../util/logger");
const controller = require("./controller");

router.param("id", controller.param);

router
  .route("/")
  .get(controller.get)
  .post(controller.save);

router
  .route("/:id")
  .get(controller.getOne)
  .post(controller.update)
  .delete(controller.delete);

module.exports = router;
