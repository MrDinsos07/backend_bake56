import { Router } from 'express';
// import excelRouter from './excel/excel.route.js';
import loginRoute from './login/login.route.js';
import registerRoute from './register/register.route.js';
import { pool } from './db.js';

const router = Router();

// router.use('/excel', excelRouter);
router.use('/login', loginRoute);
router.use('/register', registerRoute);

// router.get('/test-db', async (req, res) => {
//     try {
//         const [rows] = await pool.query('SELECT * FROM users');
//         res.json(rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Database error');
//     }
// });

export default router;