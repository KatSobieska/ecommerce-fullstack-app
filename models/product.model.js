const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  descriptionShort: { type: String },
  descriptionLong: { type: String },
  category: { type: String },
  price: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
