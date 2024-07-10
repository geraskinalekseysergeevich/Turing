import React, { useEffect, useState } from 'react';
import classes from './AnswerField.module.css';
import { TypeAnimation } from 'react-type-animation';

const AnswerField = ({answerText, animated=true}) => {

    const [key, setKey] = useState(0);

    useEffect(() => { 
        setKey(prevKey => prevKey + 1);
    }, [answerText]);

    return (
        <div className={classes.answer_field}>
            {animated
            ? <TypeAnimation
                key={key}
                className={classes.answer_text}
                sequence={[answerText]}
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