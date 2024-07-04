import { text } from 'express';
import { DataTypes } from 'sequelize';
import Sequelize from '../db.js';

const User = Sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'user'}
})

const History = Sequelize.define('history',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const QuestionAnswer = Sequelize.define('question_answer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Question = Sequelize.define('question',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT, allowNull: false}
})

const Answer = Sequelize.define('answer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type:  {type: DataTypes.ENUM('text', 'document'), allowNull: false},
    text:  {type: DataTypes.TEXT, allowNull: false},
    document: {type: DataTypes.BLOB, allowNull: true},
    score: {type: DataTypes.INTEGER, defaultValue: null}
})

User.hasOne(History)
History.belongsTo(User)

History.hasMany(QuestionAnswer)
QuestionAnswer.belongsTo(History)

Answer.belongsTo(QuestionAnswer)
QuestionAnswer.belongsTo(Answer)

Question.hasOne(QuestionAnswer)
QuestionAnswer.belongsTo(Question)

export {User, History, QuestionAnswer, Question, Answer};