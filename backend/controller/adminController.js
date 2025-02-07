const Admin = require("../model/adminSchema");

const create = async (req, res) => {
    try {
        const body = req.body;
        console.log(req.body);

        if (!body?.username || !body?.email || !body?.password) {
            return res.status(500).send({ message: "Invalid" });
        }

        const admins = await Admin.create({
            username: body.username,
            email: body.email,
            password: body.password
        });
        res.status(201).send({ data: admins, message: "successfully created admin" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to fetch admin" });
    }
};

module.exports = { create };