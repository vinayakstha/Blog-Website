const express = require("express");
const favouritePostController = require("../controller/favouritePostController");

const router = express.Router();

router.post("/", favouritePostController.createFavouritePost);
router.get("/", favouritePostController.getAllFavouritePosts);
router.get("/:id", favouritePostController.getFavouritePostById);
router.delete("/:id", favouritePostController.deleteFavouritePost);

module.exports = router;