import React, { useState } from 'react';
import classes from './DialogScreen.module.css';
import SearchField from '../SearchField/SearchField';
import AnswerField from '../AnswerField/AnswerField';
import QuestionField from '../QuestionField/QuestionField';
import data from '../../static/fields/data.json'

const DialogScreen = ({selectedHistory}) => {

    const [inputText, setInputText] = useState('')
    const [questionText, setQuestionText] = useState('')
    const [answerText, setAnswerText] = useState('')
    const [searchFieldPosition, setSearchFieldPosition] = useState('middle')

    const handleSearchChange = event => {
        setInputText(event.target.value)
    }

    const getRandomAnswer = () => {
        const { answerExamples } = data;
        const randomIndex = Math.floor(Math.random() * answerExamples.length);
        return answerExamples[randomIndex];
    };

    const handleEnter = () => {
        if (inputText !== '')  {
            const answer = getRandomAnswer()
            setSearchFieldPosition('bottom')
            setQuestionText(inputText)
            setAnswerText(answer)
            setInputText('')
        }
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
                searchFieldPosition={searchFieldPosition}
                inputText={inputText} 
                handleSearchChange={handleSearchChange} 
                handleEnter={handleEnter} 
            />
        </div>
    );
};

export default DialogScreen;