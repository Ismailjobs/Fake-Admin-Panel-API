import express from 'express';
import Requests from '../model/Requests.js';
import { generateJWT } from '../middleware/auth.js';

const router = express.Router();

router.post('/', generateJWT, async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
        const userAgent = req.get('User-Agent');
        const method = req.method;
        const endpoint = req.originalUrl;
        const { username, password } = req.body;

        let request = await Requests.findOne({ ip });

        if (!request) {
            request = new Requests({
                ip,
                userAgent,
                method,
                endpoint,
                attempts: [{ username, password }],
                jwtToken: req.jwtToken
            });
        } else {
            request.attempts.push({ username, password });
            request.jwtToken = req.jwtToken;
        }

        await request.save();

        res.status(200).json({
            message: 'Login failed',
            success: false,
            token: req.jwtToken
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
