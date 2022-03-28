const express = require("express");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const {
  register,
  activateEmail,
  login,
  getAccessToken,
  forgotPassword,
  resetPassword,
  getSingleUser,
  getAllUser,
  logout,
  updateUser,
  updateUsersRole,
  deleteUser,
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

// all user information route only admin can get
router.get("/all_infor", auth, authAdmin, getAllUser);

// logout route

router.get("/logout", logout);

// update user normal
router.patch("/update", auth, updateUser);

// update user role only admin
router.patch("/update_role/:id", auth, authAdmin, updateUsersRole);

// delete user only can admin
router.delete("/delete/:id", auth, authAdmin, deleteUser);

// Social Login
router.post("/google_login", googleLogin);

module.exports = router;
