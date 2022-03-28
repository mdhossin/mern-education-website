const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ACTIVATION_TOKEN_SECRET, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } =
  process.env;
class JwtService {
  //
  static createActivationToken(
    payload,
    expiry = "5m",
    secret = ACTIVATION_TOKEN_SECRET
  ) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
  //
  static createAccessToken(
    payload,
    expiry = "15m",
    secret = ACCESS_TOKEN_SECRET
  ) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
  //
  static createRefreshToken(
    payload,
    expiry = "7d",
    secret = REFRESH_TOKEN_SECRET
  ) {
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }

  static verify(token, secret = ACTIVATION_TOKEN_SECRET) {
    return jwt.verify(token, secret);
  }
  static verifyAuth(token, secret = ACCESS_TOKEN_SECRET) {
    return jwt.verify(token, secret);
  }
}

module.exports = JwtService;
