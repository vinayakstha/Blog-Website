const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("writehaven", "postgres", "dulantey_aura", {
    host: "localhost",
    dialect: "postgres",
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection successful");
    } catch (error) {
        console.error("connection error: ", error);
    }
};

module.exports = { sequelize, connection };