import React from 'react';
import QuestionField from '../QuestionField/QuestionField';
import AnswerField from '../AnswerField/AnswerField';

const MessagePair = ({ questionText, answerText, animated=false }) => {
    return (
        <div>
            <QuestionField questionText={questionText} />
            <AnswerField answerText={answerText} animated={animated}/>
        </div>
    );
};

export default MessagePair;