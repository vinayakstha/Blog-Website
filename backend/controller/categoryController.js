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

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;

        if (!categoryName) {
            return res.status(400).send({ message: "Category name is required" });
        }

        const [updated] = await Categories.update({ categoryName }, {
            where: { categoryId: id }
        });

        if (!updated) {
            return res.status(404).send({ message: "Category not found" });
        }

        const updatedCategory = await Categories.findOne({ where: { categoryId: id } });
        res.status(200).send({ data: updatedCategory, message: "Category updated successfully" });
    } catch (error) {
        console.log("Error updating category:", error);
        res.status(500).json({ error: "Failed to update category" });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Categories.findOne({ where: { categoryId: id } });

        if (!category) {
            return res.status(404).send({ message: "Category not found" });
        }

        res.status(200).send({ data: category });
    } catch (error) {
        console.log("Error retrieving category:", error);
        res.status(500).json({ error: "Failed to retrieve category" });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll();
        res.status(200).send({ data: categories });
    } catch (error) {
        console.log("Error retrieving categories:", error);
        res.status(500).json({ error: "Failed to retrieve categories" });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Categories.destroy({
            where: { categoryId: id }
        });

        if (!deleted) {
            return res.status(404).send({ message: "Category not found" });
        }

        res.status(200).send({ message: "Category deleted successfully" });
    } catch (error) {
        console.log("Error deleting category:", error);
        res.status(500).json({ error: "Failed to delete category" });
    }
};

// const getCategoryCount = async (req, res) => {
//     try {
//         const count = await Categories.count();
//         res.status(200).send({ count });
//     } catch (error) {
//         console.log("Error fetching category count:", error);
//         res.status(500).json({ error: "Failed to fetch category count" });
//     }
// };

module.exports = { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryById };