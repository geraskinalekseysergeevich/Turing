import React, { useState } from 'react';
import classes from './DialogScreen.module.css';
import SearchField from '../SearchField/SearchField';
import AnswerField from '../AnswerField/AnswerField';
import QuestionField from '../QuestionField/QuestionField';
import data from '../../static/fields/data.json'

const DialogScreen = ({selectedHistory}) => {

    const [questionText, setQuestionText] = useState('')
    const [answerText, setAnswerText] = useState('')

    const getRandomAnswer = () => {
        const { answerExamples } = data;
        const randomIndex = Math.floor(Math.random() * answerExamples.length);
        return answerExamples[randomIndex];
    };

    const setAnswer = () => {
        const answer = getRandomAnswer()
        console.log(answer)
        setAnswerText(answer)
    }

    return (
        <div className={classes.search__container}>
            {questionText &&
                <QuestionField questionText={questionText}/>
            }
            {answerText &&
                <AnswerField answerText={answerText} />
            }
            <SearchField 
                setAnswer={setAnswer}
                setQuestionText={setQuestionText}
            />
        </div>
    );
};

export default DialogScreen;