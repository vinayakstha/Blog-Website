const express = require("express");
const app = express();
const { connection } = require("./database/db");

const Users = require("./model/userSchema");
const Categories = require("./model/categorySchema");
const Posts = require("./model/postSchema");
const FavouritePosts = require("./model/favouritePostSchema");
const Admins = require("./model/adminSchema");

const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const authRouter = require("./routes/authRoute");
const categoryRouter = require("./routes/categoryRoute");
const favouritePostRouter = require("./routes/favouritePostRoute");
const uploadRouter = require("./routes/uploadRoute");
const adminRouter = require("./routes/adminRoute");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { authenticateToken } = require("./middleware/token-middleware");
const { createUploadsFolder } = require("./security/helper");

dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(authenticateToken);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/category", categoryRouter);
app.use("/api/favouritePost", favouritePostRouter);
app.use("/api/admin", adminRouter);
app.use("/api/file", uploadRouter);
createUploadsFolder();



app.listen(PORT, async () => {
    console.log(`server is running on ${PORT}`);
    try {
        console.log("Connection successful");

        await Admins.sync();
        await Users.sync();
        await Categories.sync();
        await Posts.sync();
        await FavouritePosts.sync();

        console.log("All tables have been created");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});

connection();