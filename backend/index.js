import 'dotenv/config';
import express from 'express';
import Sequelize from './db.js';
import './models/models.js';
import cors from 'cors';
import router from  './routes/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Обработка ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await Sequelize.authenticate()
        await Sequelize.sync()
        app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})
    } catch (e) {
        console.log(e)
    }
}
start()