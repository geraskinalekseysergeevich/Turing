import ApiError from '../error/ApiError.js';
import { Answer, QuestionAnswer } from '../models/models.js';

class AnswerController {
    async create(req, res, next) {
        const {type, text, questionId} = req.body
        if (!type || !text || !questionId) {
            next(ApiError.badRequest('Проверьте введенные данные'))
        }
        const answer = await Answer.create({type, text})
        const questionAnswer  = await QuestionAnswer.create({answerId: answer.id, questionId})
        return res.json(answer)
    }

    async getOne(req, res, next) {
        const {id} = req.params
        const answer = await Answer.findByPk(id)
        if (!answer) {
            next(ApiError.badRequest('Ответ с таким ID не найден'))
        }
        return res.json(answer)
    }

    async getAll(req, res)  {
        const answers = await Answer.findAll()
        return res.json(answers)
    }

    async setScore(req, res, next)  {
        try {
            const {id} = req.params
            const {score}  = req.body

            try {
                const answer = await Answer.findByPk(id)
                answer.score = score
                answer.save()
            } catch (error) {
                next(ApiError.badRequest('Ответ с таким ID не найден'))
            }

            return res.json(answer)

        } catch (error) {
            next(ApiError.badRequest('Не указан score'))
        } 
    }
}

export default new AnswerController();