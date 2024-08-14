import React, { useEffect, useState, useRef } from 'react';
import classes from './HotButtons.module.css';
import data from '../../static/fields/data.json';

const HotButtons = ({ setTextFromHotButton, visibleHotButtons }) => {

    const [isHidden, setIsHidden] = useState(false)
    const containerRef = useRef(null)

    const handleClick = (item) => {
        setTextFromHotButton(item)
    }

    const hideElement = () => {
        setIsHidden(true);
    }

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (!visibleHotButtons) {
                setIsHidden(true)
            }
        };

        const currentContainer = containerRef.current;
        currentContainer.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            currentContainer.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [visibleHotButtons]);

    return (
        <div 
            className={`${classes.hotbuttons__container} 
                        ${!visibleHotButtons ? classes.hide_hotbuttons : ''}
                        ${isHidden ? classes.hidden : ''}`}
            ref={containerRef}
        >
            <div className={classes.flex_container}>
                {data.hotButtons.map((item, index) => (
                    <div 
                        key={index}
                        className={classes.hotbuttons__item} 
                        onClick={() => handleClick(item)}
                    >
                        <p>{item}</p>
                    </div>
                ))}
                <div className={`${classes.more_button} ${classes.hotbuttons__item}`}><p>...</p></div>
            </div>
        </div>
    );
};

export default HotButtons;