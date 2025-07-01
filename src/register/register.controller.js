import { registerService } from './register.service.js';

export const registerController = async (req, res) => {
    const { user_id, username, password, name, lastname, role_id, branch_id } = req.body;

    if (!user_id || !username || !password || !name || !lastname || !role_id || !branch_id) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const result = await registerService({ user_id, username, password, name, lastname, role_id, branch_id });

        if (result.success) {
            return res.status(201).json({ message: 'User registered successfully' });
        } else {
            return res.status(400).json({ message: result.message });
        }

    } catch (err) {
        console.error('Register error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
