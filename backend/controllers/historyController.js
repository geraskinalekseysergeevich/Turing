import ApiError from '../error/ApiError.js';
import { QuestionAnswer, Answer, Question } from '../models/models.js';

class HistoryController {
    async getAll(req, res)  {
        const question_answers = await QuestionAnswer.findAll()
        const results = await Promise.all(question_answers.map(async (elem) => {
            const question = await Question.findByPk(elem.questionId)
            const answer = await Answer.findByPk(elem.answerId)
            return {
                questionText: question ? question.text : "Данные утеряны",
                answerText: answer ? answer.text : "Данные утеряны"
            }
        }))
        return res.json(results)
    }
}

export default new HistoryController();