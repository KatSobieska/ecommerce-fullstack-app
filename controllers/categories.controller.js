const Category = require("../models/category.model");

exports.getAllCategories = async (req, res) => {
  try {
    res.json(await Category.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) res.status(404).json({ message: "Not found..." });
    else res.json(category);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
