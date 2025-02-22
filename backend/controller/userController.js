const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const create = async (req, res) => {
    try {
        const body = req.body;
        console.log(req.body);

        if (!body?.username || !body?.email || !body?.password) {
            return res.status(500).send({ message: "Invalid" });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const users = await User.create({
            username: body.username,
            email: body.email,
            password: hashedPassword
        });
        res.status(201).send({ data: users, message: "successfully created user" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to fetch users" });
    }
};

const update = async (req, res) => {
    try {
        const userId = req.params.id;
        const body = req.body;

        const user = await User.update(body, {
            where: { userId: userId }
        });

        if (user[0] === 0) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to update the user" });
    };
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const result = await User.destroy({
            where: { userId: userId }
        });

        if (result === 0) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to delete user" });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).send({ data: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to fetch users" });
    }
};


const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to fetch user" });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ message: "Email and password are required" });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // user.password = password;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).send({ message: "Password reset successfully" });
    } catch (error) {
        console.error("Error resetting password:", error);
        res.status(500).send({ message: "Failed to reset password" });
    }
};

// const getUserCount = async (req, res) => {
//     try {
//         const count = await User.count();
//         res.status(200).send({ count });
//     } catch (error) {
//         console.log("Error fetching user count:", error);
//         res.status(500).json({ error: "Failed to fetch user count" });
//     }
// };

module.exports = { create, update, deleteUser, getAllUsers, getUserById, resetPassword };