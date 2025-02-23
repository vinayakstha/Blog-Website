const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const CategoryMock = dbMock.define("categories", {
    categoryId: 1,
    categoryName: {
        type: SequelizeMock.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Field cannot be empty"
            }
        }
    }
});

CategoryMock.create = async (data) => {
    if (!data.categoryName) {
        return Promise.reject(new Error("Field cannot be empty"));
    }
    return CategoryMock.build(data);
};

describe("Category Model", () => {
    it("should create a category", async () => {
        const category = await CategoryMock.create({
            categoryName: "new test category"
        });
        expect(category.categoryName).toBe("new test category");
    });

    it("should require a category name", async () => {
        await expect(CategoryMock.create({})).rejects.toThrow("Field cannot be empty");
    });
});


