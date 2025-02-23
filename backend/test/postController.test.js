const { create, update, deletePost, getAllPosts, getPostById } = require("../controller/postController");
const Post = require("../model/postSchema");

jest.mock("../model/postSchema", () => ({
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
}));

describe("Post Controller", () => {
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };

    it("should create a new post", async () => {
        const req = {
            body: {
                photo: "test.png",
                title: "test title",
                description: "test description",
                content: "test content",
                userId: 1,
                categoryId: 1
            }
        };
        const res = mockResponse();

        Post.create.mockResolvedValue(req.body);

        await create(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({ data: req.body, message: "Post created successfully" });
    });

    it("should return all posts", async () => {
        const req = {};
        const res = mockResponse();

        const posts = [{ postId: 1, title: "test title" }];
        Post.findAll.mockResolvedValue(posts);

        await getAllPosts(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ data: posts });
    });

    it("should return a post by ID", async () => {
        const req = { params: { id: 1 } };
        const res = mockResponse();

        const post = { postId: 1, title: "test title" };
        Post.findByPk.mockResolvedValue(post);

        await getPostById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ data: post });
    });

    it("should update a post", async () => {
        const req = {
            params: { id: 1 },
            body: {
                title: "updated title"
            }
        };
        const res = mockResponse();

        Post.update.mockResolvedValue([1]);

        await update(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ message: "Post updated successfully" });
    });

    it("should delete a post", async () => {
        const req = { params: { id: 1 } };
        const res = mockResponse();

        Post.destroy.mockResolvedValue(1);

        await deletePost(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ message: "Post deleted successfully" });
    });
});