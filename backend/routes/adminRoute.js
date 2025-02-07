const express = require("express");
const adminController = require("../controller/adminController");
const router = express.Router();

router.post("/", adminController.create);

module.exports = router;

