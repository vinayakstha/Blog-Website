const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../../database/db");
const Users = require("../user/userSchema");

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
    }
});

Users.hasMany(Posts, { foreignKey: "userId" });
Posts.belongsTo(Users, { foreignKey: "userId" });

(async () => {
    try {
        await Posts.sync();
        console.log("Post table has been created");
    } catch (error) {
        console.log("Error: ", error.message);
    }
})();

module.exports = Posts;