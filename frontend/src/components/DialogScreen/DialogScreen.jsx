import React from 'react';
import classes from './DialogScreen.module.css';
import AnswerField from '../AnswerField/AnswerField';
import QuestionField from '../QuestionField/QuestionField';

const DialogScreen = ({ messages, animated }) => {

    return (
        <div className={classes.messages__container}>
            {messages.map((message) => (
                <div key={message.id}>
                    <QuestionField questionText={message.question.text} />
                    <AnswerField answerText={message.answer.text || '...'} animated={animated} />
                </div>
            ))}
        </div>
    );
};

export default DialogScreen;