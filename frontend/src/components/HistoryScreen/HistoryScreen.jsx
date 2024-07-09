import React from 'react';
import QuestionField from '../QuestionField/QuestionField';
import AnswerField from '../AnswerField/AnswerField';
import classes from './HistoryScreen.module.css'
import SearchField from '../SearchField/SearchField';

const HistoryScreen = ({ selectedHistory }) => {
    return (
        <div className={classes.historyscreen__container}>
            <QuestionField questionText={selectedHistory.question}/>
            <AnswerField answerText={selectedHistory.answer} animated={false}/>
            <SearchField disabled={true} />
        </div>
    );
};

export default HistoryScreen;