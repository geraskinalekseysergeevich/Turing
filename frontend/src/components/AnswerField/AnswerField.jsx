import React from 'react';
import classes from './AnswerField.module.css';

const AnswerField = ({answerText}) => {
    return (
        <div className={classes.answer_field}>
            <p>{answerText}</p>
        </div>
    );
};

export default AnswerField;