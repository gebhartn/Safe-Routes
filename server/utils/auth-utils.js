const jwt = require("jsonwebtoken");
const secrets = require("../api/config/secret");

module.exports = id => {
  const payload = {
    id
  };

  const opts = {
    expiresIn: "1h"
  };

  const secret = secrets.jwtSecret;
  return jwt.sign(payload, secret, opts);
};
