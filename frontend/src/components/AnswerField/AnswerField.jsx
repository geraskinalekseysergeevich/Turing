import React from 'react';
import classes from './AnswerField.module.css';
import { TypeAnimation } from 'react-type-animation';

const AnswerField = ({answerText, animated=true}) => {
    return (
        <div className={classes.answer_field}>
            {animated
            ? <TypeAnimation
                className={classes.answer_text}
                sequence={answerText.split()}
                wrapper='div'
                repeat={1}
                cursor={false}
            />
            : <p className={classes.answer_text}>{answerText}</p>
            }
        </div>
    );
};

export default AnswerField;