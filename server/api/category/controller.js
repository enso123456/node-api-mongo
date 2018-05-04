const _ = require("lodash");
const Category = require("./model");

exports.param = function(req, res, next, id) {
  Category.findById(id).then(
    function(category) {
      if (!category) {
        next(new Error("No category with that id."));
      } else {
        req.category = category;
        next();
      }
    },
    function(err) {
      next(err);
    }
  );
};

exports.get = function(req, res, next) {
  Category.find({}).then(
    function(categories) {
      res.json(categories);
    },
    function(err) {
      next(err);
    }
  );
};

exports.save = function(req, res, next) {
  Category.create(req.body).then(
    function(category) {
      res.send(category);
    },
    function(err) {
      next(err);
    }
  );
};

exports.getOne = function(req, res) {
  const category = req.category;
  res.json(category);
};

exports.update = function(req, res) {
  const category = req.category;

  const update = req.body;

  _.merge(category, update);

  category.save(function(err, saved) {
    if (err) {
      next(err);
    }
    res.json(saved);
  });
};

exports.delete = function(req, res) {
  req.category.remove(function(err, removed) {
    if (err) {
      next(err);
    }
    res.json(removed);
  });
};
