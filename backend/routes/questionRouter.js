import { Router } from 'express';
import questionController from '../controllers/questionController.js';

const questionRouter = new Router()

questionRouter.post('/', questionController.create)
questionRouter.get('/:id', questionController.getOne)
questionRouter.get('/', questionController.getAll)

export default questionRouter;