import React from 'react';
import data from '../../static/fields/data.json';
import classes from './SearchField.module.css';
import arrow from '../../static/images/right_arrow.svg';

const SearchField = ({ inputText, handleSearchChange, handleEnter, disabled=false }) => {

    const handleKeyEnter = e => {
        if (e.key === 'Enter') {
            handleEnter();
        }
    }

    return (
        <div className={`${classes.searchfield__container} ${disabled ? classes.disabled : ''}`}>
            <input
                className={classes.search_field}
                placeholder={data.searchFieldText}
                value={inputText}
                onChange={handleSearchChange}
                onKeyDown={handleKeyEnter}
            />
            <img onClick={handleEnter} src={arrow} alt="icon" />
        </div>
    );
};

export default SearchField;