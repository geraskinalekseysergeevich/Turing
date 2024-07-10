import React, { useState } from 'react';
import classes from './BgAnimation.module.css';

const BgAnimation = () => {

    const [activeCell, setActiveSell] = useState(null)

    const handleMouseEnter = (cell) => {
        setActiveSell(cell)
    }

    const handleMouseLeave = () => {
        setActiveSell(null)
    }

    return (
        <div className={classes.bganimation__container}>
            <div className={`${classes.gridhover__container} ${classes.grid}`}>
                {Array.from({ length: 50 }, (_, i) => i + 1).map((i) => (
                    <div
                        key={`hovercell${i}`}
                        id={`hovercell${i}`}
                        className={classes.hover_cell}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                    >
                    </div>
                ))}
            </div>
            <div className={`${classes.gridcolor__container} ${classes.grid}`}>
                {Array.from({ length: 50 }, (_, i) => i + 1).map((i) => (
                    <div
                        key={`colorcell${i}`}
                        id={`colorcell${i}`}
                        className={`${classes.color_cell} ${
                            activeCell === i ? classes.active : ''
                        }`}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BgAnimation;