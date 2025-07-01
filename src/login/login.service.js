import { pool } from '../db.js';

export const loginService = async (username, password) => {
    const query = `
        SELECT 
            u.user_id,
            u.username,
            u.name,
            u.lastname,
            r.role_name,
            b.branch_name
        FROM users u
        JOIN roles r ON u.role_id = r.role_id
        JOIN branchs b ON u.branch_id = b.branch_id
        WHERE u.username = ? AND u.password = ?
        LIMIT 1
    `;

    const [rows] = await pool.query(query, [username, password]);

    if (rows.length === 0) {
        return null;
    }

    return rows[0];
};
