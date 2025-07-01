import { Router } from 'express';
import { registerController } from './register.controller.js';

const router = Router();

router.post('/', registerController);

export default router;
