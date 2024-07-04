import { Router } from 'express';
import authRouter from './authRouter.js';
import questionRouter from './questionRouter.js';
import answerRouter from './answerRouter.js';
import historyRouter from './historyRouter.js';

const router = new Router()

router.use('/auth', authRouter)
router.use('/question',  questionRouter)
router.use('/answer', answerRouter)
router.use('/history', historyRouter)

export default router;