const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/categories.controller");

router.get("/categories", CategoryController.getAllCategories);
router.get("/categories/:id", CategoryController.getCategoryById);

module.exports = router;
