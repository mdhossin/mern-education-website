const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, // 0= user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dsfcv3v5f/image/upload/v1644391342/samples/avatar_cugq40_xdppo1.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
