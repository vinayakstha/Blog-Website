const express = require("express");
const postController = require("../../controller/post/postController");
const router = express.Router();

router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.deletePost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);

module.exports = router;