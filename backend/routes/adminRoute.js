const express = require("express");
const adminController = require("../controller/adminController");
const router = express.Router();

router.post("/", adminController.create);
router.post("/login", adminController.login);

module.exports = router;

