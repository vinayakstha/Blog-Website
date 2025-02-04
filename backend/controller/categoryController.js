const Categories = require("../model/categorySchema");

const createCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;

        if (!categoryName) {
            return res.status(400).send({ message: "Category name is required" });
        }

        const category = await Categories.create({
            categoryName
        });

        res.status(201).send({ data: category, message: "Category created successfully" });
    } catch (error) {
        console.log("Error creating category:", error);
        res.status(500).json({ error: "Failed to create category" });
    }
};

module.exports = { createCategory };