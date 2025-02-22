// const Admin = require("../model/adminSchema");

// const create = async (req, res) => {
//     try {
//         const body = req.body;
//         console.log(req.body);

//         if (!body?.username || !body?.email || !body?.password) {
//             return res.status(500).send({ message: "Invalid" });
//         }

//         const admins = await Admin.create({
//             username: body.username,
//             email: body.email,
//             password: body.password
//         });
//         res.status(201).send({ data: admins, message: "successfully created admin" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "failed to fetch admin" });
//     }
// };

// module.exports = { create };

const Admin = require("../model/adminSchema");
const { generateToken } = require("../security/jwt-util");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
    try {
        const body = req.body;
        console.log(req.body);

        if (!body?.username || !body?.email || !body?.password) {
            return res.status(500).send({ message: "Invalid" });
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const admins = await Admin.create({
            username: body.username,
            email: body.email,
            password: hashedPassword
        });
        res.status(201).send({ data: admins, message: "successfully created admin" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "failed to fetch admin" });
    }
};

const login = async (req, res) => {
    try {
        if (req.body.email == null) {
            return res.status(500).send({ message: "email is required" });
        }
        if (req.body.password == null) {
            return res.status(500).send({ message: "password is required" });
        }
        const admin = await Admin.findOne({ where: { email: req.body.email } });
        if (!admin) {
            return res.status(500).send({ message: "admin not found" });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, admin.password);
        if (isPasswordValid) {
            const token = generateToken({ admin: admin.toJSON() });
            return res.status(200).send({
                data: { access_token: token },
                message: "successfully logged in",
            });
        } else {
            return res.status(401).send({ message: "invalid credentials" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Failed to login" });
    }
};

module.exports = { create, login };
