import jwt from 'jsonwebtoken';
import config from '../config.js';
import { loginService } from './login.service.js';

export const loginController = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        const user = await loginService(username, password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            {
                user_id: user.user_id,
                username: user.username,
                role_name: user.role_name,
                branch_name: user.branch_name
            },
            config.jwtKey,
            {
                expiresIn: '7d' // Token ใช้ได้ 7 วัน
            }
        );
        res.json({ message: 'Login success',token, user });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
