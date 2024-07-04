import { Router } from 'express';
import historyController from '../controllers/historyController.js'

const historyRouter = new Router()

historyRouter.get('/', historyController.getAll)

export default historyRouter;