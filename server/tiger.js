const router = require("express").Router();
const _ = require("lodash");

var tigers = [];
let id = 0;

//TODO: create a middleware app.param to find a id of the lion and response the lion object or reponse an error
router.param("id", function(req, res, next, id) {
  var tiger = _.find(tigers, tiger => tiger.id == id);
  if (tiger) {
    req.tiger = tiger;
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
    res.json(tigers);
  })
  .post(updateId, function(req, res) {
    const tiger = req.body;
    tiger.id = req.body.id;

    tigers = [...tigers, tiger];

    res.json(tigers);
  });

router
  .route("/:id")
  .get(function(req, res) {
    const tiger = req.tiger; //return from the middleware req.lion

    res.json(req.tiger);
  })
  .delete(function(req, res) {
    tigers = tigers.filter(val => {
      return val.id != req.params.id;
    });
    res.json(tigers);
  });

module.exports = router;
