const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Category", categorySchema);
