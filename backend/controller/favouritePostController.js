const FavouritePosts = require("../model/favouritePostSchema");

const createFavouritePost = async (req, res) => {
    try {
        const { userId, postId } = req.body;

        if (!userId || !postId) {
            return res.status(400).send({ message: "User ID and Post ID are required" });
        }

        const favouritePost = await FavouritePosts.create({
            userId,
            postId
        });

        res.status(201).send({ data: favouritePost, message: "Favourite post created successfully" });
    } catch (error) {
        console.log("Error creating favourite post:", error);
        res.status(500).json({ error: "Failed to create favourite post" });
    }
};

const deleteFavouritePost = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await FavouritePosts.destroy({
            where: { favouritePostId: id }
        });

        if (!deleted) {
            return res.status(404).send({ message: "Favourite post not found" });
        }

        res.status(200).send({ message: "Favourite post deleted successfully" });
    } catch (error) {
        console.log("Error deleting favourite post:", error);
        res.status(500).json({ error: "Failed to delete favourite post" });
    }
};

const getAllFavouritePosts = async (req, res) => {
    try {
        const favouritePosts = await FavouritePosts.findAll();
        res.status(200).send({ data: favouritePosts });
    } catch (error) {
        console.log("Error fetching favourite posts:", error);
        res.status(500).json({ error: "Failed to fetch favourite posts" });
    }
};

const getFavouritePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const favouritePost = await FavouritePosts.findByPk(id);

        if (!favouritePost) {
            return res.status(404).send({ message: "Favourite post not found" });
        }

        res.status(200).send({ data: favouritePost });
    } catch (error) {
        console.log("Error fetching favourite post:", error);
        res.status(500).json({ error: "Failed to fetch favourite post" });
    }
};

module.exports = { createFavouritePost, deleteFavouritePost, getAllFavouritePosts, getFavouritePostById };