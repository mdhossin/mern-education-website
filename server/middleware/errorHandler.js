require("dotenv").config();
const { ValidationError } = require("joi");

const DEBUG = process.env.DEBUG_MODE;

const CustomErrorHandler = require("../services/CustomErrorHandler");

// error handler middleware

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error!",
    ...(DEBUG === "true" && {
      originalError: err.message,
    }),
  };

  // from joi
  if (err instanceof ValidationError) {
    // 422 mean validation error code
    statusCode = 422;
    data = {
      message: err.message,
    };
  }

  // from custom err handler
  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    data = {
      message: err.message,
    };
  }

  return res.status(statusCode).json(data);
};

module.exports = errorHandler;
