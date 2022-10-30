const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  descriptionShort: { type: String },
  descriptionLong: { type: String },
  image: { type: String },
  author: { type: String },
});

module.exports = mongoose.model("Article", articleSchema);
