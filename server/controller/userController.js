const User = require("../models/userModal");
const Joi = require("joi");
const CustomErrorHandler = require("../services/CustomErrorHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const {
  createActivationToken,
  verify,
  createRefreshToken,
  createAccessToken,
} = require("../services/JwtService");
const sendMail = require("./sendMail");

const { CLIENT_URL } = process.env;

const userController = {
  async register(req, res, next) {
    // register schema
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    // console.log(req.body, "body from");
    if (error) {
      return next(error);
    }

    // check if user is in the database already
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password)
        return next(
          CustomErrorHandler.badRequest("Please fill in all fields.")
        );
      //
      if (!validateEmail(email))
        return next(CustomErrorHandler.badRequest("Invalid emails."));

      // here useing the user model
      const exist = await User.findOne({ email });

      if (exist) {
        // here need to custom error send to the client side
        return next(
          CustomErrorHandler.alreadyExist("This email is already exists.")
        );
      }
      //
      if (password.length < 6) {
        return next(
          CustomErrorHandler.alreadyExist(
            "Password must be at least 6 characters."
          )
        );
      }

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = {
        name,
        email,
        password: passwordHash,
      };

      // console.log(newUser);
      const activation_token = createActivationToken(newUser);
      // console.log(activation_token);

      const url = `${CLIENT_URL}/user/activate/${activation_token}`;
      sendMail(email, url, "Verify your email address");

      //
      res.json({
        message: "Register Success! Please activate your email to start.",
      });
    } catch (err) {
      return next(err);
    }
  },
  async activateEmail(req, res, next) {
    //
    try {
      const { activation_token } = req.body;
      //
      // console.log(activation_token);
      const user = verify(
        activation_token,
        process.env.ACTIVATION_TOKEN_SECRET
      );
      // console.log(user);

      const { name, email, password } = user;

      // here useing the user model
      const exist = await User.findOne({ email });

      if (exist) {
        // here need to custom error send to the client side
        return next(
          CustomErrorHandler.alreadyExist("This email is already taken")
        );
      }

      const newUser = new User({
        name,
        email,
        password,
      });

      await newUser.save();

      res.json({ message: "Account has been activated!" });
    } catch (err) {
      return next(err);
    }
  },

  async login(req, res, next) {
    // validation with schema\

    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    const { error } = loginSchema.validate(req.body);
    // console.log(req.body);

    if (error) {
      return next(error);
    }

    const { email, password } = req.body;

    try {
      // find user email from the database
      const user = await User.findOne({ email });

      if (!user) {
        return next(CustomErrorHandler.badRequest("Email does not exist!"));
      }

      // compare the password
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return next(CustomErrorHandler.badRequest("Password is wrong!"));
      }

      // refresh token

      const refresh_token = createRefreshToken({ id: user._id });
      res.cookie("refreshtoken", refresh_token, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });
      // console.log(refresh_token);

      res.json({ message: "Login success!", user });

      //
    } catch (err) {
      return next(err);
    }
  },

  async getAccessToken(req, res, next) {
    // console.log(req.cookies, "cookies");
    try {
      const refresh_token = req.cookies.refreshtoken;
      if (!refresh_token)
        return next(CustomErrorHandler.badRequest("Please login now!"));

      jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err)
            return next(CustomErrorHandler.badRequest("Please login now!"));

          const access_token = createAccessToken({ id: user.id });

          res.json({ access_token });
        }
      );
    } catch (err) {
      return next(err);
    }
  },

  async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      // console.log(user);
      if (!user) {
        return next(
          CustomErrorHandler.badRequest("This email does not exists!")
        );
      }
      const access_token = createAccessToken({
        id: user._id,
      });
      // console.log(access_token);

      const url = `${CLIENT_URL}/user/reset/${access_token}`;
      sendMail(email, url, "Reset your password");
      res.json({
        message: "Re-send the password, please check your email.",
      });
    } catch (err) {
      return next(err);
    }
  },
  async resetPassword(req, res, next) {
    try {
      const { password } = req.body;

      const passwordHash = await bcrypt.hash(password, 12);
      // console.log(passwordHash);
      await User.findOneAndUpdate(
        {
          _id: req.user.id,
        },
        {
          password: passwordHash,
        }
      );
      res.json({ message: "Password successfully changed!" });
    } catch (err) {
      return next(err);
    }
  },
  async getSingleUser(req, res, next) {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (err) {
      return next(err);
    }
  },

  async getAllUser(req, res, next) {
    try {
      const users = await User.find().select("-password");

      res.json(users);
    } catch (err) {
      return next(err);
    }
  },

  async logout(req, res, next) {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ message: "Logged out." });
    } catch (err) {
      return next(err);
    }
  },
  async updateUser(req, res, next) {
    try {
      const { name, avatar } = req.body;
      const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          name,
          avatar,
        },
        {
          new: true,
        }
      );
      res.json({ message: "Update Success!", user });
    } catch (err) {
      return next(err);
    }
  },

  async updateUsersRole(req, res, next) {
    try {
      const { role } = req.body;

      await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          role,
        },
        {
          new: true,
        }
      );
      res.json({ message: "Update Success!" });
    } catch (err) {
      return next(err);
    }
  },

  async deleteUser(req, res, next) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({
        message: "Deleted Successful!",
      });
    } catch (err) {
      return next(err);
    }
  },

  async googleLogin(req, res, next) {
    try {
      const { tokenId } = req.body;
      const verify = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.MAILING_SERVICE_CLIENT_ID,
      });
      const { email_verified, email, name, picture } = verify.payload;

      const password = email + process.env.GOOGLE_SECRET;
      // console.log(password, "password");
      const passwordHash = await bcrypt.hash(password, 12);

      if (!email_verified)
        return next(
          CustomErrorHandler.badRequest("Email verification failed.")
        );

      const user = await User.findOne({ email });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return next(CustomErrorHandler.badRequest("Password is incorrect."));

        const refresh_token = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ message: "Login success!" });
      } else {
        const newUser = new User({
          name,
          email,
          password: passwordHash,
          avatar: picture,
        });

        await newUser.save();

        const refresh_token = createRefreshToken({ id: newUser._id });
        res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.json({ message: "Login success!" });
      }
    } catch (err) {
      return next(err);
    }
  },
};

// for email validation
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = userController;
