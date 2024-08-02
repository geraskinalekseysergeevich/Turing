import React from 'react';
import classes from './BgAnimation.module.css';

const BgAnimation = ({visibleTuring}) => {

    return (
        <div className={`${classes.turing_label} ${!visibleTuring ? classes.hideTuring : ''}`}>
            <span>TURING</span>
        </div>
    );
};

export default BgAnimation;