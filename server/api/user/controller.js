const _ = require("lodash");
const User = require("./model");

exports.param = function(req, res, next, id) {
  User.findById(id).then(
    function(user) {
      if (!user) {
        next(new Error("No user with that id."));
      } else {
        req.user = user;
        next();
      }
    },
    function(err) {
      next(err);
    }
  );
};

exports.get = function(req, res, next) {
  User.find({}).then(
    function(users) {
      res.json(users);
    },
    function(err) {
      next(err);
    }
  );
};

exports.save = function(req, res, next) {
  User.create(req.body).then(
    function(user) {
      res.send(user);
    },
    function(err) {
      next(err);
    }
  );
};

exports.getOne = function(req, res) {
  const user = req.user;
  res.json(user);
};

exports.update = function(req, res) {
  const user = req.user;

  const update = req.body;

  _.merge(user, update);

  user.save(function(err, saved) {
    if (err) {
      next(err);
    }
    res.json(saved);
  });
};

exports.delete = function(req, res) {
  req.user.remove(function(err, removed) {
    if (err) {
      next(err);
    }
    res.json(removed);
  });
};
