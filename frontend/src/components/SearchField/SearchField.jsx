import React, { useEffect, useRef, useState } from 'react';
import data from '../../static/fields/data.json';
import classes from './SearchField.module.css';
import arrow from '../../static/images/right_arrow.svg';

const SearchField = ({ sendFunction }) => {

    const [inputText, setInputText] = useState('')
    const textareaRef = useRef(null)

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }

    const handleEnter = () => {
        if (inputText.trim() !== '') {
            sendFunction(inputText)
            setInputText('')
        }
    }

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            if (!e.shiftKey) {
                e.preventDefault()
                handleEnter()
            }
        }
    }

    useEffect(() => {
        if(textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [inputText])

    return (
        <div className={classes.searchfield__container}>
                <textarea
                    ref={textareaRef}
                    className={classes.search_field}
                    placeholder={data.searchFieldText}
                    value={inputText}
                    rows={1}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyEnter}
                />
            <img onClick={handleEnter} src={arrow} alt="icon" />
        </div>
    );
};

export default SearchField;