const express = require("express");
const router = express.Router();

const ArticleController = require("../controllers/articles.controller");

router.get("/articles", ArticleController.getAllArticles);
router.get("/articles/:id", ArticleController.getArticleById);

module.exports = router;
