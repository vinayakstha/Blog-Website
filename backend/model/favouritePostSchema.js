const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../database/db");
const Users = require("./userSchema");
const Posts = require("./postSchema");

const FavouritePosts = sequelize.define("favouritePosts", {
    favouritePostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Posts,
            key: "postId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    }

});

Users.hasMany(FavouritePosts, { foreignKey: "userId" });
FavouritePosts.belongsTo(Users, { foreignKey: "userId" });

Posts.hasMany(FavouritePosts, { foreignKey: "postId" });
FavouritePosts.belongsTo(Posts, { foreignKey: "postId" });

// (async () => {
//     try {
//         await Users.sync();
//         await Posts.sync();
//         await FavouritePosts.sync();
//         console.log("FavouritePost table has been created");
//     } catch (error) {
//         console.log("Error: ", error.message);
//     }
// })();

module.exports = FavouritePosts;