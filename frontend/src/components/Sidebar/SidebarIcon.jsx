import React from 'react';
import classes from './SidebarIcon.module.css';

const SidebarIcon = ({icon, onCLickFunction}) => {
    return (
        <div className={classes.button_container} onClick={onCLickFunction}>
            <img src={icon} alt='icon'/>
        </div>
    );
};

export default SidebarIcon;