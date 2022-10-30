const Article = require("../models/article.model");

exports.getAllArticles = async (req, res) => {
  try {
    res.json(await Article.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) res.status(404).json({ message: "Not found..." });
    else res.json(article);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
