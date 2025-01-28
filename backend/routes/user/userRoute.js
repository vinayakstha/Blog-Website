const express = require("express");
const userController = require("../../controller/user/userController");
const router = express.Router();

router.post("/", userController.create);

module.exports = router;