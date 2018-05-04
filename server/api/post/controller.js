const _ = require("lodash");
const Post = require("./model");
const User = require("../user/model");

exports.param = function(req, res, next, id) {
  Post.findById(id)
    .populate("author")
    .populate("categories")
    .exec()
    .then(
      function(post) {
        if (!post) {
          next(new Error("No post with that id."));
        } else {
          req.post = post;
          next();
        }
      },
      function(err) {
        next(err);
      }
    );
};

exports.get = function(req, res, next) {
  Post.find({}).then(
    function(posts) {
      res.json(posts);
    },
    function(err) {
      next(err);
    }
  );
};

exports.save = function(req, res, next) {
  Post.create(req.body).then(
    function(post) {
      res.send(post);
    },
    function(err) {
      next(err);
    }
  );
};

exports.getOne = function(req, res) {
  const post = req.post;
  res.json(post);
};

exports.update = function(req, res) {
  const post = req.post;

  const update = req.body;

  _.merge(post, update);

  post.save(function(err, saved) {
    if (err) {
      next(err);
    }
    res.json(saved);
  });
};

exports.delete = function(req, res) {
  req.post.remove(function(err, removed) {
    if (err) {
      next(err);
    }
    res.json(removed);
  });
};
