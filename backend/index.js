const express = require("express");
const app = express();
const { connection } = require("./database/db");

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});

connection();