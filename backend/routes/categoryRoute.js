const express = require("express");
const categoryController = require("../controller/categoryController");
const router = express.Router();

router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:id", categoryController.deleteCategory);
// router.get("/count", categoryController.getCategoryCount);

module.exports = router;