const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Categories = sequelize.define("categories", {
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// (async () => {
//     try {
//         await Categories.sync();
//         console.log("categories table has been created");
//     } catch (error) {
//         console.log("Error: ", error.message);
//     }
// })();

module.exports = Categories;