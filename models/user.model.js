const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, requires: true },
  email: { type: String, require: false },
});

module.exports = mongoose.model("User", userSchema);
