const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();
const PostsMock = dbMock.define("posts", {
    postId: 1,
    photo: "photo_url",
    title: "Test Title",
    description: "Test Description",
    content: "Test Content",
    userId: 1,
    categoryId: 1
});

describe("Posts Model", () => {
    it("should have the correct fields", async () => {
        const post = await PostsMock.findOne({ where: { postId: 1 } });

        expect(post.postId).toBe(1);
        expect(post.photo).toBe("photo_url");
        expect(post.title).toBe("Test Title");
        expect(post.description).toBe("Test Description");
        expect(post.content).toBe("Test Content");
        expect(post.userId).toBe(1);
        expect(post.categoryId).toBe(1);
    });
});