const express = require("express");
const router = express.Router();

const AdController = require("../controllers/ads.controller");

router.get("/ads", AdController.getAllAds);
router.get("/ads/:id", AdController.getAdById);

module.exports = router;
