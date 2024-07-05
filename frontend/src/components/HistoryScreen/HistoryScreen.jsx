import React from 'react';
import QuestionField from '../QuestionField/QuestionField';
import AnswerField from '../AnswerField/AnswerField';
import classes from './HistoryScreen.module.css'

const HistoryScreen = ({ selectedHistory }) => {
    return (
        <div className={classes.historyscreen__container}>
            <QuestionField questionText={selectedHistory.question}/>
            <AnswerField answerText={selectedHistory.answer} />
        </div>
    );
};

export default HistoryScreen;