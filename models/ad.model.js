const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  id: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Ad", adSchema);
