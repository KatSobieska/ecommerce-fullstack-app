const Product = require("../models/product.model");

exports.getAllProducts = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) res.status(404).json({ message: "Not found..." });
    else res.json(product);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
