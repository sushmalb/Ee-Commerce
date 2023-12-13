const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userschema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true, // important because email shouldnt be same with diferent casing
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userschema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("user", userschema);

module.exports = User;
