module.exports = function() {
  return function(err, req, res, next) {
    res.send(err.message);
  };
};
