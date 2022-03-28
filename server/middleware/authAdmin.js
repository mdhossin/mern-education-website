const User = require("../models/userModal");
const CustomErrorHandler = require("../services/CustomErrorHandler");
const authAdmin = async (req, res, next) => {
  // console.log(req.user);
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (user.role === 1) {
      next();
    } else {
      return next(
        CustomErrorHandler.unAuthorized("Admin resources access denied.")
      );
    }
  } catch (err) {
    return next(CustomErrorHandler.serverError());
  }
};

module.exports = authAdmin;
