const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const User = require("./userSchema");

const Post = sequelize.define("posts", {
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
            model: User,
            key: "userId",
        },
        onUpdate: CASCADE,
        onDelete: CASCADE,
    }
});

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

(async () => {
    try {
        await Post.sync();
        console.log("Post table has been created");
    } catch (error) {
        console.log("Error: ", error.message);
    }
});

module.exports = Post;