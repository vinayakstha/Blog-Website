const express = require("express");
const app = express();
const { connection } = require("./database/db");
const Users = require("./model/userSchema");
const Posts = require("./model/postSchema");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { authenticateToken } = require("./middleware/token-middleware");
dotenv.config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(authenticateToken);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});

connection();