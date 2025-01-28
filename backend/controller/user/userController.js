const User = require("../../model/user/userSchema");

const create = async (req, res) => {
    try {
        const body = req.body;
        console.log(req.body);

        if (!body?.username || !body?.email || !body?.password) {
            return res.status(500).send({ message: "Invalid" });
        }

        const users = await User.create({
            username: body.username,
            email: body.email,
            password: body.password
        });
        res.status(201).send({ data: users, message: "successfully created user" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to fetch users" });
    }
}

module.exports = { create };