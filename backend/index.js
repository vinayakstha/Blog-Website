const express = require("express");
const app = express();
const { connection } = require("./database/db");
const Users = require("./model/user/userSchema");
const Posts = require("./model/post/postSchema");
const userRouter = require("./routes/user/userRoute");
const postRouter = require("./routes/post/postRoute")
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});

connection();