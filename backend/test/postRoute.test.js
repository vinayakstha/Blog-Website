const request = require("supertest");
const express = require("express");
const postRoute = require("../routes/postRoute");
const Posts = require("../model/postSchema");

const app = express();
app.use(express.json());
app.use("/posts", postRoute);

jest.mock("../model/postSchema");

describe("Post Routes", () => {
    it("should create a new post", async () => {
        const newPost = {
            photo: "photo_url",
            title: "Test Title",
            description: "Test Description",
            content: "Test Content",
            userId: 1,
            categoryId: 1
        };

        Posts.create.mockResolvedValue(newPost);

        const response = await request(app)
            .post("/posts")
            .send(newPost);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            data: newPost,
            message: "Post created successfully"
        });
    });

    it("should get all posts", async () => {
        const posts = [
            {
                postId: 1,
                photo: "photo_url",
                title: "Test Title",
                description: "Test Description",
                content: "Test Content",
                userId: 1,
                categoryId: 1
            }
        ];

        Posts.findAll.mockResolvedValue(posts);

        const response = await request(app).get("/posts");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ data: posts });
    });

    it("should get a post by ID", async () => {
        const post = {
            postId: 1,
            photo: "photo_url",
            title: "Test Title",
            description: "Test Description",
            content: "Test Content",
            userId: 1,
            categoryId: 1
        };

        Posts.findByPk.mockResolvedValue(post);

        const response = await request(app).get("/posts/1");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ data: post });
    });

    it("should update a post", async () => {
        const updatedPost = {
            postId: 1,
            photo: "updated_photo_url",
            title: "Updated Title",
            description: "Updated Description",
            content: "Updated Content",
            userId: 1,
            categoryId: 1
        };

        Posts.update.mockResolvedValue([1]);

        const response = await request(app)
            .put("/posts/1")
            .send(updatedPost);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Post updated successfully"
        });
    });

    it("should delete a post", async () => {
        Posts.destroy.mockResolvedValue(1);

        const response = await request(app).delete("/posts/1");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Post deleted successfully" });
    });
});
