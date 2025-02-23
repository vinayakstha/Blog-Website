const { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryById } = require("../controller/categoryController");
const Category = require("../model/categorySchema");

jest.mock("../model/categorySchema", () => ({
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
}));

describe("Category Controller", () => {
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };

    it("should create a new category", async () => {
        const req = {
            body: {
                categoryName: "test category"
            }
        };
        const res = mockResponse();

        Category.create.mockResolvedValue(req.body);

        await createCategory(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.send).toHaveBeenCalledWith({ data: req.body, message: "Category created successfully" });
    });

    it("should return all categories", async () => {
        const req = {};
        const res = mockResponse();

        const categories = [{ categoryId: 1, categoryName: "test category" }];
        Category.findAll.mockResolvedValue(categories);

        await getAllCategories(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ data: categories });
    });

    it("should return a category by ID", async () => {
        const req = { params: { id: 1 } };
        const res = mockResponse();

        const category = { categoryId: 1, categoryName: "test category" };
        Category.findOne.mockResolvedValue(category);

        await getCategoryById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ data: category });
    });

    it("should update a category", async () => {
        const req = {
            params: { id: 1 },
            body: {
                categoryName: "updated category"
            }
        };
        const res = mockResponse();

        Category.update.mockResolvedValue([1]);

        Category.findOne.mockResolvedValue({ categoryId: 1, categoryName: "updated category" });

        await updateCategory(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({
            data: { categoryId: 1, categoryName: "updated category" },
            message: "Category updated successfully"
        });
    });

    it("should delete a category", async () => {
        const req = { params: { id: 1 } };
        const res = mockResponse();

        Category.destroy.mockResolvedValue(1);

        await deleteCategory(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ message: "Category deleted successfully" });
    });
});
