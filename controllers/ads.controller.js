const Ad = require("../models/ad.model");

exports.getAllAds = async (req, res) => {
  try {
    res.json(await Ad.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) res.status(404).json({ message: "Not found..." });
    else res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
