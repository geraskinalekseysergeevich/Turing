import ApiError from '../error/ApiError.js';

class AuthController {
    async login(req, res) {

    }
    
    async check(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

export default new AuthController();