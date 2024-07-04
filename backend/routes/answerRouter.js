import { Router } from 'express';
import answerController from '../controllers/answerController.js'

const answerRouter = new Router()

answerRouter.post('/', answerController.create)
answerRouter.get('/:id', answerController.getOne)
answerRouter.get('/', answerController.getAll)
answerRouter.put('/:id', answerController.setScore)

export default answerRouter;