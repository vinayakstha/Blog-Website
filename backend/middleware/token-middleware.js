const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
    if (req.path === "/api/auth/login") {
        return next();
    }
    if (req.path === "/api/user") {
        return next();
    }
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res
            .status(401)
            .send({ message: "Access denied. No token provided." });
    }

    jwt.verify(token, process.env.secretkey, (err, decoded) => {
        if (err) {
            return res.status(403).send("Invalid or expired token.");
        }
        req.user = decoded.user;
        next();
    });
}

module.exports = { authenticateToken };