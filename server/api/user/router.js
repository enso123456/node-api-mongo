const router = require("express").Router();
const logger = require("../../util/logger");
const controller = require("./controller");
const passport = require("passport");
const authentication = require("../../auth/authentication");

require("../../auth/passport");

passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

router.param("id", controller.param);

router
  .route("/")
  .get(controller.get)
  .post(authentication.signup);

router.post("/signin", requireSignin, authentication.signin);
router.route("/:id").get(controller.getOne);
router.post("/:id", requireSignin, controller.update);
router.delete("/:id", requireSignin, controller.delete);

module.exports = router;
