require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/user");
const path = require("path");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// user routes
app.use("/user", userRoutes);

//
const URL = process.env.MONGODB_URL;
// Database connection
mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database connected...");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

// declareing the port here
const PORT = process.env.PORT || 8000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
