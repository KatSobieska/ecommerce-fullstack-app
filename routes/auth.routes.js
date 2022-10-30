const { Router } = require("express");
const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/user", AuthController.getUser);
router.delete("/logout", AuthController.logout);

module.exports = router;
