import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

export const generateJWT = (req, res, next) => {
    const { username } = req.body;
    const ip = req.ip || req.connection.remoteAddress;

    try {
        const token = jwt.sign({ username, ip, timestamp: Date.now() }, JWT_SECRET, { expiresIn: '1h' });
        req.jwtToken = token;
        next();
    } catch (err) {
        console.error("Error in JWT creation:", err);
        res.status(500).json({ message: "JWT Error" });
    }
};