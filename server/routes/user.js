const express = require("express");
const auth = require("../middleware/auth");

const {
  register,
  activateEmail,
  login,
  getAccessToken,
  forgotPassword,
  resetPassword,
  getSingleUser,

  logout,

  googleLogin,
} = require("../controller/userController");
const router = express.Router();

// register route
router.post("/register", register);
// register user activation route
router.post("/activation", activateEmail);

// login route
router.post("/login", login);

// refresh roken route
router.post("/refresh_token", getAccessToken);

// forgot and reset route
router.post("/forgot", forgotPassword);
router.post("/reset", auth, resetPassword);

// get single user information route

router.get("/infor", auth, getSingleUser);

// logout route

router.get("/logout", logout);

// Social Login
router.post("/google_login", googleLogin);

module.exports = router;
