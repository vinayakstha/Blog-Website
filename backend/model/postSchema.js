const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../database/db");
const Users = require("./userSchema");
const Categories = require("./categorySchema");

const Posts = sequelize.define("posts", {
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "userId",
        },
        onUpdate: Sequelize.CASCADE,
        onDelete: Sequelize.CASCADE,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categories,
            key: "categoryId",
        },
        onUpdate: Sequelize.CASCADE,
        onDelete: Sequelize.CASCADE,
    }
});

Users.hasMany(Posts, { foreignKey: "userId" });
Posts.belongsTo(Users, { foreignKey: "userId" });

Categories.hasMany(Posts, { foreignKey: "categoryId" });
Posts.belongsTo(Categories, { foreignKey: "categoriesId" });

// (async () => {
//     try {
//         await Users.sync();
//         await Categories.sync();
//         await Posts.sync();
//         console.log("Post table has been created");
//     } catch (error) {
//         console.log("Error: ", error.message);
//     }
// })();

module.exports = Posts;