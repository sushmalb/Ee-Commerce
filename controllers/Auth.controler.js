const createError = require("http-errors");
const User = require("../Models/User.model");
const { authSchema } = require("../helpers/validation_schema");
const bcrypt = require("bcrypt");

exports.registerRoute = async (req, res, next) => {
  try {
    //const { email, password } = req.body;

    // NOT NEEDED AS WE ARE USING JOI VALIDATION
    // if (!email || !password) throw createError.BadRequest();
    const result = await authSchema.validateAsync(req.body);
    // console.log(result);

    const doesExist = await User.findOne({ email: result.email });
    if (doesExist)
      throw createError.Conflict(`User ${result.email} already exists`);

    const user = new User(result);
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
};

exports.loginRoute = async (req, res) => {
  res.send("Login Route");
};

exports.refreshRoute = async (req, res) => {
  res.send("Refresh Route");
};

exports.logoutRoute = async (req, res) => {
  res.send("Logout Route");
};
