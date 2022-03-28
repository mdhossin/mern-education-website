const CustomErrorHandler = require("../services/CustomErrorHandler");
const JwtService = require("../services/JwtService");

const auth = async (req, res, next) => {
  // get the token form the client
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return next(CustomErrorHandler.unAuthorized());
  }

  try {
    // destructuring from the jwt token headers
    const user = await JwtService.verifyAuth(token);
    console.log(user, "auth user");

    // set the user inside request

    req.user = user;
    next();

    //
  } catch (err) {
    return next(CustomErrorHandler.unAuthorized());
  }
};

module.exports = auth;
