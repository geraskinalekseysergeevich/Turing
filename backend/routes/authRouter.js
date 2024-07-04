import { Router } from 'express';
import authController from '../controllers/authController.js';

const authRouter = new Router()

authRouter.post('/', authController.login)
authRouter.get('/', authController.check)

export default authRouter;