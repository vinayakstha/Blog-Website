const request = require("supertest");
const express = require("express");
const categoryRoute = require("../routes/categoryRoute");
const Category = require("../model/categorySchema");

const app = express();
app.use(express.json());
app.use("/categories", categoryRoute);

jest.mock("../model/categorySchema");

describe("Category Routes", () => {
    it("should create a new category", async () => {
        const newCategory = {
            categoryName: "Test Category"
        };

        Category.create.mockResolvedValue(newCategory);

        const response = await request(app)
            .post("/categories")
            .send(newCategory);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            data: newCategory,
            message: "Category created successfully"
        });
    });

    it("should get all categories", async () => {
        const categories = [
            {
                categoryId: 1,
                categoryName: "Test Category"
            }
        ];

        Category.findAll.mockResolvedValue(categories);

        const response = await request(app).get("/categories");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ data: categories });
    });

    it("should get a category by ID", async () => {
        const category = {
            categoryId: 1,
            categoryName: "Test Category"
        };

        Category.findOne.mockResolvedValue(category);

        const response = await request(app).get("/categories/1");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ data: category });
    });

    it("should update a category", async () => {
        const updatedCategory = {
            categoryId: 1,
            categoryName: "Updated Category"
        };

        Category.update.mockResolvedValue([1]);
        Category.findOne.mockResolvedValue(updatedCategory);

        const response = await request(app)
            .put("/categories/1")
            .send(updatedCategory);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            data: updatedCategory,
            message: "Category updated successfully"
        });
    });

    it("should delete a category", async () => {
        Category.destroy.mockResolvedValue(1);

        const response = await request(app).delete("/categories/1");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Category deleted successfully" });
    });
});
