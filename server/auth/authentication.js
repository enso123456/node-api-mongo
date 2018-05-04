const jwt = require("jwt-simple");
const User = require("../api/user/model");
const config = require("../config/");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  //User has already had there email ans passwrd auth'd
  // We just need to give them a token

  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res
      .status(422)
      .send({ error: "You must provide username and password." });
  }

  User.findOne({ username: username }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: "Username is in use." });
    }

    // const user = new User({
    //   username: username,
    //   password: password
    // });

    User.create(req.body).then(
      function(user) {
        res.json({ token: tokenForUser(user) });
      },
      function(err) {
        next(err);
      }
    );

    // user.save(function(err) {
    //   if (err) {
    //     return next(err);
    //   }

    //   res.json({ token: tokenForUser(user) });
    // });
  });
};
