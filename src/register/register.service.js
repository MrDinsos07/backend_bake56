import { pool } from '../db.js';

export const registerService = async ({ user_id, username, password, name, lastname, role_id, branch_id }) => {
    try {
        // ตรวจสอบว่าซ้ำหรือยัง
        const [exist] = await pool.query('SELECT user_id FROM users WHERE username = ?', [username]);

        if (exist.length > 0) {
            return { success: false, message: 'Username already exists' };
        }

        // เพิ่มผู้ใช้
        await pool.query(`
            INSERT INTO users (user_id, username, password, name, lastname, role_id, branch_id)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [user_id, username, password, name, lastname, role_id, branch_id]);

        return { success: true };
    } catch (err) {
        throw err;
    }
};
