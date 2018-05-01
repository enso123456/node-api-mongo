const router = require("express").Router();
const _ = require("lodash");

var lions = [];
let id = 0;

//TODO: create a middleware app.param to find a id of the lion and response the lion object or reponse an error
router.param("id", function(req, res, next, id) {
  var lion = _.find(lions, lion => lion.id == id);
  if (lion) {
    req.lion = lion;
    next();
  } else {
    res.status(404).send("Not found");
  }
});
//create a middleware to increment the id in creating a lion
const updateId = function(req, res, next) {
  id++;
  req.body.id = id;
  next();
};

// TODO: CRUD lion API
router
  .route("/")
  .get(function(req, res) {
    res.json(lions);
  })
  .post(updateId, function(req, res) {
    const lion = req.body;
    lion.id = req.body.id;

    lions = [...lions, lion];

    res.json(lions);
  });

router
  .route("/:id")
  .get(function(req, res) {
    const lion = req.lion; //return from the middleware req.lion

    res.json(req.lion);
  })
  .delete(function(req, res) {
    lions = lions.filter(val => {
      return val.id != req.params.id;
    });
    res.json(lions);
  });

module.exports = router;
