const Post = require("../model/postSchema");

const create = async (req, res) => {
    try {
        const body = req.body;
        console.log(req.body);

        if (!body?.photo || !body?.title || !body?.description || !body?.content || !body?.userId) {
            return res.status(400).send({ message: "Invalid input" });
        }

        const post = await Post.create({
            photo: body.photo,
            title: body.title,
            description: body.description,
            content: body.content,
            userId: body.userId
        });
        res.status(201).send({ data: post, message: "Post created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create post" });
    }
};

const update = async (req, res) => {
    try {
        const postId = req.params.id;
        const body = req.body;

        const user = await Post.update(body, {
            where: { postId: postId }
        });

        if (user[0] === 0) {
            return res.status(404).send({ message: "Post not found" });
        }

        res.status(200).send({ message: "Post updated successfully" });
    } catch (error) {
        console.log("Error updating post:", error);
        res.status(500).json({ error: "Failed to update post" });
    }
};

const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;

        const result = await Post.destroy({
            where: { postId: postId }
        });

        if (result === 0) {
            return res.status(404).send({ message: "Post not found" });
        }

        res.status(200).send({ message: "Post deleted successfully" });
    } catch (error) {
        console.log("Error deleting post:", error);
        res.status(500).json({ error: "Failed to delete post" });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).send({ data: posts });
    } catch (error) {
        console.log("Error fetching posts:", error);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
};

const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findByPk(postId);

        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }

        res.status(200).send({ data: post });
    } catch (error) {
        console.log("Error fetching post:", error);
        res.status(500).json({ error: "Failed to fetch post" });
    }
};

module.exports = { create, update, deletePost, getAllPosts, getPostById };
