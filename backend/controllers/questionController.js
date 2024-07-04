import ApiError from '../error/ApiError.js';
import { Question } from '../models/models.js';

class QuestionController {
    async create(req, res) {
        const {text} = req.body
        const question = await Question.create({text})
        return res.json(question)
    }

    async getOne(req, res) {
        const {id}  = req.params
        const question  = await Question.findByPk(id)
        return res.json(question)
    }

    async getAll(req, res)  {
        const questions = await Question.findAll()
        return res.json(questions)
    }
}

export default new QuestionController();